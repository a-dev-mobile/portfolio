// components/Footer.tsx
'use client'

import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()
  
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="text-xl font-medium">
              Dmitriy <span className="text-teal-500">Trofimov</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {t.footer.role}
            </p>
          </div>
          
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors">
              {t.navigation.about}
            </Link>
            <Link href="/skills" className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors">
              {t.navigation.skills}
            </Link>
            <Link href="/experience" className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors">
              {t.navigation.experience}
            </Link>
          </nav>
          
          <div className="flex space-x-4">
            <a href="https://github.com/a-dev-mobile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://t.me/dmitriy_tr" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm5.7-14.768c-.27-.118-1.707-.652-1.973-.728-1.276-.361-3.254.358-3.254.358s-4.838 1.441-8.466 3.222c-.455.229-.455.822-.084 1.135.365.31 1.09.633 1.09.633l2.223.684c.27 1.041 1.36 4.38 1.445 4.648.087.271.183.456.365.547.092.046.185.07.283.07.197 0 .411-.094.411-.094l1.267-.593 2.183 1.599c.918.638 1.631.139 1.833-.637 0 0 1.812-7.394 1.903-8.532.091-1.139-.273-1.616-.729-1.85-.272-.138-1.088-.364-1.497-.462z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/a-dev-mobile/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="mailto:wayofdt@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm5.369-14.709l-6.26 6.26c-.608.608-1.61.608-2.219 0-.609-.609-.609-1.611 0-2.22l6.26-6.26c.609-.609 1.611-.609 2.219 0 .609.609.609 1.611 0 2.22zm-8.699 1.019c.609-.609 1.611-.609 2.219 0 .609.609.609 1.611 0 2.22l-1.47 1.47c-.608.608-1.61.608-2.219 0-.609-.609-.609-1.611 0-2.22l1.47-1.47zm6.48.75c.609-.609 1.611-.609 2.219 0 .609.609.609 1.611 0 2.22l-2.94 2.939c-.608.608-1.61.608-2.219 0-.609-.609-.609-1.611 0-2.22l2.94-2.939z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Dmitriy Trofimov. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer