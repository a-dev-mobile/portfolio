// Layout.tsx improvements
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Provider } from './components/Provider'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
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
  description: 'Senior Full Stack Developer specializing in Flutter, Rust, C# and Web Development',
  keywords: ['Flutter Developer', 'Full Stack', 'Mobile Development', 'Rust Developer', 'C# Developer'],
  authors: [{ name: 'Dmitriy Trofimov' }],
  openGraph: {
    title: 'Dmitriy Trofimov - Portfolio',
    description: 'Senior Full Stack Developer specializing in Flutter, Rust, C# and Web Development',
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
        bg-white dark:bg-[#0c0c0e]
        text-black dark:text-white 
        selection:bg-teal-200 dark:selection:bg-teal-800
        min-h-screen flex flex-col
        antialiased
      `}>
        <Provider>
          <NavBar />
          <main className="max-w-6xl mx-auto px-4 flex-grow w-full py-6">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}