import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { NoteProvider } from '@/context/note-context';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Notified',
  description: 'Notes Applicaton',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-slate-900`}>
        <div className='h-screen flex flex-col max-w-3xl mx-auto p-4  cursor-pointer'>
          <NoteProvider>{children}</NoteProvider>
        </div>
      </body>
    </html>
  );
}
