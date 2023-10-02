'use client';
import Controls from './controls';
export default function SideBar() {
  return (
    <aside className='h-full w-[50%] flex flex-col flex-1'>
      {/* fix style */}
      <Controls />
    </aside>
  );
}
