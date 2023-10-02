export type Note = {
    id: number;
    title:string;
    content: string;

  }
  export type NoteContextType = {
    notes: Note[];
    addNote: (content: string,title:string) => void;
    // editNote: (id: number, content: string) => void;
    deleteNote: (id: number) => void;
  }