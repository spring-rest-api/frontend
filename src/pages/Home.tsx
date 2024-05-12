import HomeIntro from '@/components/HomeIntro.tsx'
import Showcase from '@/components/Showcase.tsx'
import Features from '@/components/Features.tsx'
import autoTemp from '../../assets/images/autoTemp.jpg'

export default function Home() {
  const data = [
    {
      title: 'Model X',
      image: autoTemp,
    },
    {
      title: 'Model X',
      image: autoTemp,
    },
    {
      title: 'Model X',
      image: autoTemp,
    },
  ]
  return (
    <>
      <HomeIntro />
      <Showcase data={data} />
      <Features />
    </>
  )
}
