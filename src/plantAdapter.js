class PlantAdapter {

	// constructor(baseURL) {
	// 	this.baseURL = baseURL;
	// }


	// need to change the url per the plant id
	waterPlant(plantNewWaterDate, plantNewWaterDuration, plantID) {
		// debugger
		fetch(baseURL + plantID, { 
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				last_watered: plantNewWaterDate,
				last_watered_amount: plantNewWaterDuration,
			})
		})
	}

	updatePlant(updatedPlantName, updatedPlantHeight, updatedPlantNotes, updatedPlantLastWatered,updatedPlantLastWateredDuration, updatedPlantGrowZone, updatedPlantPlantedDate, updatedPlantSensorType, updatedPlantMacAddress, updatedPlantFarmName, plantID) {
		fetch(baseURL + plantID, {
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				name: updatedPlantName, 
				height: updatedPlantHeight, 
				notes: updatedPlantNotes, 
				last_watered: updatedPlantLastWatered,
				last_watered_amount: updatedPlantLastWateredDuration, 
				grow_zone: updatedPlantGrowZone, 
				planted_date: updatedPlantPlantedDate, 
				// sensor: updatedPlantSensorType, 
				// sensor: updatedPlantMacAddress, 
				// farm_id: updatedPlantFarmName
			})
		})
	}



}


// pessemistic rendering for edit and delete buttons

// RETURN fetch promise 
