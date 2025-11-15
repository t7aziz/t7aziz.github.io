import { HomePage } from '../pages/home.js';
import { AboutPage } from '../pages/about.js';

const router = new Navigo('/', { hash: true });
const app = document.getElementById('app');

function render(content) {
    app.innerHTML = content;
}

router
    .on('/', () => {
        render(HomePage());
    })
    .on('/about', () => {
        render(AboutPage());
    })
    .notFound(() => {
        render('<h1>404 - Page Not Found</h1>');
    })
    .resolve();