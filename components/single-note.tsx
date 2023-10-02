import { Button } from './ui/button';

export default function SingleNote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-green-100 p-5 rounded-2xl w-full'>{children}</div>
    // fix style
  );
}
