import './globals.css';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Loading from './loading';
import Navbar from '../src/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={`layout-root ${inter.className}`}>
          <div className={'navbar-root'}>
            <Navbar />
          </div>
          <div className={'children-root'}>{children}</div>
        </body>
      </Suspense>
    </html>
  );
}
