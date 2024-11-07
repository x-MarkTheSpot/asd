document.addEventListener("DOMContentLoaded", function() {
    const popularTitle = document.querySelector('.popular-title');

    // Observer options
    const options = {
        root: null, // Use the viewport as root
        threshold: 0.2 // Trigger when 20% of the element is in view
    };

    // Function to add animation class
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                popularTitle.style.animation = "slideUpFadeIn 1.5s ease forwards";
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    };

    // Create an observer and observe the popular title element
    const observer = new IntersectionObserver(callback, options);
    observer.observe(popularTitle);
});
