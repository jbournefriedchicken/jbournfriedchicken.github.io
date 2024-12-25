/** Utilities Functions */
function displayCsvTable(data, divContainer) {
  const table = document.createElement("table");

  // Create table headers from the first row if header option was not used in PapaParse
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create table rows
  data.forEach((row) => {
    const tr = document.createElement("tr");
    headers.forEach((header) => {
      const td = document.createElement("td");
      td.textContent = row[header];
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  const tableContainer = document.getElementById(divContainer);
  tableContainer.innerHTML = ""; // Clear previous table
  tableContainer.appendChild(table);
}

function show(inputIds) {
  inputIds.forEach((inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.style.display = "block";
  });
}

function hide(inputIds) {
  inputIds.forEach((inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.style.display = "none";
  });
}
