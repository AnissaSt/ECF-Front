function firstLetter() {

    const urlParams = new URLSearchParams(window.location.search);
    const cate = urlParams.get('id');
    console.log(cate)


    try {

        // Sélèction
        const lettre = document.querySelectorAll('p')
        // console.log(lettre);

        //Les p sont intégrer dans un tableau NodeList en utilisant le querrySelectorAll
        const article = document.querySelector('#article-img')

        lettre.forEach(i => {
            console.log(i);
            i.addEventListener('click', async (event) => {


                // console.log(event.target.innerText)


                //Je récupère l'API qui me permet de trouver une rectte par la premiere lettre  event.target.innerText fait en sorte que lorsque la lettre est clique le parametre de l'URL change par la lettre cliquer.

                const promise = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.innerText}`)
                const response = await promise.json()
                console.log(response)

                article.innerHTML = ''


                //Si aucune recette ne commenece par cette lettre alors:
                if (response.meals === null) {

                    const error = document.createElement('p')
                    error.textContent = "Nothing to see here ..."
                    article.appendChild(error);
                }


                // Je créer la boucle qui permet d'afficher les images et nom des recettes
                response.meals.forEach(element => {

                    const divImgs = document.createElement('div')
                    article.appendChild(divImgs)

                    const imgElement = document.createElement('img')
                    imgElement.src = element.strMealThumb
                    divImgs.appendChild(imgElement)

                    const titleMeal = document.createElement('h2')
                    titleMeal.textContent = element.strMeal
                    divImgs.appendChild(titleMeal)

                });


                //Détails d'une recette 
                article.addEventListener('click', async function () {

                    window.location.href = `../HTML/meal.html?id=${response.meals[0].idMeal}`

                })


            })

            logo.addEventListener("click", function () {
                window.location.href = '../index.html'
            })


        });


    } catch (error) {
        console.log(error.message);
    }
}

firstLetter()