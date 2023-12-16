'use client'

import React from 'react'
import Link from 'next/link'
import NewsCard from '@/components/NewsCard'

const ClientLayout = ({ data }: any) => {
  return data.map((item: any) => <NewsCard item={item} />)
}

export default ClientLayout
