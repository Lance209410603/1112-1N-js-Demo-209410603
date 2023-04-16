import {menu} from './data.js'

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    // console.log(item);
    return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  //console.log('displayMenu before join', displayMenu);
  displayMenu = displayMenu.join('');
  //console.log('displayMenu after join', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
    })
    .join('');

  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id',e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        console.log('all',menu);
        displayMenuItems(menu);
      } else {
        console.log(category,filterMenu);
        displayMenuItems(filterMenu);
      }
    });
  });
};
