import React from 'react';

const linkitem = [
    {
        data: [
            { link: 'Act-On' },
            { link: 'Algolia' },
            { link: 'Astro' },
            { link: 'AWS' },
			{ link: 'Bootstrap' },
            { link: 'Contentful' },
            { link: 'Contentstack' },
        ],
    },
    {
        data: [
            { link: 'Git' },
            { link: 'Google Analytics' },
            { link: 'Google Data Studio' },
            { link: 'Google Search Console' },
            { link: 'Elementor' },
            { link: 'Eloqua' },
            { link: 'Hubspot' },
        ],
    },
    {
        data: [
            { link: 'jQuery' },
            { link: 'Mailchimp' },
            { link: 'Magento Commerce' },
            { link: 'Material UI' },
            { link: 'Marketo' },
            { link: 'Netlify' },
            { link: 'Node.JS' },
        ],
    },
    {
        data: [
            { link: 'Optimizely' },
            { link: 'React.JS' },
            { link: 'Vue.JS' },
            { link: 'Webflow' },
            { link: 'WooCommerce' },
        ],
    },
];

const LinkWrapper = () => {
    return (
        <section className="linkwrapper bg-[#E5E4E7]">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3>Platform Expertise</h3>
                </div>
                <div className="wrapper w-colThreeWrapper flex flex-wrap">
                    {linkitem.map((category, categoryIndex) => (
                        <div className="col-four w-[25%] lg:w-[33.33%] md:!w-[50%] sm:!w-[100%] lg:mb-[2rem]" key={categoryIndex}>
                            <ul className="p-0 flex flex-wrap">
                                {category.data.map((item, itemIndex) => (
                                    <li className='w-full mb-[2.6rem]' key={itemIndex}>{item.link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkWrapper;
