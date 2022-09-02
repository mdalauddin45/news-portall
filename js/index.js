const loadNav = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    // return data;
    displayNav(data.data.news_category);
}
const displayNav = navbar => {
    // console.log(navbar);
    const navContainer = document.getElementById("nav-bar")
    navbar.forEach(nav => {
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `<a class="nav-link fs-3">${navbar.category_name}</a>
        `;
        navContainer.appendChild(li);
    })
}
loadNav();

const loadAllNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/2e78e5e0310c2e9adbb6efb1a263e745");
    const data = await res.json();
    // return data;
    displayCardNews(data.data);
}

const displayCardNews = mynews => {
    console.log(mynews);
    const cardContainer = document.getElementById('card-container');
    mynews.forEach(news => {
        const card = document.createElement('div');
        card.classList.add('row')
        card.innerHTML = `
    <div class="col-md-4 w-full">
            <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 id='cardFirstTitle' class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.length > 100 ? news.details.slice(0, 100) + '...' : news.details}</p>
        </div>
        <div id="author-container" class="d-flex">
        <div class="col d-flex" >
        
        <img src="${news.author.img}"class="img-fluid rounded" style="height: 50px; alt="...">
        <div>
         <h6 class="card-title mx-2">${news.author.name} </h6> </br>
         <h6 class="mx-2">${news.author.published_date
            }</h6 >
        </div >
       </div >
       <div class="col">
        ${news.total_view ? news.total_view : 0}
  </div>
  <div class="col">
  <button class="btn btn-primary" type="submit">Button</button>
  </div>
        </div >
    </div >
    `;
        cardContainer.appendChild(card);
    })
}



// const loadauthor = authors => {
//     const authorContainer = document.getElementById('author-container');
//     authors.forEach(author => {
//         const div = document.createElement('div');
//         div.classlist.add('row');
//         div.innerHTML = `
//     <div class="col">
//           ${author.image_url}
//     </div>
//     <div class="col">
//           ${author.total_view ? author.total_view : 0}
//     </div>
//     <div class="col">
//          Column
//     </div>
//     `;
//         authorContainer.appendChild(div);
//     })
// }
loadAllNews();