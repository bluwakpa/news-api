const apiKey = "833ea1b9d7mshbef97797dff363dp1d9ac4jsna2801a24e32d";

function getNews() {
  const url = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Tesla";
  
 const options = {
    headers: new Headers({
      "x-rapidapi-key": apiKey}),
    mode: 'cors'
  };

  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

$(getNews);