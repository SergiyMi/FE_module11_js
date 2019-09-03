import { notepad } from "./model";

function removeListItem (note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    notepad.deleteNote(id);
    li.remove();
}

export default removeListItem;