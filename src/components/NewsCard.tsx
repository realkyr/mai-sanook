'use client'

import React from 'react'
import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ item }: any) => {
  return (
    <Link href={`/news/${item.id}`}>
      <Card
        hoverable
        cover={
          <Image width={400} height={300} alt={item.headers} src={item.image} />
        }
      >
        <Card.Meta title={item.headers} description={item.summary} />
      </Card>
    </Link>
  )
}

export default NewsCard
