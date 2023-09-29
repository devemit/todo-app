import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNoteContext } from '@/context/note-context';

export default function Controls() {
  const { addNote } = useNoteContext();
  const [noteText, setnoteText] = useState('');

  function handleAddNote() {
    if (noteText.trim() !== '') {
      addNote(noteText);
      setnoteText('');
    }
  }

  return (
    <div className='flex gap-2'>
      <Input
        placeholder='Notify yourself'
        value={noteText}
        onChange={(e) => {
          setnoteText(e.target.value);
        }}
      />
      <Button size={'sm'} onClick={handleAddNote}>
        Add Todo
      </Button>
    </div>
  );
}
