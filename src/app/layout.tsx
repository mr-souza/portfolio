import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Abril_Fatface } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-poppins',
});
const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-abril-fatface',
});

export const metadata: Metadata = {
  title: 'Marcelo Souza - Portfolio',
  description:
    'Frontend Engineer and UX/UI Designer, portfolio created with Next.Js and Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${abrilFatface.variable}`}>
        {children}
      </body>
    </html>
  );
}
