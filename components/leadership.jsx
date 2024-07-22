'use client'
import Image from "next/image";
import Link from "next/link";

const Leadership = () => {

    const carditems = [
        {
            img: '/steve_ohanians.png',
            boldtxt: 'Steve Ohanians',
            txt: 'Co-Founder & Director of Digital Strategy',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/valod_leadership.png',
            boldtxt: 'Valod Amirkhanian',
            txt: 'Co-Founder & Director of Technology',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/danny_leadership.png',
            boldtxt: 'Danny Halvorson',
            txt: 'Partner & Creative Director',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/annie.png',
            boldtxt: 'Annie Raygoza',
            txt: 'Director of Client Services',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
    ]

    return (
        <section className="leadership dark grid__parallax no-padding-top ">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3>Leadership</h3>
                </div>
                <div className="wrapper flex w-[calc(100%+3rem)] flex-wrap ml-[-1.5rem]">
                    {carditems.map((item, index) => (
                        <div className="card min-h-[47.1rem] lg:min-h-[40rem] sm:max-w-[33rem] w-[calc(25%-3rem)]  phablet:!w-[calc(50%-3rem)] sm:!w-full tablet:w-[calc(33.33%-3rem)] lg:mb-[3rem] mx-[1.5rem] relative" key={index}>
                            <div className="img-wrap sm:max-w-[33rem] max-h-[33rem] mb-[2rem]">
                                <Image src={item.img} width={1000} height={1000} alt="image" className="w-full h-full object-cover" />
                            </div>
                            <p className="subtitle !font-bold mb-[0.5rem]">{item.boldtxt}</p>
                            <p className="small font-normal mb-[5rem]">{item.txt}</p>
                            <div className="link-wrap absolute left-0 bottom-0">
                                <Link class="tertiary-btn pink !text-pink" href={item.linkhrf}>{item.linktxt}</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Leadership;