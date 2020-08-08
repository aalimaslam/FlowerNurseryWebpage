const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const ul = document.querySelector('.unorderedList')
hamburger.onclick=()=>{
    hamburger.classList.toggle('open');
    close.classList.toggle('closed');
    ul.classList.toggle('opened')
}
close.onclick= ()=>{
    close.classList.toggle('closed');
    hamburger.classList.toggle('open');
    ul.classList.toggle('opened');
}