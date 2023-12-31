'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Note, NoteContextType } from '@/types';
import { useEffect } from 'react';

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
export const NoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [notes, setNotes] = useState<Note[]>([]);
   const [nextId, setNextId] = useState<number>(0);

   const noteColors = ['#FF5733', '#33FF57', '#3384FF', '#FF33F1', '#FFE933'];
   const colorIndex = notes.length % noteColors.length;

   useEffect(() => {
      // Load notes from localStorage during the initial component mount
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
         setNotes(JSON.parse(storedNotes));
      }
   }, []);

   function addNote(content: string, title: string) {
      const newNote: Note = {
         id: nextId,
         title: title,
         content: content,
         color: noteColors[colorIndex],
      };
      setNotes([...notes, newNote]);
      setNextId((prev: number) => prev + 1);
      localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
   }

   function deleteNote(id: any) {
      const updatedNotes = notes.filter((n) => n.id !== id);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
   }

   return (
      <NoteContext.Provider value={{ notes, addNote, deleteNote }}>{children}</NoteContext.Provider>
   );
};

export default NoteContext;
