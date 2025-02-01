// Layout.tsx improvements
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Provider } from './components/Provider'
import NavBar from './components/Navbar'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: {
    default: 'Dmitriy Trofimov - Portfolio',
    template: '%s | Dmitriy Trofimov'
  },
  description: 'Senior Full Stack Developer specializing in Flutter, Go and Web Development',
  keywords: ['Flutter Developer', 'Go Developer', 'Full Stack', 'Mobile Development'],
  authors: [{ name: 'Dmitriy Trofimov' }],
  openGraph: {
  title: 'Dmitriy Trofimov - Portfolio',
    description: 'Senior Full Stack Developer specializing in Flutter, Go and Web Development',
    url: 'https://your-domain.com',
    siteName: 'Dmitriy Trofimov Portfolio',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={montserrat.variable}>
      <body className={`
        font-sans
      bg-white dark:bg-[#090908]
      text-black dark:text-white 
      selection:bg-gray-300 dark:selection:bg-gray-700
        min-h-screen flex flex-col
       `}>
        <Provider>
          <NavBar />
          <main className="max-w-6xl mx-auto px-4 flex-grow">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}