async function randomRecette() {

    try {
            //Récupération de l'API
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

        const recette = await response.json();

        console.log(recette)




        //let recupInput = document.querySelector('#chiffre').value 

        let randomMeal = document.querySelector('#recette')

        randomMeal.innerHTML = ''


        // Affichage du nom de la recette 

        let meal = document.createElement('p')

        meal.innerHTML = 'Recette : ' + recette.meals[0].strMeal

        randomMeal.appendChild(meal)


        // Recuperation et affichage de l'image

        let pic = document.querySelector('.imgRecette')
        let img = recette.meals[0].strMealThumb

        pic.src = img





        // Affichage des ingrédients et mesures

        for (let i = 0; i < 20; i++) {
            if (recette.meals[0][`strIngredient${i}`] && recette.meals[0][`strMeasure${i}`]) {
                let ingredients = document.createElement('p')

                ingredients.innerHTML = `${i} - ` + recette.meals[0][`strIngredient${i}`] + ' | ' + recette.meals[0][`strMeasure${i}`]

                randomMeal.appendChild(ingredients)
            }

        }

        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })

        // console.log(recette.meals[0])
        // console.log(recette.meals[0][`strIngredient${3}`]);

    } catch (error) {
        alert(error)
    }
}

