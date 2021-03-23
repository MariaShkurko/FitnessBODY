const dropDownMenu = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubsListUl = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => { clubsListUl.classList.toggle('db'); });
}