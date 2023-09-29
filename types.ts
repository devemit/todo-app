export type Note = {
    id: number;
    content: string;
  }
  export type NoteContextType = {
    notes: Note[];
    addNote: (content: string) => void;
    editNote: (id: number, content: string) => void;
    deleteNote: (id: number) => void;
  }