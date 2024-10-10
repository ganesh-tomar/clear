'use client'
import Marquee from '../components/MarqeeText';


const ScrollTxt = (padding) => {
  return (
    <section className={`scrolltxt grid__parallax dark no-padding`}>
      <div className="bg-text-lines relative z-[1]  w-[2250vw] lg:w-[3500vw] sm:w-[2600vw] pb-[3rem] xxs:w-[2860vw]">
        <Marquee />
      </div>
    </section>
  )
}
export default ScrollTxt;