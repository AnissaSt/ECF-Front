async function categories() {

    const urlParams = new URLSearchParams(window.location.search);
    const cate = urlParams.get('cat');
    console.log(cate)

    try {


        const promise = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const response = await promise.json()

        console.log(response)

        let list = document.querySelector('#categoriesList')


        // Je créer la boucle qui permet d'afficher les images et nom des catégories
        response.categories.forEach(element => {
            const divCategories = document.createElement('div')
            list.appendChild(divCategories)

            const imgElement = document.createElement('img')
            imgElement.src = element.strCategoryThumb
            divCategories.appendChild(imgElement)

            const titleCategories = document.createElement('a')
            titleCategories.textContent = element.strCategory
            divCategories.appendChild(titleCategories)



        })

        list.addEventListener('click', async function () {

            window.location.href = `../HTML/categorie.html?cat=${response.categories[0].strCategory}`

        })

        //LOGO Redirection

        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })
        
    } catch (error) {
        console.log(error.message)
    }
}
categories()