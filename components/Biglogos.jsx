'use client';
import Image from 'next/image';

const Biglogos = () => {
    const logos = [
        {
            img: '/be_inspired.png',
        },
        {
            img: '/stay_accountable.png',
        },
        {
            img: '/have_grit.png',
        },
        {
            img: '/exceed_expectations.png',
        },
        {
            img: '/always_collaborate.png',
        },
    ];

    return (
        <div className="logo-wrapper w-full relative">
            <div className="wrapper w-full relative flex flex-wrap ml-[-5rem] xs:ml-0">
                {logos.map((wrap, index) => (
                    <div className="logo-wrap w-[calc(20%-10rem)] mx-[5rem] max-w-[23.1rem] max-h-[23.2rem] lg:w-[calc(33.33%-10rem)] lg:mb-[3rem] sm:!w-[calc(50%-10rem)] xs:!w-full xs:mx-auto sm:max-w-[16.1rem] sm:max-h-[16.2rem]" key={index}>
                        <Image src={wrap.img} width={1000} height={1000} alt='img' className="w-full h-full object-contain" fetchPriority="high"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Biglogos;
