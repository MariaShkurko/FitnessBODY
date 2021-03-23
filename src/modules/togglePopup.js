const togglePopup = () => {
    const right = document.querySelector('.right'),
        fixedGift = document.querySelector('.fixed-gift'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        gift = document.getElementById('gift');

    let count = 0,
        animationInterval;

    const animationPopup = (popup) => {
        animationInterval = requestAnimationFrame(animationPopup);
        count += 0.05;
        popup.style.opacity = count;
        if (popup.style.opacity === "1") {
            cancelAnimationFrame(animationInterval);
            count = 0;
        }
        // проблемы доступа к свойствам
    };


    const popupOpen = (popup) => {
        if (screen.width < 768) {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'block';
            //popup.style.opacity = 0;
            //animationPopup(popup);
        }
    };

    const popupClose = (event, popup) => {
        const target = event.target;
        if (target.classList.contains('overlay') ||
            target.classList.contains('close-form') ||
            target.classList.contains('close_icon') ||
            target.classList.contains('close-btn')) {
            popup.style.display = '';
        }
    }

    right.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('open-popup')) {
            popupOpen(freeVisitForm);
        } else if (target.classList.contains('callback-btn')) {
            popupOpen(callbackForm);
        }
    });

    fixedGift.addEventListener('click', () => {
        popupOpen(gift);
        fixedGift.style.display = 'none';
    });

    freeVisitForm.addEventListener('click', event => { popupClose(event, freeVisitForm); });
    callbackForm.addEventListener('click', event => { popupClose(event, callbackForm); });
    gift.addEventListener('click', event => {
        popupClose(event, gift);

        if (gift.style.display !== 'block') fixedGift.style.display = '';
    });
};

