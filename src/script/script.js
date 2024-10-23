// Navbar Fixed
window.onscroll= function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});

// klik diluar hamburger
window.addEventListener('click', function(e){
if(e.target != Hamburger && e.target != navMenu){
    Hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
}
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// Set toggle sesuai mode saat halaman dimuat
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    html.classList.add('dark');
} else {
    darkToggle.checked = false;
    html.classList.remove('dark');
}

// Event listener untuk toggle dark mode
darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});
