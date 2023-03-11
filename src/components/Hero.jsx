import { styles } from '../styles'
import { CarCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='h-screen w-full mx-auto relative'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#DF2E38]" />
          <div className="w-1 sm:h-96 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#DF2E38]">Laban</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a frontend developer that loves <br className="sm:block hidden" /> creating stunning web and mobile designs</p>
        </div>
      </div>
      <CarCanvas />
    </section>
  )
}

export default Hero