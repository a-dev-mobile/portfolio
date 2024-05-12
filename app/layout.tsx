import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavBar from './components/Navbar'
import { Provider } from './components/Provider'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dmitriy Trofimov - Portfolio',
  description: 'For my own understanding of what I have achieved',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={`${font.className} 
      bg-white dark:bg-[#090908]
      text-black dark:text-white 
      selection:bg-gray-300 dark:selection:bg-gray-700
      h-full
       `}>
        <Provider>
          <NavBar />
          <main className='max-w-6xl mx-auto px-4 '>
            {children}

          </main>

        </Provider>
      </body>
    </html>
  )
}
