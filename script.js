window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const allSections = document.querySelectorAll('#All > div, #skills .skill, #projects .project-container-1, #projects .project-container-2');

    const observerOptions = {
        threshold: 0.4 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); 
            }
        });
    }, observerOptions);

    allSections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('scroll-left');
        } else {
            section.classList.add('scroll-right');
        }
        observer.observe(section);
    });
});
