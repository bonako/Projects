const newstitle = document.getElementById('news-title')
const newsdetails = document.getElementById('news-text')
const newsurl = document.getElementById('link')
const newsimg = document.getElementById('news-img')

const url = "https://gnews.io/api/v3/search?q=platformer&token=3f5a979df835d6b217c3eee2f58d08a6";

async function getNews() {

  const response = await fetch(url);
  const data = await response.json();

  newstitle.textContent = data.articles[0].title;
  newsdetails.textContent = data.articles[0].description;
  newsurl.href = data.articles[0].url;
  newsimg.src = data.articles[0].image;

  if (data.articles[0].image != null) {
    newsimg.src = data.articles[0].image;
  } else {
    newsimg.src = "imgs/bg.jpg";
  }

}

getNews();