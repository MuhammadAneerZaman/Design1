import Image, { StaticImageData } from 'next/image'
import Header from './Components/Header/Header'
import bgImg1 from '@/public/bgimg1.jpg'
import bgImg2 from '@/public/bgimg2.jpg'
import bgImg3 from '@/public/bgimg3.jpg'

export default function Home() {
    const images: string[] = [bgImg1.src, bgImg2.src, bgImg3.src];
  
  return (
    <div className=' overflow-x-hidden'>
      <Header image={images} />
      
    </div>
  )
}
