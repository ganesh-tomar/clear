
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
      text: "Silver Peak",
      link: "",
    },
  ],
  PreNormalText: "Silver Peak: Integrated marketing, CMS, and a ",
  HighLightedText: 'new identity.',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: '',
  description: "By solving application performance challenges at the network level, Silver Peak is leading the way in data acceleration and visability. Clear Digital partnered with Silver Peak for a complete rebranding and redesign their website, e-commerce platform, and marketing automation tools. Our mission with the logo redesign was to deliver a modern image that worked with their existing brand elements, and stood apart from their competitors.",
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
      itemText: "Brand strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Motion graphics",
      itemUrl: "/services/motion-graphics-videos",
    },
    {
      id: 3,
      itemText: "Content development",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Web development",
      itemUrl: "/services/customer-web-development",
    },
    {
      id: 5,
      itemText: "Creative services",
      itemUrl: "/services/creative-content-services",
    },
  ],
  linktxt: 'Gold Addy Award',
  linkUrl: '/about/awards',

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  bgColor: 'bg-[#2179b2]',
  bgImage: "/silver-peak/clear-silver-peak-logo.svg",
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
      bgimg: "/Clear-SilverPeak-Half-2.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/Clear-SilverPeak-Half-3.png",
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: "/eyeque/bg-grid.png",
    },
  ],
};

export const brandedblade = {
  content: [{
    img: "/Clear-SilverPeak-Full-3.png",
    imageAlt: "image",
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
      heading: "Tealbook: Making Supplier Data a Competitive Advantage",
      description: 'As an innovator in supplier data, TealBook found itself ready to take its business and its brand to the next level.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/tealbook",
      tab: '',
      logo: '/tealbook/tealbook-black-logo.svg',
      hover_logo: "/tealbook/tealbook-white-logo.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Vocera: A new brand identity across multiple platforms",
      description: 'Clear Digital partnered with Vocera, one of the fastest growing mobile technology companies, to redesign their website and launch their new brand.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/vocera",
      tab: '',
      logo: '/vocera/vocera_logo_black.svg',
      hover_logo: "/vocera/vocera_logo_white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/vocera",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/eyeque",
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
