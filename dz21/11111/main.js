// const nextBtn = document.getElementById('next');
// const previousBtn = document.getElementById('previous');
// const sliderEl = document.querySelector('#slide-item');

// nextBtn.addEventListener('click', function() {
//     sliderEl.classList.add('active')
// });

// previousBtn.addEventListener('click', function() {
//     sliderEl.classList.remove('active')
// });

    const carouselSlider = document.querySelectorAll('.slide-item');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
function Slider() {
    let currentSlide = 0;
  
    // const activeDot = function (slide) {
    //     document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    //     document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    // };
    // activeDot(currentSlide);

    // function changeSlide() {
    //     carouselSlider.classList.remove('active');
    //     carouselSlider.eq(currentSlide % carouselSlider.size()).classList.add('active');
    //     currentSlide++;
    // }

    // const changeSlide = function (slides) {
    //     carouselSlider.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    // };
    // changeSlide(currentSlide);
    const changeSlide = function () {

    };

    btnNext.addEventListener('click', function () {
        currentSlide++;
        if (carouselSlider.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
    });
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
    });
};
Slider();
