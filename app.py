from flask import Flask, render_template, send_from_directory, abort
import os

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

PROJECTS_DATA = {
    'bloomcare': {
        'id': 'bloomcare',
        'title': 'BloomCare',
        'type': 'Real Project',
        'category': 'Landing Page',
        'client': 'Kumpin Studio',
        'tagline': 'A compassionate mental health app landing page designed for clarity and high conversion.',
        'role': 'UI/UX Design, Web Development',
        'timeline': '3 Weeks',
        'tools': 'Figma, HTML5, CSS3, JS, Flask',
        'year': '2025',
        'live_url': 'https://github.com/RajwaNuwayyar',
        'description': 'BloomCare offers tailored mental wellness tools and support through a sleek modern violet UI experience. The design focuses on calm aesthetic tones, responsive layout, clear value proposition, and frictionless user onboarding.',
        'image': '/assets/images/bloomcare.jpg'
    },
    'fragwater': {
        'id': 'fragwater',
        'title': 'FragWater',
        'type': 'Real Project',
        'category': 'Landing Page',
        'client': 'Luxury Brand',
        'tagline': 'A modern luxury fragrance brand brought to life through a clean, elegant, and high-end landing page experience.',
        'role': 'UI/UX Design, Web Design',
        'timeline': '4 Weeks',
        'tools': 'Figma, HTML5, CSS3, JavaScript',
        'year': '2025',
        'live_url': 'https://github.com/RajwaNuwayyar',
        'description': 'This design focuses on premium visual storytelling, editorial typography, and refined product presentation built to make every variant feel timeless, exclusive, and unforgettable.',
        'image': '/assets/images/fragwater.jpg'
    },
    'cryptocalm': {
        'id': 'cryptocalm',
        'title': 'CryptoCalm',
        'type': 'Exploration',
        'category': 'Dashboard',
        'client': 'Fintech Design',
        'tagline': 'Crypto investment dashboard designed for beginners seeking simplicity and data visualization.',
        'role': 'UI/UX Design, Dashboard Architecture',
        'timeline': '2 Weeks',
        'tools': 'Figma, Chart.js, CSS Grid',
        'year': '2024',
        'live_url': 'https://github.com/RajwaNuwayyar',
        'description': 'CryptoCalm simplifies real-time crypto asset tracking and portfolio management. Features clean dark mode metrics, intuitive trading charts, and beginner-friendly financial insights.',
        'image': '/assets/images/cryptocalm.jpg'
    },
    'spenso': {
        'id': 'spenso',
        'title': 'Spenso',
        'type': 'Real Project',
        'category': 'Mobile App',
        'client': 'Mikan Team',
        'tagline': 'Redefining personal finance management with artificial intelligence and automated budget tracking.',
        'role': 'Mobile UI/UX Design, Front-End',
        'timeline': '4 Weeks',
        'tools': 'Figma, React Native, Tailwind CSS',
        'year': '2025',
        'live_url': 'https://github.com/RajwaNuwayyar',
        'description': 'Spenso empowers users to track spending trends, receive smart AI budgeting alerts, and optimize index fund investments through an ultra-clean mobile user experience.',
        'image': '/assets/images/spenso.jpg'
    }
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/work')
def work():
    return render_template('work.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/project/<project_id>')
def project_detail(project_id):
    project = PROJECTS_DATA.get(project_id)
    if not project:
        abort(404)
    return render_template('project_detail.html', project=project)

@app.route('/assets/images/<path:filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'assets', 'images'), filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
