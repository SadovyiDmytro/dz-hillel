document.querySelector('.menu').addEventListener('click', function(event) {
  let target = event.target;
  if (target === target.closest('.menu-btn')) {
      event.preventDefault();
      let parent = target.parentNode;
      let children = parent.parentNode.children;
      [...children].forEach(el => el.classList[ el === parent ? 'toggle' : 'remove']('active'));
  }
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

const newForm = document.querySelector('.pay-form');
const orderForm = document.querySelector('.order');
const buyButtons = document.querySelectorAll('.buy-btn');
let productItemName = [];
let productItemPrice = object.price;
const closerButton = document.querySelectorAll('.closer');
const tasksList = document.querySelector('.tasks');
const orders = JSON.parse(localStorage.getItem('orders')) || [];

function displayOrders() {
  orders.forEach(order => {
    const orderDetails = document.createElement('li');
    orderDetails.innerHTML = 
      `
      <strong>Your order:</strong>
      <br>
      <strong>Product:</strong> ${order.productName}
      <br>
      <strong>Product:</strong> ${order.productPrice}
      <br>
      <strong>Date:</strong> ${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDay()}
      `;
    tasksList.appendChild(orderDetails);
  });
}


buyButtons.forEach(button => {
  button.addEventListener('click', () => {
      newForm.classList.add('open');
      const productNameFinder = button.closest('.item');
      const prodName = productNameFinder.querySelector('.item-name');
      productItemName.push(prodName.textContent);
  });
});

newForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('name');
  const cityLocation = document.getElementById('city');
  const novaPost = document.getElementById('postoffice');
  const payRadio = document.querySelector('input[name="payment"]:checked');
  const unitValue = document.getElementById('units');

  const productName = document.getElementById('product-name');
  productName.innerText = productItemName;

  const productQuantity = document.getElementById('product-quantity');
  productQuantity.innerText = unitValue.value;

  const deliveryCity = document.getElementById('delivery-city');
  deliveryCity.innerText = cityLocation.value;

  const postOffice = document.getElementById('post-office');
  postOffice.innerText = novaPost.value;

  const productBuyer = document.getElementById('buyer');
  productBuyer.innerText = fullName.value;

  const paymentMethod = document.getElementById('payment-method');
  paymentMethod.innerText = payRadio.value === 'cod' ? 'Postpaid' : 'By bank card';

  const commentValue = document.getElementById('comment');
  const orderComment = document.getElementById('order-comment');
  orderComment.innerText = commentValue.value.trim() === '' ? '-' : commentValue.value.trim();

  const productPrice = document.getElementById('order-price');
  productPrice.innerText = productItemPrice;
  
  orderForm.classList.add('open');
  newForm.classList.remove('open');

  function closeOrderForm() {
    newForm.classList.remove('open');
    orderForm.classList.remove('open');

    productItemName = [];
  }
  closerButton.forEach(button => {
    button.addEventListener('click', () => {
      closeOrderForm();
    });
  });

  const orderData = {
    productName: productItemName,
    productQuantity: unitValue.value,
    deliveryCity: cityLocation.value,
    postOffice: novaPost.value,
    productBuyer: fullName.value,
    productPrice: productItemPrice,
    paymentMethod: payRadio.value === 'cod' ? 'Postpaid' : 'By bank card',
    orderComment: commentValue.value.trim() === '' ? '-' : commentValue.value.trim(),
  };
  orders.push(orderData);
  localStorage.setItem('orders', JSON.stringify(orders));
  displayOrders();

});
displayOrders();



