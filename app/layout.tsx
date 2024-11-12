import { Navbar, Footer } from '@/components'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

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
         return <GoogleAnalytics gaId="G-WDD1Q5SL7C" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
