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

// dogBtn.addEventListener("click", () => {
//   fetch(
//     "https://api.giphy.com/v1/gifs/translate?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&s=dogs",
//     { mode: "cors" }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       dogs.src = response.data.images.original.url;
//     });
// });

// on search button
// get an input from the search bar, get the value
// concatenate the value into the url
// and repeat what i did

const searchBtn = document.querySelector(".search-btn");
// get the data by calling API ?
const searchedImg = document.querySelector(".searched-img");
const searchBar = document.querySelector("input");

function getInput(searchInput) {
  const URL = `https://api.giphy.com/v1/gifs/translate?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&s=${searchInput}`;

  fetch(URL, { mode: "cors" })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => (searchedImg.src = response.data.images.original.url))
    .catch((error) => console.error(error));
}

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector("input").value;
  getInput(searchInput);
});

searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});
