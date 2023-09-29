export default function SingleNote({ content }: { content: any }) {
  return (
    <div className='flex items-center bg-green-100 rounded-md w-full'>
      <p className='text-slate-800 px-3 font-bold'>{content}</p>
    </div>
  );
}
