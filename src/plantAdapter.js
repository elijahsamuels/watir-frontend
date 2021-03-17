class PlantAdapter {

	waterPlant(plantNewWaterDate, plantNewWaterDuration, plantID) {
		fetch(baseURL + plantID, { 
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				last_watered: plantNewWaterDate,
				last_watered_amount: plantNewWaterDuration,
			})
		})
		.then(response => response.json())
		.then(plantObj => Plant.updateOnDom(plantObj))
	}

	updatePlant(updatedPlantName, updatedPlantHeight, updatedPlantNotes, updatedPlantLastWatered,updatedPlantLastWateredDuration, updatedPlantGrowZone, updatedPlantPlantedDate, updatedPlantSensorType, updatedPlantMacAddress, updatedPlantFarmID, plantID) {
		const configOptions = {
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				plant: {
					name: updatedPlantName, 
					height: updatedPlantHeight, 
					notes: updatedPlantNotes, 
					last_watered: updatedPlantLastWatered,
					last_watered_amount: updatedPlantLastWateredDuration, 
					grow_zone: updatedPlantGrowZone, 
					planted_date: updatedPlantPlantedDate, 
					farm_id: updatedPlantFarmID
					// farm: { 
					// 	name: xxx,
					// 	// id: updatedPlantFarmID,
					// 	}
					}
				})
			}
			console.log("JSON: ", JSON)
		fetch(baseURL + plantID, configOptions)
			.then(response => response.json())
			.then(plantObj => Plant.updateOnDom(plantObj))
			// .catch(error => console.log(error.message))
			// .then(object => updatePlantAll())
		
		// fetch(baseURL + plantID, {
		// 	method: "PATCH",
		// 	headers: {"Content-Type": "application/json"},
		// 	body: JSON.stringify({
		// 		name: updatedPlantName, 
		// 		height: updatedPlantHeight, 
		// 		notes: updatedPlantNotes, 
		// 		last_watered: updatedPlantLastWatered,
		// 		last_watered_amount: updatedPlantLastWateredDuration, 
		// 		grow_zone: updatedPlantGrowZone, 
		// 		planted_date: updatedPlantPlantedDate, 
		// 		// sensor: updatedPlantSensorType, 
		// 		// sensor: updatedPlantMacAddress, 
		// 		// farm_id: updatedPlantFarmName
		// 		})
		// 	})

	}

	deletePlant(plantID) {
		fetch(baseURL + plantID, {
			method: "DELETE",
			headers: {"Content-Type": "application/json"}
		})
		.then(response => response.json())
		// .then(plants => {
		// 	plants.forEach(plant => {
		// 		document.getElementById('plants-container').innerHTML = plant.renderPlant();
		// 	})
		// })
		.catch(e => console.log(e))
	}
}

// interview Qs 
// promises: special proxy
// fetch
/*
be aware of structure of how things are done
when to create a function
closures 
callbacks
diff between ref a callback vs. instantiating 
understanding the flow of new code
algo problems - study these

the hang
problem solving skills and trainable
cares and wants to get better

*/
