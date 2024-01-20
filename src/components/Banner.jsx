import React from 'react'
import { useState, useEffect } from 'react'

const Banner = () => {
  const [index, setIndex] = useState(0)

  // const images = ["grid-item.jpeg", "grid-item-2.jpeg", "grid-item-3.jpeg"]
  useEffect(()=> {
    const intervalId = setInterval(()=> {
      if(index < 3) {
        setIndex((prevIndex) => (prevIndex + 1) % 3);
      }
    }, 7000)
    return () => clearInterval(intervalId);
  }, [index])

  return (
    <section className='py-24 px-8 md:px-24 bg-[#105C04] gap-8 flex flex-col md:flex-row items-center justify-center md:justify-normal text-center md:text-left'>
      {
        index == 0 &&
        <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <div>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-3xl'>Jazã & Sakeenah: <br />
            OWN-EARNER</h1>

          <h3 className='text-xl mt-8'>
            <span className='text-[#FFA800]'>Easy & reliable tech-access </span><br />
            to owning landed property assets across Africa.
          </h3>
        </div>
      </div>}
      {
        index == 1 &&
        <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <div>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-3xl'>Slide 2</h1>

          <h3 className='text-xl mt-8'>
            <span className='text-[#FFA800]'>Easy & reliable tech-access </span><br />
            to owning landed property assets across Africa.
          </h3>
        </div>
      </div>}
      {
        index == 2 &&
        <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <div>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-3xl'>Slide 3 <br />
            OWN-EARNER</h1>

          <h3 className='text-xl mt-8'>
            <span className='text-[#FFA800]'>Easy & reliable tech-access </span><br />
            to owning landed property assets across Africa.
          </h3>
        </div>
      </div>}
      <div className='grow'>
        {
          index == 0 &&
          <img src="/assets/banner_image.png" alt="banner image" width={400} height={300} className='object-contain'/>
        }
        {
          index == 1 &&
          <img src="/assets/grid-item.jpeg" alt="banner image" width={400} height={300} className='object-contain'/>
        }
        {
          index == 2 &&
          <img src="/assets/grid-item-8.jpeg" alt="banner image" width={400} height={300} className='object-contain'/>
        }
      </div>
    </section>
  )
}

export default Banner