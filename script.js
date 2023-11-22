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
document.addEventListener('DOMContentLoaded', function () {
    let resultSection = document.getElementById('result-section');
    let processSection = document.getElementById('process-section');
    let resultText = document.querySelector('.side-menu li:nth-child(1) .larger-text');
    let processText = document.querySelector('.side-menu li:nth-child(2) .larger-text');

    window.addEventListener('scroll', function () {
        let resultSectionOffset = resultSection.offsetTop;
        let processSectionOffset = processSection.offsetTop;
        let scrollPosition = window.scrollY;

        // Check if the user is scrolling over the Result section
        if (scrollPosition >= resultSectionOffset && scrollPosition < processSectionOffset) {
            resultText.classList.add('active');
            processText.classList.remove('active');
        } else if (scrollPosition >= processSectionOffset) { // Check if the user is scrolling over the Process section
            resultText.classList.remove('active');
            processText.classList.add('active');
        } else {
            // Default state when not scrolling over either section
            resultText.classList.remove('active');
            processText.classList.remove('active');
        }
    });
});


