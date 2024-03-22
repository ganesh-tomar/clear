import Image from 'next/image';
import Link from 'next/link';

const carditem = [
    {
        img: '/acquia.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/adobe.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/drupal.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/google.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/pantheon.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/wp-engine.svg',
        txt:'Lorem ipsum dolor sit amet consectetur. Donec massa diam condimentum tempus.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
];

const ColThreeWithIntro = () => {
    return (
        <section className="colthreewithintro bg-black height__full">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3 className="text-white">Platform Partnerships</h3>
                </div>
                <div className="card-wrapper w-colThreeWrapper sm:w-full flex flex-wrap ml-[-1.5rem] sm:ml-0">
                    {carditem.map((item, index) => (
                        <div className="card w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full mx-[1.5rem] sm:mx-0 h-[51.5rem] sm:h-[40rem] sm:px-[3rem] sm:py-[3rem] border border-darkGray py-[5rem] pl-[5rem] pr-[5rem] flex-col flex flex-wrap justify-between mb-[3rem] relative" key={index}>
                            <Link className='redirect' href={item.linkhrf}>.</Link>
                            <div className="img-wrapper max-w-[25.4rem] max-h-[10.3rem] sm:max-w-[20rem] sm:max-h-[8rem] w-full">
                                <Image src={item.img} width={1000} height={1000} alt={'image'} className='w-full h-full object-contain'/>
                            </div>
                            <div className="text-wrapper relative w-full ">
                                <p className='text-white mb-[3rem]'>{item.txt}</p>
                                <div className="link-wrap">
                                    <Link href={item.linkhrf} className='tertiary-btn'>{item.linktxt}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ColThreeWithIntro;
