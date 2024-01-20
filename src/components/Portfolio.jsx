import React from 'react'

const Portfolio = () => {
  return (
    <section className='py-8 px-8 grid grid-cols-1 sm:grid-cols-3 gap-8'>
      <img src="/assets/grid-item.jpeg" alt="grid item" className='w-[100%] h-[400px] border-[#64A001] border-8 object-cover sm:col-span-2 '/>
      <img src="/assets/grid-item.jpeg" alt="grid item" className='w-[100%] h-[400px] border-[#64A001] border-8 object-cover'/>
      <img src="/assets/grid-item.jpeg" alt="grid item" className='w-[100%] h-[400px] border-[#64A001] border-8 object-cover'/>
      <img src="/assets/grid-item.jpeg" alt="grid item" className='w-[100%] h-[400px] border-[#64A001] border-8 object-cover sm:col-span-2 '/>
    </section>
  )
}

export default Portfolio