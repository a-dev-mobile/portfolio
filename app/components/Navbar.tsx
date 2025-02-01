'use client'

import { Disclosure } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavLink } from './NavLink'
import ThemeButton from './ThemeButton'
import { cn } from '../lib/utils'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
    { href: '/' as const, label: 'Обо мне' },
    { href: '/pet-projects' as const, label: 'Личные проекты' },
  ] as const;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
        const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        {({ open }) => (
            <>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex h-16 justify-between items-center">
              <Link 
                href="/"
                className="text-2xl font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                                        Dmitriy <span className="text-teal-500">Trofimov</span>
                                </Link>

              <div className="hidden md:flex md:items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
                <ThemeButton />
                            </div>

              <div className="flex md:hidden items-center gap-2">
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

          <Disclosure.Panel 
            className={cn(
              "md:hidden",
              isScrolled && "fixed top-16 inset-x-0 bg-white dark:bg-black"
            )}
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
                        </div>
                    </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}