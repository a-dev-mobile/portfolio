'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinkProps } from '../types/nav'
import { cn } from '../lib/utils'

export const NavLink: React.FC<NavLinkProps> = ({ href, label, exact = true }) => {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  
  return (
    <Link 
      href={href}
      className={cn(
        'h-full inline-flex items-center border-b-2 text-sm font-medium px-2 pt-1 transition-colors',
        isActive
          ? 'border-teal-500 text-gray-900 dark:text-white'
          : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}