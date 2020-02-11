function renderData(data) {
    console.log(data)
    let survivorsSection = document.querySelector(".survivors");
    let killersSection = document.querySelector(".killers");
    return data.map(item => {
        let article = document.createElement("article");
        let naam = document.createElement("h3");
        naam.innerText = item.displayName;
        let picture = document.createElement("img");
        picture.src = `https://raw.githubusercontent.com/MohamadAlGhorani/images/master/images/${item.idName}.png`;
        picture.addEventListener("click", function getChracterInfo() {
            let allArticle = document.querySelectorAll("article");
            let articleArray = Array.from(allArticle);
            let allDiv = document.querySelectorAll("article div")
            let divArray = Array.from(allDiv);
            articleArray.map(item => {
                item.classList.remove("full-width");
            })
            divArray.map(item => {
                item.remove();
            })
            article.classList.add("full-width");
            console.log("Name:", item.idName);
            let info = document.createElement("div");
            let storyTitle = document.createElement('h4');
            storyTitle.innerText = "Back story";
            let story = document.createElement("p");
            story.innerHTML = item.backStory;
            let biographyTitle = document.createElement("h4");
            biographyTitle.innerText = "Abilities";
            let biography = document.createElement("p");
            biography.innerHTML = item.biography;
            info.appendChild(storyTitle);
            info.appendChild(story);
            info.appendChild(biographyTitle);
            info.appendChild(biography);
            article.appendChild(info)
        })
        article.appendChild(naam);
        article.appendChild(picture);
        if (item.role == "EPlayerRole::VE_Camper") {
            survivorsSection.appendChild(article);
        } else {
            killersSection.appendChild(article);
        }
    })

}

export {
    renderData
}