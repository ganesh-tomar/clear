export const heroBanner = {
  breadcrumbs: [
    {
      id: 1,
      text: 'Work',
      link: '/work',
    },
    {
      id: 2,
      text: 'Case Studies',
      link: '/work/case-studies',
    },
    {
      id: 3,
      text: 'WeWork',
      link: '',
    },
  ],
  PreNormalText: 'Wework: Creating ',
  HighLightedText: 'Social Buzz',
  underline: false,
  underLineClass: 'whiteThin',
  normalText: 'for a Pop - up Community ',
  HighLightedTextColor: 'text-pink',
  description:
    'When WeWork’s Backyard reached out to launch their pilot pop-up community, Clear Digital put the place on the map with a fresh and fun social presence. Backyard was a short-term shared outdoor workspace designed to get the community together-it offered free Wi-Fi, coffee, games, yoga, special events, and more. By giving Backyard a burst of personality and building popularity, both online and in real life, we ensured the pilot pop-up reached maximum success, fast.',
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
      itemText: 'Creative & Content Services',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 2,
      itemText: "Campaigns & Marketing",
      itemUrl: "/our-services/campaigns-marketing",
    },
  ],
  linktxt: "",
  linkUrl: "",
  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-[#fff]',
  bgImage: "/backyard/WeWork.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/backyard/Branded-Blade-backyard.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/backyard/Clear-Phone.svg'
}
export const brandedblade = {
  content: [{
    img: "/Clear-WeWork-Full.png",
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
      bgimg: '/Clear-WeWork-Half-1.png',
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
      bgimg: '/Clear-WeWork-Half-2.png',
    },
  ],
};
export const brandedbladeVersion = {
  content: [{
    img: "/Clear-WeWork-Full-2.png",
    imageAlt: "image",
  }]
}
export const imageGridVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: 'unset',
      bottom: '0',
      bgimg: '/Clear-WeWork-Half-3.png',
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
      bgimg: '/Clear-WeWork-Half-4.png',
    },
  ],
};
export const introduction = {
  content: [
    {
      subheading: "Related case studies",
      heading: "Putting ideas into",
      highlightedtext: "action",
      normaltext: "and delivering results",
      btntext: "View all case studies",
      buttonUrl: "/work/case-studies",
    },
  ],
};
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: '/backyard/backyard_bg.png',
      alt: 'Backyard Train',
      heading: "Cisco: DNA for Mobility launch campaign.",
      description: "When IT and networking leader Cisco launched their new Digital Networking Architecture (DNA) software-defined network (SD-WAN) solution, they came to Clear Digital to create dynamic marketing materials that pack a visual punch.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/cisco",
      tab: '',
      logo: "/cisco/cisco_logo_black.svg",
      hover_logo: "/cisco/cisco_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/backyard/backyard_bg.png',
      alt: 'Backyard Train',
      heading: "Citrix: Aligning the Brand UX Across Applications",
      description: 'Citrix provides people-centric solutions that power a better way to work.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/citrix",
      tab: '',
      logo: '/citrix/citrix-logo.svg',
      hover_logo: "/citrix/citrix-logo-white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/h2o",
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
  bgImg: "/image-cta-two.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact Us",
}

export default function abc() {
  return (
    <>
    </>
  )
}