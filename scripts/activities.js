"use strict";

window.onload = function (_event) {
    // Assign an onchange event handler to the Categories select/dropdown box
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities
    // Assign an onchange event handler to the Activities select/dropdown box
    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard

    populateCategories(array, categorySelect)
    // TODO: Populate Categories dropdown, using innerHTML
    // categoryselect.innerHTML = `
    //     <option value="fake-category-1">Fake Category 1</option>
    //     <option value="fake-category-2">Fake Category 2</option>
    // `
}

function populateCategories (array, selectElement) {
    let html = "<option>Select a Category...</option>"
    for (let index = 0; index < array.length; index += 1) {
        const currentCategory = array[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`
    }
    selectElement.innerHTML = html
}
function populateActivities (event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
    // What do we do with this category selected by the user now that we have it?
    
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index]
        if (activity.category === selectedCategory) {
            html += `<option value="${activity.id}">${activity.name}</option>`
        }
    }
    
    const selectElement = document.getElementById("activity")
    selectElement.innerHTML = html
}
function renderActivityCard (event) {
    const selectedActivityId = event.target.value
    console.log(selectedActivityId)
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index];
        
        if (activity.id === selectedActivityId) {
            html += `
                <div class="card">
                    <h5 class="card-header">${activity.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">Where? <em>${activity.location}</em></h5>
                        <p class="card-text">${activity.description}</p>
                        <a href="#" class="btn btn-primary">Buy e-Ticket for \$${activity.price}</a>
                    </div>
                </div>
            `
        }
    }
    const resultDiv = document.getElementById("selected-activity")
    resultDiv.innerHTML = html
}