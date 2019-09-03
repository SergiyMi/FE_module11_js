class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
   
    get notes() {
      return this._notes;
    }
  
    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    }
  
    saveNote(note) {
        this._notes.push(note);
        return note;
    }
  
    deleteNote(id) {
      this._notes = this._notes.filter(el => el.id !== id);
    }
  
    updateNoteContent(id, updatedContent) {
      Object.assign(this.findNoteById(id), updatedContent);
      return this;
    }
  
    updateNotePriority(id, updatePriority) {
      this.findNoteById(id).priority = updatePriority;
      return this;
    }
  
    filterNotesByQuery(query) {
      return this._notes.filter(el => el.title.toLowerCase().includes(query) ||
      el.body.toLowerCase().includes(query));
    }
  
    filterNotesByPriority(priority) {
      return this._notes.filter(el => el.priority === priority);
    }
  }

  export default Notepad;