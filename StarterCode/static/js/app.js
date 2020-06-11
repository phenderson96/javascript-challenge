// from data.js
var dataUFO = data;

// YOUR CODE HERE!

var bodyUFO = d3.select('body')

// Table
var tblUFO = bodyUFO.select('#ufo-table');
// reference
var tbodyUFO = tblUFO.select('tbody');

// filter form
// ref UFO Table
var frmFilterUFO = bodyUFO.select("#filter-form");
// ref to DateTime filter
var filterDatetime = frmFilterUFO.select("#datetime");
// City Filter
var filterCity = frmFilterUFO.select("#city");
// state filter
var filterState = frmFilterUFO.select("#state");
// country filter
var filterCountry = frmFilterUFO.select("#country");
// shape filter
var filterShape = frmFilterUFO.select("#shape");

//BUTTON
// button filter
var btnFilter = frmFilterUFO.select("#filter-btn");
// reset button
var btnReset = frmFilterUFO.select("#reset-btn");

var renderTable = (tableData, tbodyTable) => {
    // tableData
    tableData.forEach((record) => {
        // each UFO sighting
        var row = tbodyTable.append("tr");
        Object.defineProperties(record).forEach(([key, value]) => {
            // cell td 
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function resetTable() {
    // reset table 
    tbodyUFO.html("");
    renderTable(dataUFO, tbodyUFO);
};

// filter on filterButton Button Click Event
function processFilters() {
    // no page refresh
    d3.event.preventDefault();
    // clear previous Data
    tbodyUFO.html("");

    // Process Date Filter
    var inputDateTime = filterDatetime.property("value").trim();
    console.log(inputDateTime);
    // City filter
    var inputCity = filterCity.property("value").toLowerCase().trim();
    console.log(inputCity);
    // State Filter
    var inputState = filterState.property("value").toLowerCase().trim();
    console.log(inputState);
    // Country filter
    var inputCountry = filterCountry.property("value").toLowerCase().trim();
    console.log(inputCountry);
    // shape filter
    var inputShape = filterShape.property("value").toLowerCase().trim();
    console.log(inputShape);

    // filterDataUFO to dataUFO
    filterDataUFO = dataUFO;

        //Process the filters - This will result in all filters being evaluated together.
    // Filter `dataUFO` Data with datetime 
    if (inputDateTime != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.datetime === inputDateTime) };
    // Filter `dataUFO` Data with city 
    if (inputCity != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.city === inputCity) };
    // Filter `dataUFO` Data with state 
    if (inputState != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.state === inputState) };
    // Filter `dataUFO` Data with country 
    if (inputCountry != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.country === inputCountry) };
    // Filter `dataUFO` Data with shape 
    if (inputShape != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.shape === inputShape) };

    // Render the table with data based on the filter selection, if no records returned then display 'No Results found!' message.
    if (filteredDataUFO.length !== 0) { renderTable(filteredDataUFO, tbodyUFO) } else { tbodyUFO.append("tr").append("td").text("No results found!") };

};

// event handlers
// body on load event
bodyUFO.on("onLoad", resetTable);
// renderTable
btnFilter.on("click", processFilters);
// form submit event
frmFilterUFO.on("submit", processFilters);
// click btn reset
btnReset.on("click", resetTable);
// page load event
resetTable();