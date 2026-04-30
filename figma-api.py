#!/usr/bin/env python3
"""
Figma API Integration
Fetch files, assets, and design tokens from Figma
"""

import os
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path

# Load environment variables
def load_env():
    env_file = Path(__file__).parent / '.env.local'
    if env_file.exists():
        with open(env_file) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    os.environ[key.strip()] = value.strip()

load_env()

FIGMA_TOKEN = os.getenv('FIGMA_ACCESS_TOKEN')
BASE_URL = 'https://api.figma.com/v1'

def figma_request(endpoint):
    """Make authenticated request to Figma API"""
    if not FIGMA_TOKEN:
        print("Error: FIGMA_ACCESS_TOKEN not found in .env.local", file=sys.stderr)
        sys.exit(1)

    url = f"{BASE_URL}/{endpoint}"
    headers = {'X-Figma-Token': FIGMA_TOKEN}

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}", file=sys.stderr)
        print(f"URL: {url}", file=sys.stderr)
        if e.code == 403:
            print("Check your Figma token is valid and has correct permissions", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

def get_file(file_key):
    """Get Figma file structure"""
    return figma_request(f"files/{file_key}")

def get_file_nodes(file_key, node_ids):
    """Get specific nodes from a Figma file"""
    ids_param = ','.join(node_ids)
    return figma_request(f"files/{file_key}/nodes?ids={ids_param}")

def get_images(file_key, node_ids, scale=1, format='png'):
    """Get image URLs for nodes"""
    ids_param = ','.join(node_ids)
    return figma_request(f"images/{file_key}?ids={ids_param}&scale={scale}&format={format}")

def get_file_images(file_key):
    """Get all images from a file"""
    return figma_request(f"files/{file_key}/images")

def extract_colors(data, colors=None):
    """Extract color palette from Figma file"""
    if colors is None:
        colors = set()

    if isinstance(data, dict):
        # Check for fill colors
        if 'fills' in data:
            for fill in data.get('fills', []):
                if fill.get('type') == 'SOLID' and 'color' in fill:
                    color = fill['color']
                    r = int(color.get('r', 0) * 255)
                    g = int(color.get('g', 0) * 255)
                    b = int(color.get('b', 0) * 255)
                    a = color.get('a', 1)
                    if a == 1:
                        colors.add(f"#{r:02x}{g:02x}{b:02x}")
                    else:
                        colors.add(f"rgba({r}, {g}, {b}, {a})")

        # Check for stroke colors
        if 'strokes' in data:
            for stroke in data.get('strokes', []):
                if stroke.get('type') == 'SOLID' and 'color' in stroke:
                    color = stroke['color']
                    r = int(color.get('r', 0) * 255)
                    g = int(color.get('g', 0) * 255)
                    b = int(color.get('b', 0) * 255)
                    a = color.get('a', 1)
                    if a == 1:
                        colors.add(f"#{r:02x}{g:02x}{b:02x}")
                    else:
                        colors.add(f"rgba({r}, {g}, {b}, {a})")

        # Recurse into children
        if 'children' in data:
            for child in data['children']:
                extract_colors(child, colors)

    return colors

def main():
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python figma-api.py get-file <file-key>")
        print("  python figma-api.py get-colors <file-key>")
        print("  python figma-api.py get-images <file-key> <node-id-1> [node-id-2...]")
        print("\nFile key is the ID from Figma URL:")
        print("  https://figma.com/file/ABC123... -> ABC123 is the file key")
        sys.exit(1)

    command = sys.argv[1]

    if command == 'get-file':
        if len(sys.argv) < 3:
            print("Error: file-key required", file=sys.stderr)
            sys.exit(1)
        file_key = sys.argv[2]
        data = get_file(file_key)
        print(json.dumps(data, indent=2))

    elif command == 'get-colors':
        if len(sys.argv) < 3:
            print("Error: file-key required", file=sys.stderr)
            sys.exit(1)
        file_key = sys.argv[2]
        data = get_file(file_key)
        colors = extract_colors(data.get('document', {}))
        print(json.dumps(sorted(list(colors)), indent=2))

    elif command == 'get-images':
        if len(sys.argv) < 4:
            print("Error: file-key and at least one node-id required", file=sys.stderr)
            sys.exit(1)
        file_key = sys.argv[2]
        node_ids = sys.argv[3:]
        data = get_images(file_key, node_ids)
        print(json.dumps(data, indent=2))

    else:
        print(f"Unknown command: {command}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
