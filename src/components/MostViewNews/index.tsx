import { baseUrl } from '@/utils/request'
import ClientLayout from './ClientLayout'

const MostViewNews = async () => {
  const resp = await fetch(
    `${baseUrl}/news?_sort=popularity&_order=desc&_limit=3`
  )
  const data = await resp.json()

  return (
    <div style={{ padding: 20 }}>
      <h2>Most Viewed</h2>
      <ClientLayout data={data} />
    </div>
  )
}

export default MostViewNews
