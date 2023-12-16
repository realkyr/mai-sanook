'use client'
import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atom/dark-mode'

const DarkModeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    const initialDarkMode = localStorage.getItem('darkMode')
    if (initialDarkMode === 'dark') {
      setDarkMode(true)
    }
    setIsMount(true)
  }, [])

  useEffect(() => {
    // attach dark mode to body if dark mode is true and remove if false
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }

    localStorage.setItem('darkMode', darkMode ? 'dark' : '')
  }, [darkMode])

  if (!isMount) return <div style={{ visibility: 'hidden' }}>{children}</div>

  return <>{children}</>
}

export default DarkModeProvider
