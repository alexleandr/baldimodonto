import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Services } from './components/Services'
import { Dentists } from './components/Dentists'
import { OurStory } from './components/OurStory'
import { Contact } from './components/Contact'

export function App() {
  return (
    <div className='font-default'>
      <Navbar />

      <main>
        <HeroSection />
        <Services />
        <Dentists />
        <OurStory />
      </main>

      <Contact />
    </div>
  )
}