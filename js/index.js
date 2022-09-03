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
        const { category_name } = nav;
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `<a class="nav-link fs-4 mb-4 mt-4">${category_name}</a>
        `;
        navContainer.appendChild(li);
    })
}
loadNav();

const loadAllNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await res.json();
    // return data;
    displayCardNews(data.data);
}

const displayCardNews = mynews => {
    console.log(mynews);
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = ' ';
    mynews.forEach(news => {
        const { title, details, author, thumbnail_url } = news;
        const { img, name, total_view } = author;
        const card = document.createElement('div');
        card.classList.add('row')
        card.innerHTML = `
    <div class="col-md-4 w-full">
            <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 id='cardFirstTitle' class="fs-2 ">${title}</h5>
        <p class="card-text fs-5">${details.length > 200 ? details.slice(0, 200) + '...' : details
            }</p >
        </div >
        <div id="author-container" class="d-flex">
        <div id='author-img' class="col d-flex" >
        
        <img src="${img}"class="img-fluid" style="height: 50px; alt="...">
        <div>
         <h6 class="card-title mx-2">${name ? name : 'No data Avilable'} </h6> </br>
        </div >
       </div >
       <div class="col"><i class="far fa-eye"></i>
        ${total_view ? total_view : 0}
  </div> 
  <div class='me-4' id=''>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
 
  <div class="col">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
  </div>
        </div >
    </div >
    `;
        cardContainer.appendChild(card);
    })
}



loadAllNews();