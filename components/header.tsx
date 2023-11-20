import darkMoon from '../public/moon.png'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
      <header className="header flex justify-between px-6 pt-5">
        <ul className='flex gap-5'>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/project">Project</Link></li>
        </ul>
        <div>
          <a >
            <Image src={darkMoon} width={15} alt=''></Image>
          </a>
        </div>
      </header>  
  )
}
    
export default Header;
  