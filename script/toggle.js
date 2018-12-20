window.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("showall").addEventListener("click", showall);
  document.getElementById("togglefireextinguisher").addEventListener("click", togglefireextinguisher);
  document.getElementById("toggledesks").addEventListener("click", toggledesks);
  document.getElementById("togglebrooms").addEventListener("click", togglebrooms);
});

function showall() {
  var x = document.getElementById("fireextinguisher");
  var y = document.getElementById("desks");
  var z = document.getElementById("brooms");
  x.style.display = "block";
  y.style.display = "block";
  z.style.display = "block";
}


function togglefireextinguisher() {
  var x = document.getElementById("fireextinguisher");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggledesks() {
  var x = document.getElementById("desks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglebrooms() {
  var x = document.getElementById("brooms");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
