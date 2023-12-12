import Image from 'next/image'
import HeroLayout from './components/HeroLayout'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
    <HeroLayout/>
    <Projects/>
    </div>
    )
}
