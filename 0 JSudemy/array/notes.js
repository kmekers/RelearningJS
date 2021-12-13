const notes = ["note 1", "note 2", "note 3"];

/* notes.pop();
notes.push("My new note");
console.log(notes.shift());
notes.unshift("My first note"); */

/* notes.splice(1, 1, "this is the new second item");*/

notes[2] = "this is now the new note 3";

console.log(notes.length);
console.log(notes);

notes.forEach(function (note, index) {
  console.log(index, note);
});
for (let i = 2; i >= 0; i--) {
  console.log(i);
}

/* for (let i = 0; i < notes.length; i++) {
  console.log(notes[i]);

  // notes is array en I loopt die met de for function.
} */
/* for (let i = notes.length - 1; i >= 0; i--) {
console.log(notes[i]);} */

// notes is array en I loopt die met de for function.
