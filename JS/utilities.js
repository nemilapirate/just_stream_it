import * as carousel from "./carousel.js";
import * as modal from "./modal.js";

export async function get_request(url){
    let response = await fetch(url)
    if (response.ok){
        return response.json();
    } else{
        return false;
    }

}


export async function get_best_movie(url){
    let array_film = await get_movie_by_categorie(url);
    carousel.create_carousel(array_film, "Meilleurs", true);

    let best_film_url = array_film[0].url

    let films_detail = await get_request(best_film_url)

    let title = document.getElementsByClassName("best_titre");
    title[0].innerHTML = array_film[0].title;

    let image = document.getElementsByClassName("best_image");
    image[0].setAttribute("src", array_film[0].image_url)

    let description = document.getElementsByClassName("best_description");
    description[0].innerHTML = films_detail.description;

    add_best_btn_event(films_detail)
}


export function add_best_btn_event(data){
    let btn = document.querySelector('.main_button')
    btn.addEventListener("click", ()=>{
        modal.display_modal(data)
    })

    let img = document.querySelector('.best_image')
    img.addEventListener("click", ()=>{
        modal.display_modal(data)
    })
}


export async function get_movie_by_categorie(url){
    let array_film = []
    let response = await get_request(url);
    for(let el of response.results){
        array_film.push(el)
    }

    var response_p2 = await get_request(url+"&page=2")

    if (response_p2){
        for(let i = 0; i<2 ; i++){
            array_film.push(response_p2.results[i])
        }
    }
    return array_film
}
