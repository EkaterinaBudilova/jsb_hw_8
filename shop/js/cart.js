'use strict';

const itemsList = document.querySelector('.items-list');

itemsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart')) {
    let item = {title: event.target.dataset.title, price: event.target.dataset.price}; // правильно ли создавать здесь объект для передачи в ф-ю addToCart? Это единственное решение, которое придумала, чтобы правильно работало, но не логичнее ли было сделать эту ф-ю с тремя параметрами и передавать event.target.dataset, event.target.dataset.title, event.target.dataset.price?
    addToCart(item);
//    addToCart(event.target, event.target.dataset.title, event.target.dataset.price);
  }
});
