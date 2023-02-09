import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    {/* navbar above */}
    <Component {...pageProps} />
    {/* footer below */}
    </>
  )
}
