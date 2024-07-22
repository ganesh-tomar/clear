export const heroBanner = {
  breadcrumbs: [
    {
      id: 1,
      text: "Work",
      link: "/work",
    },
    {
      id: 2,
      text: "Case Studies",
      link: "/work/case-studies",
    },
    {
      id: 3,
      text: "Mini Sand Hill",
      link: "",
    },
  ],
  PreNormalText: 'Sand Hill: ',
  HighLightedText: 'Refreshing',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: 'Silicon Valley Wealth Management',
  description:
    'When Sand Hill Global Advisors wanted to update its brand and digital presence, they turned to the hands-on, high touch approach of Clear Digital. And it made all the difference. From an updated logo, to a fresh voice, to a state-of-the-art website design, the company got a new look and feel that exemplifies who they are and what they bring to their clients.',
  dark__overlay: true,
  bgcolor: 'bg-black',
  vector: '',
  backgroundImage: '',
  dark: false,
  max: '',
  blacklogo: false,
  content: 'insights',
  area: true,
  area: [
    {
      id: 1,
      itemText: 'Brand strategy',
      itemUrl: '/services/brand-strategy',
    },
    {
      id: 2,
      itemText: 'Motion graphics',
      itemUrl: '/services/motion-graphics-videos',
    },
    {
      id: 3,
      itemText: 'Content development',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 4,
      itemText: 'Web development',
      itemUrl: '/services/customer-web-development',
    },
    {
      id: 5,
      itemText: 'Creative services',
      itemUrl: '/services/creative-content-services',
    },
  ],
  linktxt: 'Gold Addy Award',
  linkUrl: '/about/awards',

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  bgColor: 'bg-[#f27025]',
  bgImage: "/mountz/mountz_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true
}
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: true,
      rightFullHeight: false,
      bgimg: '/mini-sandhill/clear_sand_hill_brand_book.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/mini-sandhill/Logo.png',
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/mini-sandhill/hill-animate.png',
    },
  ],
};
export const infographicSlider = [
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
  {
    imageSrc: '/mini-sandhill/first_job.svg',
  },
];

export const brandedblade = {
  content: [{
    img: "/clear_sand_hill.png",
    imageAlt: "image",
  }]
}
export const brandedbladeVersion = {
  content: [{
    img: "/clear_sand_hill_3_mobile.png",
    imageAlt: "image",
  }]
}

export const introduction = {
  content: [{
    subheading: "Related case studies",
    heading: "Nisl",
    highlightedtext: "pulvinar",
    normaltext: "consectet nec lipsum dolor",
    btntext: "View all case studies",
    buttonUrl: "/work/case-studies",
  }]
};
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Mountz: Torque tools engineered in Silicon Valley.",
      description: 'When Mountz, Inc., The Torque Tool Specialists came to Clear Digital	wanting to develop a visual brand that better reflected their leadership	in the torque market and their Silicon Valley heritage, we were ready.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/mountz",
      tab: '',
      logo: '/mountz/mountz_logo_black.svg',
      hover_logo: "/mountz/mountz_logo_white.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Riverbed: Digital experience innovation & acceleration",
      description: 'Riverbed has been at the forefront of digital innovation for over two decades, and Clear Digital has been helping them build high-caliber digital experiences for much of that time.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/riverbed-rebrand",
      tab: '',
      logo: '/riverbed-rebrand/riverbed-logo-black.svg',
      hover_logo: "/riverbed-rebrand/riverbed-logo-white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/riverbed-rebrand",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/cisco",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/Imagecta.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact us",
}

export default function abc() {
  return (
    <>
    </>
  )
}
