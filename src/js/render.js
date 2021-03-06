function renderData(data) {
  let survivorsSection = document.querySelector(".survivors");
  let killersSection = document.querySelector(".killers");

  Array.from(survivorsSection.children).map(item => {
    item.remove();
  });
  Array.from(killersSection.children).map(item => {
    item.remove();
  });

  return data.map(item => {
    const link = document.createElement("a");
    link.href = `#details/${item.idName}`;
    let article = document.createElement("article");
    let name = document.createElement("h3");
    name.innerText = item.displayName;
    let picture = document.createElement("img");
    picture.src = `https://dbd-stats.info/data/Public/${item.iconPath}`;
    article.appendChild(name);
    article.appendChild(picture);
    link.appendChild(article);
    if (item.role == "EPlayerRole::VE_Camper") {
      survivorsSection.appendChild(link);
    } else {
      killersSection.appendChild(link);
    }
  });
}

function detailData(data, id) {
  const detailpage = document.querySelector(".details");
  Array.from(detailpage.children).map(item => {
    item.remove();
  });

  let backLink = document.createElement("a");
  backLink.href = "#home";
  let backbutton = document.createElement("button");
  backbutton.textContent = "Back";

  let dataArray = Object.values(data);

  dataArray = dataArray
    .filter(item => {
      return item.idName == id;
    })
    .map(item => {
      let name = document.createElement("h2");
      name.textContent = item.displayName;
      let picture = document.createElement("img");
      picture.src = `https://dbd-stats.info/data/Public/${item.iconPath}`;
      let info = document.createElement("div");
      let storyTitle = document.createElement("h3");
      storyTitle.textContent = "Backstory";
      let story = document.createElement("p");
      story.innerHTML = item.backStory;
      let biographyTitle = document.createElement("h3");
      biographyTitle.textContent = "Abilities";
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
      detailpage.appendChild(info);
    });
}

export { renderData, detailData };
