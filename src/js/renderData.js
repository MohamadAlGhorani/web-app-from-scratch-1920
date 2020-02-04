import {
    clean
} from "./cleaning.js";

function renderData(data) {
    console.log(data)
    let survivorsSection = document.querySelector(".survivors")
    let killersSection = document.querySelector(".killers")
    data.map(item => {
        if (item.role == "EPlayerRole::VE_Camper") {
            let article = document.createElement("article")
            let naam = document.createElement('h3')
            naam.innerText = item.displayName;
            let picture = document.createElement("img")
            picture.src = "https://raw.githubusercontent.com/MohamadAlGhorani/images/master/images/" + item.idName + ".png"
            article.appendChild(naam)
            article.appendChild(picture)
            survivorsSection.appendChild(article)

        } else {
            let article = document.createElement("article")
            let naam = document.createElement('h3')
            naam.innerText = item.displayName;
            let picture = document.createElement("img")
            picture.src = "https://raw.githubusercontent.com/MohamadAlGhorani/images/master/images/" + item.idName + ".png"
            article.appendChild(naam)
            article.appendChild(picture)
            killersSection.appendChild(article)

        }
    })

}

export {
    renderData
}