import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import Link from 'next/link';

const indexPage = () => {
    return (
        <Layout>
            <NextSeo title="Index" description="ClearDigital" />
            <section className='indexSection bg-black'>
                <div className='container'>
                    <h2 className='text-white'>Index for ClearDigital</h2>
                </div>
            </section>
            <section>
                <div className='container'>
                    <ul className=''>
                    <div className="wrap mb-[5rem] mt-[2rem]">
                    <li className='mb-[2rem] text-[30px] font-bold'>set 1 (Frontend Integration)</li>
                        <li>1. <Link className='hover:text-pink' href="/">Homepage</Link> [ Next-js, Design-QA] </li>
                        </div>

                        <div className="wrap mb-[5rem] mt-[2rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 2 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>2. <Link className='hover:text-pink' href="/html/service-overview">Service Overview </Link>(Ganesh) [ Next-js, CMS-Integration]</li>
                            <li className='mb-[1rem]'>3. <Link className='hover:text-pink' href="/html/service-detail">Service Detail </Link>(Ganesh) [ Next-js, Design-QA]</li>
                            <li>4. <Link className='hover:text-pink' href="/work">Work </Link>(Abhay) [ Next-js, CMS-Integration]</li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 3 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>5. <Link className='hover:text-pink' href="/html/case-studies-detail">Case Studies Detail </Link>(Abhay) [ Next-js, CMS-Integration]</li>
                            <li className='mb-[1rem]'>6. <Link className='hover:text-pink' href="/html/case-studies-detailmini">Case Studies Detail Mini </Link>(Abhay) [ Next-js, CMS-Integration]</li>
                            <li className='mb-[1rem]'>7. <Link className='hover:text-pink' href="/html/case-studies-overview">Case Studies Overview </Link>(Ganesh) [ Next-js, CMS-Integration]</li>
                            <li>8. <Link className='hover:text-pink' href="/html/client-index">Client Index </Link>(Ganesh)  [ Next-js, CMS-Integration]</li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 4 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>9. <Link className='hover:text-pink' href="/about/careers">Careers </Link>(Abhay)  [ Next-js, CMS-Integration]</li>
                            <li className='mb-[1rem]'>10. <Link className='hover:text-pink' href="/html/design-devexcellence">Design Dev Excellence </Link>(Abhay) [ Next-js, Design-QA]</li>
                            <li className='mb-[1rem]'>11. <Link className='hover:text-pink' href="/html/driving-result">Driving Result </Link>(Abhay) [ Next-js, Design-QA] </li>
                            <li>12. <Link className='hover:text-pink' href="/html/collaboration-focus-detail">Collaboration Focus Detail </Link>(Ganesh) [ Next-js, Design-QA] </li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 5 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>13. <Link className='hover:text-pink' href="/html/outcome-overview">Outcomes </Link>(Abhay) [ Next-js, CMS-Integration] </li>
                            <li className='mb-[1rem]'>14. <Link className='hover:text-pink' href="/html/industry-detail">Industry Detail </Link>(Ganesh) [ Next-js, Design-QA]  </li>
                            <li>15. <Link className='hover:text-pink' href="/html/industry-focus">Industry Focus </Link>(Ganesh)  [ Next-js, Design-QA] </li>
                        </div>


                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 6 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>16. <Link className='hover:text-pink' href="/html/insights-detail">Insights Detail </Link>(Abhay) [ Next-js, Design-QA]  </li>
                            <li>17. <Link className='hover:text-pink' href="/insights">Insights Index </Link>(Ganesh) [Next-js,  HTML-Devlopment] </li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 7 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>18. <Link className='hover:text-pink' href="/about/partners">Partners </Link>(Abhay) [ Next-js, Design-QA]  </li>
                            <li className='mb-[1rem]'>19. <Link className='hover:text-pink' href="/html/gated-form">Gated Asset Form </Link>(Abhay) [Next-js,  Design-QA]  </li>
                            <li>20. <Link className='hover:text-pink' href="/about/history">History</Link>(Ganesh) [Next-js, Design-QA] </li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 8 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>21. <Link className='hover:text-pink' href="/about/contact-us">Contact Us </Link>(Abhay) </li>
                            <li className='mb-[1rem]'>22. <Link className='hover:text-pink' href="/about/awards">Awards </Link>(Abhay) </li>
                            <li className='mb-[1rem]'>23. <Link className='hover:text-pink' href="/about/team">Team </Link>(Abhay) </li>
                            <li>24. <Link className='hover:text-pink' href="/about/news">News </Link>(Abhay) </li>
                        </div>
                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>set 9 (Frontend Integration)</li>
                            <li className='mb-[1rem]'>25. <Link className='hover:text-pink' href="/html/privacy-policy">Privacy Policy </Link>(Ganesh) </li>
                            <li className='mb-[1rem]'>26. <Link className='hover:text-pink' href="/404">404 </Link>(Ganesh) </li>
                            <li className='mb-[1rem]'>27. <Link className='hover:text-pink' href="/html/partner-detail-a">partner Detail A </Link>(Ganesh) </li>
                            <li className='mb-[1rem]'>28. <Link className='hover:text-pink' href="/html/partner-detail-b">partner Detail B</Link>(Ganesh) </li>
                            <li>29. <Link className='hover:text-pink' href="/html/approach">Approach </Link>(Ganesh) </li>
                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'> Backend integration</li>    
                            <li>1. <Link className='hover:text-pink' href="/our-work">Work </Link></li>
                        </div>

                        <div className="wrap mb-[5rem]">
                        <li className='mb-[2rem] text-[30px] font-bold'> Animation integration</li>    
                        <li className='mb-[1rem]'>1. <Link className='hover:text-pink' href="/">Homepage </Link></li>
                        <li className='mb-[1rem]'>2. <Link className='hover:text-pink' href="/brand-strategy">Brand Strategy</Link></li>
                        <li className='mb-[1rem]'>3. <Link className='hover:text-pink' href="/services">Service Overview</Link></li>
                        <li className='mb-[1rem]'>4. <Link className='hover:text-pink' href="/authoring-publishing">Authoring & publishing </Link></li>
                        <li className='mb-[1rem]'>5. <Link className='hover:text-pink' href="/brand-messaging">Brand Messaging </Link></li>
                        <li className='mb-[1rem]'>6. <Link className='hover:text-pink' href="/campaigns-marketing">Campaigns & Marketing </Link></li>
                        <li className='mb-[1rem]'>7. <Link className='hover:text-pink' href="/creative-content">Creative & Content </Link></li>
                        <li className='mb-[1rem]'>8. <Link className='hover:text-pink' href="/customer-web-devlopment">Customer web devlopment </Link></li>
                        <li className='mb-[1rem]'>9. <Link className='hover:text-pink' href="/data-metrics-analytics">Data & Metrics Analytics</Link></li>
                        <li className='mb-[1rem]'>10. <Link className='hover:text-pink' href="/dxp-cms-platforms">DXP & CMS Platforms</Link></li>
                        <li className='mb-[1rem]'>11. <Link className='hover:text-pink' href="/motion-graphics-videos">Motion Graphics & Videos</Link></li>
                        <li className='mb-[1rem]'>12. <Link className='hover:text-pink' href="/systems-support">Systems support</Link></li>
                        <li className='mb-[1rem]'>13. <Link className='hover:text-pink' href="/technology-integration">Technology integration</Link></li>
                        <li className='mb-[1rem]'>14. <Link className='hover:text-pink' href="/user-research">User Research</Link></li>
                        <li className='mb-[1rem]'>15. <Link className='hover:text-pink' href="/ux-ui-design">UX/UI Design</Link></li>                   
                        <li className='mb-[1rem]'>16. <Link className='hover:text-pink' href="/visual-identity">Visual Identity</Link></li>
                        <li className='mb-[1rem]'>17. <Link className='hover:text-pink' href="/web-experiences">Web Experiences</Link></li>

                        </div>

                        <div className="wrap mb-[5rem]">
                            <li className='mb-[2rem] text-[30px] font-bold'>content entry</li>    
                            <li className='mb-[1rem]'>1. <Link className='hover:text-pink' href="/work/case-study/sift">sift</Link></li>
                            <li className='mb-[1rem]'>2. <Link className='hover:text-pink' href="/work/case-study/silver-peak">silver-peak</Link></li>
                            <li className='mb-[1rem]'>3. <Link className='hover:text-pink' href="/work/case-study/electronics-art">electronics art</Link></li>
                            <li className='mb-[1rem]'>4. <Link className='hover:text-pink' href="/work/case-study/hortonworks">hortonworks</Link></li>
                            <li className='mb-[1rem]'>5. <Link className='hover:text-pink' href="/work/case-study/mountz">Mountz</Link></li>
                            <li className='mb-[1rem]'>6. <Link className='hover:text-pink' href="/work/case-study/sandhill">Mini sandhill</Link></li>
                            <li className='mb-[1rem]'>7. <Link className='hover:text-pink' href="/work/case-study/agari">Agari</Link></li>
                            <li className='mb-[1rem]'>8. <Link className='hover:text-pink' href="/work/case-study/kount">kount</Link></li>
                            <li className='mb-[1rem]'>9. <Link className='hover:text-pink' href="/work/case-study/mcaffe">Mcafee</Link></li>
                            <li className='mb-[1rem]'>10. <Link className='hover:text-pink' href="/work/case-study/riverbed-rebrand">Riverbed rebrand</Link></li>
                            <li className='mb-[1rem]'>11. <Link className='hover:text-pink' href="/work/case-study/leadspace"> Leadspace</Link></li>
        
                        </div>

                        <div className="wrap mb-[5rem]">
                        <li className='mb-[2rem] text-[30px] font-bold'> Blocked</li>    
                            </div>

                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default indexPage;