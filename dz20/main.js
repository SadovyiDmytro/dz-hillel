document.querySelector('.menu').addEventListener('click', function(event) {
    let target = event.target;
    if (target === target.closest('.menu-btn')) {
        event.preventDefault();
        let parent = target.parentNode;
        let children = parent.parentNode.children;
        [...children].forEach(el => el.classList[ el === parent ? 'toggle' : 'remove']('active'));
    }
});

  
const buyButton = document.querySelector('.buy-btn');
buyButton.addEventListener('click', function() {
  alert('Сongratulations, you bought a product!!!');
});



