import Image from 'next/image';
import Link from 'next/link';

const carditem = [
    {
        img: '/Acquia-dev.png',
        txt:'Cloud platform for building, delivering, and optimizing digital experiences.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/Adobe-dev.png',
        txt:'Digital experience platform for creating, managing, and delivering across channels.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/Drupal-dev.png',
        txt:'Open-source content management system for dynamic web experiences.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/Google-dev.png',
        txt:'Measuring growth and optimization through Google search and advertising solutions.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/Pantheon-dev.png',
        txt:'WebOps and hosting platform for open-source content management systems.',
        linktxt: 'Learn more',
        linkhrf: '/'
    },
    {
        img: '/Wp-engine-dev.png',
        txt:'WordPress digital experience platform providing managed hosting and solutions.',
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
                        <div className="card w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full mx-[1.5rem] sm:mx-0 min-h-[51.5rem]  sm:!px-[3rem] lg:!px-[4rem] lg:py-[4rem] border border-darkGray py-[5rem] pl-[5rem] pr-[5rem] flex-col flex flex-wrap justify-between mb-[3rem] relative lg:min-h-[40rem]" key={index}>
                            <Link className='redirect' href={item.linkhrf}>.</Link>
                            <div className="img-wrapper max-w-[25.4rem] max-h-[10.3rem] lg:max-w-[14.4rem] lg:max-h-[8.3rem] w-full">
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
