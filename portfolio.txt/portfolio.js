//menu
const menu=document.querySelector('.menu');
const menulist=document.querySelector('nav ul');

menu.addEventListener('click',() =>{
    menulist.classList.toggle('showmenu');
})
//typed JS

var typed = new Typed(".auto-type",{
    strings:["Frontend Developer","Software Devloper"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})