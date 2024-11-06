let menuIcon = document.querySelector('#nav-toggle');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
};

//...... READ MORE BUTTON............

const para2 = document.querySelector('.about-para2');
const readMore = document.querySelector('#about-btn');
const readLess = document.querySelector('#about-btn2');

readMore.addEventListener('click', ()=>{
    para2.style.display = 'block';
    readMore.style.display ='none';
    readLess.style.display ='block';
})

readLess.addEventListener('click', ()=>{
    para2.style.display = 'none';
    readMore.style.display ='block';
    readLess.style.display ='none';
})



// The modal
const modal = document.getElementById("hireMeModal");
const btn = document.getElementById("hireMeBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
