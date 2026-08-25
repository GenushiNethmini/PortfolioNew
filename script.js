/* ============================================================
       DATA LAYER
       ============================================================ */

// Navigation items
const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

// Education
const educationData = [
    { degree: "Bachelor of Science Honours in Business Information Systems", school: "University of Sri Jayewardenepura", year: "2024 — 2028", icon: "fa-graduation-cap" },
    { degree: "G.C.E.Advanced Level -Commerce Stream :3As", school: "Devananda College, Ambalangoda", year: "2020-2023", icon: "fa-school" },
    { degree: "G.C.E.Ordinary Level -8As(Mathematics,English),1B", school: "Devananda College, Ambalangoda", year: "2019", icon: "fa-school"},
];

// Professional interests
const interestsData = [
    { text: "Business Analysis", icon: "fa-chart-line" },
    { text: "Requirements Analysis", icon: "fa-clipboard-list" },
    { text: "Business Process Improvement", icon: "fa-cog" },
    { text: "Data Analysis & Visualization", icon: "fa-chart-bar" },
    { text: "Digital Transformation", icon: "fa-laptop-code" },
];

// Qualifications
const qualificationsData = [
    { text: "Four months working experience as a Trainee, People's Bank, Ambalangoda" },
    { text: "Diploma in Computer Literacy ,The Open University of Sri Lanka" },
    { text: "Advanced Diploma in English ,The Beeline English Academy" },
    { text: "IT & Microsoft Office Specialist, ROYAL ICT"},
    { text: "Cybersecurity Fundamentals certification ,APNIC Academy"},
    { text: "Introduction to Internet of Things(IoT) certification ,Cisco Networking Academy"},
    
];

// Technical skills with levels (0-100)
const techSkillsData = [
    { name: "Business Process Modeling", level: 95 },
    { name: "Agile & Scrum Fundamentals", level: 90 },
    { name: "Microsoft Excel", level: 85 },
    { name: "Python ", level: 75 },
    { name: "HTML & CSS ", level: 65 },
    { name: "Databases (SQL)", level: 80 },
];

// Soft skills
const softSkillsData = [
    { name: "Collaboration", icon: "fa-handshake" },
    { name: "Communication", icon: "fa-comments" },
    { name: "Problem Solving", icon: "fa-puzzle-piece" },
    { name: "Leadership", icon: "fa-people-arrows" },
    { name: "Adaptability", icon: "fa-sync-alt" },
    { name: "Critical Thinking", icon: "fa-search" },
    { name: "Time Management", icon: "fa-clock" },
    { name: "Empathy", icon: "fa-heart" },
];

// Tools & technologies
const toolsData = [
    "Git & GitHub", "VS Code", "Figma", "Microsoft Excel", "Microsoft Powerpoint", "Microsoft Word",
    "Trello", "Microsoft Visio", "Draw.io", "Slack"
    
];

// Projects
const projectsData = [
    {
        title: "FindMyBoarding",
        subtitle: "Boarding Management System",
        description: "A Python-based boarding management system that simplifies student record management, room allocation, payment tracking, and communication between boarders and administrators.",
        tech: ["Python", "MySQL"],
        img: "images/find_my_boarding.jpeg",
        alt: "Screenshot of FindMyBoarding boarding management system",
        
    },
    {
        title: "RentHub",
        subtitle: "Smart Rental Management System",
        description: "A web-based rental platform that enables users to rent out or book personal items. Features secure user authentication, online reservations, and automated late fee calculation for overdue returns.",
        tech: ["HTML", "CSS", "JavaScript", "PHP (MVC)", "MySQL"],
        img: "images/renthub.jpeg",
        alt: "Screenshot of RentHub rental management system",
        
    },
    {
        title: "SPOMS",
        subtitle: "Smart Post Office Management System",
        description: "A web-based post office management system that digitizes mail handling, parcel tracking, customer services, and financial transactions, improving efficiency, transparency, and service reliability.",
        tech: ["ASP.NET Core MVC", "C#", "Bootstrap 5", "Microsoft SQL Server", "Entity Framework Core"],
        img: "images/spoms.jpeg",
        alt: "Screenshot of SPOMS post office management system",
       
    },
    
];

