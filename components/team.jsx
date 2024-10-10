'use client'
import Image from "next/image"

const Team = () => {

    const carditems = [
        {
            img: '/alexzender.png',
            boldtxt: 'Alexandra Maldonado',
            txt: 'Visual Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/alex.png',
            boldtxt: 'Alex Martinez',
            txt: 'Visual Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/allie.png',
            boldtxt: 'Allie Damitio',
            txt: 'Social Media & Marketing Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        // {
        //     img: '/austin.png',
        //     boldtxt: 'Austin Nguyen',
        //     txt: 'Design Manager',
        //     linktxt: 'Read Bio',
        //     linkhrf: '/'
        // },
        {
            img: '/cassie.png',
            boldtxt: 'Cassie Hale',
            txt: 'Account Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/connor.png',
            boldtxt: 'Connor Burke',
            txt: 'Developer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        // {
        //     img: '/david.png',
        //     boldtxt: 'David Pounds',
        //     txt: 'Project Manager',
        //     linktxt: 'Read Bio',
        //     linkhrf: '/'
        // },
        {
            img: '/dk.png',
            boldtxt: 'DK Bhardwaj',
            txt: 'Development Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        // {
        //     img: '/dylan.png',
        //     boldtxt: 'Dylan Antonetti',
        //     txt: 'Project Manager',
        //     linktxt: 'Read Bio',
        //     linkhrf: '/'
        // },
        // {
        //     img: '/emma.png',
        //     boldtxt: 'Emma Chivers',
        //     txt: 'UX Designer',
        //     linktxt: 'Read Bio',
        //     linkhrf: '/'
        // },
        {
            img: '/jose.png',
            boldtxt: 'Jose Barajas',
            txt: 'Developer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/juliann.png',
            boldtxt: 'Juliann Klein',
            txt: 'Visual Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/julie.png',
            boldtxt: 'Julie Scarborough',
            txt: 'HR & Office Coordinator',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/crysta.png',
            boldtxt: 'Krysta Weese',
            txt: 'Project Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/melody.png',
            boldtxt: 'Melody Hsia',
            txt: 'UX Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/naro.png',
            boldtxt: 'Naro Haig',
            txt: 'Account Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/oriana.png',
            boldtxt: 'Oriana Clapper',
            txt: 'Project Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/paul.png',
            boldtxt: 'Paul Pechenik',
            txt: 'Developer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/rebecca.png',
            boldtxt: 'Rebecca Casciato',
            txt: 'Project Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/ria.png',
            boldtxt: 'Ria Marquez',
            txt: 'Operations Manager',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/roman.png',
            boldtxt: 'Roman Sluzhyvenkov',
            txt: 'QA Engineer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/sandra.png',
            boldtxt: 'Sandra Sabath',
            txt: 'AM/Social Media & Marketing Intern',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        {
            img: '/stephnie.png',
            boldtxt: 'Stephanie Fry',
            txt: 'Visual Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
        // {
        //     img: '/tyler.png',
        //     boldtxt: 'Tyler Murphy',
        //     txt: 'Motion Designer',
        //     linktxt: 'Read Bio',
        //     linkhrf: '/'
        // },
        {
            img: '/valerie.png',
            boldtxt: 'Valerie Gaerlan',
            txt: 'Visual Designer',
            linktxt: 'Read Bio',
            linkhrf: '/'
        },
    ]

    return (
        <section className="team dark grid__parallax no-padding-bottom  ">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3>Our Team</h3>
                </div>
                <div className="wrapper flex w-[calc(100%+3rem)] flex-wrap ml-[-1.5rem]">
                    {carditems.map((item, index) => (
                        <div className="card sm:max-w-[33rem] w-[calc(25%-3rem)] sm:!w-full  lg:w-[calc(50%-3rem)]  mx-[1.5rem] mb-[3rem]" key={index}>
                            <div className="img-wrap sm:max-w-[33rem] h-[33rem] mb-[2rem]">
                                <Image src={item.img} width={1000} height={1000} className="w-full h-full object-cover" alt="image" />
                            </div>
                            <p className="subtitle !font-bold mb-[0.5rem]">{item.boldtxt}</p>
                            <p className="small font-normal mb-[3rem]">{item.txt}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Team;