import { notepad } from "./model";
import renderNoteList from './renderNoteList';
import refs from "../utils/refs";

function searchNote(event) {
    event.preventDefault();
    const { target } = event;
    const searchItems = notepad.filterNotesByQuery(target.value);
    console.table(searchItems);
    renderNoteList(refs.list, searchItems);
}

export default searchNote;