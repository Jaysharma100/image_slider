const slides   = document.querySelectorAll('.slide');
const prevBtn  = document.getElementById('prev');
const nextBtn  = document.getElementById('next');
const dots     = document.querySelectorAll('.dot');
const slider   = document.getElementById('slider');
let current    = 0;
let timer;

function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
  dots.forEach((d, idx)   => d.classList.toggle('active', idx === i));
  current = i;
}

function nextSlide() { showSlide((current + 1) % slides.length); }
function prevSlide() { showSlide((current - 1 + slides.length) % slides.length); }

function startTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
}

dots.forEach(dot =>
  dot.addEventListener('click', () => {
    showSlide(+dot.dataset.index);
    startTimer();
  })
);

nextBtn.addEventListener('click', () => {
  nextSlide();
  startTimer();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  startTimer();
});

slider.addEventListener('mouseenter', () => clearInterval(timer));
slider.addEventListener('mouseleave', startTimer);

showSlide(0);
startTimer();
