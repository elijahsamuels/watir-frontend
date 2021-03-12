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
const plantSubmitSensor = document.getElementById('plant-submit-sensor')
const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-mac-address')
const plantSubmit = document.getElementById('plant-submit')

document.addEventListener('DOMContentLoaded', () => {
	getPlants()
	
	
	document.getElementById('plant-submit').addEventListener("click", (e) => {
		console.log("Add plant default prevented!")
		e.preventDefault()
		
		const plantSubmitName = document.getElementById('plant-submit-name').value
		const plantSubmitHeight = document.getElementById('plant-submit-height').value
		const plantSubmitGrowZone = document.getElementById('plant-submit-grow-zone').value
		const plantSubmitNotes = document.getElementById('plant-submit-notes').value
		const plantSubmitSensor = document.getElementById('plant-submit-sensor').value
		const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-mac-address').value
		const plantSubmitFarmID = document.getElementById('plant-submit-farm-name').value

		const plantSubmit = document.getElementById('plant-submit')
		postFetch(plantSubmitForm, plantSubmitName, plantSubmitHeight, plantSubmitGrowZone, plantSubmitNotes, plantSubmitSensor, plantSubmitSenorMacAddress, plantSubmitFarmID)
	
	}, false);
	
})

function getPlants() { 
	fetch(baseURL)
	.then(response => response.json())
	// .then(handlePlants)
	.then(plants => {
		plants.forEach(plant => {
			let newPlant = new Plant(plant)
		
			document.getElementById('plants-container').innerHTML += newPlant.renderPlant();
			

			// let waterButton = Array.from(document.getElementsByClassName("water-button"));
			// 	waterButton.forEach(div => {
			// 	let button = div.querySelector("button")
			// 	button.addEventListener("click", waterPlant)
			// })

		})
		Plant.getAllWaterButton()
		Plant.getAllEditButton()				
	})
}

function currentDateTime() {
	let datetime = new Date;
	return datetime.toUTCString();
}

function formatDateTime() {
	let datetime = new Date;
	return datetime.toUTCString();
}

function getAllDeleteButton() {
}

// function getPlants() { 
// 	fetch(baseURL + plant.id + "/edit")	
// 	.then(response => response.json())
// 	// .then(handlePlants)
// 	.then(plants => {
// 		plants.forEach(plant => {
// 			const plantCard = 	


// // use this for the response FROM the fetch
// 			function waterEvent(plant) {
// 				console.log(`hello button ${plant.name}`);	
// 				document.getElementById(`${plant.id}-last-water`).innerText = Date();
// 				document.querySelector("#\\31  > thead > tr:nth-child(4)").innerText = Date(); // this ONLY works for this specific spot, NOT each value.

// 			// increment plant.last_watered

// 			// send GPIO.
// 			};


			// function editPlantButton(plant) {
			// 	console.log(`hello ${plant.name} edit button`);	

			// };

			

function postFetch(plant_submit_form, plant_submit_name, plant_submit_height, plant_submit_grow_zone, plant_submit_notes, plant_submit_sensor, plant_submit_senor_mac_address, farm_id) {
 
	// const bodyData = {plant_submit_form, plant_submit_name, plant_submit_height, plant_submit_grow_zone, plant_submit_notes, plant_submit_sensor, plant_submit_senor_mac_address}

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
	  console.log(plant);
	//   const plantData = plant.data
	//   // render JSON response
	//   let newPlant = new Plant(plantData, plantData.attributes)
	//   document.querySelector('#plant-container').innerHTML += newPlant.renderPlantCard()
	})
  
}

// simple title casing for a string
function titleCase(str) {
	return str.toLowerCase().split(' ').map((word) => word.replace(word[0], word[0].toUpperCase())).join(' ');
	}

// function waterPlant(plant) {
// 	document.getElementById(`water-plant-${plant.id}`).onclick(
// 		console.log("you clicked the edit plant button")

