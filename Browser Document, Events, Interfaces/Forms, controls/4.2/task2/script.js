let table = document.getElementById("bagua-table");

let editingTd;

table.onclick = function(event) {

  let target = event.target.closest(".stopEdit, .confirmEdit, td");

  if (!table.contains(target)) return;

  if (target.className == "stopEdit") {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == "confirmEdit") {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == "TD") {
    if (editingTd) return;

    makeTdEditable(target);
  }

};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add("tdEdit");

  let textArea = document.createElement("textarea");
  textArea.style.width = (td.clientWidth + 20) + "px";
  textArea.style.height = (td.clientHeight + 20) + "px";
  textArea.className = "editArea";

  textArea.value = td.innerHTML;
  td.innerHTML = "";
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="editBtns"><button class="confirmEdit">OK</button><button class="stopEdit">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove("tdEdit");
  editingTd = null;
}