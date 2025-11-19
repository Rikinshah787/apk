// ============================================
// PERSONAL DATA CONFIGURATION
// ============================================

const PERSONAL_DATA = {
    name: "Rikin Shah",
    email: "rshah@asu.edu",
    phone: "917-238-5682",
    linkedin: "https://linkedin.com/in/rikinshah787",
    github: "https://github.com/rikinshah787",
    portfolio: "https://www.rikin.tech",
    resume: "content/resume_20251118_200520_493387_9942276d.pdf", // Resume from content folder
    video: "content/video1221648457.mp4", // Video from content folder
    recruiterName: "Erik",
    company: "CVS",
    position: "Data Scientist",
    
    projects: [
        {
            title: "LLMResume.com",
            description: "An intelligent resume generator aligned with job descriptions. Built with LangChain for core LLM functionality, featuring token optimization and AI-powered resume customization. Demonstrates my ability to build agentic systems that understand context and generate intelligent outputs.",
            link: "https://llmresume.com",
            tech: ["LangChain", "LLM", "AI", "Token Optimization", "Agentic Systems"],
            relevance: "Directly relevant to agentic systems and intelligent automation"
        },
        {
            title: "SmartKid.co.in",
            description: "An innovative educational platform designed to enhance learning experiences. Built with modern web technologies and intelligent features to support educational growth and development.",
            link: "https://smartkid.co.in",
            tech: ["Full-Stack", "Education Tech", "Web Development", "Innovation"],
            relevance: "Demonstrates ability to build impactful educational technology solutions"
        },
        {
            title: "Multi-Agent Orchestration with Crew.ai & Bedrock",
            description: "Workflow automation using Crew.ai and Bedrock for multi-agent orchestration. Optimized token usage and efficient AI-powered project management. This project showcases my expertise in coordinating multiple AI agents to work together seamlessly.",
            link: "#",
            tech: ["Crew.ai", "Bedrock", "Multi-Agent", "Workflow Automation", "Orchestration"],
            relevance: "Core experience with agentic systems and multi-agent coordination"
        },
        {
            title: "Wildflower Coalition Platform",
            description: "A dynamic blog and donation platform built with smart admin tooling. Features intelligent content management and seamless donation processing. Demonstrates full-stack capabilities with intelligent automation.",
            link: "https://wildflowercoalition.org",
            tech: ["Full-Stack", "Admin Tools", "Automation", "Data Management"],
            relevance: "Shows ability to build intelligent systems with data handling"
        }
    ],
    
    skills: [
        "Crew.ai", "Multi-Agent Orchestration", "Bedrock", "Agent Coordination", "Workflow Automation",
        "LangChain", "LLM Token Optimization", "AI Integration", "Prompt Engineering", "Context Management",
        "Cursor", "CodeRabbit", "Phantombuster", "n8n", "Workflow Design",
        "Data Engineering", "Cloud Infrastructure", "ML Systems", "SAP ERP", "Scalable Architecture"
    ]
};

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializePersonalInfo();
    initializeProjects();
    initializeSkills();
    initializeVideo();
    initializeScrollAnimations();
    initializeInteractivity();
    addPersonalizedGreeting();
    checkVideoFromURL(); // Check for video URL from backend/URL params
});

// ============================================
// PERSONALIZED GREETING FOR ERIC
// ============================================

function addPersonalizedGreeting() {
    // Add a subtle animation when page loads
    const greeting = document.querySelector('.greeting-card');
    if (greeting) {
        greeting.style.animation = 'fadeInUp 0.8s ease-out';
    }
    
    // Console message for Erik
    console.log(`%c👋 Hi Erik!`, 'font-size: 24px; font-weight: bold; color: #667eea;');
    console.log(`%cThanks for reviewing my application for the Data Scientist position at CVS!`, 'font-size: 14px; color: #666;');
    console.log(`%cThis page was built specifically for you.`, 'font-size: 12px; color: #999;');
}

// ============================================
// PERSONAL INFO
// ============================================

function initializePersonalInfo() {
    // Set LinkedIn, GitHub, and Resume links
    const linkedinLink = document.getElementById('linkedin-link');
    const githubLink = document.getElementById('github-link');
    const resumeLink = document.getElementById('resume-link');
    
    if (linkedinLink) linkedinLink.href = PERSONAL_DATA.linkedin;
    if (githubLink) githubLink.href = PERSONAL_DATA.github;
    if (resumeLink) resumeLink.href = PERSONAL_DATA.resume;
}

