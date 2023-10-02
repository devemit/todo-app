import NoteList from '@/components/note-list';
import SideBar from '@/components/side-bar';
function Home() {
  return (
    <main className='flex gap-4'>
      <SideBar />
      <NoteList />
    </main>
  );
}

export default Home;
