const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const cocktailsEl = document.querySelector('#cocktails');
const single_cocktailsEl = document.querySelector('#single-cocktail');



const searchCocktail = (e)=>{
    e.preventDefault();
    const term = search.value;
//     console.log('term',term);
    if(term.trim()){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
            .then( response =>response.json())
            .then(data =>{
                console.log('data',data);

                if(data.cocktails === null){
                    resultHeading.innerHTML = `<p> There are no search results. Try again! </p>`
                }else{
                    resultHeading.innerHTML = `<h2> Search Results for ${term} </h2>`
                    cocktailsEl.innerHTML = data.cocktails.map((cocktail)=>{
                        return`
                            <div class="cocktail">
                                <img src="${cocktail.strCocktailThumb}" />
                                <div class="cocktail-info" data-cocktailID="${cocktail.idCocktail}">
                                    <h3>${cocktail.strCocktail}</h3>
                                </div>
                            </div>
                        `
                    }).join('');
                }
            })
    }else{
        // alert('Please enter a search term');
    }
};

const getCocktailById = (cocktailID)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
    .then(resp => resp.json())
    .then(data =>{
        console.log('cocktail data',data);
        const cocktail = data.cocktails[0];
        addCocktailToDOM(cocktail);
    })
};

const addCocktailToDOM = (cocktail)=>{
    const ingredients = [];
    for(let i = 1;i <=20;i++){
        if(cocktail[`strIngredient${i}`]){
            ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    console.log('ingredients',ingredients);

    single_cocktailsEl.innerHTML = `
    <div class="single-cocktail">
        <h1> ${cocktail.strCocktail} </h1>
        <img src="${cocktail.strCocktailThumb}">
        <div class="main">
            <p> ${cocktail.strInstructions} </p>
            <h2> Ingredients </h2>
            <ul>
                ${ingredients.map(ing =>{
                    return `<li> ${ing} </li>`
                }).join('')}
            </ul>
        </div>
    </div>
    `
};



// Event listeners
submit.addEventListener('click',searchCocktail);

cocktailsEl.addEventListener('click', e =>{
    // console.log('e.path',e.composedPath());
    const composedPath = e.composedPath();
    const cocktailInfo = composedPath.find(item=>{
        if(item.classList){
            return item.classList.contains('cocktail-info');
        }else{
            return false;
        }
    });
    if (cocktailInfo){
        console.log('cocktailInfo',cocktailInfo);
        const cocktailID = cocktailInfo.getAttribute('data-cocktailid');
        getCocktailById(cocktailID);
    }
});





const randomBtn = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(resp => resp.json())
        .then(data => {
            console.log('cocktail data', data);
            const cocktail = data.cocktails[0];
            addCocktailToDOM(cocktail);
        });
};


random.addEventListener('click', randomBtn);
