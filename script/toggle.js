
window.addEventListener("DOMContentLoaded", function(event) {
  var toggleallcbox = document.getElementById("toggleall")
  var redcirclecbox = document.getElementById("showredcircle")
  var greensquarecbox = document.getElementById("showgreensquare")
  var purpletrianglecbox = document.getElementById("showpurpletriangle")
  toggleallcbox.addEventListener("click", toggleall);
  redcirclecbox.addEventListener("change", function(){show("redcircle", redcirclecbox)});
  greensquarecbox.addEventListener("change", function(){show("greensquare", greensquarecbox)});
  purpletrianglecbox.addEventListener("change", function(){show("purpletriangle", purpletrianglecbox)});
});

var hidden = false;

function toggleall() {
  if (hidden == false) {
    hideall();
    hidden = true;
  } else {
    showall();
    hidden = false;
  }
}

function hideall() {
  var mapitems = document.getElementById("mapitems")
  var imagelist = mapitems.querySelectorAll('img')
  for (let i = 0; i < imagelist.length ; ++i) {
    imagelist[i].style.display = "none";
  }
  uncheck();
}

function showall() {
  var mapitems = document.getElementById("mapitems")
  var imagelist = mapitems.querySelectorAll('img')
  for (let i = 0; i < imagelist.length ; ++i) {
    imagelist[i].style.display = "block";
  }
  check();
}

function uncheck() {
  var filterbar = document.getElementById("filterbar")
  var checkboxlist = filterbar.querySelectorAll('input')
  for (let i = 0; i < checkboxlist.length ; ++i) {
      checkboxlist[i].checked = false;
  }
}

function check() {
  var filterbar = document.getElementById("filterbar")
  var checkboxlist = filterbar.querySelectorAll('input')
  for (let i = 0; i < checkboxlist.length ; ++i) {
      checkboxlist[i].checked = true;
  }
}

function show(image, checkbox) {
  var x = document.getElementById(image)
  if (ischecked(checkbox) === true) {
    x.style.display = "block";
    hidden = false;
  } else {
    x.style.display = "none";
    hidden = true;
  }
}

function ischecked(checkbox) {
  if (checkbox.checked === true) {
    return true;
  } else {
    return false;
  }
}

