// layout.tsx
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export const metadata = {
  title: 'Parv’s Portfolio',
  description: 'My personal site built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
