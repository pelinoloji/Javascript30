const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(url)
  .then(response => response.json())
  .then(data => cities.push(...data));

// console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  const html = matchArray
    .map(place => {
      const regex = new RegExp(this.value, "gi");
      const highlightCityName = place.city.replace(
        regex,
        `<span class=hl-city>${this.value}</span>`
      );
      const highlightStateName = place.state.replace(
        regex,
        `<span class=hl-state>${this.value}</span>`
      );
      return `<li>
        <span class='name'>${highlightCityName},${highlightStateName}</span>
        <span class='population'>${numberWithCommas(place.population)}</span>
      </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
