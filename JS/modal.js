export function display_modal(data){
    let insert = document.querySelector("#insert_modal");

    let template = document.querySelector('.modal_template');
    let clone = document.importNode(template.content, true);
    let img = clone.querySelector("img")
    img.setAttribute('src', data.image_url)
    img.setAttribute("alt", data.title)
    let infos = [data.title, data.genres, data.date_published, data.votes, data.imdb_score, data.directors, data.actors, data.duration, data.countries, data.worldwide_gross_income, data.long_description]
    let li_elements = clone.querySelectorAll("p");
    let count = 0
    for(let li of li_elements){
        li.textContent = infos[count]
        count += 1;
    }
    if (document.querySelector(".modal")){
        let modal = document.querySelector(".modal")
        modal.remove()
    }
    insert.appendChild(clone)
    add_modal_btn_event()
}

export function add_modal_btn_event(){

    let btn = document.querySelector(".modal_toggle")
    btn.addEventListener("click", ()=>{
        let modal = document.querySelector(".modal")
        modal.remove()
    })
}
