function updateUI(route) {
    const pages = document.querySelectorAll('body main > div');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const activePage = document.querySelector(`[data-route=${route}]`);
    console.log(activePage);
    activePage.classList.add('active');
}

export {
    updateUI
}