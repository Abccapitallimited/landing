import React from 'react'

const TheMonthCustomer = () => {
  return (
    <section className='px-8 sm:px-24 py-24 bg-[#105C04]'>
      <div className='px-8 sm:px-24 py-24 bg-[#ffffff] rounded-2xl'>
        <h2 className='text-3xl text-center text-[#105C04] font-semibold mb-16'>Customer of the Month</h2>

        <figure>
          {/* Video here */}
          <img src="/assets/teams/team.jpeg" alt="team image" className='object-cover rounded-t-3xl w-[100%] h-[200px] sm:h-[400px]'/>

          <figcaption className='bg-[#105C04] px-8 py-8 text-[#ffffff]'>
            <h3 className='font-bold mb-2'>Mr. Yakub</h3>
            <p className='font-thin text-xs'>The entire purchasing process was seamless, thanks to the professionalism and expertise of the [Real Estate Agency] team. They guided me through each step, providing valuable insights and advice. What impressed me the most was their commitment to transparency—there were no hidden surprises, and every detail was thoroughly explained.</p>
            
            <button className='px-4 py-2 bg-[#FFA800] mt-4'>Read More</button>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default TheMonthCustomer