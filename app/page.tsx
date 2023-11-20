import Image from 'next/image'
import twitter from '../public/twitter.png'
import linkendin from '../public/linkendin.png'
import github from '../public/social.png'
import html from '../public/html.png'
import react from '../public/react.png'
import javascript from '../public/javascript.png'
import python from '../public/python.png'
import c from '../public/c++.png'

export default function Home() {
  return (
    <main>
      <div className='flex justify-center pt-28'>
        <div>
          <h1 className='text-xs'>Dear Future Employer,</h1>
          <h2 className='text-5xl font-semibold mb-6 mt-3'>Hi, I’m Gavin 👋</h2>
          <div className='flex items-center mb-6'>
            <p>🎮 I’m A Game and Web Developer. I am proficient across multiple languages.</p>
            <div className='flex gap-3 ml-5'>
              <Image src={c} width={20} alt=''></Image>
              <Image src={python} width={20} alt=''></Image>
              <Image src={javascript} width={20} alt=''></Image>
              <Image src={react} width={20} alt=''></Image>
              <Image src={html} width={20} alt=''></Image>
            </div>
          </div>
          <div className='paragraphContainer'>
            <div className='mb-6'>
              <p>👨‍💻 I began programming at the age of 16, as I was drawn into this field by my profound love for technology and design. A pivotal moment arrived when my parents gave me a gaming laptop as a birthday gift, which ignited my curiosity to channel its formidable power. It was this very curiosity that led me to the realm of programming. 🔥</p>
            </div>
            <div className='mb-6'>
              <p>🌍 My dream now is to move to the United States, where I believe it's the place where I could truly make a difference and create impactful things with the abilities i have and execute all the ideas i have.</p>
            </div>
            <div className='mb-6'>
              <p>It's been three years since I first console.log("hello world") 🚀, and now I'm moving on to develop a more complex project. 🛠️ Coding has imparted impactful lessons, teaching me about patience and persistence. ⏳ There's no doubt about it – it's the greatest investment I've ever made. 📈</p>
            </div>
          </div>
            <p className='mb-6'>📩 Email me <a className='underline text-red-600' href="">&lt;gavingunardi@gmail.com&gt;</a></p>
          <div className='flex gap-5'>
            <a href="">
              <Image src={twitter} width={20} alt='socialMedia'></Image>
            </a>
            <a href="">
              <Image src={linkendin} width={20} alt='socialMedia'></Image>
            </a>
            <a href="">
              <Image src={github} width={20} alt='socialMedia'></Image>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
