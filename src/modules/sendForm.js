const sendForm = errorValidate => {
    const errorMessage = 'Что-то пошло не так... Пожалуйста, перезагрузите страницу или попробуйте позднее.',
        needPersonalData = 'Необходимо Ваше согласие на передачу данных',
        incorrectDataMessage = 'Введены некоректные данные',
        needClubCheck = 'Пожалуйста, выберите клуб!',
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

    const prepareData = (event, form, popupModal = false) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        const personalData = form.querySelector('.personal-data > input');
        const clubName = form.querySelectorAll('input[name=club-name]');

        const showMessage = success => {
            const popup = document.getElementById('thanks'),
                popupParagraph = popup.querySelector('.form-content > p');

            if (personalData) personalData.checked = false;
            if (!success) popupParagraph.textContent = errorMessage;
            if (popupModal) {
                popupModal.style.display = '';
            }

            popup.style.display = 'block';
            popup.addEventListener('click', event => {
                const target = event.target;
                if (target.classList.contains('overlay') ||
                    target.classList.contains('close-form') ||
                    target.classList.contains('close_icon') ||
                    target.classList.contains('close-btn')) {
                    popup.style.display = '';
                }
            });

            setTimeout(() => {
                popup.style.display = '';
            }, 3000);
        };

        if (errorValidate.size) {
            statusMessage.textContent = incorrectDataMessage;
            return;
        }

        if (personalData && !personalData.checked) {
            statusMessage.textContent = needPersonalData;
            return;
        }

        if (clubName.length) {
            let isChecked = false;
            clubName.forEach(item => {
                if (item.checked) isChecked = true;
            });

            if (!isChecked) {
                statusMessage.textContent = needClubCheck;
                return;
            }
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
                statusMessage.textContent = '';
                form.querySelectorAll('input[type=text]').forEach(item => {
                    item.value = '';
                });
                form.querySelectorAll('input[type=tel]').forEach(item => {
                    item.value = '';
                });
                showMessage(true);
            })
            .catch(error => {
                statusMessage.textContent = '';
                showMessage(false);
                console.error(error);
            });
    };

    bannerForm.addEventListener('submit', event => { prepareData(event, bannerForm); });
    cardOrder.addEventListener('submit', event => { prepareData(event, cardOrder); });
    footerForm.addEventListener('submit', event => { prepareData(event, footerForm); });
    callbackForm.addEventListener('submit', event => {
        prepareData(event, callbackForm, document.getElementById('callback_form'));
    });
    freeVisitForm.addEventListener('submit', event => {
        prepareData(event, freeVisitForm, document.getElementById('free_visit_form'));
    });
};

export default sendForm;
