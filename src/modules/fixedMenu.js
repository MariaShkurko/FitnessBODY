const fixedMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        gift = document.querySelector('.fixed-gift'),
        arrowUp = document.getElementById('totop');

    window.addEventListener('scroll', () => {
        if (screen.width <= 768 && window.pageYOffset > topMenu.offsetTop) {
            topMenu.classList.add('fixed');
            if (gift) gift.style.top = `${15 + topMenu.offsetHeight}px`;
        } else {
            topMenu.classList.remove('fixed');
            if (gift) gift.style.top = '';
        }

        if (window.pageYOffset > document.querySelector('header').offsetHeight) {
            arrowUp.classList.add('db');
        } else {
            arrowUp.classList.remove('db');
        }
    });
};

export default fixedMenu;
