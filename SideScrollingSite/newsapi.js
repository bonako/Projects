// const newstitle = document.getElementById('news-title')
// const newsdetails = document.getElementById('news-text')
// const newsurl = document.getElementById('link')
// const newsimg = document.getElementById('news-img')


const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'none';

const url =
  "https://gnews.io/api/v3/search?q=platformer&token=key";

async function getNews() {
  loadingElement.style.display = '';

  const response = await fetch(url);
  const data = await response.json();

  // newstitle.textContent = 'NEWEEWWSS';
  // newsdetails.textContent = data.articles[0].description;
  // newsurl.href = data.articles[0].url;
  // newsimg.src = data.articles[0].image;
  // if (data.articles[0].image != null) {
  //   newsimg.src = data.articles[0].image;
  // } else {
  //   newsimg.src = "imgs/bg.jpg";
  // }

  data.articles.forEach((article) => {
    const div = document.createElement("div");
    div.classList.add("col-md-6");
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-md-12");
    div.appendChild(card);
    // card.style.width = '30%'
    card.style.marginBottom = '15%';
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.id = "news-img";
    image.src = article.image;
    image.alt = "Card image caption";
    if (article.image != null) {
      image.src = article.image;
    } else {
      image.src = "imgs/bg.jpg";
    }
    card.appendChild(image);
    const cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    card.appendChild(cardbody);
    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.id = "news-title";
    heading.textContent = article.title;

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.id = "news-details";
    text.textContent = article.description;

    const button = document.createElement("a");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.textContent = "Read more";
    button.id = "news-url";
    button.href = article.url;

    cardbody.appendChild(heading);
    cardbody.appendChild(text);
    cardbody.appendChild(button);

    document.getElementById('col1').appendChild(div);

    // checkImage(article);
  });
  loadingElement.style.display = 'none';

}

// function checkImage(article) {
//   if (article.image != null) {
//     image.src = article.image;
//   } else {
//     image.src = "imgs/bg.jpg";
//   }
// }
getNews();
// const axios = require('axios');

// // Send a GET request
// axios({
//   method: 'get',
//   url: 'http://newsapi.org/v2/everything?q=platformer&apiKey=3ce14c4d1fd3474cacf17879bab387db',
//   data: {
//     name: 'Jane',
//     country: 'Canada'
//   }
// });

// const proxyUrl = "https://cors-anywhere.herokuapp.com/"
// const qInTitle = "platformer";
// const from = "us";
// const apiKey = "3ce14c4d1fd3474cacf17879bab387db";
// const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
// const request = new Request(url);

// fetch(request)
//   .then(response => response.json())
//   .then((news) => {
//     console.log(news);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const url = 'http://newsapi.org/v2/everything?' +
//           'q=platformer&' +
//           'apiKey=3ce14c4d1fd3474cacf17879bab387db';

// async function getNews() {
//     const response = await fetch(url, { mode: "no-cors" });
//     const data = await response.json();
//     console.log(data);
// }
// async function run() {
//     let result = await getNews('https://cors-anywhere.herokuapp.com/https://www.vim.org/git.php');
//     document.body.innerHTML=result;
// }

// getNews()

// var url = 'http://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-07-08&' +
//           'sortBy=popularity&' +
//           'apiKey=3ce14c4d1fd3474cacf17879bab387db';

// loadJSON(url)
// println(data)
// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

// var req = new Request(url);

// fetch(url).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// })

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//         response.articles.forEach(article =>{
//             document.getElementById('news-title').innerHTML+=article.title;
//         })
//     })

// $.getJSON(url, function(data){
//     console.log(data);
//     articles = data.articles;
//     for(let x=0; x<articles.length; x++){
//         document.getElementById('news-title').innerHTML=articles[x].title;
//     }
// })
