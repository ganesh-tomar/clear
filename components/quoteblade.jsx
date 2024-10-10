'use client'
import Image from 'next/image';

const Quoteblade = () => {
  return (
    <section className="quoteblade bg-[black]">
      <div className="container">
        <div className="quote relative max-w-[129.1rem] ">
          <h4 className="medium-bold font-normal text-[white]">A major key to the success of this project was the incredible <span className='text-pink inline-block relative'>collaboration </span>  that took place amongst the Cohesity and Clear Digital teams. We set our sights on a common goal of launching a beautiful digital experience and maintained a stride which elevated the project towards prosperity</h4>
          <span className="block text-[1.6rem] xl-up:text-[1.6rem] font-normal text-pink mt-[3rem] md:mt-[2.5rem]"><strong>Dylan Antonetti,</strong> Project Manager</span>
        </div>
      </div>
    </section>
  )
}
export default Quoteblade;