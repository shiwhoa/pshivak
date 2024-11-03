// Function that initializes the IntersectionObserver for swing-in elements
function initializeObserver() {
    // Query for all elements with the class 'swing-in'
    const elements = document.querySelectorAll('.swing-in');
    console.log('Found elements:', elements);

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Checking element visibility:', entry.target);

            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation when the element is in view
                entry.target.classList.add('visible');
                console.log('Element became visible:', entry.target);

                // Stop observing the element once it is visible to avoid re-triggering
                observer.unobserve(entry.target);
            } else {
                console.log('Element is not visible:', entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each element with the 'swing-in' class
    elements.forEach(element => {
        observer.observe(element);
        console.log('Started observing element:', element);
    });
}
