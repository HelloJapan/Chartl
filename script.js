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
  
    // Default number of columns
    rows.forEach(row => {
      for (let i=0; i<colCount; i++) {
        let newCard = document.createElement("div");
        newCard.className = 'card';
        row.appendChild(newCard)
        let newInner = document.createElement("div");
        newInner.className = 'inner';
        newInner.style.backgroundImage = "url(eitheror.jpg)";
        newInner.setAttribute("draggable", "true")
        newCard.style.padding = paddingValue;
        newCard.appendChild(newInner)
      }
    });
  
    // Update number of rows
    function updateRow() {
      rowInput = document.getElementById("rowsOut").innerHTML;
  
      while (rowInput > rowCount){
        let newRow = document.createElement("div");
        newRow.className = 'chartRow';
        chart.appendChild(newRow);
        rowCount++
        createCard(newRow);
      }
  
      while (rowInput < rowCount){
        $(".chartRow").last().remove( );
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
        colCount--
      }
      console.log(colInput)
    }
  
    function createCard(row) {
      for (let i = 0; i < colInput; i++) {
        let newCard = document.createElement("div");
        newCard.className = 'card';
        row.appendChild(newCard)
        let newInner = document.createElement("div");
        newInner.className = 'inner';
        newInner.style.backgroundImage = "url(eitheror.jpg)";
        newInner.setAttribute("draggable", "true")
        newCard.style.padding = paddingValue;
        newCard.appendChild(newInner)
      }
    }
  
    function createCol() {
      const rows = document.querySelectorAll(".chartRow")
      rows.forEach(row => {  
        let newCard = document.createElement("div");
        newCard.className = 'card';
        row.appendChild(newCard)
        let newInner = document.createElement("div");
        newInner.className = 'inner';
        newInner.style.backgroundImage = "url(eitheror.jpg)";
        newInner.setAttribute("draggable", "true")
        newCard.style.padding = paddingValue;
        newCard.appendChild(newInner)
      });
    }
  
    function removeCol() {
      const rows = document.querySelectorAll(".chartRow");
      rows.forEach(row => {
        row.removeChild(row.lastChild);
      });
    }
  
    function updatePadding() {
      var cards = document.querySelectorAll(".card");
      paddingInput = document.getElementById("paddingOut").innerHTML;
      paddingValue = paddingInput.toString() + "px";
      cards.forEach(card => {
        card.style.padding = paddingValue;
      });
    }
    
    // Rows slider input listener
    rowInput.addEventListener("input", updateRow);
    // Columns slider input listener
    colInput.addEventListener("input", updateCol);
    // Padding slider input listener
    paddingInput.addEventListener("input", updatePadding);
  });