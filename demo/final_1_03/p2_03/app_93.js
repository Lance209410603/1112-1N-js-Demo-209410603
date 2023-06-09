const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const url = './api/data.json';

let menu;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) =>{
        return `
        <article class="menu-item">
          <img src=${item.remote_img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.descrip}
            </p>
          </div>
        </article>`
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}
    
const displayMenuButtons = () => {
    const categories = ['all', ...new Set(menu.map((item) => item.category))];
    let menuButtons = categories.map( (category) =>{
        return `
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    });
    menuButtons = menuButtons.join('');
    btnContainer.innerHTML = menuButtons;

    const filterBtns =document.querySelectorAll('.filter-btn');
    console.log('filterBtns', filterBtns);
    filterBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            console.log('data-id', e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const filterMenu = menu.filter( (item) => item.category === category );
            console.log('filterMenu', filterMenu);
            if(category === 'all'){
                console.log('all', menu);
                displayMenuItems(menu);
            }else{
                console.log(category, filterMenu);
                displayMenuItems(filterMenu);
            }
        });
    } );
};

const fetchData = async ()=>{
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch data', data);
        return data;
    }catch(error){
        console.log(error);
    }
}

window.addEventListener('DOMContentLoaded' , async () => {
    menu = await fetchData();
    await displayMenuItems(menu);
    await displayMenuButtons();
});