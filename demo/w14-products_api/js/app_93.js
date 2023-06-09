const sectionCenter = document.querySelector('.products-container');
const url = 'https://course-api.com/javascript-store-products';

let menu;

const displayMenuItems = (menu)=>{
    let displayMenu = menu.map( (item) =>{
        
        return `
        <div class="single-product">
              <img
                src="${item.fields.image[0].url}"
                class="single-product-img img"
                alt="${item.fields.name}"
              />
              <footer>
                <h5 class="name">${item.fields.name}</h5>
                <span class="price">$${item.fields.price/100}</span>
              </footer>
            </div>`
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}


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
});

