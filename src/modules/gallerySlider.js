const gallerySlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        gallerySliders = gallerySlider.querySelectorAll('.slide'),
        galleryDots = gallerySlider.querySelector('.slider-dots');

    for (let i = 0; i < gallerySliders.length; i++) {
        const newDot = document.createElement('li'),
            newDotBtn = document.createElement('button');
        newDot.classList.add('dot');
        newDot.append(newDotBtn);
        if (i === 0) {
            newDot.classList.add('slick-active');
        }
        galleryDots.append(newDot);
    }

    const dots = galleryDots.querySelectorAll('.dot');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(gallerySliders, currentSlide, 'slide-active');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= gallerySliders.length) {
            currentSlide = 0;
        }
        nextSlide(gallerySliders, currentSlide, 'slide-active');
        nextSlide(dots, currentSlide, 'slick-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if (!target.matches('.slider-arrow, .dot') && !target.parentNode.matches('.slider-arrow, .dot')) {
            return;
        }

        prevSlide(gallerySliders, currentSlide, 'slide-active');
        prevSlide(dots, currentSlide, 'slick-active');

        if (target.parentNode.matches('.prev') || target.matches('.prev')) {
            currentSlide--;
        } else if (target.parentNode.matches('.next') || target.matches('.next')) {
            currentSlide++;
        } else if (target.parentNode.matches('.dot')) {
            dots.forEach((elem, index) => {
                if (elem === target.parentNode) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= gallerySliders.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = gallerySliders.length - 1;

        nextSlide(gallerySliders, currentSlide, 'slide-active');
        nextSlide(dots, currentSlide, 'slick-active');
    });

    gallerySlider.addEventListener('mouseover', event => {
        if (event.target.matches('.slider-arrow, .dot')) stopSlide();
    });

    gallerySlider.addEventListener('mouseout', event => {
        if (event.target.matches('.slider-arrow, .dot')) startSlide(5000);
    });

    startSlide(5000);
};

export default gallerySlider;
