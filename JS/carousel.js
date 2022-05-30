import * as modal from "./modal.js";
import * as utilities from "./utilities.js"

export function create_carousel(data, categorie, isBest){
    let carousel = new Carousel(data, categorie)

    if ("content" in document.createElement("template")){
        let insert = document.querySelector(".insert_carousel");
        let template = document.querySelector(".carousel");
        let clone = document.importNode(template.content, true);
        let titre = clone.querySelector('h1');
        if(categorie == "Meilleurs"){
            titre.textContent = "Films les mieux notés"
        } else {
            titre.textContent = categorie;
        }

        let carousel_content = clone.querySelector(".carousel_content");
        carousel_content.classList.add(categorie)
        let images = clone.querySelectorAll("img");
        let position = 0;
        for (let image of images){
            image.setAttribute("src", data[position].image_url)
            image.setAttribute("alt", data[position].title)
            position += 1;
        }
        if (isBest){
            insert.insertBefore(clone, insert.firstChild)
        } else{
            insert.appendChild(clone)
        }
        add_btn_event_click(carousel, categorie);
        add_image_event_click(carousel, categorie);
    } else{
        console.log("Le naviguateur ne gère pas les templates")
    }
}

export function add_image_event_click(carousel, categorie){
    let images = document.querySelectorAll(".carousel_content."+categorie+ " img")
    for (let img of images){
        img.addEventListener("click", ()=>{
            let index = parseInt(img.className);
            carousel.get_detail(index)
        })
    }
}

export function add_btn_event_click(carousel, categorie){
    let btn_left = document.querySelector(".carousel_content."+categorie+ " .carousel_btn_left")
    let btn_right = document.querySelector(".carousel_content."+categorie+ " .carousel_btn_right")
    btn_left.addEventListener("click", () => {
        carousel.move_left();
    })
    btn_right.addEventListener("click", () => {
        carousel.move_right()
    })
}


export class Carousel{
    constructor(array_films, categorie){
        this.categorie = categorie
        this.array_films = array_films
        this.current_position = 0;
        this.visible_film = array_films.slice(0, 4)
    }

    next(start_value){
        let value = (start_value + 1) % 7;
        return value
    }

    previous(start_value){
        let value = (start_value - 1 ) % 7;
        if (value == -1){
            value = this.array_films.length - 1
        }
        return value
    }

    select_film(){
        let position = this.current_position;
        for(let i = 0; i < 4 ; i++){
            this.visible_film[i] = this.array_films[position]
            position = this.next(position)
        }
    }

    display_film(){
        let carousel_content = document.querySelectorAll(".carousel_content." + this.categorie + " img");
        let count = 0
        for (let img of carousel_content){
            img.setAttribute("src", this.visible_film[count].image_url)
            img.setAttribute("alt", this.visible_film[count].title)
            count += 1;
        }
    }

    get_detail(index){
        let film_details = utilities.get_request(this.visible_film[index].url);
        film_details.then(res => {
            modal.display_modal(res);
        })
    }

    move_left(){
        this.current_position = this.next(this.current_position);
        this.select_film();
        this.display_film()
    }

    move_right(){
        this.current_position = this.previous(this.current_position);
        this.select_film();
        this.display_film()
    }
}