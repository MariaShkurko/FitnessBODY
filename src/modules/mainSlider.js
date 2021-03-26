const mainSlider = () => {
    const mainSliders = document.querySelectorAll('.main-slider .slide');

    let currentMainSlide = 0;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const autoPlaySlide = (slider, currentSlide) => {
        prevSlide(slider, currentSlide, 'dn');
        currentSlide++;
        if (currentSlide >= slider.length) {
            currentSlide = 0;
        }
        nextSlide(slider, currentSlide, 'dn');
        return currentSlide;
    };
    const startSlide = (slider, time = 3000) => {
        setInterval(() => { currentMainSlide = autoPlaySlide(slider, currentMainSlide); }, time);
    };

    startSlide(mainSliders, 5000);
};

export default mainSlider;
