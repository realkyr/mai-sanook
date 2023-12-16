'use client'

import React from 'react'
import { Select } from 'antd'
import { useRouter } from 'next/navigation'

const { Option } = Select

interface ICategorySelectProps {
  categories: any[]
  value: string
}

export default function CategorySelect({
  categories,
  value
}: ICategorySelectProps) {
  const router = useRouter()

  const handleSelectChange = (value: string) => {
    router.push(`/category/${value}`) // Adjust URL pattern as needed
  }

  return (
    <Select value={value} onChange={handleSelectChange} style={{ width: 200 }}>
      {categories.map(({ id, category }) => (
        <Option key={id} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  )
}
