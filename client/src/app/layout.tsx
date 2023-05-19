import NavBar from '../components/app/NavBar';
import NavPosts from '../components/app/NavPosts';
import { Inter } from 'next/font/google';
import { StylesheetLinks, ScriptLinks } from '../Utils/ExternalLinks';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js + TypeScript Starter',
  description: 'Posts app built with Next.js and TypeScript, nestjs backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StylesheetLinks />
      </head>
      <body className={inter.className}>
        <NavPosts />
        <NavBar />
        {children}
        <ScriptLinks />
      </body>
    </html>
  );
}
