const validateForm = () => {
    const forms = document.querySelectorAll('form'),
        inputsPhone = document.querySelectorAll('input[type=tel]'),
        promoCode = document.querySelector('.price-message > input');

    const errorValidate = new Set();

    const validatePhone = event => {
        const target = event.target;
        target.value = target.value.replace(/^[^0-9+]*/g, '')
            .replace(/\D*$/g, '')
            .replace(/^\++/g, '+')
            .replace(/\(+/g, '(')
            .replace(/\)+/g, ')');

        if (!target.value.length) {
            errorValidate.add(target.id);
        } else if ((target.value.length > 10 || target.value.length < 17) &&
            target.value.search(/^(\+7|8)(\(\d{3}\)|-?\d{3}-?)(\d{3}-?\d{2}-?\d{2}|\d{2}-\d{2}-\d{3})$/) === -1) {
            target.style.border = '2px solid red';
            errorValidate.add(target.id);
        } else {
            target.style.border = '';
            errorValidate.delete(target.id);
        }
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

    forms.forEach(item => {
        item.addEventListener('input', linterForm);
    });
    inputsPhone.forEach(item => {
        item.addEventListener('blur', validatePhone);
    });
    if (promoCode) promoCode.addEventListener('blur', () => {
        promoCode.value = promoCode.value.trim();
    });

    return errorValidate;
};

export default validateForm;
