window.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("toggleall").addEventListener("click", toggleall);
  document.getElementById("togglefireextinguisher").addEventListener("click", togglefireextinguisher);
  document.getElementById("toggledesks").addEventListener("click", toggledesks);
  document.getElementById("togglebrooms").addEventListener("click", togglebrooms);
});

function toggleall() {
  togglefireextinguisher();
  toggledesks();
  togglebrooms();
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
