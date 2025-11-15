export function ProjectCard({ image, title, description, links }) {
    return `
        <div class="project-card">
            ${image ? `<img src="${image}" alt="${title}">` : `<div class="placeholder">IMAGE</div>`}
            <div class="content">
                <div class="text">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
                <div class="links">
                    ${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.text}</a>`).join('')}
                </div>
            </div>
        </div>
    `;
}

export function AnimatedLogo() {
    const frames = [
        `T = (A∧¬B)∨(A∧B)`,
        `T = A∧(¬B∨B)`,
        `T = A∧1`,
        `T = A`,
    ];

    setTimeout(() => {
        const logoEl = document.querySelector('.ascii-logo');
        if (!logoEl) return;

        let currentFrame = 0;
        setInterval(() => {
            currentFrame = (currentFrame + 1) % frames.length;
            logoEl.style.opacity = '0';
            setTimeout(() => {
                logoEl.textContent = frames[currentFrame];
                logoEl.style.opacity = '1';
            }, 150);
        }, 2500);
    }, 100);

    return `<pre class="ascii-logo">${frames[0]}</pre>`;
}

export function Header() {
    return `
        <header class="header">
            <div>
                <a href="/" data-navigo style="text-decoration: none; color: inherit;">
                    ${AnimatedLogo()}
                </a>
            </div>
            <nav>
                <a href="mailto:aziztaha082@gmail.com">Email</a>
                <a href="./documents/Taha_Aziz_resume.pdf" target="_blank">Resume</a>
                <a href="https://linkedin.com/in/t7aziz" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com/t7aziz" target="_blank" rel="noopener">Github</a>
            </nav>
        </header>
    `;
}

export function Timeline({ events }) {
    return `
        <div class="timeline">
            ${events.map(event => `
                <div class="timeline-item">
                    <div class="timeline-date">
                        <span>${event.start_date}</span>
                        ${event.end_date ? `<span>→ ${event.end_date}</span>` : ''}
                    </div>
                    <div class="timeline-content">
                        <h3>${event.organization}</h3>
                        ${event.title ? `<p class="timeline-org">${event.title}</p>` : ''}
                        ${event.description ? `<p>${event.description}</p>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}