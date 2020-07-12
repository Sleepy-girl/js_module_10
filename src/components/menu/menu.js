import dishes from './menu.json';
import dishesTemplate from './template.hbs';
import { addToCart } from '../cart/cart';

const menuList = {
  dishes, // dishes: dishes,
};
// console.log(menuList); // копирование по ссылке

const refs = {
  menuRef: document.querySelector('.menu')
};

const addToOrder = (e) => {
  if ((e.target.nodeName === 'BUTTON') && (e.target.dataset.btn === "cartBtn")) {
    const id = e.target.closest('[data-id]').dataset.id;
    // console.log(id);
    const dish = menuList.dishes.find(dish => dish.id === id);
    console.log(dish);
    addToCart(dish);
  } else return;
};

const markup = dishesTemplate(dishes);

refs.menuRef.insertAdjacentHTML('afterbegin', markup);

refs.menuRef.addEventListener('click', addToOrder);