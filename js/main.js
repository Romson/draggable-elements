const filled = document.querySelector(".filled"),
  empties = document.querySelectorAll(".blank");

filled.addEventListener("dragstart", dragStart);
filled.addEventListener("dragend", dragEnd);

for (const blank of empties) {
  blank.addEventListener("dragover", dragOver);
  blank.addEventListener("dragenter", dragEnter);
  blank.addEventListener("dragleave", dragLeave);
  blank.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "filled";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave(e) {
  this.className = "blank";
}

function dragDrop(e) {
  this.className = "blank";
  this.append(filled);
}
