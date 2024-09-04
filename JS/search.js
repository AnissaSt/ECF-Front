async function search() {

    try {

        //Selection 
        const input = document.getElementById('input')
        const searchBtn = document.querySelector('#btn')
        const meal = document.querySelector('#meal')

        //Bouton rechercher qui mène l'utilisateur vers la ou les recettes rechercher 
        searchBtn.addEventListener('click', async function () {
            meal.innerHTML = ''

            let inputValue = input.value

            console.log(inputValue);

           
            const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            const response = await promise.json()
            console.log(response)


            //Affichage du résultat de recherche
            response.meals.forEach(element => {
                const div = document.createElement('div')
                meal.appendChild(div)

                const imgElement = document.createElement('img')
                imgElement.src = element.strMealThumb
                div.appendChild(imgElement)

                const titleMeal = document.createElement('h2')
                titleMeal.textContent = element.strMeal
                div.appendChild(titleMeal)


                //Affichage de la recette clicker apres la recherche
                imgElement.addEventListener('click', function (){
                    window.location.href = `../HTML/meal.html?id=${response.meals[0].idMeal}`
                })
            });

            logo.addEventListener("click", function () {
                window.location.href = '../index.html'
            })

        })


    } catch (error) {
        console.log(error.message)
    }
}

search()