// 	)
// }


	
// function waterPlant() {
// 	console.log("this is watering the plant")
// }


// function submitNewPlant(e) {
// 	// plantSubmit.addEventListener("click", (e) => {
// 	// console.log("Add plant default prevented!")
// 	e.preventDefault()
	
// 	const plantSubmitForm = document.getElementById('plant-submit-form').value
// 	const plantSubmitName = document.getElementById('plant-submit-name').value
// 	const plantSubmitHeight = document.getElementById('plant-submit-height').value
// 	const plantSubmitGrowZone = document.getElementById('plant-submit-grow-zone').value
// 	const plantSubmitNotes = document.getElementById('plant-submit-notes').value
// 	const plantSubmitSensor = document.getElementById('plant-submit-sensor').value
// 	const plantSubmitSenorMacAddress = document.getElementById('plant-submit-sensor-macaddress').value
// 	const plantSubmit = document.getElementById('plant-submit')
// 	postFetch(plantSubmitForm, plantSubmitName, plantSubmitHeight, plantSubmitGrowZone, plantSubmitNotes, plantSubmitSensor, plantSubmitSenorMacAddress)
	
// 	};


			// const waterButton = document.getElementById(`water-plant-${plant.id}`)
			// waterButton.addEventListener("click", function() {
			// 	console.log(plant.id + " water button was clicked")
			// 	// this.style.backgroundColor = "red";
			//   });


			// let editPlantButton = document.getElementById(`edit-plant-${plant.id}`)

			// document.getElementById(`edit-plant-${plant.id}`).addEventListener("click", editPlant);
			// let editPlant = document.getElementById(`edit-plant-${plant.id}`)
			// editPlant.onclick = function() {
			// 	console.log("you clicked the edit plant button")
			// }

			// 	document.getElementById(`water-plant-${plant.id}`).addEventListener("click", () => {
			// 	waterEvent(plant)
			// 	});

			// document.getElementById(`edit-plant-${plant.id}`).addEventListener("click", () => {
			// 	editPlantButton(plant)
			// 	console.log(`you clicked the edit button number ${plant.id}`)
			// 	// make fields editable for the plant
			// 	if (editPlantButton.innerText === "Edit " + titleCase(plant.name)) {
			// 		editPlantButton.innerText = "Save " + titleCase(plant.name)
			// 		// Save edits to the plant
			// 	} else if (editPlantButton.innerText === "Save " + titleCase(plant.name)){
			// 		editPlantButton.innerText = "Edit " + titleCase(plant.name)
			// 	}
			// 	});



			// function editPlant() {
			// 	console.log("you clicked the edit plant button")
			// }


			// function editPlantButton("click", () => {
			// 	// editPlantButton(plant)
			// 	console.log(`you clicked the edit button number ${plant.id}`)
			// 	// make fields editable for the plant
			// 	if (editPlantButton.innerText === "Edit " + titleCase(plant.name)) {
			// 		editPlantButton.innerText = "Save " + titleCase(plant.name)
			// 		// Save edits to the plant
			// 	} else if (editPlantButton.innerText === "Save " + titleCase(plant.name)){
			// 		editPlantButton.innerText = "Edit " + titleCase(plant.name)
			// 	}
			// });

			// function handlePlants(plantsArray) {
			// plantsArray.forEach((plant) => {plantCard(plant)});
			// }

			// function plantCard(plant) {

			// let plantTable = document.getElementById('plants-container');
			// plantTable.innerHTML(`Hello!`)
			// };

			// function waterEvent(plant) {
			// 	console.log(`hello button ${plant.name}`);
			// 	document.getElementById(`${plant.id}-last-water`).innerText = Date();
			// 	// document.querySelector("#\\31  > thead > tr:nth-child(4)").innerText = Date(); // this ONLY works for this specific spot, NOT each value.

			// // increment plant.last_watered

			// // send GPIO.
			// };

			// function editPlantButton(plant) {
			// 	console.log(`hello ${plant.name} edit button`);

			// };
