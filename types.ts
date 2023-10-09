export type Note = {
    id: number;
    title:string;
    content: string;
    color:string;

  }
  export type NoteContextType = {
    notes: Note[];
    addNote: (content: string,title:string) => void;
    deleteNote: (id: number) => void;
  }