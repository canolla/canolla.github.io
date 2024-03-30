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


//scroll indicator & navbar

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollAmount = (windowScroll / windowHeight) * 100;

    // Update the width of the progress bar
    document.getElementById("mybar").style.width = scrollAmount + "%";

    // Toggle the visibility of the navbar based on the scroll direction
    const navbar = document.getElementById("navbar");
    const hideThreshold = 200; // Adjust this value based on your requirements

    if (windowScroll > prevScrollPos) {
        // Scrolling down, hide the navbar
        navbar.classList.add("hidden2");
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove("hidden2");
    }

    // Update the previous scroll position
    prevScrollPos = windowScroll;
};


//reveal

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
