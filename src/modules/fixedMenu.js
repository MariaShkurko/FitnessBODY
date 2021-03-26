const fixedMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        gift = document.querySelector('.fixed-gift');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > topMenu.offsetTop) {
            topMenu.classList.add('fixed');
            if (gift) gift.style.top = `${15 + topMenu.offsetHeight}px`;
        } else {
            topMenu.classList.remove('fixed');
            if (gift) gift.style.top = '';
        }
    });
};

export default fixedMenu;
