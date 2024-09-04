try {
   
    let categorie = document.querySelector("#categorie")
    let firstLetter = document.querySelector("#firstLetter")
    let search = document.querySelector("#search")
    let random = document.querySelector("#random")
    let area = document.querySelector("#area")
    let searchBtn = document.querySelector('#btn')
    let input = document.getElementById('input')

    //Redirection

    categorie.addEventListener("click", function (){

        window.location.href = '../HTML/categories.html'
    })

    firstLetter.addEventListener("click", function (){

        window.location.href = '../HTML/firstLetter.html'
    })

    search.addEventListener("click", function (){

        window.location.href = '../HTML/search.html'
    })

    random.addEventListener("click", function (){

        window.location.href = '../HTML/random.html'
    })

    area.addEventListener("click", function (){

    window.location.href = '../HTML/area.html'
    })


} catch (error) {
    console.log(error.message);
}