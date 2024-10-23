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

// dragon
"use strict";

const screen = document.getElementById("screen");
const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

// Tetapkan ukuran tetap 1000px x 500px
let width = 1000;
let height = 500;

// Update pointer berdasarkan gerakan mouse
window.addEventListener(
    "pointermove",
    (e) => {
        // Pastikan koordinat pointer dibatasi dalam area 1000x500
        pointer.x = Math.min(e.clientX, width);  // Batasi x ke 1000
        pointer.y = Math.min(e.clientY, height); // Batasi y ke 500
        rad = 0;
    },
    false
);

// Fungsi prepend untuk menambahkan elemen naga
const prepend = (use, i) => {
    const elem = document.createElementNS(xmlns, "use");
    elems[i].use = elem;
    elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
    screen.prepend(elem);
};

const N = 40; // Jumlah elemen naga

const elems = [];
for (let i = 0; i < N; i++) elems[i] = { use: null, x: width / 2, y: 0 };
const pointer = { x: width / 2, y: height / 2 };
const radm = Math.min(pointer.x, pointer.y) - 20;
let frm = Math.random();
let rad = 0;

for (let i = 1; i < N; i++) {
    if (i === 1) prepend("Cabeza", i);  // Kepala naga
    else if (i === 8 || i === 14) prepend("Aletas", i); // Aletas
    else prepend("Espina", i);  // Espina
}

// Fungsi utama untuk animasi pergerakan naga
const run = () => {
    requestAnimationFrame(run);  // Loop animasi
    let e = elems[0];
    
    // Sesuaikan kecepatan dan jarak gerakan naga
    const ax = (Math.cos(3 * frm) * rad * width) / height;
    const ay = (Math.sin(4 * frm) * rad * height) / width;
    
    // Percepat gerakan naga untuk lebih responsif terhadap kursor
    e.x += (ax + pointer.x - e.x) / 5;  // Kurangi pembagi menjadi /5 dari /10
    e.y += (ay + pointer.y - e.y) / 5;  // Kurangi pembagi menjadi /5 dari /10
    
    // Pergerakan elemen lainnya mengikuti elemen sebelumnya
    for (let i = 1; i < N; i++) {
        let e = elems[i];
        let ep = elems[i - 1];
        const a = Math.atan2(e.y - ep.y, e.x - ep.x);
        
        // Percepat respons elemen lainnya
        e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
        e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;
        
        // Transformasi elemen naga
        const s = (162 + 4 * (1 - i)) / 50;
        e.use.setAttributeNS(
            null,
            "transform",
            `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
                (180 / Math.PI) * a
            }) translate(${0},${0}) scale(${s},${s})`
        );
    }
    
    if (rad < radm) rad++;
    frm += 0.003;
    
    if (rad > 60) {
        pointer.x += (width / 2 - pointer.x) * 0.05;
        pointer.y += (height / 2 - pointer.y) * 0.05;
    }
};

run();



