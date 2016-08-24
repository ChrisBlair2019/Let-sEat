var table;
var tableContainer;

window.onload = function init()
{
  table = document.getElementById("table");
  tableHeader = document.getElementById("tableHeader");
  tableContainer = document.getElementById("tableContainer");
  addFriendToList("123", "Ling Ho");
  addFriendToList("1234", "Doctor Who");
  addFriendToList("1235", "Sir Butt Lord The Fifth");
}

function addFriendToList(memberIdStr, FirstLastNameStr)
{
  var row = table.insertRow(-1);
  //Creates the Name row for the table
  var cell0 = row.insertCell(0);
  var nameInput = document.createTextNode(FirstLastNameStr);
  cell0.appendChild(nameInput);

  //Creates the checkbox for inviting the person or not
  var cell1 = row.insertCell(1);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = "value";
  cell1.appendChild(checkbox);
}
