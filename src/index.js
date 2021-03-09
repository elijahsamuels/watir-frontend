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
	.then(response => response.json())
	.then(handlePlants)
}

function handlePlants(plantsArray) {
	plantsArray.forEach((plant) => {plantCard(plant)});
}

// trying to create a table via JS

function plantCard(plant) {
	console.log(plant);

	let plantTable = document.getElementById('plants-container')
	let table = document.createElement('table')
	let header = table.createTHead()
	let row = header.insertRow();
	let cell1 = row.insertCell();
	let cell2 = row.insertCell();
	let cell3 = row.insertCell();
	let cell4 = row.insertCell();
	let cell5 = row.insertCell();
	let cell6 = row.insertCell();
	let cell7 = row.insertCell();
		let farmName = plant.farm.name

	table.id = plant.id
	cell1.innerText = (`Height: ${plant.height}`)
	cell2.innerText = (`Notes: ${plant.notes}`)
	cell3.innerText = (`Last watered: ${plant.last_watered}`)
	cell4.innerText = (`Last watered duration: ${plant.last_watered_amount} seconds`)
	cell5.innerText = (`Grow zone: ${plant.grow_zone}`)
	cell6.innerText = (`Planted date: ${plant.planted_date}`)
	cell7.innerText = (`Sensor type: ${plant.sensor_id.sensor_type}`)
	header.innerText = titleCase(plant.name)
	plantTable.appendChild(header)
	// plantTable.appendChild(table.id)
	plantTable.appendChild(cell1)
	plantTable.appendChild(cell2)
	plantTable.appendChild(cell3)
	plantTable.appendChild(cell4)
	plantTable.appendChild(cell5)
	plantTable.appendChild(cell6)
	plantTable.appendChild(cell7)

// debugger
};

// var newcell = newrow.insertCell(0) //insert new cell to row



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




