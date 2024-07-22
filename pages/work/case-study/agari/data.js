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
      text: "Agari",
      link: "",
    },
  ],
  PreNormalText: 'Agari: The',
  HighLightedText: 'Next',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: "Generation Secure Email Cloud",
  description: "Agari is advancing email security by using predictive AI modeling to prevent attacks and ensure humanity prevails over evil. When the company needed to update its brand to align with the product experience and drive recognition, they came to Clear Digital to re-think their messaging, revamp their image, and evolve their website.",
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
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: 'small-padding-bottom',
}
export const imageBlade = {
  bgColor: 'bg-[#4569a0]',
  bgImage: "/agari-logo-white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}
export const brandedblade = {
  content: [{
    img: "/agari-brochure.png",
    imageAlt: "image",
  }]
}
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: 'unset',
      bottom: '0',
      bgimg: "/agari-glass_window.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '100%',
      right: '0',
      left: 'unset',
      top: 'unset',
      bottom: '0',
      bgimg: "/Agari_Stationery_Branding_Mockup.png",
    },
  ],
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
}
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "WEWORK: Creating Social Buzz for a Pop-up Community",
      description:
        "When WeWork’s Backyard reached out to launch their pilot pop-up community, Clear Digital put the place on the map with a fresh and fun social presence.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/backyard",
      tab: "",
      logo: "/vocera.svg",
      hover_logo: "/vocera_white.svg",
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Cisco: DNA for Mobility launch campaign.",
      description:
        "When IT and networking leader Cisco launched their new Digital Networking Architecture (DNA) software-defined network (SD-WAN) solution, they came to Clear Digital to create dynamic marketing materials that pack a visual punch.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/cisco",
      tab: "",
      logo: "/cisco/cisco_logo_black.svg",
      hover_logo: "/cisco/cisco_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/leadspace",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/mountz",
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