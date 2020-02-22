function updateUI(route) {
    const sections = document.querySelectorAll("main > section");
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection);
    activeSection.classList.add('active');

    const header = document.querySelector("header")

    if (route == "details") {
        header.classList.add("details-header");
    } else {
        header.classList.remove("details-header");
    }
}

export {
    updateUI
}