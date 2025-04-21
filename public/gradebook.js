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
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradeTable(gradeData);
// END REMOVE
