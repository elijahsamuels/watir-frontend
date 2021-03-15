// why we want this file/classes: it will allow to know WHICH objects we're clicking on or which instance of the object we're working with.

class Plant {
	constructor(plant) {
		this.id = plant.id;
		this.name = plant.name;
		this.height = plant.height;
		this.notes = plant.notes;
		this.last_watered = plant.last_watered;
		this.last_watered_amount = plant.last_watered_amount;
		this.grow_zone = plant.grow_zone;
		this.planted_date = plant.planted_date;
		this.farm_id = plant.farm.id;
		this.farm_name = plant.farm.name;
		this.sensor_type = plant.sensor[0].sensor_type;
		this.mac_address = plant.sensor[0].mac_address;
		
		Plant.all.push(this);
	};
	static all = [];
		// HELP: can't get these to go into the flexgrid
		// This renders all plants to the DOM
	renderPlant() {
		return `
		<div class="plants-card">
		<div class="container">
		<div class="row">
			<div class="col-md">
						<fieldset class="${this.name}-${this.id}">

			<!-- // PLANT NAME -->
				<label for="${this.name}-${this.id}">Plant name:</label>

					<input type="text" 
						id="name-${this.id}" 
						name="${this.name}-${this.id}" 
						class="plant-name" 
						value="${titleCase(this.name)}" 
						disabled="disabled"><br>

			<!-- // PLANT HEIGHT -->
				<label for="${this.name}-${this.id}">Height (inches):</label>

					<input type="text" 
						id="height-${this.id}" 
						name="${this.name}-${this.id}-height" 
						value=${this.height} 
						disabled="disabled" ><br>
				
			<!-- // PLANT NOTES -->
				<label for="${this.name}-${this.id}-notes">Notes:</label>

					<textarea 
						id="notes-${this.id}" 
						name="${this.name}-${this.id}-notes" 
						disabled="disabled" >${this.notes}</textarea ><br>
					
			<!-- // PLANT LAST WATERED -->
				<label for="${this.name}-${this.id}-last-watere">Last watered:</label> 

				<!-- // <input type="datetime-local" -->
					<input type="text" 
						id="last-watered-${this.id}" 
						name="${this.name}-${this.id}-last-watered" 
						value="${this.last_watered}" 
						disabled="disabled" ><br>
				
			<!-- // PLANT LAST WATERED DURATION -->
				<label for="${this.name}-${this.id}-last-watered-duration">Last watered duration (seconds):</label>

					<input type="text" 
						id="last-watered-duration-${this.id}" 
						name="${this.name}-${this.id}-last-watered-duration" 
						value="${this.last_watered_amount}" 
						disabled="disabled" ><br>
					
			<!-- // PLANT GROW ZONE -->
				<label for="${this.name}-${this.id}-grow-zone">Grow zone:</label>
				
					<input type="text" 
						id="grow-zone-${this.id}" 
						name="${this.name}-${this.id}-grow-zone" 
						value="${this.grow_zone}" 
						disabled="disabled" ><br>
						
			<!-- // PLANTED DATE -->
				<label for="${this.name}-${this.id}-planted-date">Planted date:</label>
				
					<input type="text" 
						id="planted-date-${this.id}" 
						name="${this.name}-${this.id}-planted-date" 
						value="${this.planted_date}" 
						disabled="disabled" ><br>
					
			<!-- // SENSOR TYPE -->
				<label for="${this.name}-${this.id}-sensor-type">Sensor type:</label>
				
					<input type="text" 
						id="sensor-type-${this.id}" 
						name="${this.name}-${this.id}-sensor-type" 
						value="${this.sensor_type}" 
						disabled="disabled" ><br>
				
			<!-- // SENSOR MAC ADDRESS -->
				<label for="${this.name}-${this.id}-mac-address">Sensor MAC address:</label>
				
					<input type="text" 
						id="mac-address-${this.id}" 
						name="${this.name}-${this.id}-mac-address" 
						value="${this.mac_address}" 
						disabled="disabled" ><br>
				
			<!-- // FARM NAME -->
				<label for="${this.name}-${this.id}-farm-name">Farm name:</label>
				
					<input type="text" 
						id="farm-name-${this.id}" 
						name="${this.name}-${this.id}-farm-name" 
						value="${this.farm_name}" 
						disabled="disabled" ><br>
					
			<!-- // FARM ID - HIDDEN FOR THE MOMENT 
				<label for="${this.name}-${this.id}-farm-id">Farm id:</label>
				
					<input type="text" 
						id="farm-id-${this.id}" 
						name="${this.name}-${this.id}-farm-id" 
						value="${this.farm_id}" disabled="disabled" ><br>
				-->
				
				<!-- // BUTTONS -->
				<div class="buttons-container">
				<div class="progress-bar${this.id}" style="--width: 10" data-label="Loading..."></div>

					<div class="progress-bar" style="--width: 10" data-label="loading...">
					</div>	
						<button id="water-plant-${this.id}" data-id="${this.id}" class="water-button btn-outline-primary ">Water ${titleCase(this.name)}</button>		

					<button id="edit-plant-${this.id}" data-id="${this.id}" class="edit-plant-button btn-outline-success ">Edit</button>
					<button id="delete-plant-${this.id}" data-id="${this.id}" class="delete-plant-button btn-outline-danger ">Remove ${titleCase(this.name)}</button>
					</div>
				</fieldset>    
				</div>
			</div>
			</div>
		</div>
		`
	}
		
