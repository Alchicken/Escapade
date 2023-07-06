const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-menu')
});


window.addEventListener('load', () => {
    window.scrollTo(0,0);
    window.location.hash = "#home";
})
