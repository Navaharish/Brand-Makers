//setting toggle menu
let navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () => {
    let headerMenu = document.querySelector('ul.header-menu');
    let navIcon = document.querySelectorAll('span.nav-icon');


    headerMenu.classList.toggle('slide');

    navIcon.forEach(icon => {
        icon.classList.toggle('hidden')
    })
})

//setting active menu
