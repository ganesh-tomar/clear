import React from 'react';
import Link from 'next/link';
import LogoSlider from '../LogoSlider';

const Intro = (data) => {

    return (
        <section className="introduction grid__parallax dark padding-small-bottom" id='foundation'>
            <div className="container">
                <div className="intro">
                    <div className={`wrapper`}>
                        <div className="intro__text max-w-[117rem]">
                            {data.title && (
                                <h2 className={``} dangerouslySetInnerHTML={{ __html: data.title }} />
                            )}
                            {data.blurb && (
                                <p
                                    className={` relative mt-[5rem] lg:mt-[3rem]  subtitle !leading-[1.5]`}
                                >
                                    {data.blurb}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Intro;
