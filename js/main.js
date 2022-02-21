const URL_BASE = 'https://rickandmortyapi.com/api/character'
const list = document.querySelector('#list')

let characterList = []

const getCharacters = async () => {
	try {
		const response = await axios.get(URL_BASE)

		return response.data.results
	} catch (error) {
		console.log(error)

		return false
	}
}

const addClass = (element, className) => {
	element.classList.add(className)
}

const createElemet = (nameElement) => {
	return document.createElement(nameElement)
}

const renderCharacters = async () => {
	characterList = await getCharacters()

	characterList.forEach((character) => {
		const article = createElemet('article')
		addClass(article, 'character')

		const name = createElemet('h4')
		name.innerText = character.name

		const figure = createElemet('figure')
		const img = createElemet('img')
		img.setAttribute('src', character.image)
		figure.appendChild(img)

		const info = createElemet('div')
		addClass(info, 'info')

		const status = createElemet('div')
		addClass(status, 'info-status')
		const spanStatus = createElemet('span')
		addClass(spanStatus, character.status)
		const spanStatusText = createElemet('span')
		spanStatusText.innerText = character.status

		const location = createElemet('div')
		addClass(location, 'info-location')
		const last = createElemet('h5')
		last.innerText = 'Vistor por última vez en:'
		const p = createElemet('p')
		p.innerText = character.location.name

		status.appendChild(spanStatus)
		status.appendChild(spanStatusText)

		location.appendChild(last)
		location.appendChild(p)

		info.appendChild(status)
		info.appendChild(location)

		article.appendChild(name)
		article.appendChild(figure)
		article.appendChild(info)

		list.appendChild(article)
	})
}

const initApp = async () => {
	await renderCharacters()
}

window.onload = initApp()
