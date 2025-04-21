// TODO: Fetch data from PostgreSQL database (later)
function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
  // Create a new request for HTTP data
  let xhr = new XMLHttpRequest();
  // This is the address on the machine we're asking for data
  let apiRoute = "/api/grades";
  // When the request changes status, we run this anonymous function
  xhr.onreadystatechange = function () {
    let results;
    // Check if the request is complete
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Check if the request was successful (status code 200)
      if (xhr.status !== 200) {
        console.error(`Could not get grades. Status:  + ${xhr.status}`);
      }
      // Call the function to updae the HTML with our data
      populateGradeTable(JSON.parse(xhr.responseText));
    }
  }.bind(this);
  xhr.open("GET", apiRoute, true);
  xhr.send();
}

// TODO: Populate the table with grade data
function populateGradeTable(data) {
  // This function will take the fetched data and populate the table
  console.log("Populating grade table with data...", data);
  let tableElm = document.getElementById("gradebook"); // Get the gradebook table element
  data.forEach(function (assignment) {
    // For each row of data we're passing in
    let row = document.createElement("tr"); // Create a table row element
    let columns = []; // Handy place to stick the columns of information
    columns.name = document.createElement("td"); // The first column's table data will be the name
    columns.name.appendChild(
      // Concatenate the full name:  "last _name, first_name"
      document.createTextNode(
        assignment.last_name + ", " + assignment.first_name
      )
    );
    columns.grade = document.createElement("td"); // The second column will be the grade
    columns.grade.appendChild(
      // Just put the name in text
      // With eith a bunch of conditions or a JS "switch" statememt
      document.createTextNode(assignment.total_grade)
    );
    // Add the table data columns to the table row
    row.appendChild(columns.name);
    row.appendChild(columns.grade);
    // Add the table row to the table body
    tableElm.appendChild(row);
  });
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradeTable(gradeData);
// END REMOVE
