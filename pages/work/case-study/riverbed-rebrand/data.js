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
      text: "Riverbed Rebrand",
      link: "",
    },
  ],
  PreNormalText: 'Riverbed: Digital experience ',
  HighLightedText: 'innovation',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: '& acceleration.',
  description:
    "Riverbed has been at the forefront of digital innovation for over two decades, and Clear Digital has been helping them build high-caliber digital experiences for much of that time. When the company's new creative director wanted to add a dose of vibrance to their visually conservative website, they turned to us. We were excited to help bring this bold vision to life across their global online presence.",
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
  bgColor: 'bg-[#000000cc]',
  bgImage: "/h2o/h2o-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/riverbed-rebrand/Main_image.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/riverbed-rebrand/riv_about_banner.png'
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
      bgimg: '/Clear-Riverbed-Half-1.png',
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
      bgimg: '/Clear-Riverbed-Half-2.png',
    },
  ],
};
export const brandedblade = {
  content: [{
    img: '/Clear-Riverbed-Full-4.png',
    imageAlt: 'image',
  }],
};

export const imageGridVersion = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/Clear-Riverbed-Quarter-1.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      right: 'unset',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/Clear-Riverbed-Quarter-2.png',
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: '/Clear-Riverbed-Half-4.png',
    },
  ],
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
      heading: "Sift: Data management realigned and redefined",
      description: 'Sed ligula massa, finibus et ultricies vel, molestie ut sem. Proin sollicitudin vel quam eu posuere.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/sift",
      tab: '',
      logo: '/vocera.svg',
      hover_logo: "/vocera_white.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Silver Peak: Integrated marketing, CMS, and a new identity.",
      description: 'By solving application performance challenges at the network level, Silver Peak is leading the way in data acceleration and visability.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/silver-peak",
      tab: '',
      logo: '/silver-peak/clear-silver-peak-logo-black.svg',
      hover_logo: "/silver-peak/clear-silver-peak-logo.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/eyeque",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/mini-sandhill",
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
