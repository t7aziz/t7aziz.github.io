import { Header, ProjectCard } from '../components/components.js';

export function HomePage() {
    const projects = [
        {
            image: '../images/pern.png',
            title: 'User Auth Service',
            description: 'Full-stack user authentication and account management app made with React, Node.js, Postgres, TypeScript, and Rust',
            links: [
                { text: 'Live Demo', url: 'https://app.tahamaziz.com' },
                { text: 'GitHub', url: 'https://github.com/t7aziz/fullstack-user-auth-app' }
            ]
        },
        {
            image: '../images/visjit.png',
            title: 'Vis-jit',
            description: '400+ users, npm module for visualizing Node.js V8 engine jit compiler optimizations',
            links: [
                { text: 'npmjs', url: 'https://www.npmjs.com/package/vis-jit' },
                { text: 'GitHub', url: 'https://github.com/t7aziz/vis-jit' }
            ]
        },
        {
            image: '../images/gps.png',
            title: 'Rocket GPS Tracker',
            description: 'C++ Software to track the relative position of the rocket using GPS and RF',
            links: [
                { text: 'GitHub', url: 'https://github.com/t7aziz/st-pats' }
            ]
        }
    ];

    return `
        <div class="container">
            ${Header()}
            
            <section class="section">
                <h1><a href="/about" data-navigo class="name-link">Hi, I'm Taha →</a></h1>
                <p>I'm a software engineer, currently based in Toronto and previously at <a href="https://www.sentia.ca/" target="_blank">Sentia</a>. I studied <a href="https://uwaterloo.ca/engineering/future-students/mechatronics-engineering"  target="_blank">Mechatronics Engineering</a> and <a href="https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/HklAkk00j2?group=Options&bc=true&bcCurrent=Computing%20Option"  target="_blank">Computing</a> at the University of Waterloo. </p>
                <p>As an SWE I'm currently working on OSS and fleshing out new features and product ideas.</p>
                <p>Outside of work, I enjoy playing basketball, creative writing, and game development.</p>
            </section>
            
            <section class="section">
                <h2>Check out my projects here</h2>
                ${projects.map(project => ProjectCard(project)).join('')}
            </section>
        </div>
    `;
}