// ============================================
// PROJECTS GRID
// ============================================

function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    // Show only first 4 projects
    const projectsToShow = PERSONAL_DATA.projects.slice(0, 4);
    
    projectsToShow.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.15}s`;
        projectCard.style.opacity = '0';
        projectCard.style.animation = 'fadeInUp 0.6s ease-out forwards';
        
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-number">${index + 1}</div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-relevance">
                <strong>Relevance:</strong> ${project.relevance}
            </div>
            <div class="project-tech">${techTags}</div>
            ${project.link !== '#' ? `<a href="${project.link}" class="project-link" target="_blank">View Project <span>→</span></a>` : ''}
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Add hover effect
        projectCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.3)';
        });
        
        projectCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
        });
    });
}

// ============================================
// SKILLS SECTION
// ============================================

function initializeSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    // Display all skills in one line
    PERSONAL_DATA.skills.forEach((skill, index) => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillTag.style.animationDelay = `${index * 0.05}s`;
        skillTag.style.opacity = '0';
        skillTag.style.animation = 'fadeInUp 0.4s ease-out forwards';
        
        skillTag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 100);
        });
        
        skillsContainer.appendChild(skillTag);
    });
}

// ============================================
// VIDEO FUNCTIONALITY
// ============================================

function initializeVideo() {
    const videoPlaceholder = document.getElementById('video-placeholder');
    const videoContainer = document.getElementById('video-container');
    
    if (!videoPlaceholder || !videoContainer) return;
    
    // Click to add video
    videoPlaceholder.addEventListener('click', function() {
        const videoUrl = prompt('Enter your video URL (YouTube, Vimeo, or direct link):');
        
        if (videoUrl) {
            embedVideo(videoUrl);
        }
    });
    
    // Auto-embed if video URL is provided
    if (PERSONAL_DATA.video) {
        embedVideo(PERSONAL_DATA.video);
    }
}

function embedVideo(url) {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) return;
    
    let embedCode = '';
    const videoHeight = '250'; // Compact height for side-by-side layout
    
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = extractYouTubeId(url);
        if (videoId) {
            embedCode = `<iframe width="100%" height="${videoHeight}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>`;
        }
    }
    // Vimeo
    else if (url.includes('vimeo.com')) {
        const videoId = extractVimeoId(url);
        if (videoId) {
            embedCode = `<iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="${videoHeight}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>`;
        }
    }
    // Direct video
    else if (url.match(/\.(mp4|webm|ogg)$/i)) {
        embedCode = `<video width="100%" height="${videoHeight}" controls style="border-radius: 12px;"><source src="${url}" type="video/mp4">Your browser does not support the video tag.</video>`;
    }
    // Generic iframe
    else {
        embedCode = `<iframe width="100%" height="${videoHeight}" src="${url}" frameborder="0" allowfullscreen style="border-radius: 12px;"></iframe>`;
    }
    
    if (embedCode) {
        videoContainer.innerHTML = embedCode;
        videoContainer.style.padding = '0';
    } else {
        alert('Could not process video URL. Please try a YouTube, Vimeo, or direct video link.');
    }
}

// Function to set video from backend - call this from your backend integration
function setVideoFromBackend(videoUrl) {
    if (videoUrl) {
        PERSONAL_DATA.video = videoUrl;
        embedVideo(videoUrl);
    }
}

// Check for video URL in URL parameters (for backend integration)
function checkVideoFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video');
    if (videoUrl) {
        setVideoFromBackend(videoUrl);
    }
}

function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function extractVimeoId(url) {
    const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Observe cards
    document.querySelectorAll('.project-card, .skill-category, .glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

function initializeInteractivity() {
    // Smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect and step indicator
    const header = document.querySelector('.header-bar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
            updateStepIndicator();
        });
    }

    // Initialize step indicator
    updateStepIndicator();

    // Scroll down buttons functionality
    document.querySelectorAll('.scroll-down-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 120; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update step indicator based on scroll position
function updateStepIndicator() {
    const sections = ['hero', 'projects', 'skills'];
    const steps = document.querySelectorAll('.step');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = 'hero';
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = sectionId;
            }
        }
    });
    
    // Update step indicators
    steps.forEach((step, index) => {
        const stepNum = index + 1;
        const sectionId = sections[index];
        
        if (currentSection === sectionId) {
            step.classList.add('active');
            navItems[index]?.classList.add('active');
        } else {
            step.classList.remove('active');
            navItems[index]?.classList.remove('active');
        }
    });
}

// ============================================
// ANIMATIONS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
