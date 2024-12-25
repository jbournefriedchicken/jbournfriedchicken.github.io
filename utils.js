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

function appendClassData(classData, divContainer) {
  const classListDiv = document.getElementById(divContainer);
  classListDiv.innerHTML = "";

  let i = 1;
  classData.forEach((classStudents) => {
    const table = document.createElement("table");

    // Create table headers from the first row if header option was not used in PapaParse
    const headerRow = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Class " + i;
    headerRow.appendChild(th);
    table.appendChild(headerRow);

    // Create table rows
    classStudents.forEach((student) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.textContent = student;
      tr.appendChild(td);
      table.appendChild(tr);
    });

    classListDiv.appendChild(table);
    i++;
  });
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

function generateTestData() {
  return [
    [
      "Avila Sarah (39)",
      "Barnes Austin (78)",
      "Bishop Barbara (121)",
      "Cook Jamie (6)",
      "Dalton Stacy (17)",
      "Edwards David (132)",
      "Evans Valerie (14)",
      "Foster Amanda (20)",
      "Gordon Malik (74)",
      "Lee Randy (84)",
      "Lopez Gerald (96)",
      "Moore Katelyn (29)",
      "Morrison Christopher (102)",
      "Nelson John (149)",
      "Odonnell Ricky (5)",
      "Owen Brian (3)",
      "Perez Ryan (99)",
      "Rice Matthew (139)",
      "Roach Alexandra (87)",
      "Smith Eric (77)",
      "Smith Laura (47)",
      "Thompson Taylor (72)",
      "Torres Dana (119)",
      "Watson Michael (128)",
      "Wells Ryan (117)",
      "Wheeler Chad (90)",
    ],
    [
      "Aguirre Johnny (120)",
      "Alvarez Robert (92)",
      "Austin Jenna (140)",
      "Berry Carlos (97)",
      "Browning Maria (116)",
      "Carter James (108)",
      "Dunn Michele (46)",
      "Fischer Katherine (112)",
      "Fitzpatrick Jennifer (42)",
      "Flynn Jennifer (122)",
      "Guzman Henry (63)",
      "Horne Tina (113)",
      "Huerta Brian (125)",
      "Lawrence David (133)",
      "Lloyd Jason (85)",
      "Long Christy (150)",
      "Mcintosh Sonya (1)",
      "Orr Kenneth (50)",
      "Perry Rachel (8)",
      "Pruitt Alex (53)",
      "Rosales Patricia (123)",
      "Shaw Christina (95)",
      "Torres James (61)",
      "Waller Kellie (93)",
      "Williams Anthony (37)",
      "Wright Michael (100)",
    ],
    [
      "Blevins Andrew (135)",
      "Brown Russell (30)",
      "Day Michelle (41)",
      "Gonzalez Vickie (101)",
      "Hampton Patricia (18)",
      "Hernandez Austin (86)",
      "Hoffman Dillon (28)",
      "Hooper Lauren (103)",
      "Johnson Gregory (98)",
      "Johnson Kimberly (89)",
      "Jones Alexander (71)",
      "Jones Madeline (21)",
      "Khan Tammy (65)",
      "Leblanc Mario (104)",
      "Miller Brittany (127)",
      "Morales Jacqueline (9)",
      "Morales Terri (13)",
      "Richard Anna (49)",
      "Santana Rodney (62)",
      "Skinner Shirley (54)",
      "Smith Gavin (70)",
      "Smith Thomas (25)",
      "Torres Matthew (15)",
      "Williams Cassie (51)",
      "Williams Howard (134)",
    ],
    [
      "Ballard Emily (109)",
      "Bennett Paul (24)",
      "Brewer David (130)",
      "Brown Beverly (26)",
      "Cook Andrew (4)",
      "Cooper Amy (57)",
      "Crosby David (126)",
      "Fernandez Margaret (33)",
      "Fisher John (35)",
      "Gibson Richard (55)",
      "Hunter Gilbert (73)",
      "Lewis Cameron (12)",
      "Lopez Brandon (110)",
      "Lopez Robert (36)",
      "Marquez Desiree (115)",
      "Mullins Shawna (145)",
      "Pham Michael (43)",
      "Robinson Jennifer (2)",
      "Sanders Virginia (23)",
      "Scott Erika (79)",
      "Simpson Mary (88)",
      "Sullivan Joseph (148)",
      "Tucker Julian (83)",
      "Valentine Christopher (76)",
      "White Rachel (143)",
    ],
    [
      "Allen Stacy (11)",
      "Bailey Courtney (75)",
      "Barajas Lisa (106)",
      "Bean Richard (111)",
      "Blankenship Christian (146)",
      "Bruce Edward (141)",
      "Carter Elizabeth (7)",
      "Dixon Jessica (69)",
      "Frank Anthony (118)",
      "Jackson Sarah (19)",
      "King Debbie (107)",
      "Mckee Jessica (31)",
      "Meyer Ashlee (48)",
      "Miller Victoria (58)",
      "Minh San (152)",
      "Moses Kenneth (91)",
      "Nash Joanna (38)",
      "Poole Charles (59)",
      "Randall Jesse (45)",
      "Rich Meghan (64)",
      "Robinson Gregg (34)",
      "Robinson Sean (67)",
      "Salazar Sarah (124)",
      "Schmidt Jennifer (27)",
      "Stewart Robert (144)",
    ],
    [
      "Bradley Brian (22)",
      "Buchanan Amanda (136)",
      "Burke Dean (138)",
      "Clark Hannah (32)",
      "Delgado James (68)",
      "Dyer Sally (82)",
      "Fowler Frank (10)",
      "Frederick Kathy (105)",
      "Gillespie Jill (114)",
      "Hawkins Crystal (66)",
      "Hill Frank (80)",
      "James Maria (147)",
      "Johnson Allison (16)",
      "Keller Sandra (44)",
      "Long Minh (151)",
      "Malone Victoria (40)",
      "Martinez Gregory (137)",
      "Martinez Yolanda (56)",
      "Perez Heidi (52)",
      "Sanchez Shelley (131)",
      "Suarez Daniel (129)",
      "Ward Ashley (81)",
      "White Stacey (94)",
      "Williams John (60)",
      "Zuniga Ashley (142)",
    ],
  ];
}
