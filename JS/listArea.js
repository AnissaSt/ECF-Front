async function listArea() {

    const urlParams = new URLSearchParams(window.location.search);
    const cate = urlParams.get('cat');
    console.log(cate);

    if (!cate) {
        console.log('Category is not specified in the URL.');
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cate}`);
        const data = await response.json();

        console.log(data);


        const listArea = document.querySelector('#listArea')
        listArea.innerHTML = ''

        data.meals.forEach(element => {
            const divArea = document.createElement('div')
            divArea.classList.add('meal-item')

            const areaElement = document.createElement('p')
            areaElement.textContent = element.strMeal
            divArea.appendChild(areaElement)

            const imgArea = document.createElement('img')
            imgArea.src = element.strMealThumb
            divArea.appendChild(imgArea)

            divArea.addEventListener('click', function() {
                window.location.href = `../HTML/meal.html?id=${element.idMeal}`
            })

            listArea.appendChild(divArea)


            //LOGO Redirection

        let logo = document.querySelector("#logo")

        logo.addEventListener("click", function (){
            window.location.href = '../index.html'
        })
        })
    } catch (error) {
        console.log('Error:', error.message);
    }
}

listArea()