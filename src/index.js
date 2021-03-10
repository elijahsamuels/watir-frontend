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
	getPlants()
})

function getPlants() {
	fetch(baseURL)
	.then(response => response.json())
	// .then(handlePlants)
	.then(plants => {
		plants.forEach(plant => {
			const plantCard = `

        <fieldset disabled>
            <!-- // PLANT NAME -->
            <label for=${plant.name}-${plant.id}>Plant name:</label>
            <input type="text" id=${plant.name}-${plant.id} name=${plant.name}-${plant.id} value=${titleCase(plant.name)}><br>
            
            <!-- // PLANT HEIGHT -->
            <label for=${plant.name}-${plant.height}>Height (inches):</label>
            <input type="text" id= ${plant.name}-${plant.id}-height" name=${plant.name}-${plant.id}-height" value=${plant.height}><br>
            
            <!-- // PLANT NOTES -->
            <label for=${plant.name}-${plant.id}-notes">Notes:</label>
            <input type="textarea" id= ${plant.name}-${plant.id}-notes" name=${plant.name}-${plant.id}-notes" value=><br>
            
            <!-- // PLANT LAST WATERED -->
            <label for=${plant.name}-${plant.id}-last-watered">Last watered:</label>
            <input type="text" id= ${plant.name}-${plant.id}-last-watered" name=${plant.name}-${plant.id}-last-watered" value=${plant.last_watered}><br>
            
            <!-- // PLANT LAST WATERED DURATION -->
            <label for=${plant.name}-${plant.id}-last-watered-duration">Last watered duration:</label>
            <input type="text" id= ${plant.name}-${plant.id}-last-watered-duration" name=${plant.name}-${plant.id}-last-watered-duration" value=${plant.last_watered_amount}><br>
            
            <!-- // PLANT GROW ZONE -->
            <label for=${plant.name}-${plant.id}-grow-zone">Grow zone:</label>
            <input type="text" id= ${plant.name}-${plant.id}-grow-zone" name=${plant.name}-${plant.id}-grow-zone" value=${plant.grow_zone}><br>
            
            <!-- // PLANTED DATE -->
            <label for=${plant.name}-${plant.id}-planted-date">Planted date:</label>
            <input type="text" id= ${plant.name}-${plant.id}-planted-date" name=${plant.name}-${plant.id}-planted-date" value=${plant.planted_date}><br>
            
            <!-- // SENSOR TYPE -->
            <label for=${plant.name}-${plant.id}-sensor-type">Sensor type:</label>
            <input type="text" id= ${plant.name}-${plant.id}-sensor-type" name=${plant.name}-${plant.id}-sensor-type" value=${plant.sensor_id.sensor_type}><br>
                    
            <!-- // FARM NAME -->
            <label for=${plant.name}-${plant.id}-farm-name">Farm name:</label>
            <input type="text" id= ${plant.name}-${plant.id}-farm-name" name=${plant.name}-${plant.id}-farm-name" value=${plant.farm.name}><br>
            
            </fieldset>    
			
            <button id="water-plant-${plant.id}">Water ${titleCase(plant.name)}</button>
            <button id="edit-plant-${plant.id}">Edit ${titleCase(plant.name)}</button>
		</div>
		`;
			
		document.getElementById('plants-container').innerHTML += plantCard;
		const waterButton = document.getElementById(`water-plant-${plant.id}`)
		const editPlantButton = document.getElementById(`edit-plant-${plant.id}`)
		
		})
	})
}

function handlePlants(plantsArray) {65
	plantsArray.forEach((plant) => {plantCard(plant)});
}

function plantCard(plant) {

	let plantTable = document.getElementById('plants-container');
	plantTable.innerHTML(`Hello!`)
};




function waterEvent(plant) {
	console.log(`hello button ${plant.name}`);
	document.getElementById(`${plant.id}-last-water`).innerText = Date();
	// document.querySelector("#\\31  > thead > tr:nth-child(4)").innerText = Date(); // this ONLY works for this specific spot, NOT each value.
	
// increment plant.last_watered

// send GPIO.
};

// function editPlantButton(plant) {
// 	console.log(`hello ${plant.name} edit button`);
	
// };


// simple title casing for a string
function titleCase(str) {
	return str.toLowerCase().split(' ').map((word) => word.replace(word[0], word[0].toUpperCase())).join(' ');
  }
  
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
// 	dd8.innerText = plant.sensor_id.sensor_type || "Sensor type: No data available" // data cannot be null. all plants must have a sensor OR do some error handling

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




