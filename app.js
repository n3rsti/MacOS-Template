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
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
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
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
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
function openNotepad(a){
  document.getElementById("drag-" + a).style.display = "block";
  
}
function newNote(){
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
function save(){
  document.getElementById("drag-2").classList.add("draggable");
  document.getElementById("newNote").style.display = "none";
  var noteDiv = document.getElementById("container");
  var newNote = document.createElement('div');
  newNote.classList.add("note");
  var newTitle = document.createElement('div');
  newTitle.classList.add("note-title");
  newTitle.id = "note-title";
  var newDescription = document.createElement('div');
  newDescription.classList.add('note-description');
  newDescription.id = "note-description";

  noteDiv.append(newNote);
  newNote.append(newTitle);
  newNote.append(newDescription);

  var description = document.getElementById("newDescription").value;
  var title = document.getElementById("newNote-title").value;
  var content = document.getElementById("newNote-content").value;
  titles.push(title);
  descriptions.push(description);
 /* document.getElementById("note-description").innerText = descriptions[count];
  document.getElementById("note-title").innerText = titles[count]; */
  newTitle.innerText = titles[count];
  newDescription.innerText = descriptions[count];
  count++;
  description = document.getElementById("newDescription").value = "";
  title = document.getElementById("newNote-title").value = "";
  content = document.getElementById("newNote-content").value = "";
}