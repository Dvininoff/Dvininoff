const sr = ScrollReveal ({
    distance: '80px',
    duration: 4000,
    delay: 200,
    reset: true
})

sr.reveal('.text',{delay: 200, origin:'top'})
sr.reveal('.form-container form',{delay: 100, origin:'left'})
sr.reveal('.heading',{delay: 200, origin:'top'})
sr.reveal('.about-container',{delay: 200, origin:'top'})
sr.reveal('.home .background' ,{delay: 2000, origin:'right'})


const btn1Text = document.getElementById('btn1-text');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    btn1Text.classList.remove('hidden');
    btn1Text.classList.add('popup-message');
});

btn1Text.addEventListener('animationend', () => {
    btn1Text.classList.remove('popup-message');
    btn1Text.classList.add('hidden');
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}