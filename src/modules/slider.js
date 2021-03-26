const slider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        mainSliders = mainSlider.querySelectorAll('.slide');

    let currentSlide = 0;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(mainSliders, currentSlide, 'dn');
        currentSlide++;
        if (currentSlide >= mainSliders.length) {
            currentSlide = 0;
        }
        nextSlide(mainSliders, currentSlide, 'dn');
    };
    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };

    startSlide(10000);
};

export default slider;
