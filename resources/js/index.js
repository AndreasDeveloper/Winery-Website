// * -- IMPORTING WEBPACK MANDATORY FILES -- * \\
import '../sass/main.scss';

// ** --- STICKY NAVIGATION --- ** \\
(() => {
    // DOM Elements
    const nav = document.querySelector('.navigation');
    const navUl = document.querySelector('.nav-menu');
    const navBtn = document.querySelector('.menuSix');
    
    // - Event Listener - | Detects the scroll value and shows sticky nav
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
    // - Event Listener - | Show mobile nav on click
    navBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // - Animation for hamburger menu - \\
    function addClassFunSix () {
        this.classList.toggle("clickMenuSix");
    };
    navBtn.addEventListener('click', addClassFunSix);
})();

// ** --- IMAGE OBSERVING | OPTIMIZATION --- * \\
(() => {
    // DOM Element
    const images = document.querySelectorAll('img');
    // - Function | - For lazy loading images
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log('Intersecting');
                // If image is intersecting, run the code and load the image
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-lazy');
                    // Setting attribute to src and adding fade class (effect/transition)
                    img.setAttribute('src', src);
                    img.classList.add('fade');
                    // After everything is done, observer will disconnect
                    observer.disconnect();
                }
            });
        });
        io.observe(target); // Calling observer on targets
    };
images.forEach(lazyLoad); // Lazy load every single img in HTML
})();