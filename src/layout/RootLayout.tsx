import { Outlet } from 'react-router-dom'
import Header from '@/layout/Header.tsx'
import Footer from '@/layout/Footer.tsx'

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
