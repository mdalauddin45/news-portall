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
        li.innerHTML = `<button onclick="display(${nav.category_id})" class=" fs-4 mb-4 mt-4 ms-4 border-0 bg-light" >${category_name}</button>
        `;
        navContainer.appendChild(li);
    })
}
loadNav();

const display = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`);
    const data = await res.json();
    // return data;
    displayCardNews(data.data);
}




const displayCardNews = mynews => {

    // spinner 
    const spinner = document.getElementById("spinner");
    const noNews = document.getElementById("no-news");
    const allCategoryNo = document.getElementById("all-category");
    if (mynews.length === 0) {
        spinner.classList.remove("d-none");
        noNews.classList.remove("d-none");
        allCategoryNo.classList.add("d-none")
    }
    else {
        spinner.classList.add("d-none");
        noNews.classList.add("d-none");
        allCategoryNo.classList.remove("d-none")
    }



    // console.log(mynews);

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = ' ';
    mynews.forEach(news => {
        const { title, details, author, thumbnail_url, total_view, rating } = news;
        const { img, name, published_date } = author;
        const { badge, number } = rating;
        const card = document.createElement('div');
        card.classList.add('row')
        card.classList.add('border')
        card.classList.add('mb-4')
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
        <div id="author-container" class="d-flex mt-4 mb-4">
        <div id='author-img' class="col d-flex" >
        
        <img src="${img}"class="img-fluid" style="height: 50px; alt="...">
        <div>
         <h6 class="card-title mx-2">${name ? name : 'No data Avilable'} </h6> </br>
        </div >
       </div >
       <div class="col"><i class="far fa-eye"></i>
        ${total_view ? total_view : 0}M
  </div> 
  <div class='me-4 ' id=''>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
 
  <div class="col">
  <button onclick="showModal('${name}','${img}','${published_date}','${badge}','${number}' )" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
  </div>
        </div >
    </div >
    `;
        cardContainer.appendChild(card);
    })
    // category count 
    document.getElementById("category-count").innerText = mynews.length;
}


const showModal = (name, img, published_date, badge, number) => {

    const modalSection = document.getElementById("modal-body");
    modalSection.textContent = "";
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${img}"class="img-fluid  me-4" />
    <div class="mt-2">
      <p class="fs-5 fw-bold">${name} </p>
      <p> Rating Number: ${number}</p>
      <p> Badge: ${badge} </p>
      <p class="">Published Date: ${published_date}</p>
    </div>
    `;
    modalSection.appendChild(div);
}
showModal();
display();

