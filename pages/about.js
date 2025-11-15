import { Header, Timeline } from '../components/components.js';

export function AboutPage() {
    const timelineEvents = [
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
                    <h2>On Me</h2>
                    <p>My engineering journey has taken me through diverse domains; from space satellite sensors to rockets, healthcare data systems, and the software engineering I do now which is mostly backend, distributed, and data systems. What ties it all together is the joy of solving problems with code and people.</p>
                    <p>I initially enrolled in Mechatronics Engineering at the University of Waterloo, and quickly found fun in software through my co-ops. I wanted to learn more, so I took an option in computing and completed a large amount of the computer science curriculum. Beyond that I've studied by hitting the textbooks, doing my own projects, talking to industry experts, and LeetCode (lol).   </p>
                </section>
                
                <section class="section">
                    <h2>What I Do</h2>
                    <p>Today, my deepest skills are in backend and data systems. My recent work at Sentia involved building an enterprise data storage platform, where we relied on Azure as well as our own database technologies in a distributed system.</p>
                    <p>Beyond professional work, I'm active in open source; my npm package "vis-jit" helps developers visualize Node.js JIT optimizations and reached hundreds of weekly downloads.</p>
                    <p>Aside from my projects here, I've also done game development which is very fun. Over the past year, I've learned a lot about game engines and graphics programming such as writing shader programs in GLSL.</p>
                </section>
                
                <section class="section">
                    <h2>Career Timeline</h2>
                    ${Timeline({ events: timelineEvents })}
                </section>
            </div>
        </div>
    `;
}