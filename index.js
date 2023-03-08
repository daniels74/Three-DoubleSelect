function updateHtml(theId, theHtmlString) {
    const element = document.getElementById(theId);
    element.innerHTML = theHtmlString;
}

function updateSelect2(selection, items) {
    let newSelTwo = ``;
    let headerTitle = "";
    //get new results
    let firstOption = true;
    for (let item of items) {
        if (selection === item.category) {
            if (firstOption === false) {
                newSelTwo += `<option value="${item.name}">${item.name}</option>`
            } else {
                newSelTwo += `<option value="${item.name}" selected>${item.name}</option>`
                headerTitle = item.name;
            }
            firstOption = false;
        }
    }
    // update html with new html string
    updateHtml("seltwo", newSelTwo)
    updateHtml("header", headerTitle);
};

function updateHeader(newTitle) {
    updateHtml("header", newTitle);
}
