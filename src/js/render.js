function renderData(data) {
    console.log(data)
    let survivorsSection = document.querySelector(".survivors");
    let killersSection = document.querySelector(".killers");
    return data.map(item => {
        const link = document.createElement("a")
        link.href = `#details/${item.idName}`;
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.innerText = item.displayName;
        let picture = document.createElement("img");
        picture.src = `https://raw.githubusercontent.com/MohamadAlGhorani/images/master/images/${item.idName}.png`;
        article.appendChild(name);
        article.appendChild(picture);
        link.appendChild(article);
        if (item.role == "EPlayerRole::VE_Camper") {
            survivorsSection.appendChild(link);
        } else {
            killersSection.appendChild(link);
        }
    })

}

function detailData(data, id) {
    const detailpage = document.querySelector(".details")
    detailpage.innerHTML = '';
    let backLink = document.createElement("a");
    backLink.href = "#home";
    let backbutton = document.createElement("button")
    backbutton.innerText = "back"
    let dataArray = Object.values(data);

    dataArray = dataArray.filter(item => {
        return item.idName == id;
    }).map(item => {
        let name = document.createElement("h3");
        name.innerText = item.displayName;
        let picture = document.createElement("img");
        picture.src = `https://raw.githubusercontent.com/MohamadAlGhorani/images/master/images/${item.idName}.png`;
        let info = document.createElement("div");
        let storyTitle = document.createElement('h4');
        storyTitle.innerText = "Back story";
        let story = document.createElement("p");
        story.innerHTML = item.backStory;
        let biographyTitle = document.createElement("h4");
        biographyTitle.innerText = "Abilities";
        let biography = document.createElement("p");
        biography.innerHTML = item.biography;
        backLink.appendChild(backbutton);
        info.appendChild(backLink);
        info.appendChild(name);
        info.appendChild(picture);
        info.appendChild(storyTitle);
        info.appendChild(story);
        info.appendChild(biographyTitle);
        info.appendChild(biography);
        detailpage.appendChild(info)
    })
}

export {
    renderData,
    detailData
}