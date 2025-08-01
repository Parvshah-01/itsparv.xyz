// layout.tsx
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Parv’s Portfolio',
  description: 'Parv’s Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights/>
        <Analytics/>
        <ClientWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
