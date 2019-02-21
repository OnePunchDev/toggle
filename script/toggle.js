var layercontainer, filtercontainer, layerlist, checkboxlist

window.addEventListener("DOMContentLoaded", function(event) {
  let togglecheckbox = document.getElementById("toggle")
  let layer1checkbox = document.getElementById("layer1checkbox")
  let layer2checkbox = document.getElementById("layer2checkbox")
  let layer3checkbox = document.getElementById("layer3checkbox")
  togglecheckbox.addEventListener("click", toggle);
  layer1checkbox.addEventListener("change", function() {
    show("layer1", layer1checkbox)
  });
  layer2checkbox.addEventListener("change", function() {
    show("layer2", layer2checkbox)
  });
  layer3checkbox.addEventListener("change", function() {
    show("layer3", layer3checkbox)
  });


  populateLayerList("layercontainer", '.layer');
  populateCheckboxList("filtercontainer", 'input');
});

function populateLayerList(container, layers) {
  layercontainer = document.getElementById(container)
  layerlist = layercontainer.querySelectorAll(layers)
}

function populateCheckboxList (container, checkboxes) {
  filtercontainer = document.getElementById(container)
  checkboxlist = filtercontainer.querySelectorAll(checkboxes)
}

function toggle() {
  isshown();
  if (isshown() === true) {
    hideall();
  } else {
    showall();
  }
}

function isshown() {
  let i = 0
  let shown = false
  do {
    if ( window.getComputedStyle(layerlist[i], null).getPropertyValue("display") === 'block') {
      shown = true;
    }
    ++i;
  }
  while (i < layerlist.length && shown !== true);
  return shown;
}

function hideall() {
  for (let i = 0; i < layerlist.length; ++i) {
    layerlist[i].classList.add("hide");
  }
  uncheck();
}

function showall() {
  for (let i = 0; i < layerlist.length; ++i) {
    layerlist[i].classList.remove("hide");
  }
  check();
}

function uncheck() {
  for (let i = 0; i < checkboxlist.length; ++i) {
    checkboxlist[i].checked = false;
  }
}

function check() {
  for (let i = 0; i < checkboxlist.length; ++i) {
    checkboxlist[i].checked = true;
  }
}

function show(image, checkbox) {
  let x = document.getElementById(image)
  if (ischecked(checkbox) === true) {
    x.classList.remove("hide");
  } else {
    x.classList.add("hide");
  }
}

function ischecked(checkbox) {
  if (checkbox.checked === true) {
    return true;
  } else {
    return false;
  }
}
