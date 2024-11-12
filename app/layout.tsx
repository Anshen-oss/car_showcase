import { Navbar, Footer } from '@/components'
import './globals.css'
import Script from 'next/script';

export const metadata = {
  title: 'Cars Showcase',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
 
      <body className="relative">
         <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
         </>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
