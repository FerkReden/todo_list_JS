 

window.addEventListener('load', () => {
    
    const form = document.querySelector('#new-note-form');
    const input = document.querySelector('#new-note-input');
    const listEl = document.querySelector('#notes');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const note = input.value;

        if (!note) {
            alert("Please add note!");
            return;
        }

        const noteEl = document.createElement("div");
        noteEl.classList.add("note");

        const noteContentEl = document.createElement("div");
        noteContentEl.classList.add("content");

        noteEl.appendChild(noteContentEl);

        const noteInputEl = document.createElement("input");
        noteInputEl.classList.add("text");
        noteInputEl.type = "text";
        noteInputEl.value = note;
        noteInputEl.setAttribute("readonly", "readonly");

        noteContentEl.appendChild(noteInputEl);

        const noteActionEl = document.createElement("div");
        noteActionEl.classList.add("actions");

        const noteEditEl = document.createElement("button");
        noteEditEl.classList.add("edit");
        noteEditEl.innerHTML = "Edit";

        const noteDeleteEl = document.createElement("button");
        noteDeleteEl.classList.add("delete");
        noteDeleteEl.innerHTML = "Delete";

        noteActionEl.appendChild(noteEditEl);
        noteActionEl.appendChild(noteDeleteEl);

        noteEl.appendChild(noteActionEl);

        listEl.appendChild(noteEl);

        input.value = "";

        noteEditEl.addEventListener('click', () => {
            if (noteEditEl.innerText.toLowerCase() == "edit") {
                noteInputEl.removeAttribute("readonly");
                noteInputEl.focus();
                noteEditEl.innerText = "Save";
            }
            else {
                noteInputEl.setAttribute("readonly", "readonly");
                noteEditEl.innerText = "Edit";
            }
        });

        noteDeleteEl.addEventListener('click',() => {
            listEl.removeChild(noteEl);
        });
    });
}); 