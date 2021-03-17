// function declaration/statement
function nameOfFunction() {
    somethingToDo;
}

// function expression
let nameOfFunction = function() {
    somethingToDo;
}
// arrow function
let nameOfFunction = () => {
    somethingToDo;
}

// let v var v const 
/*
All are hoisted to the top of their scope

var declarations: 
    globally scoped or function scoped
    can be updated and re-declared within its scope

let: block scoped
    can be updated but not re-declared

const: block scoped
    can neither be updated nor re-declared
*/

// auto filter/search

// in HTML
    // in HTML

// in JS


static sortAllPlants() {
    let allPlants = Plant.all
    let sortedPlantsAscend = allPlants.sort((a,b) => (a.name > b.name) ? 1 :-1)
    let sortedPlantsDescend = allPlants.sort((a,b) => (a.name < b.name) ? 1 :-1)
    let plantsContainer	= document.getElementById('plants-container')
    let sortBtn = document.getElementById('plant-sort-button')

    if (sortBtn.innerHTML = "Sort Plants &#8593;") {
        plantsContainer.innerHTML = ""
        sortBtn.innerHTML = "Sort Plants &#8595;" // down arrow
        sortedPlantsAscend.forEach(element => {
            document.getElementById('plants-container').innerHTML += element.renderPlant();
    } else {
        plantsContainer.innerHTML = ""
        sortBtn.innerHTML = "Sort Plants &#8593;" // up arrow
        sortedPlantsDescend.forEach(element => {
            document.getElementById('plants-container').innerHTML += element.renderPlant();
        })
    }; 




removeChild(document.getElementsByClassName('plants-list'));





var btn = document.createElement('input');
btn.type = "button";
btn.className = "btn";
btn.value = entry.email;
btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
td.appendChild(btn);



let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let plantsArray = [
    { name: 'James', age: 21, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]

let headers = ['Name', 'Age', 'Country'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
		
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    plantsArray.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
});



// ########################################

function plantCard(plant) {

	let plantTable = document.getElementById('plants-container')
	let table = plantTable.innerHTML(`<label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
`)
    };


        <form action="form-page" method="post">
        <fieldset disabled="disabled">
        // PLANT NAME
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // PLANT HEIGHT
        <label for="${plant.name}-${plant.height}">Height:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}-height" name="${plant.name}-${plant.id}-height"><br>
        
        // PLANT NOTES
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // PLANT LAST WATERED
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // PLANT LAST WATERED DURATION
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // PLANT GROW ZONE
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // PLANTED DATE
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        // SENSOR TYPE
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
                
        // FARM NAME
        <label for="${plant.name}-${plant.id}">Plant name:</label><br>
        <input type="text" id= "${plant.name}-${plant.id}" name="${plant.name}-${plant.id}"><br>
        
        
        </fieldset>


            waterButton.innerText = "Water " + titleCase(plant.name)
            waterButton.id = `water-plant-${plant.id}`
            editPlantButton.innerText = "Edit " + titleCase(plant.name)
            editPlantButton.id = `edit-plant-${plant.id}`
    
        </form>
        )
        

};








// make into a div for the card/tile

		function plantCard(plant) {
			console.log(plant);
			
			let plantTable = document.getElementById('plants-container')
			let table = document.createElement('table')
			let row = table.createTHead()
			let row = header.insertRow();
			let cell1 = row.insertRow();
			let cell2 = row.insertRow();
			let cell3 = row.insertRow();
			let cell4 = row.insertRow();
			let cell5 = row.insertRow();
			let cell6 = row.insertRow();
			let cell7 = row.insertRow();
			let cell8 = row.insertRow();
			let cell9 = row.insertRow();
			let waterButton = document.createElement('button')
			let editPlantButton = document.createElement('button')

			table.id = plant.id
			cell1.innerText = titleCase(plant.name)
			cell1.id = (`${plant.name}-${plant.id}`)
			cell2.innerText = (`Height: ${plant.height}`)
			cell2.id = (`${plant.name}-${plant.id}-height`)
			cell3.innerText = (`Notes: ${plant.notes}`)
			cell3.id = (`${plant.name}-${plant.id}-notes`)
			cell4.innerText = (`Last watered: ${plant.last_watered}`)
			cell4.id = (`${plant.name}-${plant.id}-last-water`)
			cell5.innerText = (`Last watered duration: ${plant.last_watered_amount} seconds`)
			cell5.id = (`${plant.name}-${plant.id}-last-watered-duration`)
			cell6.innerText = (`Grow zone: ${plant.grow_zone}`)
			cell6.id = (`${plant.name}-${plant.id}-grow-zone`)
			cell7.innerText = (`Planted date: ${plant.planted_date}`)
			cell7.id = (`${plant.name}-${plant.id}-planted-date`)
			cell8.innerText = (`Sensor type: ${plant.sensor_id.sensor_type}`)
			cell8.id = (`${plant.name}-${plant.id}-sensor-type`)
			cell9.innerText = (`Location: ${plant.farm.name}`)
			cell9.id = (`${plant.name}-${plant.id}-farm-name`)

			waterButton.innerText = "Water " + titleCase(plant.name)
			waterButton.id = `water-plant-${plant.id}`
			editPlantButton.innerText = "Edit " + titleCase(plant.name)
			editPlantButton.id = `edit-plant-${plant.id}`

			plantTable.appendChild(table);
			table.appendChild(waterButton);
			table.appendChild(editPlantButton);

			document.getElementById(`water-plant-${plant.id}`).addEventListener("click", () => {
				waterEvent(plant)
				});

			document.getElementById(`edit-plant-${plant.id}`).addEventListener("click", () => {
				editPlantButton(plant)
				console.log(`you clicked the edit button number ${plant.id}`)
				make fields editable for the plant
				if (editPlantButton.innerText === "Edit " + titleCase(plant.name)) {
					editPlantButton.innerText = "Save " + titleCase(plant.name)
					Save edits to the plant
				} else if (editPlantButton.innerText === "Save " + titleCase(plant.name)){
					editPlantButton.innerText = "Edit " + titleCase(plant.name)
				}
				});

		};














