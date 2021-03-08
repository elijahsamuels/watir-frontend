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
	// console.log(plants);
}

function handlePlants(plantsArray) {
	plantsArray.forEach((plant) => {plantCard(plant)});
}

function plantCard(plant) {
	
	let div = document.createElement("div")
	let li = document.createElement("li")
	let ul = document.createElement("ul")
	let p1 = document.createElement("p")
	let p2 = document.createElement("p")
	let p3 = document.createElement("p")
	let p4 = document.createElement("p")
	let p5 = document.createElement("p")
	let p6 = document.createElement("p")
	let p7 = document.createElement("p")
	let p8 = document.createElement("p")
	let button = document.createElement("button", )
	let span = document.createElement("span")
	// p1 = document.createTextNode(plant.name);
	// p1 = document.createTextNode(plant.name);
	// console.log('plant.name =', plant.name );
	p1.innerText = plant.name || "Plant: No data available"
	p2.innerText = plant.notes || "Notes: No data available"
	p3.innerText = plant.height || "Height: No data available"
	p4.innerText = plant.last_watered || "Last watered date: No data available"
	p5.innerText = plant.last_watered_amount || "Last watered amount: No data available"
	p6.innerText = plant.grow_zone || "Grow zone: No data available"
	p7.innerText = plant.planted_date || "Date planted: No data available"
	// p8.innerText = plant.sensor_id.sensor_type || "Sensor type: No data available" // data cannot be null. all plants must have a sensor OR do some error handling

	button.innerText = "Water " + plant.name
	button.id = `water-plant-${plant.id}`
	// span.innerText = plant.likes
	// button.append(span)
	
	li.append(p1, p2, p3, p4, p5, p6, p7, p8, button)
	div.append(li)
	ul.append(div)
	document.getElementById("plants-list").appendChild(li);
	// console.log('plant.name =', li );
	// debugger
	
};
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




