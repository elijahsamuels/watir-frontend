// why we want this file: it will allow to know WHICH objects we're clicking on or which instance of the object we're working with.

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
		this.mac_address = plant.sensor[0].mac_address
	// Plant.all.push(this);
	};

	// This renders all plants to the DOM
	renderPlant() {
		// debugger
		return `
		<div>
			<fieldset disabled>
            <!-- // PLANT NAME -->
            <label for=${this.name}-${this.id}>Plant name:</label>
            <input type="text" id=${this.name}-${this.id} name=${this.name}-${this.id} value="${titleCase(this.name)}"><br>
            
            <!-- // PLANT HEIGHT -->
            <label for=${this.name}-${this.height}>Height (inches):</label>
            <input type="text" id="${this.name}-${this.id}-height" name="${this.name}-${this.id}-height" value=${this.height}><br>
            
            <!-- // PLANT NOTES -->
            <label for=${this.name}-${this.id}-notes>Notes:</label>
            <textarea id="${this.name}-${this.id}-notes" name="${this.name}-${this.id}-notes" >${this.notes}</textarea><br>
            
            <!-- // PLANT LAST WATERED -->
            <label for=${this.name}-${this.id}-last-watere">Last watered:</label>
            <input type="text" id="${this.name}-${this.id}-last-watered" name="${this.name}-${this.id}-last-watered" value="${this.last_watered}"><br>
            
            <!-- // PLANT LAST WATERED DURATION -->
            <label for=${this.name}-${this.id}-last-watered-duration>Last watered duration (seconds):</label>
            <input type="text" id="${this.name}-${this.id}-last-watered-duration" name="${this.name}-${this.id}-last-watered-duration" value="${this.last_watered_amount}"><br>
            
            <!-- // PLANT GROW ZONE -->
            <label for=${this.name}-${this.id}-grow-zone>Grow zone:</label>
            <input type="text" id="${this.name}-${this.id}-grow-zone" name="${this.name}-${this.id}-grow-zone" value="${this.grow_zone}"><br>
            
            <!-- // PLANTED DATE -->
            <label for=${this.name}-${this.id}-planted-date>Planted date:</label>
            <input type="text" id="${this.name}-${this.id}-planted-date" name="${this.name}-${this.id}-planted-date" value="${this.planted_date}"><br>

				<!-- // SENSOR TYPE -->
				<label for=${this.name}-${this.id}-sensor-type>Sensor type:</label>
				<input type="text" id="${this.name}-${this.id}-sensor-type" name="${this.name}-${this.id}-sensor-type" value="${this.sensor_type}"><br>
				
				<!-- // SENSOR MAC ADDRESS -->
				<label for=${this.name}-${this.id}-mac-address>Sensor MAC address:</label>
				<input type="text" id="${this.name}-${this.id}-mac-address" name="${this.name}-${this.id}-mac-address" value="${this.mac_address}"><br>
				
				<!-- // FARM NAME -->
				<label for=${this.name}-${this.id}-farm-name>Farm name:</label>
				<input type="text" id="${this.name}-${this.id}-farm-name" name="${this.name}-${this.id}-farm-name" value="${this.farm_name}"><br>
				
				<!-- // FARM ID - HIDDEN FOR THE MOMENT 
				<label for=${this.name}-${this.id}-farm-id>Farm id:</label>
				<input type="text" id="${this.name}-${this.id}-farm-id" name="${this.name}-${this.id}-farm-id" value="${this.farm_id}"><br>
				-->
            </fieldset>    
		
			<!-- // BUTTONS -->
            <button id="water-plant-${this.id}" class="water-button">Water ${titleCase(this.name)}</button>
            <button id="edit-plant-${this.id}" class="edit-plant-button">Edit ${titleCase(this.name)}</button>
            <button id="delete-plant-${this.id}" class="delete-plant-button">Remove ${titleCase(this.name)}</button>
			</div>
		`
	}

};

Plant.all = [];