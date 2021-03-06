const baseURL = "http://localhost:3000/api/v1/plants"
const plantsContainer = document.getElementById('plants-container')
const plantsList = document.getElementById('plants-list')

// Plant form fields
const plantSubmitForm = document.getElementById('plant-submit-form')
const plantSubmitName = document.getElementById('plant-submit-name')
const plantSubmitHeight = document.getElementById('plant-submit-height')
const plantSubmitGrowZone = document.getElementById('plant-submit-grow-zone')
const plantSubmitNotes = document.getElementById('plant-submit-notes')
const plantSubmitSensor = document.getElementById('plant-submit-sensor')
const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-macaddress')
const plantSubmit = document.getElementById('plant-submit')

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




