import { Image, Card, Divider, Row, Col, Carousel, Tag } from 'antd'
import styles from './page.module.css'
import { baseUrl } from '@/utils/request'
import React from 'react'
import NewsCard from '@/components/NewsCard'
import Link from 'next/link'

const getData = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

const getDataNoCache = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' })
  return await response.json()
}

export default async function Home() {
  const latestNews = await getDataNoCache(
    `${baseUrl}/news?_sort=publishedAt&_order=desc&_limit=10`
  )

  const mostViewNews = await getDataNoCache(
    `${baseUrl}/news?_sort=popularity&_order=desc&_limit=3`
  )

  const categories = await getData(`${baseUrl}/categories`)
  const highlightNewsByCategory = (
    await Promise.all(
      categories.map(async ({ category }: any) => {
        const data = await getDataNoCache(
          `${baseUrl}/news?category=${category}&_sort=publishedAt&_order=desc&_limit=3`
        )
        return data
      })
    )
  ).reduce((acc: any, cur: any, index) => {
    if (cur) {
      acc[categories[index].category] = cur
    }
    return acc
  }, {})

  return (
    <main>
      {/* highlight news carousel */}
      <h2>Highlight Today</h2>
      <Carousel autoplay dotPosition='top'>
        {mostViewNews.map((item: any) => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <div
              key={item.id}
              style={{
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: 500
              }}
            >
              <Image
                width='100%'
                height='auto'
                preview={false}
                src={item.image}
                alt={item.headers}
              />
            </div>
            <h3 style={{ float: 'left' }}>{item.headers}</h3>
            <Tag style={{ float: 'right', margin: '1em 0' }} color='red'>
              {item.category}
            </Tag>
          </Link>
        ))}
      </Carousel>

      {/* latest news */}
      <div>
        <h2>Latest News</h2>
        <Row>
          {latestNews.map((item: any) => (
            <Col span={8} key={item.id}>
              <NewsCard item={item} />
            </Col>
          ))}
        </Row>
      </div>

      {/* highlight news by category */}
      {Object.keys(highlightNewsByCategory).map((category: any) => {
        const news = highlightNewsByCategory[category]
        return (
          <div key={category}>
            <Divider orientation='left'>{category}</Divider>
            {
              <Row>
                {news.map((item: any) => (
                  <Col span={8} key={item.id}>
                    <NewsCard item={item} />
                  </Col>
                ))}
              </Row>
            }
          </div>
        )
      })}
    </main>
  )
}
