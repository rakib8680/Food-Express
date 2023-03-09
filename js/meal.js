

const loadData = async () => {

    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const data = await res.json();
    displayData(data.meals);
};

const displayData = async data => {
    console.log(data)
    const mealsContainer = document.getElementById('mealsContainer');
    data.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('cards')
        div.innerHTML = `
        <div class="card  drop-shadow-md rounded-xl" style="width: auto; ">
            <img src="${meal.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-xl font-semibold">${meal.strMeal}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>

                <button type="button" class="btn btn-primary bg-blue-500 mt-3" data-bs-toggle="modal" data-bs-target="#mealModal">
                    More Info
                </button>
            </div>
        </div>
        `
        mealsContainer.appendChild(div)
    })
};

const loadMeals = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const data = await res.json();
    modalDetails(data);
    
};

const modalDetails =async data => {
    console.log(data)
    // const modalTitle = document.getElementById('mealModalLabel');
    // const modalBody = document.getElementById('modalBody')
};



loadData();
modalDetails()