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
      text: "Mcafee",
      link: "",
    },
  ],
  PreNormalText: 'McAfee: ',
  HighLightedText: 'Together',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: 'is Power',
  description:
    "McAfee, the world's largest dedicated security technology company, came to Clear Digital to redesign their enterprise website with focus on changing the conversation about cybersecurity. Working closely with Solid Branding Agency,Clear Digital helped McAfee tell a compelling visual story and create the best possible user experience to increase customer engagement.",
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
  bgColor: 'bg-white',
  bgImage: "/mcafee/mcafee_logo_black.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/mcafee/mcafee.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/mcafee/bug.png'
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
      bgimg: '/Clear-McAfee-Half-1.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      top: '0',
      right: '0',
      bottom: 'unset',
      bgimg: '/Clear-McAfee-Half-2.png',
    },
  ],
};

export const brandedblade = {
  content: [{
    img: "/Clear-McAfee-Full-3.png",
    imageAlt: "image",
  }]
}

export const brandedbladeVersion = {
  content: [{
    img: '/Clear-McAfee-Full-4.png',
    imageAlt: 'image',
  }],
};

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
      heading: "Sand Hill: Refreshing Silicon Valley Wealth Management",
      description: 'When Sand Hill Global Advisors wanted to update its brand and digital presence, they turned to the hands-on, high touch approach of Clear Digital.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/minisandhill",
      tab: '',
      logo: '/mini-sandhill/sand-hill-white-logo_black.svg',
      hover_logo: "/mini-sandhill/sand-hill-white-logo.svg"
    },
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
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/cisco",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/poka",
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
