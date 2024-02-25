var selectedRow=null;

function onFormSubmit() {
  if (validate()) {
      var Data = formRead();
      if (selectedRow == null)
          insertNewData(Data);
      else
          updateRecord(Data);
      onReset();
  }
}


function formRead() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["ID"] = document.getElementById("ID").value;
  formData["Faculty"] = document.getElementById("Faculty").value;
  formData["Section"] = document.getElementById("Section").value;
  return formData;
}
function insertNewData(data) {
  var table = document
    .getElementById("StudentList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.ID;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Faculty;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Section;
  cell5 = newRow.insertCell(4);

  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function onReset(){
  document.getElementById("name").value="";
  document.getElementById("ID").value="";
  document.getElementById("Faculty").value="";
  document.getElementById("Section").value="";
  selectedRow=null;
}
function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("name").value=selectedRow.cells[0].innerHTML;
document.getElementById("ID").value=selectedRow.cells[1].innerHTML;
document.getElementById("Faculty").value=selectedRow.cells[2].innerHTML;
document.getElementById("Section").value=selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.ID;
  selectedRow.cells[2].innerHTML = formData.Faculty;
  selectedRow.cells[3].innerHTML = formData.Section;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      var row = td.parentElement.parentElement;
     document.getElementById("StudentList").deleteRow(row.rowIndex);
      onReset();
 
    }
}
function validate() {
  isValid = true;
  if (document.getElementById("name").value == "") {
      isValid = false;
      document.getElementById("nameValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("nameValidationError").classList.contains("hide"))
          document.getElementById("nameValidationError").classList.add("hide");
  }
  return isValid;
}