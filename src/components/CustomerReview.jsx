import React from 'react'

const CustomerReview = () => {
  return (
    <section className='px-8 sm:px-24 py-24 bg-[#64A001] text-[#ffffff]'>
      <h2 className='text-3xl text-center font-semibold mb-16'>What Our Customers <br /> Are Saying</h2>

      <div className='flex items-center gap-x-2'>
        <button className='hidden sm:block'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 80 80"
          >
            <path
              fill="#fff"
              d="M40.967 29.033l-8.634 8.633a3.321 3.321 0 000 4.7L40.967 51c2.1 2.1 5.7.6 5.7-2.367V31.366c0-2.966-3.6-4.433-5.7-2.333z"
            ></path>
          </svg>
        </button>

        <div className='flex flex-col sm:flex-row items-center text-left gap-8 sm:gap-16'>
          <div className='rounded-2xl bg-[#ffffff] px-8 py-8 grow'>
            <figure className='flex gap-2 items-center mb-4'>

              <figcaption>
                <h3 className='text-[#151D48] font-semibold'>Name</h3>
                <span className='text-[#64A001] font-normal'>City</span>
              </figcaption>
            </figure>

            <p className='text-[#70798B] font-normal'>
            There are many variations of passages of Lorem Ipsum form, by injected humour randomised words.
            </p>
          </div>
          <div className='rounded-2xl bg-[#ffffff] px-8 py-8 grow sm:scale-125'>
            <figure className='flex gap-2 items-center mb-4'>

              <figcaption>
                <h3 className='text-[#151D48] font-semibold'>Name</h3>
                <span className='text-[#64A001] font-normal'>City</span>
              </figcaption>
            </figure>

            <p className='text-[#70798B] font-normal'>
            There are many variations of passages of Lorem Ipsum form, by injected humour randomised words.
            </p>
          </div>
          <div className='rounded-2xl bg-[#ffffff] px-8 py-8 grow'>
            <figure className='flex gap-2 items-center mb-4'>

              <figcaption>
                <h3 className='text-[#151D48] font-semibold'>Name</h3>
                <span className='text-[#64A001] font-normal'>City</span>
              </figcaption>
            </figure>

            <p className='text-[#70798B] font-normal'>
            There are many variations of passages of Lorem Ipsum form, by injected humour randomised words.
            </p>
          </div>
        </div>

        <button className='hidden sm:block'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
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
    </section>
  )
}

export default CustomerReview