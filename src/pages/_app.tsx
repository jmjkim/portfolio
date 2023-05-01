import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  // const myFont = localFont({ src: '../asset/font/BrownSugar.ttf' })

  return (
    // <main className={myFont.className}>
    // </main>
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
