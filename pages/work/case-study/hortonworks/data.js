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
      text: "Hortonworks",
      link: "",
    },
  ],
  PreNormalText: 'Hortonworks: Website Redesign and Brand Launch.',
  HighLightedText: "",
  underline: true,
  HighLightedTextColor: '',
  normalText: "",
  description:
    "Hortonworks, a leader in big data management, chose their website as the best way to launch their new visual brand, and chose Clear Digital for the redesign. And in part because Hortonworks is a leader in open source development, Clear Digital opted to build the site using WordPress, a robust open source solution for content management. The Clear Digital team took the time to think through the site's design for every platform, taking into consideration interaction models and whether screens are touch-enabled.",
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
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",

  paddingClasses: 'small-padding-bottom',
};

export const imageBlade = {
  bgColor: 'bg-white',
  bgImage: "/hortonworks/hortonworks-logo_black.svg",
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
      height: '100%',
      left: '0',
      top: 'unset',
      bottom: '0',
      bgimg: '/Clear-Hortonworks-Half-1.png',
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
      bgimg: '/Clear-Hortonworks-Half-2.png',
    },
  ],
};
export const brandedblade = {
  content: [{
    img: "/Clear-Hortonworks-Full-2.png",
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
      heading: "Intel Security: Enriching digital experiences.",
      description:
        "When tech giant Intel created their Intel Security division by acquiring security leader McAfee, Inc., they came to Clear Digital to design a new website and update some of their digital products.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/intel",
      tab: '',
      logo: "/intel/intel-logo-clear_black.svg",
      hover_logo: "/intel/intel-logo-clear.svg",
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Kount: Protecting Your Digital Innovation",
      description: 'Kount is a global leader in digital fraud prevention and detection, combining next- generation AI and machine learning with 12 years’ experience analyzing billions of transactions.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/kount",
      tab: '',
      logo: '/kount/kount_logo_black.svg',
      hover_logo: "/kount/kount_logo_white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/intel",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/acemetrix",
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
