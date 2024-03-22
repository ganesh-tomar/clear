import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className="footer-clear-digital bg-black pt-32 md:pt-[4rem]">
        <div className="container">
          <div className="outer-wrap flex flex-wrap lg-up:pb-[25rem] lg:pb-[10rem] sm:pb-[7rem!important]">
            <div className="item small xl-up:w-[33%] laptop:w-[25%] laptop:mr-[6rem] tablet:w-1/2 phablet:w-1/2 sm:w-full">
              <div className={`${styles.logo} img-wrap mb-[5rem] sm:md-[4rem] max-w-[11.5rem] h-[4rem]`}>
                <Link href="/" data-cursor-expand>
                  <svg id='svg1' viewBox="0 0 111 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_813_210)">
                      <path d="M105.606 24.228C102.629 24.228 100.298 26.5741 100.298 29.5684C100.298 32.5626 102.629 35 105.606 35C108.583 35 111 32.6143 111 29.5684C111 26.5224 108.631 24.228 105.606 24.228ZM108.268 29.5684C108.268 31.0974 107.124 32.2489 105.606 32.2489C104.089 32.2489 103.032 31.0956 103.032 29.5684C103.032 28.0411 104.162 26.9792 105.606 26.9792C107.05 26.9792 108.268 28.1169 108.268 29.5684Z" fill="#fa198c" />
                      <path d="M26.4464 0H30.2595C31.1759 0 31.9604 0.313731 32.6148 0.937746C33.2691 1.56349 33.5963 2.33747 33.5963 3.2597V35H26.4464V0Z" fill='#fff' className={`transition-fill duration-300 ease group-hover:fill-black fill-white`} />
                      <path d="M79.5278 21.2355C78.5634 21.6975 77.7206 22.1147 75.4989 22.5198L73.123 23.0145C71.8845 23.3455 71.0075 23.5316 70.4371 24.2987C69.918 24.9986 69.7142 25.7484 69.7142 26.4724C69.7142 27.4602 70.0242 28.2514 70.6443 28.8444C71.2644 29.3719 72.1586 29.6339 73.3303 29.6339C76.2851 29.6339 77.2427 29.2288 78.4709 28.0532C79.5723 26.9999 79.5278 25.5519 79.5278 23.7057V21.2373V21.2355ZM81.7752 33.3866C80.4716 34.0572 78.6473 34.6312 77.0388 34.8622C76.1686 34.9863 74.3032 35.0414 72.2973 34.9673C69.8204 34.876 67.6501 34.3243 65.7898 33.0401C63.9312 31.7559 63.0011 29.6322 63.0011 26.669C63.0011 23.9023 63.8439 21.9285 65.5311 20.7425C67.2184 19.5566 69.3699 18.7671 71.9873 18.3723C71.9873 18.3723 74.2587 18.0431 74.8788 17.9776C77.9073 17.5828 79.4233 16.7261 79.4233 15.4091C79.4233 14.4214 78.8888 13.7801 77.8217 13.4836C76.7528 13.1871 75.773 13.0389 74.8788 13.0389C73.9144 13.0389 73.0528 13.1716 72.2973 13.4336C71.5385 13.6974 70.9886 14.1921 70.6443 14.9161H63.724C63.998 12.8751 64.9642 11.1961 66.6155 9.87744C68.4757 8.36222 71.1257 7.60547 74.5687 7.60547C78.4246 7.60547 81.3161 8.23121 83.2449 9.48269C85.2405 10.8014 86.2409 12.6441 86.2409 15.0144V24.6038C86.2409 27.2378 85.8246 29.3581 84.7437 30.7785C83.8633 31.9334 83.2363 32.4523 81.7769 33.39" fill={'#fff'} className={`transition-fill duration-300 ease group-hover:fill-black fill-white`} />
                      <path d="M88.7842 35.0002V21.3202C88.7842 18.7517 89.1799 16.5952 89.973 14.849C90.7627 13.1045 91.847 11.7048 93.2259 10.6516C94.5329 9.66384 96.066 8.93984 97.8218 8.47786C99.5776 8.01761 101.385 7.78662 103.243 7.78662H104.276V14.8008H101.9C99.903 14.8008 98.423 15.2627 97.4603 16.1832C96.4959 17.1072 96.0146 18.5535 96.0146 20.5307V31.613C96.0146 33.485 94.4284 35.0019 92.4722 35.0019H88.7842V35.0002Z" fill='#fff' className={`transition-fill duration-300 ease group-hover:fill-black fill-white`} />
                      <path d="M21.7015 27.6723C20.8707 26.8966 19.6203 26.8587 18.7073 27.5344C17.2221 28.6325 15.7199 29.2444 13.6215 29.2444C9.51551 29.2444 6.42019 25.8589 6.42019 21.3684V21.2943C6.42019 16.8469 9.51722 13.4923 13.6215 13.4923C15.3225 13.4923 16.859 13.9871 18.4332 15.0662C19.4096 15.7367 20.7406 15.5213 21.5182 14.6266L23.9729 11.7996C21.1362 8.98806 17.9553 7.73486 13.6592 7.73486C5.87204 7.73486 0 13.5958 0 21.3684V21.4425C0 29.172 5.77611 35.0019 13.4365 35.0019C17.9519 35.0019 21.0592 33.6401 24.1613 30.3011L24.3275 30.1218L21.7015 27.6723Z" fill={'#fff'} className={`transition-fill duration-300 ease group-hover:fill-black fill-white`} />
                      <path d="M58.0728 11.1924C55.8014 8.82048 52.5982 7.63623 48.4682 7.63623C44.3383 7.63623 41.4794 8.85496 39.2748 11.2907C37.1404 13.6609 36.0732 16.9551 36.0732 21.1698C36.0732 25.3845 37.1747 28.9751 39.3775 31.3454C41.5804 33.7828 44.6449 34.9998 48.571 34.9998C51.8068 34.9998 54.4927 34.2431 56.6271 32.7278C58.7597 31.2798 60.2072 29.1716 60.9643 26.4049L56.5637 26.4015C55.3252 26.4015 54.1741 26.9514 53.2971 27.8323C52.5794 28.5511 51.2861 29.2699 48.9838 29.2699C47.1921 29.2699 45.8491 28.7441 44.955 27.6892C43.9906 26.7014 43.4732 25.1862 43.4064 23.1452H61.2709C61.2709 23.1452 61.3771 22.3437 61.3771 22.0213V21.8748C61.3771 17.5274 60.2757 13.6299 58.0728 11.1924ZM43.4064 18.6996C43.475 16.9878 43.9906 15.6709 44.955 14.7486C45.9176 13.8264 47.1578 13.3661 48.6738 13.3661C50.3251 13.3661 51.5995 13.8281 52.4954 14.7486C53.3228 15.6054 53.8024 16.9206 53.9412 18.6996H43.4064Z" fill={'#fff'} className={`transition-fill duration-300 ease group-hover:fill-black fill-white`} />
                    </g>
                    <defs>
                      <clipPath id="clip0_813_210">
                        <rect width="111" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className="location-wrap mb-[2.5rem] sm:mb-[2rem] flex">
                <div className="icon-wrap mr-[2rem]">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Address</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="location-title">
                  <p className="medium">1570 The Alameda #330, <br /> San Jose, CA 95126</p>
                </div>
              </div>
              <div className="contact-wrap mb-[2.5rem] sm:mb-[2rem] flex">
                <div className="icon-wrap mr-[2rem]">
                  <Link href="/" className="icon" data-cursor-expand="">
                    <span className="sr-only">Telephone</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                        stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18H12.01" stroke="#FA198C" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="contact-title">
                  <p className="medium "><Link href="tel:408.246.0000" className="contact-link text-white">408.246.0000</Link></p>
                </div>
              </div>
              <div className="social-icons flex items-center gap-[2.7rem] sm:gap-[3rem] sm:mt-[3rem]">
                <a href="https://www.facebook.com/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">Facebook</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[3.5rem] sm:h-[3.5rem]'>
                    <path d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://www.instagram.com/cleardigitalinc/" target="_blank" className='group'>
                  <span className="sr-only">Instagram</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[3.5rem] sm:h-[3.5rem]'>
                    <path d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                    <path d="M18.0954 8.26716C17.9804 7.9555 17.7969 7.6734 17.5585 7.44185C17.327 7.20343 17.0451 7.01994 16.7332 6.90493C16.4803 6.8067 16.1003 6.68978 15.4005 6.65793C14.6435 6.62341 14.4165 6.61597 12.5 6.61597C10.5833 6.61597 10.3564 6.62321 9.59953 6.65774C8.89972 6.68978 8.51958 6.8067 8.26686 6.90493C7.95501 7.01994 7.67291 7.20343 7.44155 7.44185C7.20313 7.6734 7.01965 7.95531 6.90444 8.26716C6.80621 8.52007 6.68929 8.90021 6.65744 9.60001C6.62292 10.3568 6.61548 10.5838 6.61548 12.5005C6.61548 14.417 6.62292 14.644 6.65744 15.401C6.68929 16.1008 6.80621 16.4808 6.90444 16.7337C7.01965 17.0455 7.20294 17.3274 7.44136 17.559C7.67291 17.7974 7.95482 17.9809 8.26667 18.0959C8.51958 18.1943 8.89972 18.3113 9.59953 18.3431C10.3564 18.3776 10.5831 18.3849 12.4998 18.3849C14.4167 18.3849 14.6437 18.3776 15.4003 18.3431C16.1002 18.3113 16.4803 18.1943 16.7332 18.0959C17.3592 17.8544 17.854 17.3597 18.0954 16.7337C18.1937 16.4808 18.3106 16.1008 18.3426 15.401C18.3771 14.644 18.3844 14.417 18.3844 12.5005C18.3844 10.5838 18.3771 10.3568 18.3426 9.60001C18.3108 8.90021 18.1938 8.52007 18.0954 8.26716ZM12.5 16.1861C10.4643 16.1861 8.81408 14.536 8.81408 12.5003C8.81408 10.4646 10.4643 8.81457 12.5 8.81457C14.5356 8.81457 16.1858 10.4646 16.1858 12.5003C16.1858 14.536 14.5356 16.1861 12.5 16.1861ZM16.3315 9.53021C15.8558 9.53021 15.4702 9.14454 15.4702 8.66885C15.4702 8.19315 15.8558 7.80749 16.3315 7.80749C16.8072 7.80749 17.1929 8.19315 17.1929 8.66885C17.1927 9.14454 16.8072 9.53021 16.3315 9.53021Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                    <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">LinkedIn</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[3.5rem] sm:h-[3.5rem]'>
                    <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541602 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM8.86514 19.0789H6.13816V10.2944H8.86514V19.0789ZM7.5 9.09539C7.18617 9.09669 6.87899 9.00491 6.6173 8.83167C6.35561 8.65842 6.15115 8.41148 6.02978 8.12206C5.9084 7.83264 5.87555 7.51373 5.93539 7.20565C5.99522 6.89756 6.14505 6.61413 6.36593 6.39118C6.58681 6.16823 6.86883 6.01577 7.17635 5.95306C7.48386 5.89036 7.80306 5.92023 8.0936 6.03891C8.38414 6.15758 8.63298 6.35972 8.80865 6.61979C8.98433 6.87985 9.07897 7.18616 9.0806 7.5C9.08148 7.92083 8.9157 8.3249 8.61952 8.62386C8.32333 8.92282 7.92083 9.09235 7.5 9.09539ZM19.0789 19.0789H16.3536V14.8026C16.3536 13.7829 16.3339 12.4753 14.9359 12.4753C13.5378 12.4753 13.2911 13.5839 13.2911 14.7286V19.0789H10.5757V10.2944H13.1924V11.4918H13.2303C13.5938 10.801 14.4836 10.0724 15.8109 10.0724C18.5707 10.0724 19.0789 11.8914 19.0789 14.2533V19.0789Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
                <a href="https://twitter.com/cleardigitalinc" target="_blank" className='group'>
                  <span className="sr-only">Twitter</span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[3.5rem] sm:h-[3.5rem]'>
                    <path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z"
                      fill="#989898" className='group-hover:fill-pink transition-all' />
                  </svg>
                </a>
              </div>
            </div>
            <div className="item medium lg-up:w-[18%] laptop:!w-[21%] tablet:w-1/2 phablet:w-1/2 sm:w-full sm:mt-[4rem]">
              <div className="list-item">
                <ul className='sm:pl-0 pl-[2rem]'>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important] hover:text-pink transition-all" data-cursor-expand="">Work </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important] hover:text-pink transition-all" data-cursor-expand="">Approach</Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important] hover:text-pink transition-all" data-cursor-expand="">Services </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important] hover:text-pink transition-all" data-cursor-expand="">About </Link>
                  </li>
                  <li className='mb-[2.5rem]'>
                    <Link href="/" className="h5 text-white font-[400!important] hover:text-pink transition-all" data-cursor-expand="">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item large lg-up:w-[48%] laptop:!w-[49%] w-full lg:mt-[3rem] sm:mt-[1rem!important]">
              <div className="content-wrap flex sm:flex-wrap">
                <div className="img-box w-[30%] laptop:w-[18rem] sm:w-[140px]">
                  <div className="footer__img">
                    <Image src="/red_circle.png" alt="Red Circle" height={100} width={100} className='h-full w-full object-cover' />
                  </div>
                </div>
                <div className="intro w-[70%] laptop:w-[calc(100%-18rem)] sm:w-full sm:pl-0 sm:mt-[20px] pl-[3rem] text-white">
                  <h4 className="mb-5">2023 Fortune 500 B2B Homepage Rankings Report</h4>
                  <p className="mb-[3.2rem] mt-[2rem] sm:mt-[1rem] sm:mb-[2rem]">Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit.</p>
                  <div className="btnWrap mt-5">
                    <Link href='#' className='tertiary-btn'>Download</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper pb-20 sm:pb-[4rem] mb-20 sm:mb-[4rem] border-b border-white">
            <div className="title-wrap">
              <h4 className='text-white'>
                Confidently navigating <span className="text-pink">change</span>.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-myrious bg-black pb-24 sm:pb-[5rem]">
        <div className="container">
          <div className="content-wrapper flex sm:flex-wrap">
            <div className={`${styles.myrious_logo} logo-wrap w-[100%] max-w-[11.5rem] sm:w-[100px]`}>
              <Link href="/" data-cursor-expand="">
                <Image src="/myrious_logo.png" alt="Myrious" className='w-full' height={100} width={100} />
              </Link>
            </div>
            <div className="title-wrap text-white md-up:pl-[5rem] pl-[2rem] md-up:max-w-[107rem] md:w-[80%] sm:mt-[20px] sm:w-[100%!important] sm:pl-0">
              <h5 className="font-[400!important] mb-[4rem] sm:mb-[2.5rem] leading-[1.2] lg:mb-[2rem]">Clear Digital is a founding member of Myrious Group’s expertise-driven agencies.</h5>
              <p className="medium max-w-[99rem]">Myrious Group is an independent holding company enabling forward-thinking brands
                to achieve breakthrough performance through power of orchestration. </p>
              <div className="btnWrap mt-[4rem] sm:mt-[1.5rem] lg:mt-[3rem]"><Link href='#' className='tertiary-btn'>Learn more</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-10 sm:py-[3rem]">
        <div className="container">
          <div className="wrapper flex justify-between sm:flex-wrap">
            <div className="logo-outer">
              <div className="logo-inner-wrap">
                <Link href="/" passHref data-cursor-expand="">
                  <Image src="/clear.svg" alt="clear" height={100} width={100} className='sm-up:max-w-[35px] sm:w-[40px]' />
                </Link>
              </div>
            </div>
            <div className="copyright-list flex flex-wrap items-center ml-[2rem] lg:pl-[11rem] md:ml-[-2rem] sm:!pl-0 sm:!ml-0 sm:mt-[2.2rem]">
              <ul className='flex text-center gap-[2rem] sm:!gap-[1.6rem] lg:gap-y-[1rem] lg:flex-wrap sm:text-left'>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    © 2023 Clear Digital, Inc.
                  </Link>
                </li>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    Email Subscriptions
                  </Link>
                </li>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    Terms of Use
                  </Link>
                </li>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    Privacy
                  </Link>
                </li>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    Cookie Policy
                  </Link>
                </li>
                <li className='sm:w-full'>
                  <Link href="/" className="footer-links-small xl-up:text-[1.4rem] text-[14px] font-normal text-darkGray hover:text-pink transition-all" data-cursor-expand="">
                    Cookie Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Footer;
