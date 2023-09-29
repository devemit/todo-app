'use client';
import { Note } from '@/types';
import { useNoteContext } from '@/context/note-context';
import SingleNote from './single-note';
import { Button } from './ui/button';
import Controls from './controls';

export default function NoteList() {
  const { notes, deleteNote } = useNoteContext();

  function handleDeleteNote(id: number) {
    deleteNote(id);
  }
  return (
    <main>
      <Controls />
      <section className='flex flex-col my-2'>
        {notes.map((note: Note) => {
          return (
            <div key={note.id} className='flex justify-between my-1 gap-1'>
              <SingleNote content={note.content} />
              <Button
                variant={'destructive'}
                size={'sm'}
                onClick={() => handleDeleteNote(note.id)}
              >
                Clear Note
              </Button>
            </div>
          );
        })}
        {notes.length === 0 && (
          <h1 className='text-white'>You dont have added notes!</h1>
        )}
      </section>
    </main>
  );
}
