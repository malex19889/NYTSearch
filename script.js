let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DEL402B8qvDc6aJBmVKFUAHWWNLyzbIV";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  $("#search").on("click", function () {
    event.preventDefault();
    var searchTerms = $("#search-terms").val();
    var startYear = $("#search-terms").val();
    var endYear = $("#search-terms").val();
    response.response.docs.forEach(function name(article) {
      var main = article.headline.main;
      if (main.includes(searchTerms)) {
        $("#results").prepend(
          `<h5>${article.headline.main}<h5>
            <p>${article.lead_paragraph}</p>
            <a href = ${article.web_url}>go to article.</a>`
        );
      }
    });
  });
});


