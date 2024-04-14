// Get the last modified date of the document
var lastModDate = new Date(document.lastModified);

// Format the date
var formattedDate = lastModDate.toLocaleDateString("en-US");

// Update the content of the empty paragraph tag with the last modified date
document.getElementById('last-modified').textContent = "Last Modified: " + formattedDate;
