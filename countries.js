const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries()
const displayCountries = countries => {
//   for (const country of countries) {
//     console.log(country)
    
//   }
const countriesDiv =document.getElementById('countries');    
countries.forEach(country => {
// console.log(country)  
const div = document.createElement('div');
div.classList.add('country')
div.innerHTML =`
<h3>${country.continents}</h3>
<p>${country.capital}</p>
<button onclick="loadCountryByName('${country.continents}')">Details</button>`;
// const h3 = document.createElement('h3');
// h3.innerText =country.continents;

// div.appendChild(h3);
// const p =document.createElement('p');
// p.innerText = country.capital;
// div.appendChild(p);
countriesDiv.appendChild(div); 
});
}
const loadCountryByName = name => {
    console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
    // const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]));
}
const displayCountryDetail = country =>{
    console.log(country)
    const countryDiv = document.getElementById('country-details')
countryDiv.innerHTML =`
<h4>${country.name}</h4>
<p>population : ${country.population}</p>
<img width = "200px" src="${country.flag}"`
}
