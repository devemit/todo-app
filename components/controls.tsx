import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useNoteContext } from '@/context/note-context';

export default function Controls() {
  const { addNote } = useNoteContext();
  const [noteTitle, setnoteTitle] = useState('');
  const [noteContent, setnoteContent] = useState('');

  function handleAddNote() {
    if (noteContent.trim() !== '' && noteTitle.trim() !== '') {
      addNote(noteTitle, noteContent);
      setnoteTitle('');
      setnoteContent('');
    }
  }

  return (
    <div className='flex flex-col gap-2'>
      <Input
        placeholder='Note title'
        value={noteTitle}
        onChange={(e) => setnoteTitle(e.target.value)}
      />
      <Textarea
        placeholder='Note content'
        value={noteContent}
        onChange={(e) => setnoteContent(e.target.value)}
      />
      <Button size={'sm'} onClick={handleAddNote}>
        Notify
      </Button>
    </div>
  );
}
