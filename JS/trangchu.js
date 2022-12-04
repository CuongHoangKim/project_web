let menuOpen=document.querySelector('#menu-button-open')
let menu=document.querySelector('.mobile-menu')
let menuClose=document.querySelector('#menu-button-close');

menuOpen.onclick = () =>{
    menu.classList.add('active');
}
menuClose.onclick = () =>{
    menu.classList.remove('active');
}