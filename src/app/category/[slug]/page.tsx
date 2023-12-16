import React from 'react'
import { getCategories } from '@/utils/getCategories'
import CategorySelect from '@/components/CategorySelect'
import { baseUrl } from '@/utils/request'
import { Card, Col, Row } from 'antd'
import RenderNews from '@/app/category/[slug]/RenderNews'
import MostViewNews from '@/components/MostViewNews'

async function fetchData(slug: string) {
  const url = new URL(`${baseUrl}/news`)

  // Adding query parameters
  url.searchParams.append('category', slug)
  url.searchParams.append('_sort', 'publishedAt')
  url.searchParams.append('_order', 'desc')

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    return null // or handle the error as needed
  }
}

export default async function Page({ params }: any) {
  const data = await fetchData(params.slug)

  return (
    <>
      <Row>
        <Col span={16}>
          <h2>{params.slug}</h2>
          <RenderNews data={data} />
        </Col>

        <Col span={8}>
          <MostViewNews />
        </Col>
      </Row>
    </>
  )
}
