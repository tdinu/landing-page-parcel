const images = document.querySelectorAll('.photo img');
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let modalImage = document.querySelector('#modal img');
const menu = document.querySelectorAll('.menu-items li');
//console.log(images);
images.forEach(img => {
    img.addEventListener('click', e => {
        modal.classList.add('show');
        modalImage.src = img.src;
        while(img.firstChild) {
            modal.removeChild(modal.firstChild);
        }
    })
})
// if click in modal
modal.addEventListener('click', e => {
    if (e.target !== e.currentTarget) 
        return
    modal.classList.remove('show');
})

close.addEventListener('click', () => {
    modal.classList.remove('show');
})

// remove menu when list item clicked
menu.forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("menu-btn").checked = false;
    })
})