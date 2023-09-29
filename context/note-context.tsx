'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Note, NoteContextType } from '@/types';

const NoteContext = createContext<NoteContextType | undefined>(undefined);

// Define a custom hook to access the context
export const useNoteContext = (): NoteContextType => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
};

// Create a NoteProvider component
export const NoteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [nextId, setNextId] = useState<number>(0);

  // Define functions for adding, editing, and deleting notes

  function addNote(content: string) {
    const newNote: Note = {
      id: nextId,
      content: content,
    };
    setNotes([...notes, newNote]);
    setNextId((prev: number) => prev + 1);
  }

  function deleteNote(id: number) {
    setNotes(notes.filter((n) => n.id !== id));
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
