import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar";
import ProviderNextUI from "@/app/nextUIProvider";
import NavbarNextUI from '@/components/NavbarNextUI';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'UX/UI design + developer portfolio',
  openGraph: {
    images: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/409820625_330241559868792_739903076753958245_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFiKUFVnZcOO_hBS2O-7SZ0lLx7U2msjPaUvHtTaayM9myXbt08V1rT3v2j_PcSjBYHl_87aq0YtGXacsowYXKL&_nc_ohc=hmv2N9QtIBoAX_NKz_9&_nc_ht=scontent.fpnh1-1.fna&oh=00_AfAoTwrcHXMELyX2r8rGF_WNN6IwDkG6eNUX3FKjS2yNHQ&oe=657FA546',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderNextUI>
          <Navbar />
          <NavbarNextUI />
          {children}

        </ProviderNextUI>
      </body>
    </html>
  )
}
