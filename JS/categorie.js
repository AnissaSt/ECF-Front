
async function catMeal() {

    const urlParams = new URLSearchParams(window.location.search);
    const cate = urlParams.get('cat');
    console.log(cate)

    try {
        const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
        const response = await promise.json()

        let meals = document.querySelector('#categorie')

        response.meals.forEach(element => {

            const divCategorie = document.createElement('div')
            meals.appendChild(divCategorie)

            const imgECategorie = document.createElement('img')
            imgECategorie.src = element.strMealThumb
            divCategorie.appendChild(imgECategorie)

            const titleCategorie = document.createElement('a')
            titleCategorie.textContent = element.strMeal
            divCategorie.appendChild(titleCategorie)



        })

        meals.addEventListener('click', async function () {

            window.location.href = `../HTML/meal.html?id=${response.meals[0].idMeal}`

        })

        // Logo redirection 
        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })

    } catch (error) {

    }
}

catMeal()



