document.querySelector('.menu').addEventListener('click', function(event) {
    let target = event.target;
    if (target === target.closest('.menu-btn')) {
        event.preventDefault();
        let parent = target.parentNode;
        let children = parent.parentNode.children;
        [...children].forEach(el => el.classList[ el === parent ? 'toggle' : 'remove']('active'));
    }
});

  
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
  alert('Вы нажали на кнопку "Купить"');
  });
});


const object = {
  name: 'Portable',
  price: '1000$',
  color: 'Black'
};

const productInfos = document.querySelectorAll('.product-info');

productInfos.forEach(info => {
  const nameElement = document.createElement('p');
  nameElement.textContent = `Name: ${object.name}`;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Price: ${object.price}`;

  const colorElement = document.createElement('p');
  colorElement.textContent = `Color: ${object.color}`;

  info.appendChild(nameElement);
  info.appendChild(priceElement);
  info.appendChild(colorElement);
});