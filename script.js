const data = [
    {
      city: "Rostov-on-Don<br>LCD admiral",
      area: "81 m²",
      time: "3.5 months",
      cost: "Upon request",
      img: "img/img-1.jpg"
    },
    {
      city: "Sochi<br>Thieves",
      area: "105 m²",
      time: "4 months",
      cost: "Upon request",
      img: "img/img-2.jpg"
    },
    {
      city: "Rostov-on-Don<br>Patriotic",
      area: "93 m²",
      time: "3 months",
      cost: "Upon request",
      img: "img/img-3.jpg"
    }
  ];
  
  let current = 0;
  
  const cityEl = document.querySelector('.projects__info div:nth-child(1)');
  const areaEl = document.querySelector('.projects__info div:nth-child(2)');
  const timeEl = document.querySelector('.projects__info div:nth-child(3)');
  const costEl = document.querySelector('.projects__info div:nth-child(4)');
  const imageEl = document.getElementById('project-photo');
  const dots = document.querySelectorAll('.dot');
  
  function updateContent(index) {
    const item = data[index];
    cityEl.innerHTML = `<strong>CITY:</strong><br>${item.city}`;
    areaEl.innerHTML = `<strong>APARTMENT AREA:</strong><br>${item.area}`;
    timeEl.innerHTML = `<strong>REPAIR TIME:</strong><br>${item.time}`;
    costEl.innerHTML = `<strong>REPAIR COST:</strong><br>${item.cost}`;
    imageEl.src = item.img;
  
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  
  document.querySelector('.arrow.left').addEventListener('click', () => {
    current = (current - 1 + data.length) % data.length;
    updateContent(current);
  });
  
  document.querySelector('.arrow.right').addEventListener('click', () => {
    current = (current + 1) % data.length;
    updateContent(current);
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      updateContent(current);
    });
  });
  
  updateContent(current);