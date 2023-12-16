'use client'
import React from 'react'
import { Card, Col, Row } from 'antd'
import NewsCard from '@/components/NewsCard'

const RenderNews = ({ data }: any) => {
  return (
    <Row gutter={[16, 16]}>
      {data.map((item: any) => (
        <Col key={item.id} xs={24} md={8}>
          <NewsCard item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default RenderNews
