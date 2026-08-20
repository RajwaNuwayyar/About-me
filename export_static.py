import os
from app import app, PROJECTS_DATA

def build_static():
    print("Building static site for GitHub Pages...")
    client = app.test_client()

    routes_map = {
        '/': 'index.html',
        '/work': 'work.html',
        '/service': 'service.html',
        '/experience': 'experience.html',
        '/contact': 'contact.html',
    }

    for p_id in PROJECTS_DATA:
        routes_map[f'/project/{p_id}'] = f'project-{p_id}.html'

    for route, filename in routes_map.items():
        res = client.get(route)
        if res.status_code == 200:
            html = res.data.decode('utf-8')
            
            # Replace absolute route links with static file links for GitHub Pages
            html = html.replace('href="/work"', 'href="work.html"')
            html = html.replace('href="/service"', 'href="service.html"')
            html = html.replace('href="/experience"', 'href="experience.html"')
            html = html.replace('href="/contact"', 'href="contact.html"')
            html = html.replace('href="/"', 'href="index.html"')
            
            for p_id in PROJECTS_DATA:
                html = html.replace(f'href="/project/{p_id}"', f'href="project-{p_id}.html"')

            # Fix asset paths for GitHub Pages subdirectories
            html = html.replace('href="/static/css/style.css"', 'href="static/css/style.css"')
            html = html.replace('src="/static/js/main.js"', 'src="static/js/main.js"')
            html = html.replace('src="/assets/images/', 'src="assets/images/')

            out_path = os.path.join(app.root_path, filename)
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"  [OK] Generated {filename}")
        else:
            print(f"  [FAIL] Failed route {route}: status {res.status_code}")

    print("Static build complete! All files generated in root for GitHub Pages.")

if __name__ == '__main__':
    build_static()
