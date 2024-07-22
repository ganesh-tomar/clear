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
      text: 'Kount',
      link: '',
    },
  ],
  PreNormalText: 'KOUNT: Protecting your digital',
  HighLightedText: "Innovation",
  underline: true,
  HighLightedTextColor: 'text-pink',
  normalText: "",
  description:
    "Kount is a global leader in digital fraud prevention and detection, combining next-generation Al and machine learning with 12 years' experience analyzing billions of transactions. They came to Clear Digital to refresh their brand visually and redesign their website to drive deeper engagement with their highly technical enterprise audience. In addition to refreshing the logo, we also took a look at Kount's color palette and iconography.",
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
      itemText: 'Content development',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 3,
      itemText: 'Creative Services',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 4,
      itemText: 'Motion graphics',
      itemUrl: '/services/motion-graphics-videos',
    },
    {
      id: 5,
      itemText: 'Web development',
      itemUrl: '/services/customer-web-development',
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  bgColor: 'bg-[#024253]',
  bgImage: "/kount/kount_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}
export const brandedblade = {
  content: [{
    img: "/Clear-Kount-Full-2.png",
    imageAlt: "image",
  }]
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
      bgimg: '/Clear-Kount-Quarter-2.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      right: 'unset',
      left: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/Clear-Kount-Quarter-3.png',
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
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: '/Clear-Kount-Half-2.png',
    },
  ],
};


export const brandedbladeVersion = {
  content: [{
    img: '/Clear-Kount-Full-3.png',
    imageAlt: 'image',
  }],
};

export const imageGridVersion = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: 'unset',
      bottom: '0',
      bgimg: '/Clear-Kount-Half-3.png',
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
      bgimg: '/Clear-Kount-Half-4.png',
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
      heading: "Leadspace: An Evolved Site for an Evolving Brand",
      description:
        "Leadspace is an AI SaaS innovator offering B2B customer data platforms.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/leadspace",
      tab: '',
      logo: "/leadspace/leadspace_logo_black.svg",
      hover_logo: "/leadspace/leadspace_logo_white.svg",
    },
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
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/heat-and-control",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study//h2o",
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
