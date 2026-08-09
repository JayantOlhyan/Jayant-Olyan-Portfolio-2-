import os
import xml.etree.ElementTree as ET
import urllib.request

# Slugs mapping for Simple Icons
SLUGS = {
    "github-icon": "github",
    "linkedin-icon": "linkedin",
    "bluesky-icon": "bluesky",
    "discord-icon": "discord",
    "x-icon": "x",
    "email-icon": "gmail",
    "javascript-icon": "javascript",
    "typescript-icon": "typescript",
    "python-icon": "python",
    "c-icon": "c",
    "react-icon": "react",
    "nextjs-icon": "nextdotjs",
    "fastapi-icon": "fastapi",
    "nodejs-icon": "nodedotjs",
    "tailwindcss-icon": "tailwindcss",
    "threejs-icon": "threedotjs",
    "mongodb-icon": "mongodb",
    "firebase-icon": "firebase",
    "netlify-icon": "netlify",
    "vercel-icon": "vercel",
    "docker-icon": "docker",
    "githubactions-icon": "githubactions",
    "gemini-icon": "googlegemini",
    "openai-icon": "openai",
    "pytorch-icon": "pytorch",
    "opencv-icon": "opencv",
    "langchain-icon": "langchain",
    "claude-icon": "anthropic",
    "cursor-icon": "cursor",
    "githubcopilot-icon": "githubcopilot",
    "nasa-icon": "nasa",
    "esa-icon": "europeanspaceagency",
}

# High-quality custom fallback paths for local/unavailable icons
CUSTOM_ICONS = {
    "linkedin-icon": '<path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>',
    "openai-icon": '<path fill="currentColor" d="M21.74 11.23a5.42 5.42 0 0 0-.25-2.54 5.53 5.53 0 0 0-1.92-2.33c.12-.39.17-.79.14-1.2a5.45 5.45 0 0 0-.74-2.22 5.53 5.53 0 0 0-2.61-2.24 5.37 5.37 0 0 0-2.29-.11 5.57 5.57 0 0 0-2.43 1.05A5.38 5.38 0 0 0 9.4 1.3a5.55 5.55 0 0 0-2.5 1.5 5.38 5.38 0 0 0-2.5.34A5.5 5.5 0 0 0 2.5 5.5c-.34.45-.58.97-.7 1.52A5.5 5.5 0 0 0 .5 9.4a5.38 5.38 0 0 0 1.3 2.24 5.38 5.38 0 0 0-.25 2.54 5.53 5.53 0 0 0 1.92 2.33c-.12.39-.17.79-.14 1.2a5.45 5.45 0 0 0 .74 2.22 5.53 5.53 0 0 0 2.61 2.24 5.37 5.37 0 0 0 2.29.11 5.57 5.57 0 0 0 2.43-1.05 5.38 5.38 0 0 0 2.24.35 5.55 5.55 0 0 0 2.5-1.5 5.38 5.38 0 0 0 2.5-.34 5.5 5.5 0 0 0 1.9-2.36c.34-.45.58-.97.7-1.52a5.5 5.5 0 0 0 1.3-2.24M12 10.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24"/>',
    "esa-icon": '<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20"/></g>',
    "iitguwahati-icon": '<g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><text x="12" y="15" font-family="monospace" font-size="6" font-weight="bold" fill="currentColor" text-anchor="middle">IITG</text></g>',
    "msit-icon": '<g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><text x="12" y="14" font-family="monospace" font-size="6" font-weight="bold" fill="currentColor" text-anchor="middle">MSIT</text></g>',
    "economictimes-icon": '<g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14zm-4-4l-3-3-3 3M9 8h6"/><text x="12" y="13" font-family="monospace" font-size="5" font-weight="bold" fill="currentColor" text-anchor="middle">ET</text></g>',
    "phone-icon": '<path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.02 1.02 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>',
    "email-icon": '<path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'
}

def load_local_svg(slug):
    local_path = f"node_modules/simple-icons/icons/{slug}.svg"
    if os.path.exists(local_path):
        try:
            with open(local_path, "r", encoding="utf-8") as f:
                return f.read()
        except Exception as e:
            print(f"Error reading local file for {slug}: {e}")
    return None

def fetch_remote_svg(slug):
    # Try alternate public repo for simple-icons
    url = f"https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/{slug}.svg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {slug} from remote: {e}")
        return None

def extract_path(svg_content):
    try:
        ET.register_namespace('', "http://www.w3.org/2000/svg")
        root = ET.fromstring(svg_content)
        inner_content = []
        for child in root:
            child_str = ET.tostring(child, encoding='utf-8').decode('utf-8')
            inner_content.append(child_str)
        return "".join(inner_content)
    except Exception as e:
        print(f"XML parse error: {e}")
        return None

def main():
    symbols = []
    
    print("Building brand icons...")
    for sym_id, slug in SLUGS.items():
        # Try local first
        svg_content = load_local_svg(slug)
        
        # Try remote fallback
        if not svg_content:
            print(f"{slug} not found locally, attempting remote download...")
            svg_content = fetch_remote_svg(slug)
            
        # Parse and append
        if svg_content:
            inner_html = extract_path(svg_content)
            if inner_html:
                symbol = f'  <symbol id="{sym_id}" viewBox="0 0 24 24">\n    {inner_html}\n  </symbol>'
                symbols.append(symbol)
                print(f"Successfully packaged {slug}")
                continue
                
        # If both failed, check if we have a custom fallback path
        if sym_id in CUSTOM_ICONS:
            print(f"Using high quality custom SVG path for {sym_id}")
            symbol = f'  <symbol id="{sym_id}" viewBox="0 0 24 24">\n    {CUSTOM_ICONS[sym_id]}\n  </symbol>'
            symbols.append(symbol)
        else:
            print(f"WARNING: No icon source or fallback for {sym_id} ({slug})")
            
    # Add other custom standalone icons (MSIT, IITG, ET, phone, email)
    for sym_id, inner_html in CUSTOM_ICONS.items():
        # Avoid duplicate definitions
        if not any(f'id="{sym_id}"' in s for s in symbols):
            symbol = f'  <symbol id="{sym_id}" viewBox="0 0 24 24">\n    {inner_html}\n  </symbol>'
            symbols.append(symbol)
            print(f"Packaged standalone icon: {sym_id}")
            
    # Write output to public/icons.svg
    output_path = "public/icons.svg"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write('<svg xmlns="http://www.w3.org/2000/svg">\n')
        for sym in symbols:
            f.write(sym + "\n")
        f.write('</svg>\n')
        
    print(f"\nAll done! Combined {len(symbols)} symbols into {output_path}")

if __name__ == "__main__":
    main()
