$(function() {
    var chart = document.getElementById("chart");
  
    var rowInput = document.getElementById("rowsIn");
    var colInput = document.getElementById("columnsIn");
    var paddingInput = document.getElementById("paddingIn")
  
    // Initialize the value of rows, columns, and padding
    var rowCount = rowInput.getAttribute("value");
    var colCount = colInput.getAttribute("value");
    var paddingValue = paddingInput.getAttribute("value");
  
    // Default number of rows
    for (let i = 0; i < rowCount; i++) {
      let newRow = document.createElement("div");
      newRow.className = 'chartRow';
      chart.appendChild(newRow);
    }
  
    var rows = document.querySelectorAll(".chartRow");

    // Creates the card element for given row
    function createCard(row) {
      let newCard = document.createElement("div");
      newCard.className = 'card';
      row.appendChild(newCard)

      let newInner = document.createElement("div");
      newInner.className = 'inner';
      newInner.style.backgroundImage = "url(covers/either-or.jpg)";
      newInner.setAttribute("draggable", "true")

      newCard.style.padding = paddingValue;
      newCard.appendChild(newInner)
    }
  
    // Default number of columns
    rows.forEach(row => {
      for (let i=0; i<colCount; i++) {
        createCard(row);
      }
    });
  
    // Update number of rows
    function updateRow() {
      rowInput = document.getElementById("rowsOut").innerHTML;
  
      while (rowInput > rowCount){
        let newRow = document.createElement("div");
        newRow.className = 'chartRow';
        chart.appendChild(newRow);
        createRow(newRow);
        rowCount++;
      }
  
      while (rowInput < rowCount) {
        $(".chartRow").last().remove();
        rowCount--;
      }
      console.log(rowInput)
    }
  
    // Update number of columns
    function updateCol() {
      colInput = document.getElementById("columnsOut").innerHTML;
  
      while (colInput > colCount) {
        createCol();
        colCount++;
      }
  
      while (colInput < colCount) {
        removeCol();
        colCount--;
      }
      console.log(colInput)
    }
  
    // Create a new row of cards
    function createRow(row) {
      for (let i = 0; i < colCount; i++) {
        createCard(row);
      }
    }
  
    // Create a new column of cards
    function createCol() {
      const rows = document.querySelectorAll(".chartRow")
      rows.forEach(row => {  
        createCard(row);
      });
    }
  
    // Remove the rightmost column
    function removeCol() {
      const rows = document.querySelectorAll(".chartRow");
      rows.forEach(row => {
        row.removeChild(row.lastChild);
      });
    }
  
    // Change card element padding according to slider
    function updatePadding() {
      var cards = document.querySelectorAll(".card");
      paddingInput = document.getElementById("paddingOut").innerHTML;
      paddingValue = paddingInput.toString() + "px";
      cards.forEach(card => {
        card.style.padding = paddingValue;
      });
    }

    function searchMusic() {
      let input = document.getElementById("searchInput");
      console.log(input.value);
      // Search last fm
    }

    function searchBooks() {
      let input = document.getElementById("searchInput");
      console.log(input.value);
      // Search Goodreads or similar site
    }

    function searchMovies() {
      let input = document.getElementById("searchInput");
      console.log(input.value);
      // Search letterboxd and imdb
    }

    function selectedDisplay() {
      switch (parseInt(selectedOption.selectedIndex)) {
        case 0:
          document.getElementById("searchInput").setAttribute("placeholder", "Album or artist");
          break;
        case 1:
          document.getElementById("searchInput").setAttribute("placeholder", "Movie title");
          break;
        case 2:
          document.getElementById("searchInput").setAttribute("placeholder", "Book title or author");
          break;
      }
    }

    function selectedType(event) {
      event.preventDefault();
      switch (parseInt(selectedOption.selectedIndex)) {
        case 0:
          searchMusic();
          break;
        case 1:
          searchMovies();
          break;
        case 2:
          searchBooks();
          break;
      }
    }
    
    // Rows slider input listener
    rowInput.addEventListener("input", updateRow);
    // Columns slider input listener
    colInput.addEventListener("input", updateCol);
    // Padding slider input listener
    paddingInput.addEventListener("input", updatePadding);

    var selectedOption = document.getElementById("selectType");
    selectedOption.addEventListener("change", selectedDisplay);

    const form = document.getElementById("searchContainer");
    form.addEventListener("submit", selectedType);
  });