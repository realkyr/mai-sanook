'use client'
import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atom/dark-mode'

const DarkModeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    // attach dark mode to body if dark mode is true and remove if false
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  return children
}

export default DarkModeProvider
