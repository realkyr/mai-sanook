import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import AntdRegistry from '@/lib/antd-registry'
import StyledComponentsRegistry from '@/lib/styled-component-registry'
import Header from '@/components/Header'
import DarkModeProvider from '@/lib/DarkModeProvider'
import { baseUrl } from '@/utils/request'
import { getCategories } from '@/utils/getCategories'

export const metadata: Metadata = {
  title: 'Mai Sanook App',
  description: 'News App clone from Sanook App called Mai Sanook'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <Header categories={categories} />
            <DarkModeProvider>{children}</DarkModeProvider>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  )
}
