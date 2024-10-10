import React from 'react';

const linksItem = [
    { link: 'Act-On' },
    { link: 'Algolia' },
    { link: 'Astro' },
    { link: 'AWS' },
    { link: 'Bootstrap' },
    { link: 'Contentful' },
    { link: 'Contentstack' },
    { link: 'Git' },
    { link: 'Google Analytics' },
    { link: 'Google Data Studio' },
    { link: 'Google Search Console' },
    { link: 'Elementor' },
    { link: 'Eloqua' },
    { link: 'Hubspot' },
    { link: 'jQuery' },
    { link: 'Mailchimp' },
    { link: 'Magento Commerce' },
    { link: 'Material UI' },
    { link: 'Marketo' },
    { link: 'Netlify' },
    { link: 'Node.JS' },
    { link: 'Optimizely' },
    { link: 'React.JS' },
    { link: 'Vue.JS' },
    { link: 'Webflow' },
    { link: 'WooCommerce' },
];
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
const splitArrayIntoChunks = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

const LinkWrapper = () => {
    const columns = splitArrayIntoChunks(linksItem, 7);
    return (
        <section className="linkwrapper bg-[#E5E4E7]">
            <div className="container">
                <div className="intro mb-[5rem]">
                    <h3>Platform Expertise</h3>
                </div>
                <div className="wrapper w-colThreeWrapper flex flex-wrap ml-[-2.5rem] sm:ml-0 sm:w-full">
                    {columns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="w-[calc(25%-5rem)] sm:w-[calc(100%-5rem)] phablet:w-[calc(50%-5rem)] mx-[2.5rem] mb-[2.6rem] md:mb-0 sm:mx-0 lg:text-[18px]">
                            {column.map((item, itemIndex) => (
                                <li
                                    className="w-full mb-[2.6rem]"
                                    key={itemIndex}
                                >
                                    {item.link}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkWrapper;
