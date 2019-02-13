// * -- IMPORTING WEBPACK MANDATORY FILES -- * \\
import '../sass/main.scss';

// - STICKY NAVIGATION - \\
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