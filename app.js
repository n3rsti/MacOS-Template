window.onload = function time() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes()
  if (minute < 10) {
    minute = "0" + minute;
  }
  document.getElementById("time").innerHTML = hour + ":" + minute;


}












// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: {
          top: 0,
          left: 0,
          bottom: 1,
          right: 1
        }
      }),
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
          Math.pow(event.pageY - event.y0, 2) | 0))
        .toFixed(2) + 'px');
    }
  });

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

function exit(a) {
  document.getElementById("drag-" + a).style.display = "none";
}

function minimize(a) {
  document.getElementById("drag-" + a).style.display = "none";
}

function openNotepad(a) {
  document.getElementById("drag-" + a).style.display = "block";

}

function newNote() {
  document.getElementById("drag-2").classList.remove("draggable");
  document.getElementById("newNote").style.display = "flex";
}
var titles = [

];
var descriptions = [

];
var contents = [

];
var count = 0;


var opened = false;
function save() {
  document.getElementById("drag-2").classList.add("draggable");
  document.getElementById("newNote").style.display = "none";
  var noteDiv = document.getElementById("container");
  var newNote = document.createElement('div');
  newNote.id = "newNote";
  newNote.classList.add("note");
  var newDescriptions = document.createElement('div');
  newDescriptions.classList.add('descriptions');
  var newTitle = document.createElement('div');
  newTitle.classList.add("note-title");
  newTitle.id = "note-title";
  var newDescription = document.createElement('div');
  newDescription.classList.add('note-description');
  newDescription.id = "note-description";
  var newContent = document.createElement('div');
  newContent.classList.add('content');
  var leftNote = document.createElement('div');
  leftNote.classList.add('left-note');
  var viewIcon = document.createElement('i');
  viewIcon.classList.add('fas');
  viewIcon.classList.add('fa-eye');

  var deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas');
  deleteIcon.classList.add('fa-times');

  var newNoteButtonView = document.createElement('button');
  newNoteButtonView.classList.add('view-button');
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.id = "delete-button";

  var readContent = document.createElement('div');
  readContent.classList.add('content');
  readContent.style.transition = ".3s";

  var contentP = document.createElement('h4');
  contentP.classList.add('content-span');
  if (count < 5) {

    noteDiv.append(newNote);
    newNote.append(newDescriptions)
    newDescriptions.append(newTitle);
    newDescriptions.append(newDescription);
    newDescriptions.append(leftNote);
    leftNote.append(newNoteButtonView);
    newNoteButtonView.append(viewIcon);
    leftNote.append(deleteButton);
    deleteButton.append(deleteIcon);
    newNote.append(readContent);
    readContent.append(contentP);

    var description = document.getElementById("newDescription").value;
    var title = document.getElementById("newNote-title").value;
    var content = document.getElementById("newNote-content").value;
    contents.push(content);
    titles.push(title);
    descriptions.push(description);
    newTitle.innerText = titles[count];
    newDescription.innerText = descriptions[count];
    contentP.innerText = contents[count];
    count++;
  }
  description = document.getElementById("newDescription").value = "";
  title = document.getElementById("newNote-title").value = "";
  content = document.getElementById("newNote-content").value = "";

  deleteButton.onclick = function () {
    noteDiv.removeChild(newNote);
  }
  
  newNoteButtonView.onclick = function () {
    if (opened == false) {
      readContent.style.height = "auto";
      opened = true;
    }
    else {
      readContent.style.height = "0";
      opened = false;
    }
  }





}