'use client';
import { Note } from '@/types';
import { useNoteContext } from '@/context/note-context';
import SingleNote from './single-note';

export default function NoteList() {
  const { notes, deleteNote } = useNoteContext();

  function handleDeleteNote(id: number) {
    deleteNote(id);
  }

  return (
    <main className='flex flex-col w-full h-full flex-1'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {notes.map((note: Note) => {
          return (
            <div key={note.id}>
              <SingleNote>
                <div className='flex justify-between items-center gap-4'>
                  <p className='font-bold text-slate-900 text-2xl truncate'>
                    {note.content}
                  </p>
                  <span
                    className='font-extrabold'
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    x
                  </span>
                </div>
                <h1 className='text-slate-600 font-bold text-sm'>
                  {note.title}
                </h1>
              </SingleNote>
            </div>
          );
        })}
        {notes.length === 0 && (
          <h2 className='text-white text-center text-xl'>No notes to show.</h2>
        )}
      </section>
    </main>
  );
}
