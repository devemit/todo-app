export default function SingleNote({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='p-5 rounded-2xl w-full overflow-hidden'
    >
      {children}
    </div>
  );
}
