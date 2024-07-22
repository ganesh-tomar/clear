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
      text: "Leadspace",
      link: "",
    },
  ],
  PreNormalText: 'Leadspace: An Evolved Site for an',
  HighLightedText: 'Evolving',
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: 'Brand',
  description:
    "Leadspace is an Al SaaS innovator offering B2B customer data platforms. As the company's offering evolved from a strict leads service to a data optimization platform, they quickly realized they were in need of a revamped brand identity and website to match their progressive business approach. Leadspace asked Clear Digital to translate their evolution into a reimagined web presence and a brand new look and feel.",
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
      itemText: 'Web development',
      itemUrl: '/services/customer-web-development',
    },
    {
      id: 3,
      itemText: 'Creative services',
      itemUrl: '/services/creative-content-services',
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: 'small-padding-bottom',

};

export const imageBlade = {
  bgColor: 'bg-[#A22560]',
  bgImage: "/leadspace/leadspace_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}

export const newsBlade = {
  content: {
    subTitle: 'Outcomes',
    PreNormalText: '',
    HighLightedText: "$46 million",
    underline: true,
    HighLightedTextColor: 'text-pink',
    normalText: "in growth round.",
    dark: true,
    description:

      "Clear Digital's bold new brand identity, reimagined digital presence, and enhanced narrative flow for Leadspace were instrumental in significantly boosting its profile for fundraising.",
  },
};
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: true,
      rightFullHeight: false,
      bgimg: '/Collage_1.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      right: '0',
      left: 'unset',
      top: '0',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/filter-images/Collage_2.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      right: '0',
      left: 'unset',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/filter-images/Collage_3.png',
    },
  ],
};

export const brandedblade = {
  content: [{
    img: "/Responsive.png",
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
      heading: "McAfee: Together is Power",
      description: "McAfee, the world’s largest dedicated security technology company, came to Clear Digital to redesign their enterprise website with focus on changing the conversation about cybersecurity.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/mcafee",
      tab: '',
      logo: '/mcafee/mcafee_logo_black.svg',
      hover_logo: "/mcafee/mcafee_logo.svg"
    },
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
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/247",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/agari",
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
