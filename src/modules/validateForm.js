const validateForm = () => {
    const callbackForm = document.getElementById('form1'),
        freeVisitForm = document.getElementById('form2'),
        bannerForm = document.getElementById('banner-form'),
        cardOrderForm = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form');

    const errorValidate = new Set();

    const isNotEmpty = elem => {
        if (!elem.value.trim()) {
            return false;
        }
        return true;
    };

    const linterForm = event => {
        const target = event.target;
        if (target.name === 'name') {
            if (target.parentNode.classList.contains('price-message')) {
                target.value = target.value.replace(/[^а-яё0-9a-z ]/gi, '');
            } else {
                target.value = target.value.replace(/[^а-яё ]/gi, '');
            }
        } else if (target.name === 'phone') {
            target.value = target.value.replace(/[^0-9+\-()]/gi, '');
        }
    };

    callbackForm.addEventListener('input', linterForm);
    freeVisitForm.addEventListener('input', linterForm);
    bannerForm.addEventListener('input', linterForm);
    cardOrderForm.addEventListener('input', linterForm);
    footerForm.addEventListener('input', linterForm);

    return errorValidate;
};

export default validateForm;
