import React from 'react'

const StepsToOwn = () => {
  return (
    <section className='flex flex-col md:flex-row'>
      <div className=' grow bg-[#105C04] px-8 md:px-24 py-24 w-[100%]'>
        <h2 className='text-4xl text-[#ffffff] mb-8'>Steps To Become a <br />Jazã <span className='text-[#FFA800]'>LandOwner</span></h2>

        <ul className='flex flex-col gap-y-8'>
          <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
            <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>1</div>

            <p className='text=[#105C04]'>Register / Login</p>
          </li>
          <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
            <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>2</div>

            <p className='text=[#105C04]'>Choose Category</p>
          </li>
          <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
            <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>3</div>

            <p className='text=[#105C04]'>Execute Your Agreement</p>
          </li>
          <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
            <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>4</div>

            <p className='text=[#105C04]'>Proceed to Payment</p>
          </li>
          <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
            <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>5</div>

            <p className='text=[#105C04]'>Update Your Information</p>
          </li>
        </ul>
      </div>

      <div className='grow bg-[#64A001] relative w-[100%] min-h-[500px] h-[auto]'>
        <img src="/assets/steps.png" alt="steps" className='absolute left-0 bottom-0 w-[100%]'/>
      </div>
    </section>
  )
}

export default StepsToOwn