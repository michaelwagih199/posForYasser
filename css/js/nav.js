function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return (today = mm + "/" + dd + "/" + yyyy);
}

var paragraph = document.getElementById("dateToday");
var text = document.createTextNode(getDate());
paragraph.appendChild(text);



function openSlideMenu(){
  document.getElementById('side-menu').style.width = '200px';
  document.getElementById('main').style.marginRight = '100px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
}
