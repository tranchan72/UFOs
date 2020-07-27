// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function updateFilters() {
    // Save the element, value, and id of the filter that was changed
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
        
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    let filteredData = tableData;   
    
    // Loop through all of the filters and keep any data that
    // matches the filter values
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    if (date) {      
        filteredData = filteredData.filter(row => row.datetime === date);     
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };
    
    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };
    
    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };
    buildTable(filteredData);
}

// Add a code to listen for events that occur on a webpage, such as a button click
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);