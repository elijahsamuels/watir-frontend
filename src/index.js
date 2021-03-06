const baseURL = "http://localhost:3000/api/v1/plants"
const plantsContainer = document.getElementById('plants-container')
const plantsList = document.getElementById('plants-list')

const plantSubmitForm = document.getElementById('plant-fsubmit-form')

const plantSubmitName = document.getElementById('plant-submit-name')
const plantSubmitNotes = document.getElementById('plant-submit-notes')

document.addEventListener('DOMContentLoaded', () => {
	getPlants();
})

function getPlants() {
	fetch(baseURL)
	.then(response => response.json)
	.then(plants => {
		// console.log(plants);
		

	})
}



// fucntion




