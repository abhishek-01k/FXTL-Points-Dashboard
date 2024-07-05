import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FXTL-Points-Dashboard',
  description: 'Admin dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={true}
          storageKey='dashboard-theme'
        >
          <Provider>
            {children}
          </Provider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
