const tabs = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const city = document.querySelector('.projects__info div:nth-child(1)');
const area = document.querySelector('.projects__info div:nth-child(2)');
const time = document.querySelector('.projects__info div:nth-child(3)');
const cost = document.querySelector('.projects__info div:nth-child(4)');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');

const projectData = [
  {
    city: 'Rostov-on-Don<br />LCD admiral',
    area: '81 m²',
    time: '3.5 months',
    cost: 'Upon request'
  },
  {
    city: 'Sochi<br />Thieves',
    area: '105 m²',
    time: '4 months',
    cost: '$15,000'
  },
  {
    city: 'Rostov-on-Don<br />Patriotic',
    area: '93 m²',
    time: '3 months',
    cost: '$10,000'
  }
];

let currentIndex = 0;

function updateSlider(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  tabs.forEach(tab => tab.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  tabs[index].classList.add('active');
  dots[index].classList.add('active');

  city.innerHTML = `<strong>CITY:</strong><br /><span>${projectData[index].city}</span>`;
  area.innerHTML = `<strong>APARTMENT AREA:</strong><br /><span>${projectData[index].area}</span>`;
  time.innerHTML = `<strong>REPAIR TIME:</strong><br /><span>${projectData[index].time}</span>`;
  cost.innerHTML = `<strong>REPAIR COST:</strong><br /><span>${projectData[index].cost}</span>`;

  currentIndex = index;
}

// Таб переключатель
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    updateSlider(index);
  });
});

// Стрелка ВЛЕВО
arrowLeft.addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = slides.length - 1;
  updateSlider(newIndex);
});

// Стрелка ВПРАВО
arrowRight.addEventListener('click', () => {
  let newIndex = currentIndex + 1;
  if (newIndex >= slides.length) newIndex = 0;
  updateSlider(newIndex);
});

// Клик по точкам 
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlider(index);
  });
});

updateSlider(0);