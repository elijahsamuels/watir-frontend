const baseURL = "http://localhost:3000/api/v1/plants/"
const plantsContainer = document.getElementById('plants-container')
const plantsList = document.getElementById('plants-list')
const plantAdapter = new PlantAdapter

// Plant form fields
const plantSubmitForm = document.getElementById('plant-submit-form')
const plantSubmitName = document.getElementById('plant-submit-name')
const plantSubmitHeight = document.getElementById('plant-submit-height')
const plantSubmitGrowZone = document.getElementById('plant-submit-grow-zone')
const plantSubmitNotes = document.getElementById('plant-submit-notes')
const defaultCalendarDate = document.getElementById('plant-submit-planted-date')
const plantSubmitSensor = document.getElementById('plant-submit-sensor')
const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-mac-address')
const plantSubmit = document.getElementById('plant-submit')

document.addEventListener('DOMContentLoaded', () => {

	getPlants();

	// window.onscroll = function() {myHeaderFunction()};
        
        // let header = document.getElementById("myHeader");
        // let sticky = header.offsetTop;
        
        // function myHeaderFunction() {
        //   if (window.pageYOffset > sticky) {
        //     header.classList.add("sticky");
        //   } else {
        //     header.classList.remove("sticky");
        //   }
        // }

	// prefill calendar for form
	// let defaultCalendarDate = document.getElementById('plant-submit-planted-date')
	// defaultCalendarDate.value = currentDateTime()

	
	document.getElementById('plant-submit').addEventListener("click", (e) => {
		console.log("Added new plant with params ")
		e.preventDefault()
		
		const plantSubmitName = document.getElementById('plant-submit-name').value
		const plantSubmitHeight = document.getElementById('plant-submit-height').value || 0
		const plantSubmitGrowZone = document.getElementById('plant-submit-grow-zone').value || 0
		const plantSubmitNotes = document.getElementById('plant-submit-notes').value || "Notes"
		const plantSubmitSensor = document.getElementById('plant-submit-sensor').value
		const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-mac-address').value
		const plantSubmitFarmID = document.querySelector("#plant-submit-farm-name").selectedIndex + 1

		const plantSubmit = document.getElementById('plant-submit')
		postFetch(plantSubmitName, plantSubmitHeight, plantSubmitGrowZone, plantSubmitNotes, plantSubmitSensor, plantSubmitSenorMacAddress, plantSubmitFarmID)
	
	}, false);
})

function getPlants() { 
	fetch(baseURL)
	.then(response => response.json())
	.then(plants => {
		plants.forEach(plant => {
			let newPlant = new Plant(plant)
			document.getElementById('plants-container').innerHTML += newPlant.renderPlant();
		})
		// adding the addEventListener for the buttons
		Plant.getAllWaterButton()
		Plant.getAllEditButton()	
		Plant.getAllDeleteButton()	
		Plant.sortButton()
	})
}

function currentDateTime() {
	let datetime = new Date;
	return datetime.toUTCString();
}
 
function newDateTime() {
	let time = new Date().toLocaleString("en-US")
	let date = new Date().toLocaleString("en-US")
	return date + ' ' + time;
}

function newDate() {
	let date = new Date().toLocaleDateString("en-US")
	return date;
}

// simple title casing for a string
function titleCase(str) {
	return str.toLowerCase().split(' ').map((word) => word.replace(word[0], word[0].toUpperCase())).join(' ');
	}

// should move this over to the Plant class
function postFetch(plant_submit_name, plant_submit_height, plant_submit_grow_zone, plant_submit_notes, plant_submit_sensor, plant_submit_senor_mac_address, farm_id) {
	fetch(baseURL, {
	  // POST request
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({
			name: plant_submit_name,
			height: plant_submit_height,
			grow_zone: plant_submit_grow_zone,
			notes: plant_submit_notes,
			sensor: plant_submit_sensor,
			sensor_mac_address: plant_submit_senor_mac_address,
			farm_id: farm_id
		})
	})
	.then(response => response.json())
	.then(plant => {
		console.log("we've submitted a new plant"); 
		// this is to clear the new plant form 
		plantsContainer.innerHTML = "";
		plantSubmitName.value = ""
		plantSubmitHeight.value = ""
		plantSubmitGrowZone.value = ""
		plantSubmitNotes.value = ""
		plantSubmitSenorMacAddress.value = ""
		defaultCalendarDate.value = ""	
		Plant.all = new Array
		getPlants()
	})
}

// future notes to try and make a progress bar 'fill up'
// document.getElementsByClassName('plants-card').onmousemove = (e) => {

// 	const x = e.pageX - e.target.offsetLeft
// 	const y = e.pageY - e.target.offsetTop
// 	e.target.style.setProperty('--x', `${ x }px`)
// 	e.target.style.setProperty('--y', `${ y }px`)
	
// }


// const progressBar = document.getElementsByClassName('progress-bar')[0]
// setInterval(() => {
//   const computedStyle = getComputedStyle(progressBar)
//   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
//   progressBar.style.setProperty('--width', width + .2)
// }, 5)
