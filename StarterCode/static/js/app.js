// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

// Table
// var tblUFO = tbody.select('#ufo-table');
tableData.forEach(function(tableRecord) {
    var row = tbody.append("tr");
    Object.entries(tableRecord).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


// reference
var button = d3.select('#filter-btn');

// // filter form
// // ref UFO Table
// var frmFilterUFO = tbody.select("#filter-form");
// // ref to DateTime filter
// var filterDatetime = frmFilterUFO.select("#datetime");
// // City Filter
// var filterCity = frmFilterUFO.select("#city");
// // state filter
// var filterState = frmFilterUFO.select("#state");
// // country filter
// var filterCountry = frmFilterUFO.select("#country");
// // shape filter
// var filterShape = frmFilterUFO.select("#shape");

var form = d3.select("form");function runEnter() {
    // page refresh prevention
    d3.event.preventDefault();

    // clear output
    tbody.html("");

    //select inputted date 
    var inputValue = d3.select('#datetime').property("value");
    console.log("Entered Date");
    console.log(inputValue);

    // data filter
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log("Filtered Data");
    console.log(filteredData);

    filteredData.forEach(function(filteredRecord) {
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            console.log("Row Values");
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// //BUTTON
// // button filter
// var btnFilter = frmFilterUFO.select("#filter-btn");
// // reset button
// var btnReset = frmFilterUFO.select("#reset-btn");

// var renderTable = (tableData, tbodyTable) => {
//     // tableData
//     tableData.forEach((record) => {
//         // each UFO sighting
//         var row = tbodyTable.append("tr");
//         Object.defineProperties(record).forEach(([key, value]) => {
//             // cell td 
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };

// function resetTable() {
//     // reset table 
//     ttbody.html("");
//     renderTable(dataUFO, ttbody);
// };

// // filter on filterButton Button Click Event
// function processFilters() {
//     // no page refresh
//     d3.event.preventDefault();
//     // clear previous Data
//     ttbody.html("");

//     // Process Date Filter
//     var inputDateTime = filterDatetime.property("value").trim();
//     console.log(inputDateTime);
//     // City filter
//     var inputCity = filterCity.property("value").toLowerCase().trim();
//     console.log(inputCity);
//     // State Filter
//     var inputState = filterState.property("value").toLowerCase().trim();
//     console.log(inputState);
//     // Country filter
//     var inputCountry = filterCountry.property("value").toLowerCase().trim();
//     console.log(inputCountry);
//     // shape filter
//     var inputShape = filterShape.property("value").toLowerCase().trim();
//     console.log(inputShape);

//     // filterDataUFO to dataUFO
//     filterDataUFO = dataUFO;

//         //Process the filters - This will result in all filters being evaluated together.
//     // Filter `dataUFO` Data with datetime 
//     if (inputDateTime != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.datetime === inputDateTime) };
//     // Filter `dataUFO` Data with city 
//     if (inputCity != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.city === inputCity) };
//     // Filter `dataUFO` Data with state 
//     if (inputState != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.state === inputState) };
//     // Filter `dataUFO` Data with country 
//     if (inputCountry != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.country === inputCountry) };
//     // Filter `dataUFO` Data with shape 
//     if (inputShape != "") { var filteredDataUFO = filteredDataUFO.filter(UFORecord => UFORecord.shape === inputShape) };

//     // Render the table with data based on the filter selection, if no records returned then display 'No Results found!' message.
//     if (filteredDataUFO.length !== 0) { renderTable(filteredDataUFO, ttbody) } else { ttbody.append("tr").append("td").text("No results found!") };

// };

// EVENT HANDLERS
button.on("click", runEnter);
form.on("submit", runEnter);

button.on("submit", function() {
    // page refresh prevention
    d3.event.preventDefault();

    // clear existing output
    tbody.html("");

    // D3
    var inputValue = d3.select('#datetime').property("value");
    console.log("Entered Date");
    console.log(inputValue);

    // filter data
    var filteredData = tableData.filter(record => record.datetime === inputValue);
    console.log("Filtered Data");
    console.log(filteredData);

    filteredData.forEach(function(filteredRecord) {
        var row = tbody.append("tr");

        Object.entries(filteredRecord).forEach(function([key, value]) {
            console.log("Row Values");
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// // event handlers
// // body on load event
// tbody.on("onLoad", resetTable);
// // renderTable
// btnFilter.on("click", processFilters);
// // form submit event
// frmFilterUFO.on("submit", processFilters);
// // click btn reset
// btnReset.on("click", resetTable);
// // page load event
// resetTable();