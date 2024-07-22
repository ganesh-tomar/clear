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
      text: "uSamp",
      link: "",
    },
  ],
  PreNormalText: "uSamp Instant.ly: Sophisticated identity for a",
  HighLightedText: 'sophisticated',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: ' platform.',
  description:
    'As a leader in niche panel reach, uSamp’s Instant.ly connects with all demographics. Clear Digital collaborated with uSamp to create their website and marketing materials, showcasing their extensive reach across the research industry via desktop, mobile, and print.',
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
  // bgColor: 'bg-[#fff]',
  bgColor: 'bg-[url("/usamp/clear-instantly-full-1.png")]',
  bgImage: '/sift/sift_logo.svg',
  bgImageAlt: 'choesity-white',
  imageUrl: '/usamp/clear-instantly-shirt-1.png',
  imageAlt: 'Phones',
  mobile: '/sift/Laptop_dark.png'
};

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
      bgimg: "/usamp/logo-withBg-img.png",
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
      bgimg: "/usamp/clear-instantly-quarter-2.png",
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
      bgimg: "/usamp/clear-instantly-half-1.png",
    },
  ],
};

export const imageGridVersion = {
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
      bgimg: "/usamp/clear-instantly-half-2.png",
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
      bgimg: "/usamp/icons-with-bgGreen.png",
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
      bgimg: "/usamp/clear-instantly-quarter-3.png",
    },
  ],
};

export const brandedblade = {
  content: [{
    img: '/usamp/clear-instantly-parallax-2.png',
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
      heading: "Silver Peak: Integrated marketing, CMS, and a new identity.",
      description: 'By solving application performance challenges at the network level, Silver Peak is leading the way in data acceleration and visability.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/silver-peak",
      tab: '',
      logo: '/silver-peak/clear-silver-peak-logo-black.svg',
      hover_logo: "/silver-peak/clear-silver-peak-logo.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Tealbook: Making Supplier Data a Competitive Advantage",
      description: 'As an innovator in supplier data, TealBook found itself ready to take its business and its brand to the next level.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/tealbook",
      tab: '',
      logo: '/tealbook/tealbook-black-logo.svg',
      hover_logo: "/tealbook/tealbook-white-logo.svg"
    }
  ]
}

export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/silver-peak",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/tealbook",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/h2o/footerCTA-image.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/contact-us",
  btnText: "Contact us",
}

export default function abc() {
  return (
    <>
    </>
  )
}
