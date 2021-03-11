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






}


// pessemistic rendering for edit and delete buttons

// RETURN fetch promise 