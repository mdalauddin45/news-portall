const loadAllNews = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    // return data;
    displayNav(data.data.news_category);
}
const displayNav = navbar => {
    console.log(navbar);
    const navContainer = document.getElementById("nav-bar")
    navbar.forEach(nav => {
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `<a class="nav-link fs-3">${navbar.category_name}</a>
        `;
        navContainer.appendChild(li);
    })
}
loadAllNews();