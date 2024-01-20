import React from 'react'

const Banner = () => {
  return (
    <section className='py-24 px-8 sm:px-24 bg-[#105C04] gap-8 flex flex-col sm:flex-row items-center justify-center sm:justify-normal text-center sm:text-left'>
      <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 80 80"
          >
            <path
              fill="#fff"
              d="M40.967 29.033l-8.634 8.633a3.321 3.321 0 000 4.7L40.967 51c2.1 2.1 5.7.6 5.7-2.367V31.366c0-2.966-3.6-4.433-5.7-2.333z"
            ></path>
          </svg>
        </button>
        <div>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-3xl'>Jazã & Sakeenah: <br />
            OWN-EARNER</h1>

          <h3 className='text-xl mt-8'>
            <span className='text-[#FFA800]'>Easy & reliable tech-access </span><br />
            to owning landed property assets across Africa.
          </h3>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 80 80"
          >
            <path
              fill="#fff"
              d="M39.033 29.033l8.634 8.633a3.321 3.321 0 010 4.7L39.033 51c-2.1 2.1-5.7.6-5.7-2.367V31.366c0-2.966 3.6-4.433 5.7-2.333z"
            ></path>
          </svg>
        </button>
      </div>
      <div className='grow'>
        <img src="../src/assets/banner_image.png" alt="banner image" width={400} height={300} className='object-contain'/>
      </div>
    </section>
  )
}

export default Banner