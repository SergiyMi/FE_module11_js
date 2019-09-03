import shortid from 'shortid';
import refs from "../utils/refs";
import { notepad } from "./model";
import addListItem from './addListItem';
import { closeEditor,  notificationAdded, notificationError } from '../utils/libraries';



function addNote({ target }) {
    event.preventDefault();
    if (target.nodeName !== 'BUTTON') return;
    if (target.textContent === 'Cancel') return;
    if (target.type === 'submit') {
        const title = refs.title.value || '';
        const body = refs.body.value || '';
        const priority = 0;
        if (title.length === 0 || body.length === 0) {
            notificationError();
            return;
        }
        const note = {
            id: shortid.generate(),
            title,
            body,
            priority,
        }
        notepad.saveNote(note);
        notificationAdded();
        refs.title.value = '';
        refs.body.value = '';
        // target.reset();
        closeEditor();
        addListItem(refs.list, note);
        // localStorage.setItem("key-note", JSON.stringify(notepad._notes));
    }
}

export default addNote;