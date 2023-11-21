/* image overlay */
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.enlargeable');
    const overlay = document.getElementById('imageOverlay');
    const enlargedImg = document.getElementById('enlargedImg');

    images.forEach(image => {
        image.addEventListener('click', function () {
            enlargedImg.src = this.src;
            overlay.style.display = 'flex';

            overlay.offsetHeight;

            overlay.classList.add('show');
        });
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.remove('show');
        }
    });
});

function closeOverlay() {
    const overlay = document.getElementById('imageOverlay');
    overlay.classList.remove('show');
}

/* sidebar nav */

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.side-menu a');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to check which section is currently in view
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to handle link highlighting based on the section in view
    function highlightLink() {
        let found = false;

        contentSections.forEach((section, index) => {
            const isSectionInView = isInViewport(section);

            if (isSectionInView && !found) {
                menuLinks.forEach(link => link.classList.remove('active'));
                menuLinks[index].classList.add('active');
                found = true; // Set found to true to only highlight the first section in view
            }
        });

        // Remove 'active' class from all links if no section is in view
        if (!found) {
            menuLinks.forEach(link => link.classList.remove('active'));
        }
    }

    // Initial highlighting on page load
    highlightLink();

    // Event listener for scroll events
    window.addEventListener('scroll', highlightLink);

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
});
