const APIKEY = "FgDONk7WsDh28ejpYNaGm1oaGg2GQpXKCAU9N3VzLlxzmmgs";

function createNewsBlock(news) {
  let block = "";
  block += "<div class=newsBlock>";
  block +=
    "<h3 class=title><a href=" + news.url + ">" + news.title + "</a></h3>";
  block += "<h4 class=author>" + news.author + "</h6>";
  block += "<p class=description>" + news.description + "</p>";
  if (news.image !== "None") {
    block +=
      "<img class=image src=" +
      news.image +
      " onerror=\"this.src='404Image.png'\"/>";
  }
  block += "</div>";
  return block;
}

function displayNews(json) {
  let results = "";

  results += "<div id=newsList>";
  for (let i = 0; i < 7; i++) {
    results += createNewsBlock(json.news[i]);
  }
  results += "</div>";
  document.getElementById("results").innerHTML = results;
}

document
  .getElementById("searchSubmit")
  .addEventListener("click", function(event) {
    event.preventDefault();
    const value = document;
    if (value === "") return;

    // Get and display news
    const url1 =
      "https://api.currentsapi.services/v1/latest-news?" +
      "&language=en&apiKey=" +
      APIKEY;
    fetch(url1)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("got response");
        displayNews(json);
      });
  });
