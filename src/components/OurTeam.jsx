import React from 'react'

const OurTeam = () => {
  return (
    <section className='bg-[#105C04] px-8 lg:px-24 py-24'>
      <h2 className='text-4xl text-center text-[#FFA800] font-semibold mb-16'>Our Teãm</h2>

      <div className='custom_grid text-left gap-8 flex-wrap'>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>Lawal </strong>Maryam Ibironke Esq, LL.B  BL.</h3>
            <p>Legal Expert</p>
          </figcaption>
        </figure>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team-2.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>ESV Olaoye </strong>Opeyemi M. Anivs, Rsv.</h3>
            <p>Estate Surveyor and Valuer</p>
          </figcaption>
        </figure>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team-3.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>Adewuyi-Lawanson </strong>Kafilat Oyindamola</h3>
            <p>Marketing Manager.</p>
          </figcaption>
        </figure>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team-4.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>Surv. Okutubo </strong>Adedayo David (MNIS)</h3>
            <p>Land Surveyor.</p>
          </figcaption>
        </figure>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team-5.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>ESV. Lamidi </strong>Sodiq Akinwande. ANIVS, RSV</h3>
            <p>Estate Surveyor and Valuer.</p>
          </figcaption>
        </figure>
        <figure className='rounded-2xl flex flex-col h-[100%]'>
          <img src="/assets/teams/team-6.jpeg" alt="team image" className='rounded-t-2xl object-cover w-[100%] min-h-[350px] max-h-[350px] object-top'/>

          <figcaption className='px-8 py-8 bg-[#64A001] text-[#ffffff] grow flex flex-col justify-between'>
            <h3 className='mb-2'><strong>Firstname </strong>Lastname</h3>
            <p>Postion.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default OurTeam