// Contact info
const contactInfoData = [
    { icon: "fa-envelope", label: "Email", value: "genushinethmini8@gmail.com", href: "mailto:genushinethmini8@gmail.com" },
    { icon: "fa-map-marker-alt", label: "Location", value: "Ambalangoda,Sri Lanka", href: null },
    { icon: "fa-phone-alt", label: "Phone", value: "0774232313", href: "tel:0774232313" },
    { icon: "fa-globe", label: "Website", value: "GenushiNethmini.com", href: "#home" },
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderNav(items) {
    return items.map(i =>
        `<li><a href="${i.href}" class="block px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-accent hover:bg-white/[0.04] transition-all">${i.label}</a></li>`
    ).join("");
}

function renderNavMobile(items) {
    return items.map(i =>
        `<li><a href="${i.href}" class="block px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-accent hover:bg-white/[0.04] transition-all">${i.label}</a></li>`
    ).join("");
}

function renderEducation(items) {
    return items.map(e =>
        `<li class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                <i class="fas ${e.icon} text-xs"></i>
            </div>
            <div>
                <p class="font-medium">${e.degree}</p>
                <p class="text-text-secondary text-sm">${e.school} — ${e.year}</p>
            </div>
        </li>`
    ).join("");
}

function renderInterests(items) {
    return items.map(i =>
        `<li class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <i class="fas ${i.icon} text-xs"></i>
            </div>
            <span class="text-text-secondary text-sm">${i.text}</span>
        </li>`
    ).join("");
}

function renderQualifications(items) {
    return items.map(q =>
        `<li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
            <span class="text-text-secondary text-sm">${q.text}</span>
        </li>`
    ).join("");
}

function renderTechSkills(items) {
    return items.map(s =>
        `<div>
            <div class="flex justify-between text-sm mb-1.5">
                <span class="font-medium">${s.name}</span>
                <span class="text-text-secondary">${s.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-bar-fill" style="width: ${s.level}%"></div>
            </div>
        </div>`
    ).join("");
}

function renderSoftSkills(items) {
    return items.map(s =>
        `<div class="card-bg rounded-xl p-3 flex flex-col items-center gap-2 text-center border border-white/[0.04] hover:border-accent/30 transition-all">
            <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <i class="fas ${s.icon} text-sm"></i>
            </div>
            <span class="text-xs font-medium">${s.name}</span>
        </div>`
    ).join("");
}

function renderTools(items) {
    return items.map(t =>
        `<span class="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] text-text-secondary border border-white/[0.06] hover:border-accent/30 hover:text-accent transition-all">${t}</span>`
    ).join("");
}

function renderProjects(items) {
    return items.map(p =>
        `<article class="card-bg rounded-2xl overflow-hidden glow-card transition-all group">
            <div class="aspect-video overflow-hidden">
                <img src="${p.img}" alt="${p.alt}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 sm:p-6">
                <p class="text-accent text-xs font-medium tracking-wider uppercase mb-1">${p.subtitle}</p>
                <h3 class="text-lg font-semibold mb-2">${p.title}</h3>
                <p class="text-text-secondary text-sm leading-relaxed mb-4">${p.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.tech.map(t => `<span class="project-tag">${t}</span>`).join("")}
                </div>
                ${/*
                <div class="flex items-center gap-4">
                    <a href="${p.link}" class="text-sm font-medium text-accent hover:text-accent-light transition flex items-center gap-1.5">
                        <i class="fas fa-external-link-alt text-xs"></i> Live Demo
                    </a>
                    <a href="${p.github}" class="text-sm font-medium text-text-secondary hover:text-accent transition flex items-center gap-1.5">
                        <i class="fab fa-github text-xs"></i> Source
                    </a>
                </div>
                */""}
            </div>
        </article>`
    ).join("");
}

function renderContactInfo(items) {
    return items.map(c =>
        `<div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <i class="fas ${c.icon} text-sm"></i>
            </div>
            <div>
                <p class="text-xs text-text-secondary">${c.label}</p>
                ${c.href
                    ? `<a href="${c.href}" class="text-sm font-medium hover:text-accent transition">${c.value}</a>`
                    : `<p class="text-sm font-medium">${c.value}</p>`
                }
            </div>
        </div>`
    ).join("");
}


/* ============================================================
   MOUNT
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    // Nav
    document.getElementById("nav-list-desktop").innerHTML = renderNav(navItems);
    document.getElementById("nav-list-mobile").innerHTML = renderNavMobile(navItems);

    // Education
    document.getElementById("education-list").innerHTML = renderEducation(educationData);

    // Interests
    document.getElementById("interests-list").innerHTML = renderInterests(interestsData);

    // Qualifications
    document.getElementById("qualifications-list").innerHTML = renderQualifications(qualificationsData);

    // Tech Skills
    document.getElementById("tech-skills").innerHTML = renderTechSkills(techSkillsData);

    // Soft Skills
    document.getElementById("soft-skills").innerHTML = renderSoftSkills(softSkillsData);

    // Tools
    document.getElementById("tools-list").innerHTML = renderTools(toolsData);

    // Projects
    document.getElementById("projects-grid").innerHTML = renderProjects(projectsData);

    // Contact Info
    document.getElementById("contact-info-list").innerHTML = renderContactInfo(contactInfoData);


    /* ============================================================
       EVENT DELEGATION (navigation + smooth scroll)
       ============================================================ */

    document.addEventListener("click", function (e) {
        const link = e.target.closest("a[href^='#']");
        if (!link) return;
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        // Close mobile menu on nav click
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu.classList.contains("hidden") === false) {
            mobileMenu.classList.add("hidden");
            mobileMenu.style.maxHeight = "0";
            document.getElementById("mobile-toggle").setAttribute("aria-expanded", "false");
        }
    });


    /* ============================================================
       MOBILE MENU TOGGLE
       ============================================================ */

    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileToggle.addEventListener("click", function () {
        const isOpen = !mobileMenu.classList.contains("hidden");
        if (isOpen) {
            mobileMenu.classList.add("hidden");
            mobileMenu.style.maxHeight = "0";
            this.setAttribute("aria-expanded", "false");
        } else {
            mobileMenu.classList.remove("hidden");
            // Trigger reflow then set max-height for transition
            void mobileMenu.offsetHeight;
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
            this.setAttribute("aria-expanded", "true");
        }
    });

    // Handle resize: close mobile menu on large screens
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add("hidden");
            mobileMenu.style.maxHeight = "0";
            mobileToggle.setAttribute("aria-expanded", "false");
        }
    });


    /* ============================================================
       CONTACT FORM HANDLING
       ============================================================ */

    const form = document.getElementById("contact-form");
    const toast = document.getElementById("toast");

    function showToast(message, type = "success") {
        toast.textContent = message;
        toast.className = "toast show " + type;
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            showToast("Please fill in all fields.", "error");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast("Please enter a valid email address.", "error");
            return;
        }

        // Simulate sending
        const btn = form.querySelector("button[type='submit']");
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
            form.reset();
            showToast("Message sent successfully! I'll get back to you soon.", "success");
        }, 1500);
    });


   

    /* ============================================================
       SKILL BAR ANIMATION ON SCROLL
       ============================================================ */

    const skillBars = document.querySelectorAll(".skill-bar-fill");
    let skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;
        const section = document.getElementById("skills");
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            skillBars.forEach(bar => {
                const w = bar.style.width;
                bar.style.width = "0";
                setTimeout(() => { bar.style.width = w; }, 100);
            });
            skillsAnimated = true;
        }
    }

    window.addEventListener("scroll", animateSkills);
    // Check on load
    setTimeout(animateSkills, 300);


    /* ============================================================
       HEADER SHADOW ON SCROLL
       ============================================================ */

    window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        if (window.scrollY > 20) {
            header.classList.add("shadow-lg", "shadow-black/10");
        } else {
            header.classList.remove("shadow-lg", "shadow-black/10");
        }
    });

});
