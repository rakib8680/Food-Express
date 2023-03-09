
// fetch data 
const loadData = async (name) => {

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await res.json();
    displayData(data.meals.slice(0, 8));
};


// display data 
const displayData = async data => {
    console.log(data)
    const mealsContainer = document.getElementById('mealsContainer');
    mealsContainer.innerHTML = '';
    data.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('cards')
        div.innerHTML = `
        <div class="card  drop-shadow-md rounded-xl border-4 border-cyan-400 hover:bg-slate-100" style="width: auto; ">
            <img src="${meal.strMealThumb}" class="card-img-top rounded-t-xl">
            <div class="card-body">
                <h5 class="card-title text-xl font-semibold">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 140)}...</p>

                <button onclick="loadMeals('${meal.idMeal}')" type="button" class="btn text-white hover:bg-orange-400 font-semibold bg-cyan-500 mt-3" data-bs-toggle="modal" data-bs-target="#mealModal">
                    More Info <i class="fa-solid fa-circle-info"></i>
                </button>
            </div>
        </div>
        `
        mealsContainer.appendChild(div)
    })
    spinner(false)
};


// spinner 
const spinner = a => {
    if (a) {
        document.getElementById('spinner').classList.remove('hidden');
    }
    else {
        document.getElementById('spinner').classList.add('hidden')
    }
};
spinner(true)


// search function 
const searchFood = () => {
    const inputValue = document.getElementById('inputField').value;
    loadData(inputValue);

}

// Show all cards 
const showAll = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const data = await res.json();
    displayData(data.meals);
    document.getElementById('showAll-btn').classList.add('hidden')
}


// load Single meal data 
const loadMeals = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    modalDetails(data.meals[0]);

};

const modalDetails = async data => {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '';
    modalBody.innerHTML += `
    <div class=" rounded-xl" style="width: auto; ">
             <img src="${data.strMealThumb}"  >
            <div>
                <h5 class="card-title text-2xl font-semibold my-3 text-orange-500 font-semibold" >${data.strMeal}</h5>
                <p class="card-text">${data.strInstructions}</p>
                </button>
            </div>
        </div>

    `
};



modalDetails()