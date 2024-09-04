async function meal() {


    const urlParams = new URLSearchParams(window.location.search);
    const cate = urlParams.get('id');
    console.log(cate)


    try {

        const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cate}`)
        const response = await promise.json()

        console.log(response);


        // let showMeal = document.querySelector('#meal');

        // showMeal.addEventListener('click', function () {
        //     window.location.href = `./Meal/index.html?id=${response.meals[0].idMeal}`

        //     let imgSrc = document.querySelector('img')

        //     imgSrc = response.meals[0].strMealThumb
        // })



        //Affichage de l'image 
        let img = document.querySelector('#mealImg')

        let imgSrc = response.meals[0].strMealThumb
        
        img.src = imgSrc



        //Sélection et affichage du nom de la recette 
        let header = document.querySelector('#title')

        header.innerHTML = response.meals[0].strMeal


        
        let showIngredients = document.querySelector('#ingredients')
        showIngredients.innerHTML = ''

        for (let i = 0; i < 20; i++) {
            if (response.meals[0][`strIngredient${i}`]) {
                
                showIngredients.innerHTML += `${i} - ` + response.meals[0][`strIngredient${i}`]

            }
        }

        let showMeasure = document.querySelector('#measure')
        showMeasure.innerHTML = ''

        for (let i = 0; i < 20; i++) {
            if (response.meals[0][`strMeasure${i}`]) {
                
                showMeasure.innerHTML += `${i} - ` + response.meals[0][`strMeasure${i}`]

            }

        }

        let instruction = document.querySelector('#instructions')
        instruction.innerHTML = response.meals[0].strInstructions

        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })

    } catch (error) {

    }
}

meal();