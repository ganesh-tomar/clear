'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const InsightsContent = () => {
	const [istoggle, setistoggle] = useState(false);
	const [selectedvalue, setselectedvalue] = useState('');

	const handletoggle = () => {
		setistoggle(!istoggle);
	};

	const handleselectedvalue = (value) => {
		console.log('Selected value:', value);
		setselectedvalue(value);
		setistoggle(false);
	};

	return (
		<section className="insightsContent padding-top-md">
			<div className="container">
				<div className="wrapper w-full flex flex-wrap ">
					<div className="content-wrap w-[calc(100%-45rem)] lg:w-full sm:pr-0 pr-[12rem]">
						<h4 className="medium-bold font-normal mb-[3rem]">
							Lorem ipsum dolor sit amet consectetur. Nulla velit non aenean
							elementum morbi. Vel diam et sed donec semper. Nulla etal gravida
							odio gravida ullamcorper odio nulla imperdiet vitae justo.
						</h4>
						<p className="subtitle !leading-[1.5] mb-[3rem]">
							Sit fermentum at enim pretium platea scelerisque ut sit. Molestie
							quam orci eget nulla odio malesuada sit. Ut a condimentum tempor
							risus at
						</p>
						<p className="subtitle !leading-[1.5] mb-[3rem]">
							Scelerisque nisl at nunc augue nulla diam vel. Quis egestas magna
							iaculis nunc sem. Suspendisse fermentum ac ut vulputate hac
							sollicitudin quis. Lacinia viverra maecenas turpis vestibulum diam
							elit molestie faucibus. Orci auctor euismod sed quis. Non enim
							aliquet parturient.
						</p>

						<div className="card-wrap bg-black grid__parallax relative flex lg:flex-wrap items-center z-[4] w-full my-[3rem] overflow-hidden outline outline-4 outline-pink pt-[7rem] pr-[7rem] pb-[4.5rem] pl-[6rem] sm:pr-[3rem] sm:pb-[3rem] sm:pl-[3rem] ">
							<div className="text-wrap relative max-w-[45.8rem] lg:mb-[3rem] lg:max-w-[100%] z-[1]">
								<h3 className="text-white mb-[2rem]">
									B2B Tech Product Page Wireframe
								</h3>
								<p className="mb-[3rem]">
									Lorem ipsum dolor sit amet consectetur. Aliquam eros
									pellentesque amet fusce cras viverra maecenas risus egestas
									mauris.
								</p>
								<div className="btn-wrap">
									<Link className="btn pink" href="">
										Download
									</Link>
								</div>
							</div>
							<div className="img-wrap max-w-[25.2rem] max-h-[30.3rem] w-full h-full mb-[3.3rem]">
								<svg
									width="100%"
									height="100%"
									viewBox="0 0 253 283"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_4331_2220)">
										<path
											d="M128.763 122.515C115.061 122.515 103.917 133.693 103.917 147.43C103.917 161.167 114.041 171.279 126.846 172.263V168.409C116.154 167.434 107.751 158.399 107.751 147.43C107.751 135.812 117.178 126.36 128.763 126.36C140.348 126.36 149.775 135.812 149.775 147.43C149.775 158.399 141.369 167.434 130.68 168.409V172.263C143.488 171.276 153.609 160.522 153.609 147.43C153.609 133.69 142.462 122.515 128.763 122.515Z"
											fill="#FA198C"
										/>
										<path
											d="M130.677 168.409V147.43C130.677 146.367 129.82 145.507 128.76 145.507C127.7 145.507 126.843 146.367 126.843 147.43V277.166L120.372 270.535C119.633 269.775 118.419 269.763 117.661 270.504C116.903 271.246 116.891 272.463 117.631 273.223L126.115 281.922C126.819 282.643 127.755 283 128.691 282.994C128.715 282.994 128.733 283 128.757 283C128.899 283 129.038 282.982 129.171 282.952C129.904 282.849 130.611 282.534 131.182 281.977L139.856 273.466C140.24 273.09 140.433 272.591 140.433 272.091C140.433 271.591 140.252 271.119 139.886 270.747C139.147 269.987 137.933 269.975 137.175 270.716L130.677 277.093V168.406V168.409Z"
											fill="white"
										/>
										<path
											d="M201.161 105.284C194.736 98.8407 186.544 90.3903 177.873 81.4403C169.174 72.466 160.179 63.186 153.105 56.092L152.486 55.4713H70.9093C63.6025 55.4713 57.6604 61.4299 57.6604 68.757V222.757C57.6604 230.084 63.6025 236.043 70.9093 236.043H188.531C195.838 236.043 201.78 230.084 201.78 222.757V105.904L201.161 105.284ZM194.585 104.663H164.923C157.649 104.663 153.724 98.5288 153.724 92.7549V62.7258C160.101 69.187 167.574 76.8956 174.841 84.3923C181.988 91.7649 188.803 98.7983 194.588 104.66L194.585 104.663ZM188.531 231.804H70.9093C65.9334 231.804 61.8875 227.747 61.8875 222.757V68.757C61.8875 63.7673 65.9334 59.7102 70.9093 59.7102H149.497V92.7549C149.497 97.0028 150.976 100.987 153.664 103.976C156.52 107.152 160.517 108.902 164.923 108.902H197.553V222.757C197.553 227.747 193.507 231.804 188.531 231.804Z"
											fill="white"
										/>
										<path
											d="M128.76 36.7205C127.761 36.7205 126.948 35.906 126.948 34.9038V1.81664C126.948 0.814462 127.761 0 128.76 0C129.759 0 130.572 0.814462 130.572 1.81664V34.9038C130.572 35.906 129.759 36.7205 128.76 36.7205Z"
											fill="white"
										/>
										<path
											d="M50.9968 48.4197C50.5318 48.4197 50.0698 48.2411 49.7166 47.8868L26.3861 24.4914C25.6796 23.783 25.6796 22.6324 26.3861 21.9209C27.0926 21.2124 28.24 21.2124 28.9465 21.9209L52.277 45.3163C52.9835 46.0247 52.9835 47.1753 52.277 47.8868C51.9237 48.2411 51.4587 48.4197 50.9968 48.4197Z"
											fill="white"
										/>
										<path
											d="M197.553 48.4197C197.088 48.4197 196.626 48.2411 196.273 47.8868C195.566 47.1783 195.566 46.0278 196.273 45.3163L219.603 21.9209C220.31 21.2124 221.457 21.2124 222.163 21.9209C222.87 22.6294 222.87 23.7799 222.163 24.4914L198.833 47.8868C198.48 48.2411 198.015 48.4197 197.553 48.4197Z"
											fill="white"
										/>
										<path
											d="M34.807 109.108H1.81161C0.812204 109.108 0 108.293 0 107.291C0 106.289 0.812204 105.474 1.81161 105.474H34.807C35.8064 105.474 36.6186 106.289 36.6186 107.291C36.6186 108.293 35.8064 109.108 34.807 109.108Z"
											fill="white"
										/>
										<path
											d="M251.188 109.108H218.193C217.194 109.108 216.381 108.293 216.381 107.291C216.381 106.289 217.194 105.474 218.193 105.474H251.188C252.188 105.474 253 106.289 253 107.291C253 108.293 252.188 109.108 251.188 109.108Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_4331_2220">
											<rect width="253" height="283" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>

						<h4 className="mb-[3rem]">Maecenas enim adipiscing leo ac sit</h4>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Vel lorem nunc nec euismod. Maecenas enim adipiscing leo ac sit.
							Ultricies pulvinar placerat urna in. Tincidunt tristique odio
							facilisis enim nunc.{' '}
							<span className="underline decoration-[#000] relative">
								{' '}
								<Link className="redirect" href="/">
									.
								</Link>
								Blandit dictumst amet ultricies blandit{' '}
							</span>{' '}
							dictum venenatis nisi consequat. Turpis mauris suspendisse amet
							dui et diam in. Nunc massa convallis tincidunt eros est eu sit.
						</h5>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Vulputate quam ipsum nunc aliquet gravida.{' '}
							<span className="underline decoration-[#000] relative">
								{' '}
								<Link className="" href="/">
									{' '}
									Gravida massa adipiscing{' '}
								</Link>
							</span>{' '}
							vehicula mi gravida mattis est. Integer suspendisse massa risus
							dictum lectus auctor. Ornare sollicitudin tempus justo laoreet
							nibh ut. Maecenas habitant laoreet tincidunt consectetur eget in
							pellentesque at sagittis.
						</h5>
						<ul className="list-wrap pl-[1.8rem] mb-[3rem]">
							<li className="font-semibold mb-[1.5rem] relative sm:leading-[1.2]">
								Lorem ipsum dolor sit amet consectetur
							</li>
							<li className="font-semibold  mb-[1.5rem] relative sm:leading-[1.2]">
								Eget praesent aliquam vel sed vel dictum sed mattis quisque.
							</li>
							<li className="font-semibold  mb-[1.5rem]  relative sm:leading-[1.2]">
								Massa nam gravida sollicitudin faucibus integer sit eu.
							</li>
							<li className="font-semibold  mb-[1.5rem]  relative sm:leading-[1.2]">
								Pellentesque facilisi odio mauris enim posuere pulvinar.
							</li>
							<li className="font-semibold  mb-[1.5rem]  relative sm:leading-[1.2]">
								Risus vel ut arcu ullamcorper in etiam nunc commodo.
							</li>
						</ul>

						<div className="img-wrap max-w-[84rem] w-full max-h-[41.7rem] mb-[3rem]">
							<Image
								src="/business.png"
								width={1000}
								height={1000}
								className="w-full h-full object-contain"
								alt="image"
							/>
						</div>

						<h4 className="mb-[3rem]">Maecenas enim adipiscing leo ac sit</h4>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Vel lorem nunc nec euismod. Maecenas enim adipiscing leo ac sit.
							Ultricies pulvinar placerat urna in. Tincidunt tristique odio
							facilisis enim nunc.{' '}
							<span className="underline decoration-[#000] relative">
								{' '}
								<Link className="redirect" href="/">
									.
								</Link>
								Blandit dictumst amet ultricies blandit{' '}
							</span>{' '}
							dictum venenatis nisi consequat. Turpis mauris suspendisse amet
							dui et diam in. Nunc massa convallis tincidunt eros est eu sit.
						</h5>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Vulputate quam ipsum nunc aliquet gravida.{' '}
							<span className="underline decoration-[#000] relative">
								{' '}
								<Link className="" href="/">
                                Gravida massa adipiscing
								</Link>{' '}
								
							</span>{' '}
							vehicula mi gravida mattis est. Integer suspendisse massa risus
							dictum lectus auctor. Ornare sollicitudin tempus justo laoreet
							nibh ut. Maecenas habitant laoreet tincidunt consectetur eget in
							pellentesque at sagittis.
						</h5>
						<h4 className="medium-bold font-normal mb-[3rem]">
							Lorem ipsum dolor sit amet consectetur. Nisl cursus viverra nisi
							massa penatibus varius hendrerit. Rhoncus tellus enimfame
							tincidunt sit semper ac amet pharetra. Dignissim bibendum nam
							malesua enim dictum nam habitasse.
						</h4>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Sit fermentum at enim pretium platea scelerisque ut sit. Molestie
							quam orci eget nulla odio malesuada sit. Ut a condimentum tempor
							risus at
						</h5>
						<h5 className="font-normal leading-[1.5] mb-[3rem]">
							Scelerisque nisl at nunc augue nulla diam vel. Quis egestas magna
							iaculis nunc sem. Suspendisse fermentum ac ut vulputate hac
							sollicitudin quis. Lacinia viverra maecenas turpis vestibulum diam
							elit molestie faucibus. Orci auctor euismod sed quis. Non enim
							aliquet parturient.
						</h5>
					</div>
					<div className="sticky-bar max-w-[45rem] w-full relative">
						<div className="sticky-wrap sticky top-0">
							<div className="card relative max-w-[45rem] w-full mb-[5rem]">
								<div className="authorDetails w-full flex flex-wrap mb-[2.9rem] items-center">
									<div className="img-wrap max-w-[9rem] max-h-[9rem] w-full h-full rounded-[50%] mr-[3rem]">
										<Image
											src="/steve.png"
											width={2000}
											height={2000}
											className="w-full h-full object-contain rounded-[9rem]"
											alt="image"
										/>
									</div>
									<div className="authorDesc">
										<p>
											By{' '}
											<Link href="/" className="underline">
												Steve Ohanians
											</Link>{' '}
										</p>
										<p>
											<span className="month">October</span>{' '}
											<span className="date">13,</span>{' '}
											<span className="year">2023</span>
										</p>
									</div>
								</div>

								<div className="tab-wrapper w-full flex flex-wrap mb-[4rem]">
									<span className="tab px-[1rem] py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem]">
										Article
									</span>
									<span className="tab px-[1rem] py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem]">
										Digital Strategy
									</span>
									<span className="tab px-[1rem] py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem]">
										Brand Strategy
									</span>
									<span className="tab px-[1rem] py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem]">
										Strategy
									</span>
									<span className="tab px-[1rem] py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem]">
										Creative
									</span>
								</div>
								<div className="social-wrap flex flex-wrap">
									<div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem]">
										<Link className="redirect" href="/">
											.
										</Link>
										<Image
											src="/LinkedIn.svg"
											width={1000}
											height={1000}
											className="w-full h-full object-contain"
											alt="image"
										/>
									</div>
									<div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem]">
										<Link className="redirect" href="/">
											.
										</Link>
										<Image
											src="/FB.svg"
											width={1000}
											height={1000}
											className="w-full h-full object-contain"
											alt="image"
										/>
									</div>
									<div className="img-wrap relative max-w-[4rem] max-h-[4rem] ">
										<Link className="redirect" href="/">
											.
										</Link>
										<Image
											src="/X.svg"
											width={1000}
											height={1000}
											className="w-full h-full object-contain"
											alt="image"
										/>
									</div>
								</div>
							</div>
							<div className="form-wrapper relative bg-black mb-[3rem] p-[5rem] sm:p-[4rem]">
								<h4 className="text-white mb-[3rem]">
									Get our latest insights in your inbox
								</h4>
								<form action="">
									<div className="area mb-[3rem]">
										<label
											For=""
											className="text-[1.4rem] text-white mb-[0.6rem] block"
										>
											Email
										</label>
										<input
											type="email"
											className="bg-black w-full h-[7rem] laptop:h-[8rem] p-[2rem] sm:p-[1rem] lg:h-[7rem] border-2 border-solid border-white text-white "
										/>
									</div>
									<div className="area mb-[3rem]">
										<label
											For=""
											className="text-[1.4rem] text-white mb-[0.6rem] block"
										>
											Country
										</label>
										<div
											className={`${
												istoggle ? 'active' : ''
											} select-wrapper relative`}
											onClick={handletoggle}
										>
											<input
												type="text"
												value={selectedvalue}
												className={` bg-black w-full p-[2rem] sm:p-[1rem] h-[7rem] laptop:h-[8rem] lg:h-[7rem] border-2 border-solid border-white text-white relative select `}
											/>
											<ul className="hidden-content py-[2rem] absolute left-0 bottom-[-14rem] z-[5] p-0 w-0 h-0 opacity-0 bg-[#FFF]">
												<li
													className="text-[1.6rem] py-[1rem] px-[3rem]"
													onClick={() => handleselectedvalue('United States')}
												>
													United States
												</li>
												<li
													className="text-[1.6rem] py-[1rem]  px-[3rem]"
													onClick={() => handleselectedvalue('Canada')}
												>
													Canada
												</li>
												<li
													className="text-[1.6rem] py-[1rem]  px-[3rem]"
													onClick={() => handleselectedvalue('Afganistan')}
												>
													Afganistan
												</li>
											</ul>
										</div>
									</div>
									<div className="area mb-[2.4rem]">
										<input type="submit" className="pink btn w-full " />
									</div>
									<div className="text">
										<span className="text-[1.2rem] text-white">
											Privacy statement lorem ipsum dolor sit amet
										</span>
									</div>
								</form>
							</div>
							<div className="hover-card relative max-w-[45rem] min-h-[45rem] sm:min-h-[35rem] w-full flex flex-wrap justify-between mb-[3rem] flex-col">
								<div className="bg-img">
									<Image
										src="/insight_card.png"
										width={1000}
										height={1000}
										className="w-full h-full object-cover"
										alt="image"
									/>
								</div>
								<div className="tab p-[5rem] sm:p-[2rem]">
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Article
									</span>
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Digital Strategy
									</span>
								</div>
								<div className="black-overlay p-[5rem] sm:p-[3rem] w-full relative">
									<h4 className="text-white">
										Ensure Your Brand’s Direction by Auditing These 5 Key
										Areas...
									</h4>
								</div>
							</div>
							<div className="hover-card relative max-w-[45rem] min-h-[45rem] sm:min-h-[35rem] w-full flex flex-wrap justify-between mb-[3rem] flex-col">
								<div className="bg-img">
									<Image
										src="/clear-blue.png"
										width={1000}
										height={1000}
										className="w-full h-full object-cover"
										alt="image"
									/>
								</div>
								<div className="tab p-[5rem] sm:p-[2rem]">
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Podcast
									</span>
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Innovation & Trends
									</span>
								</div>
								<div className="black-overlay p-[5rem] sm:p-[3rem] w-full relative">
									<h4 className="text-white">
										The Power of Femininity in Leadership
									</h4>
								</div>
							</div>
							<div className="hover-card relative max-w-[45rem] min-h-[45rem] sm:min-h-[35rem] w-full flex flex-wrap justify-between mb-[3rem] flex-col">
								<div className="bg-img">
									<Image
										src="/clear-cream.png"
										width={1000}
										height={1000}
										className="w-full h-full object-cover"
										alt="image"
									/>
								</div>
								<div className="tab p-[5rem] sm:px-[2rem]">
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Article
									</span>
									<span class="font-bold py-[0.5rem] px-[1rem] bg-black text-white inline-block mr-[1rem]">
										Brand Strategy
									</span>
								</div>
								<div className="black-overlay p-[5rem] sm:p-[3rem] w-full relative">
									<h4 className="text-white">
										5 Strategies Your B2B Company Should Apply to Weather a...
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.insightsContent ::selection {
					background-color: #000;
					color: #fff;
				}
			`}</style>
		</section>
	);
};
export default InsightsContent;