	static sortButton() {
		let sortBtn = document.getElementById('plant-sort-button').addEventListener('click', this.sortAllPlants)

	};
	// had to put the sort variables INSIDE each sorting direction. Why?
	static sortAllPlants() {
		let allPlants = Plant.all
		let plantsContainer	= document.getElementById('plants-container')
		let sortBtn = document.getElementById('plant-sort-button')
		
		if (sortBtn.innerHTML === "Sort Plants ↑") {
			let sortedPlantsAscend = allPlants.sort((a,b) => (a.name > b.name) ? 1 :-1);
			sortBtn.innerHTML = "Sort Plants ↓";
			plantsContainer.innerHTML = "";
			sortedPlantsAscend.forEach(element => {
				document.getElementById('plants-container').innerHTML += element.renderPlant();
			}); 
			Plant.getAllWaterButton();
			Plant.getAllEditButton();	
			
		} else {
			sortBtn.innerHTML = "Sort Plants ↑";
			let sortedPlantsDescend = allPlants.sort((a,b) => (a.name < b.name) ? 1 :-1);
			plantsContainer.innerHTML = "";
			sortedPlantsDescend.forEach(element => {
				document.getElementById('plants-container').innerHTML += element.renderPlant();
			}); 
			Plant.getAllWaterButton();
			Plant.getAllEditButton();	
		}
	};

	static getAllWaterButton() {
		let allWaterButtons = Array.from(document.getElementsByClassName('water-button'))
		allWaterButtons.forEach( e => {	e.addEventListener("click", Plant.waterPlant)
		})
	};

	// this sends the values and plant ID to the plantAdapter class
	static waterPlant(e) {
		let plantID = e.target.dataset.id
		let waterButton = document.getElementById("water-plant-" + plantID)
		waterButton.disabled = true
		let plantName = document.getElementById('name-'+plantID).value
		// waterButton.innerText = "Watering " + plantName
		waterButton.innerHTML = `
		`
		const progressBar = document.getElementsByClassName('progress-bar'+plantID)[0]
		
		setInterval(() => {
		  const computedStyle = getComputedStyle(progressBar)
		  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
		  progressBar.style.setProperty('--width', width + .2)
		}, 5)
		


			// this is where we're going to update the water button to a progress bar incrementing a percentage per second
			// <div class="progress">
			// <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
			// </div>

			// document.getElementById("water-plant-" + plantID).innerHTML = `<div class="progress-bar" role="progressbar" style="width: 20%;" aria-color="white" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">5 seconds</div>`
			// document.getElementById("water-plant-" + plantID).innerHTML = `<div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">4 seconds</div>`
			// document.getElementById("water-plant-" + plantID).innerHTML = `<div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">3 seconds</div>`
			// document.getElementById("water-plant-" + plantID).innerHTML = `<div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">2 seconds</div>`
			// document.getElementById("water-plant-" + plantID).innerHTML = `<div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1 second</div>`


		let plantWateredDuration = "last-watered-duration-" + plantID
		let plantNewWaterDuration = parseInt(document.getElementById(plantWateredDuration).value)
		document.getElementById(plantWateredDuration).value = plantNewWaterDuration + 1
		plantNewWaterDuration = parseInt(document.getElementById(plantWateredDuration).value)

		let plantWateredDate = "last-watered-" + plantID
		document.getElementById(plantWateredDate).value = currentDateTime()
		let plantNewWaterDate = document.getElementById(plantWateredDate).value
		
		plantAdapter.waterPlant(plantNewWaterDate, plantNewWaterDuration, plantID)

		setTimeout(function () {
			console.log('hello water button timer');
			waterButton.disabled = false
			waterButton.innerText = "Water " + plantName

		}, 2000);
		// add a timer for 10 seconds. this should simulate the pump 
		// https://getbootstrap.com/docs/4.0/components/progress/

	};

