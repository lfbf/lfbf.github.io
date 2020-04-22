var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  let getinthemood = document.getElementById("getinthemood");
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

let name = document.getElementById("name");
name.addEventListener('input', typeAndScream);

getinthemood.addEventListener('click', goDark);

let dontClickMe = document.getElementById("dontclickme");
dontClickMe.addEventListener("click", complainMessage);

let tellMe = document.getElementById("tellme");
tellMe.addEventListener("click", finishTheStory);