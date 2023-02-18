const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
const button = document.querySelectorAll('.btn');

buttonPrev.addEventListener('click', () => {
  // 
  const activeSlide = document.querySelector('.slide-item.active');
  activeSlide.classList.remove('active');
  activeSlide.previousElementSibling.classList.add('active');
  buttonNext.classList.remove('hide');
  if (activeSlide.previousElementSibling.previousElementSibling === null) {
    buttonPrev.classList.add('hide')
  }
});

buttonNext.addEventListener('click', () => {
  buttonPrev.classList.remove('hide')
  const activeSlide = document.querySelector('.slide-item.active');
  activeSlide.classList.remove('active');
  activeSlide.nextElementSibling.classList.add('active');

  if (activeSlide.nextElementSibling.nextElementSibling === null) {
    buttonNext.classList.add('hide')
  }
})


