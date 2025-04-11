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
      href={href as any} // Type assertion to fix the type compatibility issue
      className={cn(
        'relative h-full inline-flex items-center text-sm font-medium px-2 pt-1 transition-colors group',
        isActive
          ? 'text-gray-900 dark:text-white'
          : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      <span 
        className={cn(
          'absolute bottom-0 inset-x-0 h-0.5 bg-teal-500 transition-all duration-300',
          isActive ? 'w-full' : 'w-0'
        )}
      />
    </Link>
  )
}