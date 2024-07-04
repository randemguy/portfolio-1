document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

// Optional: Add a smooth scrolling effect for the links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
