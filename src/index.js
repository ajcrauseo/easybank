const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header--links');
    const navLinks = document.querySelectorAll('.header--links li');
    const links = document.querySelectorAll('.link');


    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navbarlinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close Nav with Links
    links.forEach(item => {
        item.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        })
    })
}

navSlide();
