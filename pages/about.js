import { Header, Timeline } from '../components/components.js';

export function AboutPage() {
    const timelineEvents = [
        {
            start_date: "Jan 2025",
            end_date: "Present",
            title: "Founding Software Engineer (Full-time)",
            organization: "Modelmouse 🚀",
            description: "Lead the architecture design and implementation of the Modelmouse software service"
        },
        {
            start_date: "July",
            end_date: "Dec 2024",
            title: "Software Engineer (Full-time)",
            organization: "Sentia",
            description: "Full-time role developing data storage platform with Azure and Node.js for 50+ enterprise clients"
        },
        {
            start_date: "June 2024",
            end_date: "",
            organization: "Graduated University 🎓"
        },
        {
            start_date: "Jan",
            end_date: "Dec 2023",
            title: "Software Engineer (Co-op)",
            organization: "Sentia",
            description: "Co-op role developing data storage platform with Azure and Node.js for 50+ enterprise clients"
        },
        {
            start_date: "May",
            end_date: "July 2022",
            title: "Software Developer (Co-op)",
            organization: "Sheertex",
            description: "Built production monitoring dashboard and machine vision system achieving 96.7% defect detection"
        },
        {
            start_date: "Aug",
            end_date: "Dec 2021",
            title: "Sensor Engineer (Co-op)",
            organization: "Teledyne DALSA",
            description: "Inspected space satellite sensors in ISO 4 cleanroom, reduced defect rates by 25%"
        },
        {
            start_date: "Jan",
            end_date: "Apr 2021",
            title: "Full Stack Developer (Co-op)",
            organization: "St. Joseph's Healthcare",
            description: "Built patient data monitoring dashboards and data cleaning pipelines"
        },
        {
            start_date: "May",
            end_date: "Aug 2020",
            title: "Software Developer (Co-op)",
            organization: "University of Waterloo",
            description: "Developed autonomous vehicle control algorithms and deployed simulations on Azure"
        },
        {
            start_date: "Sept 2019",
            end_date: "",
            organization: "Started University"
        }
    ];

    return `
        <div class="container">
            ${Header()}
            
            <div class="section-content">
                <section class="section">
                    <h2>About Me</h2>
                    <p>My engineering journey has taken me through diverse domains; from space satellite sensors to rockets, healthcare data systems, and the software engineering I do now which is mostly backend, distributed, and data systems. What ties it all together is my inclination for creative problem solving, especially in collaboration with others.</p>
                    <p>I initially enrolled in Mechatronics Engineering at the University of Waterloo, and quickly found fun in software development through my co-ops. Wanting to specialize, I took an option in computing to further the software and computer science eduction I wanted. </p>
                    <p>Outside of work I enjoy basketball, literature, and game development.</p>
                </section>
                
                <section class="section">
                    <h2>What I Do</h2>
                    <p>Today, my deepest skills are in backend and data systems. I like Python and C++. My current work at Modelmouse has me designing system architecture (we use FastAPI, PostgreSQL and other technologies), API integrations, AI integration, data validation, deployment, and production monitoring.</p>
                    <p>Beyond my full-time commitments, I'm active in open source -- my npm package "vis-jit" which I maintain helps developers visualize Node.js JIT optimizations and reached hundreds of weekly downloads.</p>
                </section>
                
                <section class="section">
                    <h2>Career Timeline</h2>
                    ${Timeline({ events: timelineEvents })}
                </section>
            </div>
        </div>
    `;
}