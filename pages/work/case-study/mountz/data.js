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
      text: "Mountz",
      link: "",
    },
  ],
  PreNormalText: 'Mountz: Torque tools engineered in Silicon Valley.',
  HighLightedText: '',
  underline: true,
  HighLightedTextColor: '',
  normalText: '',
  description:
    "When Mountz, Inc., The Torque Tool Specialists came to Clear Digital wanting to develop a visual brand that better reflected their leadership in the torque market and their Silicon Valley heritage, we were ready. From their global reach to their product innovations, Mountz has long been a leader in the tool market. From a new logo and visual style, to web templates that would help shape the look of their new, first-of-its-kind e-commerce website, the Clear Digital team played an active role in shaping this big relaunch.",
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
      height: '50%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/Clear-Mountz-Quarter-3.png',
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
      bgimg: '/Clear-Mountz-Quarter-4.png',
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: '/Clear-Mountz-Half-2.png',
    },
  ],
};

export const brandedblade = {
  content: [{
    img: "/Clear-Mountz-Full-1.png",
    imageAlt: "image",
  }]
}
export const brandedbladeVersion = {
  content: [{
    img: '/Clear-Mountz-Full-2.png',
    imageAlt: 'image',
  }]
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
      heading: "Riverbed: Digital experience innovation & acceleration",
      description: 'Riverbed has been at the forefront of digital innovation for over two decades, and Clear Digital has been helping them build high-caliber digital experiences for much of that time.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/riverbed-rebrand",
      tab: '',
      logo: '/riverbed-rebrand/riverbed-logo-black.svg',
      hover_logo: "/riverbed-rebrand/riverbed-logo-white.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Sift: Data management realigned and redefined",
      description: 'Sed ligula massa, finibus et ultricies vel, molestie ut sem. Proin sollicitudin vel quam eu posuere.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/sift",
      tab: '',
      logo: '/itero_logo.svg',
      hover_logo: "/itero_logo_white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/agari",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/heat-and-control",
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
