async function area() {

    try {


        const promise = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        const response = await promise.json()

        console.log(response)

        let area = document.querySelector('#area')


        // Je créer la boucle qui permet d'afficher les images et nom des catégories
        response.meals.forEach(element => {
            const divArea = document.createElement('div')
            area.appendChild(divArea)

            const areaElment = document.createElement('p')
            areaElment.textContent = element.strArea
            divArea.appendChild(areaElment)

            divArea.addEventListener('click', function() {
                window.location.href = `../HTML/listArea.html?cat=${element.strArea}`;
            });


        })

        // LOGO Redirection

        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })
        
    } catch (error) {
        console.log(error.message)
    }
}
area()