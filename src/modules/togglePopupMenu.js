const togglePopupMenu = () => {
    const popupMenu = document.querySelector('.popup-menu'),
        menuButton = document.querySelector('.menu-button');

    menuButton.addEventListener('click', () => {
        popupMenu.classList.add('df');
    });
    popupMenu.addEventListener('click', event => {
        const target = event.target;
        if (target.parentNode.matches('.close-menu-btn') || target.parentNode.matches('.scroll')) {
            popupMenu.classList.remove('df');
        }
    });
};

export default togglePopupMenu;
