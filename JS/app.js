import * as carousel from "./carousel.js";
import * as utilities from "./utilities.js";


let categories = ['Horror', 'Crime', 'Drama']

let main_url = "http://127.0.0.1:8000/api/v1/titles/"

async function main(){
    utilities.get_best_movie(main_url+"?sort_by=-imdb_score")
    for (let categorie of categories) {
        await utilities.get_movie_by_categorie(main_url+"?genre="+ categorie)
            .then(array_films => {
                carousel.create_carousel(array_films, categorie, false)
            })
}}


window.addEventListener("load", ()=> {
    main().then(()=>{
        let section_best = document.querySelector('.best');
        section_best.style.visibility = "visible";

        let section_carousel = document.querySelector('.insert_carousel');
        section_carousel.style.visibility = "visible";
    })
});
