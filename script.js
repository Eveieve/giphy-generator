const img = document.querySelector("img");
const dogBtn = document.querySelector(".dog-btn");
const dogs = document.querySelector(".dogs");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

const searchBtn = document.querySelector(".search-btn");
const searchedImg = document.querySelector(".searched-img");
const searchBar = document.querySelector("input");

// async function to wrap our API call to Giphy!
async function getGiphy(searchInput) {
  const URL = `https://api.giphy.com/v1/gifs/translate?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&s=${searchInput}`;
  // refactor to use await
  // wait until i fetch this thing! then i assign it to 'response'!
  const response = await fetch(URL, { mode: "cors" });

  //json() returns a promise. Takes some time!
  // if json() returns a promise, i can use await to assign the response to a variable.
  const giphyData = await response.json();
  searchedImg.src = giphyData.data.images.original.url;
}

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector("input").value;
  getGiphy(searchInput);
});

searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});
