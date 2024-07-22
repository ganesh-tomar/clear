'use client';
import Image from 'next/image';
import Link from 'next/link';

const ImageWithContent = (data) => {
    return (
        <section className={`imgwithcontent ${data?.isReverse == true ? 'reverse' : ''} grid__parallax dark ${data.classes} ${data?.padding.join(' ')} bulbDoodle`}>
            <div className="container">
                <div className={`${data?.isReverse == true ? 'flex-row-reverse lg:justify-end' : ''} ${data?.image?.sourceUrl === true ? 'items-center' : ''} wrapper w-full relative flex flex-wrap lg:ml-[0] `}>
                    <div className={`${data?.isReverse == true ? '' : ''} col-image relative w-full h-full max-h-[54rem] max-w-[69rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`} >
                        {data?.image?.sourceUrl &&
                            <div className="img-wrapper relative w-full h-full overflow-hidden">
                                <Image
                                    src={data?.image?.sourceUrl}
                                    width={1000}
                                    height={1000}
                                    alt={data?.image?.altText}
                                    className={`${data?.image?.sourceUrl === true ? 'w-auto h-auto object-contain mx-auto xxl-up:w-[33rem] xxl-up:h-[28rem]' : 'w-full h-full object-cover'}`}
                                />
                            </div>
                        }
                    </div>
                    <div
                        className={`${data?.isReverse == true ? 'pr-[15rem] lg:pr-0' : 'pl-[15rem]'} ${data?.image?.sourceUrl && data?.isReverse == true ? '' : 'pt-[3.7rem] lg:pt-0'}
                            content-wrapper relative w-[calc(100%-69rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
                    >

                        {data?.eyebrow && <h6 className="subtitle mb-[2rem]">{data?.eyebrow}</h6>}

                        {data?.title && <h3 className="mb-[3rem]" dangerouslySetInnerHTML={{ __html: data.title }} />}

                        {data?.body ? <div className="" dangerouslySetInnerHTML={{ __html: data.body }} /> : ''}

                        {data?.link?.linkUrl && (
                            <div className="btn-wrap mt-[2.6rem]">
                                <Link href={data?.link?.linkUrl} className={data?.link?.class}>
                                    {data?.link?.linkText}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageWithContent;