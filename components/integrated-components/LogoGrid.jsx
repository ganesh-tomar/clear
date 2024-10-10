'use client';
import Image from 'next/image';

const LogoGrid = ({ data, padding, classes, imageItems }) => {
    return (
        <section className={`logo-grid grid__parallax dark ${classes} ${padding}`}>
            <div className="container">
                <div className={`logo-wrapper w-full relative`}>
                    <div className="wrapper w-full relative flex flex-wrap ml-[-5rem] xs:ml-0 phone:ml-0">
                        {imageItems && imageItems.length > 0 ? (
                            imageItems.map((wrap, index) => (
                                <div
                                    className="logo-wrap h-[162px] w-[calc(20%-10rem)] mx-[5rem] max-w-[23.1rem] max-h-[23.2rem] lg:w-[calc(33.33%-10rem)] lg:mb-[3rem] sm:!w-[calc(50%-10rem)] xs:!w-full xs:mx-auto phone:!w-full phone:mx-auto sm:max-w-[16.1rem] sm:max-h-[16.2rem]"
                                    key={index}
                                >
                                    <Image
                                        src={wrap?.image?.sourceUrl}
                                        width={1000}
                                        height={1000}
                                        alt={wrap?.image?.altText || 'img'}
                                        className="w-full h-full object-contain !max-w-[110px] xm-up:!max-w-[180px] mx-auto sm:!max-w-[125px] "
                                        fetchPriority='high'
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoGrid;
