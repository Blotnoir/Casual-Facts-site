const factBtn = document.getElementById('factBtn')
const domPrint = document.getElementById('dom')
const spaceBtn = document.getElementById('spaceBtn')
const natureBtn = document.getElementById('natureBtn')
const jokeBtn = document.getElementById('jokeBtn')

const apotdLink = document.getElementById('apotdLink')
const planetLink = document.getElementById('planetLink')


const apotdUrl = 'https://api.nasa.gov/planetary/apod?api_key=9fRSJtYNV93cM5l6SH4XxPFZmelWfg3ocQgIJ1ss'
const factUrl = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
const jokeUrl = 'https://random-quote-fact-joke-api.p.rapidapi.com/joke';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46285e6bccmshc49a6072cb12492p1db8dejsn066ef5438bce',
		'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
	}
};

const jokeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46285e6bccmshc49a6072cb12492p1db8dejsn066ef5438bce',
		'X-RapidAPI-Host': 'random-quote-fact-joke-api.p.rapidapi.com'
	}
};



const getRandomFact = () => {
  fetch(factUrl, options)
    .then(response => response.json())
    .then(json => {
  const response = json
  domPrint.innerText = `${response[0].fact}`
  console.log(response[0])
})};

const getAstroPhoto = () => {
  fetch(apotdUrl)
	.then(response => response.json())
	.then(response => {
		const data = response
		const img = `<img src="${data.hdurl}" height=675 width=650 />`
		const date = `${data.date}`
		const title = `<h2>${data.title}</h2>`
		const explain = `<p>${data.explanation}</p>`
		domPrint.innerHTML = `${title}${date}<br>${img}<br>${explain}`
	})
}


const getJoke = () => {
 fetch(jokeUrl, jokeOptions)
   .then(response => response.json())
   .then(json => {
  const response = json
  domPrint.innerText = `${response.joke}`
})};


spaceBtn.onclick = () => {
  return domPrint.innerText = `${spaceFacts[Math.floor(Math.random() * spaceFacts.length)]}`
}

natureBtn.onclick = () => {
  return domPrint.innerText = `${natureFacts[Math.floor(Math.random() * natureFacts.length)]}`
}

jokeBtn.addEventListener("click", getJoke)

factBtn.addEventListener("click", getRandomFact)

apotdLink.addEventListener("click", getAstroPhoto)

