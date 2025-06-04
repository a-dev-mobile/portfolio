'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavLink } from './NavLink'
import ThemeButton from './ThemeButton'
import { LanguageSwitch } from './LanguageSwitch'
import { useTranslation } from '../hooks/useTranslation'
import { cn } from '../lib/utils'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const navItems = [
    { href: '/', label: t.navigation.about },
    { href: '/skills', label: t.navigation.skills },
    { href: '/experience', label: t.navigation.experience },
    { href: '/work-projects', label: t.navigation.workProjects },
    { href: '/pet-projects', label: t.navigation.petProjects },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={cn(
      "sticky top-0 z-50 backdrop-blur-md transition-all duration-300",
      isScrolled 
        ? "bg-white/90 dark:bg-black/90 shadow-sm" 
        : "bg-white/60 dark:bg-black/60"
    )}>
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex h-16 justify-between items-center">
              <Link 
                href="/"
                className="text-2xl font-medium hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                Dmitriy <span className="text-teal-500">Trofimov</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full duration-300"></span>
              </Link>

              <div className="hidden md:flex md:items-center space-x-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
                <div className="flex items-center space-x-3">
                  <LanguageSwitch />
                  <ThemeButton />
                </div>
              </div>

              <div className="flex md:hidden items-center gap-2">
                <LanguageSwitch />
                <ThemeButton />
                <Disclosure.Button 
                  className={cn(
                    "p-2 rounded-lg text-gray-500",
                    "hover:bg-gray-100 hover:text-gray-900",
                    "dark:hover:bg-gray-800 dark:hover:text-white",
                    "focus:outline-none focus:ring-2 focus:ring-teal-500"
                  )}
                >
                  <span className="sr-only">
                    {open ? 'Close main menu' : 'Open main menu'}
                  </span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform -translate-y-6 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-200 ease-in"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-6 opacity-0"
          >
            <Disclosure.Panel 
              className={cn(
                "md:hidden",
                isScrolled && "fixed top-16 inset-x-0 bg-white/95 dark:bg-black/95 shadow-lg rounded-b-lg"
              )}
            >
              <div className="space-y-1 px-4 py-3">
                {navItems.map((item) => (
                  <Disclosure.Button 
                    key={item.href}
                    as="div"
                    className={cn(
                      "py-2 transition-colors",
                      pathname === item.href 
                        ? "border-l-4 border-teal-500 pl-3" 
                        : "pl-4"
                    )}
                  >
                    <NavLink {...item} />
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}