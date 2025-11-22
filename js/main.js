 // Initialize AOS
    AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
} else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
}
});

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
    current = section.getAttribute('id');
}
});

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
    link.classList.add('active');
}
});
});

    // Add particle effect to hero section (optional enhancement)
    function createParticle() {
    const hero = document.querySelector('.hero');
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
    hero.appendChild(particle);

    setTimeout(() => {
    particle.remove();
}, 5000);
}

    // Create particles periodically
    setInterval(createParticle, 300);

    // Typing effect for hero subtitle (optional)
    const subtitleText = "Full-Stack Developer & Data Visualization Specialist";
    const subtitleElement = document.querySelector('.hero .subtitle');
    let charIndex = 0;

    function typeWriter() {
    if (charIndex < subtitleText.length) {
    subtitleElement.textContent = subtitleText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 100);
}
}

    // Start typing effect after a brief delay
    setTimeout(() => {
    subtitleElement.textContent = '';
    typeWriter();
}, 500);