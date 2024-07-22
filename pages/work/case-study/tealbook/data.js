
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
      text: "TealBook",
      link: "",
    },
  ],
  PreNormalText: "Tealbook: Making Supplier Data a",
  HighLightedText: 'Competitive',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: 'Advantage',
  description:
    "As an innovator in supplier data, TealBook found itself ready to take its business and its brand to the next level. A complete overhaul of its website was the ultimate goal, but the company knew it needed to build a stronger visual and verbal foundation for this upgrade to have maximum impact. Teal Book partnered with Clear Digital to reimagine its visual style, messaging, and website and elevate its smart start-up brand to enterprise-scale sophistication and storytelling.",
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
  bgColor: 'bg-[#B6C0C0]',
  bgImage: "/tealbook/tealbook-black-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}
export const brandedblade = {
  content: [{
    img: "/Clear-Tealbook-Full-1.png",
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
      bgimg: "/Clear-Tealbook-Half-1.png",
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
      bgimg: "/Clear-Tealbook-Half-2.png",
    },
  ],
};
export const brandedbladeVersion = {
  content: [{
    img: "/Clear-Tealbook-Full-2.png",
    imageAlt: "image",
  }]
};
export const brandedbladeVersionTwo = {
  content: [{
    img: "/Clear-Tealbook-Full-3.png",
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
      heading: "Vocera: A new brand identity across multiple platforms",
      description: 'Clear Digital partnered with Vocera, one of the fastest growing mobile technology companies, to redesign their website and launch their new brand.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/vocera",
      tab: '',
      logo: '/vocera/vocera_logo_black.svg',
      hover_logo: "/vocera/vocera_logo_white.svg"
    },
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
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/digimarc",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/citrix",
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
