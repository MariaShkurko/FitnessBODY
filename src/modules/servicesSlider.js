const servicesSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        slidersWrapper = servicesSlider.querySelector('.services-slider-wrapper');

    let servicesSliders = servicesSlider.querySelectorAll('.slide');

    let sliderWidth = servicesSliders.offsetWidth,
        slideWidth = servicesSliders[0].offsetWidth,
        count = Math.floor(sliderWidth / slideWidth);

    let position = 0;

    window.addEventListener('resize', () => {
        sliderWidth = servicesSlider.offsetWidth;
        slideWidth = servicesSliders[0].offsetWidth;
        count = Math.floor(sliderWidth / slideWidth);
    });

    servicesSlider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if (!target.matches('.slider-arrow') && !target.parentNode.matches('.slider-arrow')) {
            return;
        }

        if (target.parentNode.matches('.prev') || target.matches('.prev')) {
            const newSlide = servicesSliders[servicesSliders.length - 1].cloneNode(true);
            slidersWrapper.prepend(newSlide);
            servicesSliders[servicesSliders.length - 1].remove();
            servicesSliders = servicesSlider.querySelectorAll('.slide');

            position = position > 0 ? --position : 0;
        } else if (target.parentNode.matches('.next') || target.matches('.next')) {
            const newSlide = servicesSliders[0].cloneNode(true);
            slidersWrapper.append(newSlide);
            servicesSliders[0].remove();
            servicesSliders = servicesSlider.querySelectorAll('.slide');

            position = position < servicesSliders.length - count ? ++position : servicesSliders.length - count;
        }
    });
};

export default servicesSlider;
