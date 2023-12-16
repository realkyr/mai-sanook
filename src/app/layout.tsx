import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import AntdRegistry from '@/lib/antd-registry'
import StyledComponentsRegistry from '@/lib/styled-component-registry'
import Header from '@/components/Header'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atom/dark-mode'
import classNames from 'classnames'
import DarkModeProvider from '@/lib/DarkModeProvider'

export const metadata: Metadata = {
  title: 'Mai Sanook App',
  description: 'News App clone from Sanook App called Mai Sanook'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <DarkModeProvider>
          <AntdRegistry>
            <StyledComponentsRegistry>
              <Header />

              {children}
            </StyledComponentsRegistry>
          </AntdRegistry>
        </DarkModeProvider>
      </body>
    </html>
  )
}
