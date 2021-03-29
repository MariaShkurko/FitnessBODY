const sendForm = errorValidate => {
    const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        incorrectDataMessage = 'Введены некоректные данные',
        loadSpin = document.createElement('div'),
        loadSpinChild1 = document.createElement('div'),
        loadSpinChild2 = document.createElement('div'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status-message');

    loadSpin.className = 'sk-wandering-cubes';
    loadSpinChild1.className = 'sk-cube';
    loadSpinChild2.className = 'sk-cube';
    loadSpinChild1.classList.add('sk-cube-1');
    loadSpinChild2.classList.add('sk-cube-2');
    loadSpin.insertAdjacentElement('afterbegin', loadSpinChild2);
    loadSpin.insertAdjacentElement('afterbegin', loadSpinChild1);

    const bannerForm = document.getElementById('banner-form'),
        cardOrder = document.getElementById('card_order'),
        footerForm = document.getElementById('footer_form'),
        callbackForm = document.getElementById('form1'),
        freeVisitForm = document.getElementById('form2');

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const prepareData = (event, form) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        if (errorValidate.size) {
            statusMessage.textContent = incorrectDataMessage;
            return;
        }

        statusMessage.textContent = '';
        statusMessage.insertAdjacentElement('afterbegin', loadSpin);

        const body = {},
            formData = new FormData(form);

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(responce => {
                if (responce.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                form.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    };

    bannerForm.addEventListener('submit', event => { prepareData(event, bannerForm); });
    cardOrder.addEventListener('submit', event => { prepareData(event, cardOrder); });
    footerForm.addEventListener('submit', event => { prepareData(event, footerForm); });
    callbackForm.addEventListener('submit', event => {
        prepareData(event, callbackForm);
    });
    freeVisitForm.addEventListener('submit', event => {
        prepareData(event, freeVisitForm);
    });
};

export default sendForm;
