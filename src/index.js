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
			const plantCard = `
			<div>
			
			<fieldset disabled>
            <!-- // PLANT NAME -->
            <label for=${plant.name}-${plant.id}>Plant name:</label>
            <input type="text" id=${plant.name}-${plant.id} name=${plant.name}-${plant.id} value="${titleCase(plant.name)}"><br>
            
            <!-- // PLANT HEIGHT -->
            <label for=${plant.name}-${plant.height}>Height (inches):</label>
            <input type="text" id="${plant.name}-${plant.id}-height" name="${plant.name}-${plant.id}-height" value=${plant.height}><br>
            
            <!-- // PLANT NOTES -->
            <label for=${plant.name}-${plant.id}-notes>Notes:</label>
            <textarea id="${plant.name}-${plant.id}-notes" name="${plant.name}-${plant.id}-notes" >${plant.notes}</textarea><br>
            
            <!-- // PLANT LAST WATERED -->
            <label for=${plant.name}-${plant.id}-last-watere">Last watered:</label>
            <input type="text" id="${plant.name}-${plant.id}-last-watered" name="${plant.name}-${plant.id}-last-watered" value="${plant.last_watered}"><br>
            
            <!-- // PLANT LAST WATERED DURATION -->
            <label for=${plant.name}-${plant.id}-last-watered-duration>Last watered duration (seconds):</label>
            <input type="text" id="${plant.name}-${plant.id}-last-watered-duration" name="${plant.name}-${plant.id}-last-watered-duration" value="${plant.last_watered_amount}"><br>
            
            <!-- // PLANT GROW ZONE -->
            <label for=${plant.name}-${plant.id}-grow-zone>Grow zone:</label>
            <input type="text" id="${plant.name}-${plant.id}-grow-zone" name="${plant.name}-${plant.id}-grow-zone" value="${plant.grow_zone}"><br>
            
            <!-- // PLANTED DATE -->
            <label for=${plant.name}-${plant.id}-planted-date>Planted date:</label>
            <input type="text" id="${plant.name}-${plant.id}-planted-date" name="${plant.name}-${plant.id}-planted-date" value="${plant.planted_date}"><br>
            
            <!-- // SENSOR TYPE -->
            <label for=${plant.name}-${plant.id}-sensor-type>Sensor type:</label>
            <input type="text" id="${plant.name}-${plant.id}-sensor-type" name="${plant.name}-${plant.id}-sensor-type" value="${plant.sensor.sensor_type}"><br>
			
            <!-- // SENSOR MAC ADDRESS -->
            <label for=${plant.name}-${plant.id}-mac-address>Sensor MAC address:</label>
            <input type="text" id="${plant.name}-${plant.id}-mac-address" name="${plant.name}-${plant.id}-mac-address" value="${plant.sensor.mac_address}"><br>
			
            <!-- // FARM NAME -->
            <label for=${plant.name}-${plant.id}-farm-name>Farm name:</label>
            <input type="text" id="${plant.name}-${plant.id}-farm-name" name="${plant.name}-${plant.id}-farm-name" value="${plant.farm.name}"><br>
			
            <!-- // FARM ID - HIDDEN FOR THE MOMENT
            <label for=${plant.name}-${plant.id}-farm-id>Farm id:</label>
            <input type="text" id="${plant.name}-${plant.id}-farm-id" name="${plant.name}-${plant.id}-farm-id" value="${plant.farm.id}"><br>
            -->
            </fieldset>    
		
			<!-- // BUTTONS -->
            <button id="water-plant-${plant.id}" class="water-button">Water ${titleCase(plant.name)}</button>
            <button id="edit-plant-${plant.id}" class="edit-plant-button">Edit ${titleCase(plant.name)}</button>
            <button id="delete-plant-${plant.id}" class="delete-plant-button">Remove ${titleCase(plant.name)}</button>
			</div>
			`;
			
			document.getElementById('plants-container').innerHTML += plantCard;
			
			// HELP: can't figure out how to get each WATER and EDIT button to work

			// let waterButton = Array.from(document.getElementsByClassName("water-button"));
			// 	waterButton.forEach(div => {
			// 	let button = div.querySelector("button")
			// 	button.addEventListener("click", waterPlant)
			// })

			
		})
		getAllWaterButton()					
	})
}


function getAllWaterButton() {
	let allWaterButtons = Array.from(document.getElementsByClassName('water-button'))
	allWaterButtons.forEach( e => {
		e.addEventListener("click", waterPlant)
	})
}

function waterPlant(e) {
	e.target.previousElementSibling.children[10].value = Date.now()
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





function getAllEditButton() {

}

function getAllDeleteButton() {

}


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



			// function generateTableHead(table, plant) {
			// 	let thead = table.createTHead();
			// 	let row = thead.insertRow();
			// 	for (let key of data) {
			// 		let th = document.createElement("th");
			// 		let text = document.createTextNode(key);
			// 		th.appendChild(text);
			// 		row.appendChild(th);
			// 	  }
			// 	}

			// let table = document.getElementById('plants-table');
			// let data = Object.keys(plantsArray[0]);
			// generateTableHead(table, plant);



			// function plantCard(plant) {

			// 	let div = document.createElement("div")
			// 	let li = document.createElement("li")
			// 	let ul = document.createElement("ul")

			// 	let dt1 = document.createElement("dt")
			// 	let dd1 = document.createElement("dd")
			// 	let dd2 = document.createElement("dd")
			// 	let dd3 = document.createElement("dd")
			// 	let dd4 = document.createElement("dd")
			// 	let dd5 = document.createElement("dd")
			// 	let dd6 = document.createElement("dd")
			// 	let dd7 = document.createElement("dd")
			// 	let dd8 = document.createElement("dd")
			// 	let button = document.createElement("button", )
			// 	let span = document.createElement("span")
			// 	// p1 = document.createTextNode(plant.name);
			// 	// p1 = document.createTextNode(plant.name);
			// 	// console.log('plant.name =', plant.name );
			// 	dt1.innerText = "Plant name: "
			// 	dd1.innerText = plant.name || "Plant: No data available"
			// 	dd2.innerText = plant.notes || "Notes: No data available"
			// 	dd3.innerText = plant.height || "Height: No data available"
			// 	dd4.innerText = plant.last_watered || "Last watered date: No data available"
			// 	dd5.innerText = plant.last_watered_amount || "Last watered amount: No data available"
			// 	dd6.innerText = plant.grow_zone || "Grow zone: No data available"
			// 	dd7.innerText = plant.planted_date || "Date planted: No data available"
			// 	dd8.innerText = plant.sensor.sensor_type || "Sensor type: No data available" // data cannot be null. all plants must have a sensor OR do some error handling

			// 	button.innerText = "Water " + plant.name
			// 	button.id = `water-plant-${plant.id}`
			// 	// span.innerText = plant.likes
			// 	// button.append(span)

			// 	li.append(dt1, dd1, dd2, dd3, dd4, dd5, dd6, dd7, dd8, button)
			// 	div.append(li)
			// 	ul.append(div)
			// 	document.getElementById("plants-list").appendChild(li);
			// 	// console.log('plant.name =', li );
			// 	// debugger

			// };



			// plantCard(plant);


			// button.addEventListener("click", handleLikes)


			// function plantCard(plant) {
				// 	// debugger
				// 	let li = document.createElement("li");
				// 	let textnode = document.createTextNode(plant.name);
				// 	// p1.innerText = plant.name
				
				// 	li.appendChild(textnode);
				// 	document.getElementById("plants-list").appendChild(li);
				// };
				
				
				// fucntion
				
																
																
																
																
