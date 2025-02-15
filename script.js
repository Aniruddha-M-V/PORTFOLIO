window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get the message element
    const messageElement = document.getElementById("Message");

    // Display the success message
    messageElement.textContent = "Message sent!";
    messageElement.style.visibility = 'visible';

    // Clear the form fields (optional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
const elements = document.querySelectorAll('.fade-in-down');

        function checkVisibility() {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.9) { // Adjust 0.8 as needed for when the animation starts
                    element.classList.add('show');
                }
                //Optional: remove the class to animate only once
                // else {
                //     element.classList.remove('show');
                // }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility); // In case the viewport changes
        checkVisibility(); // Check on initial load