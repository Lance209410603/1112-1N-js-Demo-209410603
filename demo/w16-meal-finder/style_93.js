const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsEl = document.querySelector('#meals');
const single_mealsEl = document.querySelector('#single-meal');



const searchMeal = (e)=>{
    e.preventDefault();
    const term = search.value;
//     console.log('term',term);
    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then( response =>response.json())
            .then(data =>{
                console.log('data',data);

                if(data.meals === null){
                    resultHeading.innerHTML = `<p> There are no search results. Try again! </p>`
                }else{
                    resultHeading.innerHTML = `<h2> Search Results for ${term} </h2>`
                    mealsEl.innerHTML = data.meals.map((meal)=>{
                        return`
                            <div class="meal">
                                <img src="${meal.strMealThumb}" />
                                <div class="meal-info" data-mealID="${meal.idMeal}">
                                    <h3>${meal.strMeal}</h3>
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

const getMealById = (mealID)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(resp => resp.json())
    .then(data =>{
        console.log('meal data',data);
        const meal = data.meals[0];
        addMealToDOM(meal);
    })
};

const addMealToDOM = (meal)=>{
    const ingredients = [];
    for(let i = 1;i <=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }
    console.log('ingredients',ingredients);

    single_mealsEl.innerHTML = `
    <div class="single-meal">
        <h1> ${meal.strMeal} </h1>
        <img src="${meal.strMealThumb}">
        <div class="main">
            <p> ${meal.strInstructions} </p>
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
submit.addEventListener('click',searchMeal);

mealsEl.addEventListener('click', e =>{
    // console.log('e.path',e.composedPath());
    const composedPath = e.composedPath();
    const mealInfo = composedPath.find(item=>{
        if(item.classList){
            return item.classList.contains('meal-info');
        }else{
            return false;
        }
    });
    if (mealInfo){
        console.log('mealInfo',mealInfo);
        const mealID = mealInfo.getAttribute('data-mealid');
        getMealById(mealID);
    }
});





const randomBtn = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(resp => resp.json())
        .then(data => {
            console.log('meal data', data);
            const meal = data.meals[0];
            addMealToDOM(meal);
        });
};


random.addEventListener('click', randomBtn);
