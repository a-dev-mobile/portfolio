import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
      setIsScrolled(position > 10)
    }

    window.addEventListener('scroll', updatePosition, { passive: true })

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return { scrollPosition, isScrolled }
}