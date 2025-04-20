// Search Functionality
function searchFunction() {
    let input = document.getElementById('search').value.toLowerCase();
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        let content = section.textContent || section.innerText;
        if (content.toLowerCase().indexOf(input) > -1) {
            section.style.display = "block"; // Show section
        } else {
            section.style.display = "none"; // Hide section
        }
    });
}

// Scroll-based Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Apply animations when sections are in the viewport
    const sections = document.querySelectorAll('.fade-in-section');
    const skillSections = document.querySelectorAll('.skill');

    function handleScroll() {
        // Loop through each section and add animation class when in viewport
        sections.forEach(function(section) {
            if (isInViewport(section)) {
                section.classList.add('animate');
            }
        });

        skillSections.forEach(function(skill) {
            if (isInViewport(skill)) {
                skill.classList.add('animate');
            }
        });
    }

    // Listen for scroll events to trigger the animations
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call immediately to handle elements already in view on page load
});