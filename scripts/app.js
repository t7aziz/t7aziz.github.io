const routes = {
    '/': '/index.html',
    '/about': '/about/index.html',
    '/github': '/github/index.html',
    '/internships': '/internships/index.html',
    '/rocketry': '/rocketry/index.html',
    '/work': '/work/index.html',
    '/srtx': '/srtx/index.html',
    '/dalsa': '/dalsa/index.html',
    '/gamedev': '/gamedev/index.html',
};

function normalizePath(path) {
    // Remove leading/trailing slashes and 'index.html'
    path = path.replace(/^\/|\/$/g, '').replace(/index\.html$/, '');
    return path ? `/${path}` : '/';
}

async function render(path) {
    const app = document.getElementById('app');
    const normalizedPath = normalizePath(path); // Normalize the path
    if (!routes[normalizedPath]) {
        console.error(`Path not found in routes: ${normalizedPath}`);
        app.innerHTML = '<h1>404 - Page Not Found</h1>';
        return;
    }

    try {
        console.log(`Fetching: ${routes[normalizedPath]}`); // Debugging
        const response = await fetch(routes[normalizedPath]);
        if (!response.ok) {
            throw new Error('Page not found');
        }
        const html = await response.text();
        app.innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${routes[normalizedPath]}:`, error); // Debugging
        app.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}

function navigate(event) {
    // Use closest() to find the parent anchor
    const anchor = event.target.closest('a[data-route]');
    if (anchor) {
        event.preventDefault();
        const path = anchor.getAttribute('href');
        window.history.pushState({}, '', path);
        render(path);
    }
}

window.addEventListener('popstate', () => {
    const path = normalizePath(window.location.pathname); // Normalize the path
    render(path);
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', navigate);
    const initialPath = normalizePath(window.location.pathname); // Normalize the initial path
    render(initialPath || '/');
});