	static getAllEditButton() {
		let allEditButtons = Array.from(document.getElementsByClassName('edit-plant-button'))
		allEditButtons.forEach( e => {e.addEventListener("click", Plant.editPlant)
		})
	}

	static editPlant(e) {
		let plantID = e.target.dataset.id
		if (e.target.innerText === "Edit"){
			e.target.innerText = "Save";
			// enable input fields for that plant
			document.getElementById("name-" + plantID).disabled = false
			document.getElementById("height-" + plantID).disabled = false
			document.getElementById("notes-" + plantID).disabled = false
			document.getElementById("last-watered-" + plantID).disabled = false
			document.getElementById("last-watered-duration-" + plantID).disabled = false
			document.getElementById("grow-zone-" + plantID).disabled = false
			document.getElementById("planted-date-" + plantID).disabled = false
			document.getElementById("sensor-type-" + plantID).disabled = true
			document.getElementById("mac-address-" + plantID).disabled = true
			document.getElementById("farm-name-" + plantID).disabled = true
			
		} else if (e.target.innerText === "Save"){
			e.target.innerText = "Edit"
			// disable input fields for that plant
			document.getElementById("name-" + plantID).disabled = true
			document.getElementById("height-" + plantID).disabled = true
			document.getElementById("notes-" + plantID).disabled = true
			document.getElementById("last-watered-" + plantID).disabled = true
			document.getElementById("last-watered-duration-" + plantID).disabled = true
			document.getElementById("grow-zone-" + plantID).disabled = true
			document.getElementById("planted-date-" + plantID).disabled = true
			document.getElementById("sensor-type-" + plantID).disabled = true
			document.getElementById("mac-address-" + plantID).disabled = true
			document.getElementById("farm-name-" + plantID).disabled = true
			
			let updatedPlantName = document.getElementById("name-" + plantID).value
			let updatedPlantHeight = document.getElementById("height-" + plantID).value
			let updatedPlantNotes = document.getElementById("notes-" + plantID).value
			let updatedPlantLastWatered = document.getElementById("last-watered-" + plantID).value
			let updatedPlantLastWateredDuration = document.getElementById("last-watered-duration-" + plantID).value
			let updatedPlantGrowZone = document.getElementById("grow-zone-" + plantID).value
			let updatedPlantPlantedDate = document.getElementById("planted-date-" + plantID).value
			let updatedPlantSensorType = document.getElementById("sensor-type-" + plantID).value
			let updatedPlantMacAddress = document.getElementById("mac-address-" + plantID).value
			let updatedPlantFarmName = document.getElementById("farm-name-" + plantID).value

		plantAdapter.updatePlant(updatedPlantName, updatedPlantHeight, updatedPlantNotes, updatedPlantLastWatered,updatedPlantLastWateredDuration, updatedPlantGrowZone, updatedPlantPlantedDate, updatedPlantSensorType, updatedPlantMacAddress, updatedPlantFarmName, plantID)

		}

	}

};
