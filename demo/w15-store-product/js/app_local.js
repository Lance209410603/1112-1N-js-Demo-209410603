const url = `./api/products.json`;

const pContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn')

let allProducts; 
let products;

const fetchData = async ()=>{
    try {
        const response = await fetch(url)
        const data = response.json();
        console.log('fetchData',data);
        return data; 
    }catch(err){
        console.log(err);
    }
}

const displayProducts = (products)=>{
    let displayContent = products.map((product, index)=>{
        const{company, name,price} = product.fields;
        let image = `./images/product-${index+1}.jpg`;
        return`
            <div class="single-product">
            <img
              src="${image}"
              class="single-product-img img"
              alt="high-back bench"
            />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${price/100}</span>
            </footer>
          </div>
        `
    }).join('');

    // console.log('displayContent',displayContent);
    pContainer.innerHTML = displayContent;
}

companyBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const companyId = e.currentTarget.dataset.id;
        console.log('companyId',companyId);
        if(companyId=== 'all'){
            console.log(`all products`,allProducts);
            displayProducts(allProducts);
        }else{
            products = allProducts.filter((p)=>p.fields.company === companyId);
            console.log(`${companyId} products`,products);
            displayProducts(products);
        }
    });
});

window.addEventListener('DOMContentLoaded',async()=>{
    allProducts = await fetchData();
    console.log('allProduct' ,allProducts);
    await displayProducts(allProducts);
});