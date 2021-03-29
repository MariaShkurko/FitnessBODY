const calc = () => {
    if (document.querySelector('html').id === 'main') {
        const cardOrderForm = document.getElementById('card_order'),
            inputClub = cardOrderForm.querySelectorAll('.club > input');

        const calculate = priceArr => {
            const inputTime = cardOrderForm.querySelectorAll('.time > input'),
                priceTotal = document.getElementById('price-total'),
                promoCode = cardOrderForm.querySelector('.price-message > input');

            const calcPrice = () => {
                let priceCurrent = 0;

                inputTime.forEach((item, i) => {
                    if (item.checked) priceCurrent = priceArr[i];
                });

                if (promoCode.value.toUpperCase().trim() === 'ТЕЛО2020') {
                    priceCurrent = Math.ceil(priceCurrent * 0.7);
                }

                priceTotal.textContent = priceCurrent;
            };

            calcPrice();

            inputTime.forEach(item => {
                item.addEventListener('change', calcPrice);
            });
            promoCode.addEventListener('blur', calcPrice);

        };

        const getPrice = (html, selector) => {
            const price = html.querySelectorAll(selector),
                priceArr = [];

            price.forEach((item, i) => {
                priceArr[i] = item.textContent.slice(0, -1);
            });

            priceArr[3] = priceArr[4];

            return priceArr;
        };

        const request = (url, selector) => {
            const html = document.createElement('html');
            fetch(url)
                .then(responce => {
                    if (responce.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    return responce.text();
                })
                .then(responceBody => {
                    html.innerHTML = responceBody;
                    return getPrice(html, selector);
                })
                .then(priceArr => {
                    calculate(priceArr);
                })
                .catch(error => {
                    console.error(error);
                });
        };

        inputClub.forEach(item => {
            if (item.checked) request(`./${item.value}.html`, '.cards-types > label > .cost');

            item.addEventListener('change', () => {
                if (item.checked) request(`./${item.value}.html`, '.cards-types > label > .cost');
            });
        });

    }
};

export default calc;
