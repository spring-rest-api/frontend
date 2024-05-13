import HomeIntro from '@/components/HomeIntro.tsx'
import Features from '@/components/Features.tsx'

export default function Home() {
  // TODO: fix
  // const data = [
  //   {
  //     title: 'Model X',
  //     image: autoTemp,
  //   },
  //   {
  //     title: 'Model X',
  //     image: autoTemp,
  //   },
  //   {
  //     title: 'Model X',
  //     image: autoTemp,
  //   },
  // ]
  return (
    <>
      <HomeIntro />
      {/*<Showcase data={data} />*/}
      <Features />
    </>
  )
}
