
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
      text: "Vocera",
      link: "",
    },
  ],
  PreNormalText: "Vocera: A new brand identity across",
  HighLightedText: 'multiple',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: 'platforms',
  description: "Clear Digital partnered with Vocera, one of the fastest growing mobile technology companies, to redesign their website and launch their new brand. Vocera is widely recognized for developing smarter ways to communicate, resulting in improved patient, customer and employee satisfaction.",
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
      itemText: "Content development",
      itemUrl: "/services/customer-web-development",
    },
    {
      id: 3,
      itemText: "Creative services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Motion graphics",
      itemUrl: "/services/motion-graphics-videos",
    },
    {
      id: 5,
      itemText: "Web development",
      itemUrl: "/services/customer-web-development",
    },
  ],
  linktxt: 'Gold Addy Award',
  linkUrl: '/about/awards',

  paddingClasses: 'small-padding-bottom',

};
export const imageBlade = {
  bgColor: 'bg-white',
  bgImage: "/vocera/vocera_logo_black.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true
}
export const brandedblade = {
  content: [{
    img: "/Clear-Vocera-Full-1.png",
    imageAlt: "image",
  }]
};
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
      bgimg: "/Clear-Vocera-Half-2.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      bgimg: "/Clear-Vocera-Half-3.png",
    },
  ],

};
export const brandedbladeVersion = {
  content: [{
    img: "/Clear-Vocera-Full-2.png",
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
      heading: "[24]7.ai: The Digital Performance Company Rebrand",
      description: '[24]7.ai is a company dedicated to redefining customer experiences with conversational AI.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/24[7]",
      tab: '',
      logo: '/247/247_logo_black.svg',
      hover_logo: "/247/247_logo_white.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Ace Metrix: An impactful redesign to boost engagement.",
      description: 'Ace Metrix provides qualitative and quantitative assessment of video advertising for companies and creative agencies.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/acemetrix",
      tab: '',
      logo: "/acemetrix/aceMetrix-logo-black2.svg",
      hover_logo: "/acemetrix/aceMetrix-logo-white.svg",
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/tealbook",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/silver-peak",
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
