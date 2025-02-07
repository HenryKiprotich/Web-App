import '@/app/ui/global.css';
import Footer from '@/app/ui/footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'NetGuard App',
  description: 'A web application for moderating social media comments',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-grow">          
          <div className="flex-grow p-6">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

