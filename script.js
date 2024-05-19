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


let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let windowScroll = document.documentElement.scrollTop;
  let windowHeight = document.documentElement.clientHeight;
  let windowScrollHeight = document.documentElement.scrollHeight;

  // Update the scroll progress bar
  let scrollAmount = (windowScroll / (windowScrollHeight - windowHeight)) * 100;
  document.getElementById("mybar").style.width = scrollAmount + "%";

  // Toggle the visibility of the navbar based on scroll direction
  const navbar = document.getElementById("navbar");
  const hideThreshold = 200; // Adjust this value based on your requirements

  if (windowScroll > prevScrollPos) {
    // Scrolling down, hide the navbar after the threshold is passed
    if (windowScroll > hideThreshold) {
      navbar.classList.add("hidden2");
    }
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
// script.js
document.addEventListener('scroll', () => {
    const svg = document.getElementById('animatedSvg');
    const scrollY = window.scrollY;

    const startScroll = 500; 
    const endScroll = 2000;  
    const totalScroll = endScroll - startScroll;

    const maxTranslationX = window.innerWidth + 200; // Move further beyond left edge
    const maxTranslationY = window.innerHeight / 2; // Adjust to center vertically or move slightly

    if (scrollY >= startScroll && scrollY <= endScroll) {
        const progress = (scrollY - startScroll) / totalScroll;

        const translationX = maxTranslationX * (1 - progress) - 200; // Ensure it starts off-screen right and ends off-screen left
        const translationY = maxTranslationY * progress - 50; // Center or move vertically slightly
        const rotation = 360 * progress; // 360 degrees rotation during the scroll range

        svg.style.transform = `translate(${translationX}px, ${translationY}px) rotate(${rotation}deg)`;
    } else if (scrollY < startScroll) {
        // Before the animation scroll range
        svg.style.transform = `translate(${window.innerWidth}px, 0px) rotate(0deg)`;
    } else if (scrollY > endScroll) {
        // After the animation scroll range
        svg.style.transform = `translate(-200px, ${maxTranslationY - 50}px) rotate(360deg)`;
    }
});

// Ensure the SVG starts off-screen on the right if the page is loaded or refreshed before the startScroll
window.addEventListener('load', () => {
    const svg = document.getElementById('animatedSvg');
    const scrollY = window.scrollY;
    const startScroll = 500;
    const endScroll = 2000;

    if (scrollY < startScroll) {
        svg.style.transform = `translate(${window.innerWidth}px, 0px) rotate(0deg)`;
    } else if (scrollY > endScroll) {
        const maxTranslationY = window.innerHeight / 2;
        svg.style.transform = `translate(-200px, ${maxTranslationY - 50}px) rotate(360deg)`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const contactEmail = document.querySelector('.contact-email');

    function checkVisibility() {
        const rect = contactEmail.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            contactEmail.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the element is already in view
});


document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundCircle = document.querySelector('.background-circle');

    // Adjust the multiplier (0.5) to control the speed of the upward movement
    const newPosition = -3 - (scrollPosition * 0.02);
    backgroundCircle.style.top = `${newPosition}rem`;
});

