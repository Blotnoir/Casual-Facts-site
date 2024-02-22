import { privateAPIKey, nasaKey } from "./apikeys.js"

const searchButton = document.getElementById('searchBtn')
const userInput = document.getElementById('searchBar')
const searchResults  = document.getElementById('searchResultsDiv')
const BASE_URL = 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name='
const randomPlanetBtn = document.getElementById('randomPlanetBtn')
const wikiInfo = 'https://wikipedia.com/wiki/'
const apotdURL = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`
const apotdResult = document.getElementById('apotdResult')
const apotdBtn = document.getElementById('apotdBtn')



const planetOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${privateAPIKey}`,
		'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
	}
};


searchButton.onclick = function searchForPlanet() {
    fetch(`${BASE_URL}${userInput.value}`, planetOptions)
	.then(response => response.json())
	.then(json => {
     const response = json
     const results = Object.keys(response[0]).map(info => {
            return `<p>${info.charAt(0).toUpperCase() + info.slice(1).toLowerCase().replace(/_/g,' ')
		}: ${response[0][info]}</p>`
        }).join(' ')
        searchResults.innerHTML = `${results}For more info: <a onclick="window.open('${wikiInfo}${response[0].name}')" href=>Click here</a>`
})}

//function newTab() {
	//window.open()
//}

randomPlanetBtn.onclick = function randomPlanet() {
	const randomizer = Math.floor(Math.random() * 1000)
	fetch(`${BASE_URL}${randomizer}`, planetOptions)
	.then(response => response.json())
	.then(json => {
     const response = json
     const results = Object.keys(response[0]).map(info => {
            return `<p>${info.charAt(0).toUpperCase() + info.slice(1).toLowerCase().replace(/_/g,' ')
		}: ${response[0][info]}</p>`
        }).join(' ')
		
        searchResults.innerHTML = `${results}For more info: <a onclick="window.open('${wikiInfo}${response[0].name}', '_blank')" href="javascript:">Click here</a>`

})}