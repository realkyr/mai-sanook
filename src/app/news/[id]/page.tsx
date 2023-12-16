import { baseUrl } from '@/utils/request'
import { Metadata, ResolvingMetadata } from 'next'
import { Card, Col, Divider, Image, Row } from 'antd'
import { Roboto } from 'next/font/google'
import dayjs from 'dayjs'
import Link from 'next/link'
import MostViewNews from '@/components/MostViewNews'
import NewsCard from '@/components/NewsCard'

const getData = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const data = await getData(`${baseUrl}/news/${id}`)

  return {
    title: data.headers,
    openGraph: {
      images: [data.image]
    }
  }
}

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin']
})

export default async function Page({ params }: Props) {
  const data = await getData(`${baseUrl}/news/${params.id}`)
  const relatedNews =
    (await getData(
      `${baseUrl}/news?category=${data.category}&_page=1&_limit=3`
    )) || []

  return (
    <main className={roboto.className}>
      <Row>
        <Col xs={24} md={16}>
          {/*  Banner */}
          <Image src={data.image} alt={'Banner'} width='100%' height='auto' />

          {/*  Title */}
          <h2>{data.headers}</h2>

          {/* content */}
          <p>{data.description}</p>

          {/* category */}
          <p>
            <b>Category : </b> {data.category}
          </p>

          {/* date */}
          <p>
            <b>Date : </b> {dayjs(data.publishedAt).format('DD MMMM YYYY')}
          </p>

          {/* related news */}
          <Divider>Related News</Divider>
          <Row>
            {relatedNews.map((news: any) => (
              <Col key={news.id} xs={24} md={8}>
                <NewsCard item={news} />
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} md={8}>
          <MostViewNews />
        </Col>
      </Row>
    </main>
  )
}
