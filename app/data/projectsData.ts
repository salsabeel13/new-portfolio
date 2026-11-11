export interface Project {
  id: number;
  title: string;
  category: "WordPress" | "Next.js" | "Shopify";
  image: string;
  link: string;
  methodology: string; // اسم الأداة أو WordPress فقط باختصار
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Knowledge Bridges Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس جسور المعرفة.png",
    link: "https://knowledge-bridges.com/",
    methodology: "WordPress"
  },
  {
    id: 2,
    title: "Time Education Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس وقت التعلم.png",
    link: "https://www.ltime.edu.sa/ar/",
    methodology: "WordPress"
  },
  {
    id: 3,
    title: "Al-Tahadi International Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس التحدي العالمية.png",
    link: "https://ch-ischools.com/",
    methodology: "WordPress"
  },
  {
    id: 4,
    title: "Al-Noblaa Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس النبلاء.png",
    link: "https://thegreenmasters.com/noblaa/",
    methodology: "WordPress"
  },
  {
    id: 5,
    title: "Ajyal Al-Yamama",
    category: "WordPress",
    image: "/photo/my-work/موقع أجيال اليمامة.png",
    link: "https://ajyal-alyamamah.com/",
    methodology: "WordPress"
  },
  {
    id: 6,
    title: "TP Real Estate",
    category: "WordPress",
    image: "/photo/my-work/tp عقارات.png",
    link: "https://toppickproperty.com/",
    methodology: "WordPress"
  },
  {
    id: 7,
    title: "Law Firm Office",
    category: "WordPress",
    image: "/photo/my-work/مكتب المحاماه.png",
    link: "https://hmhlaw.org/",
    methodology: "WordPress"
  },
  {
    id: 8,
    title: "Learning Stages",
    category: "WordPress",
    image: "/photo/my-work/مراحل التعلم.png",
    link: "https://marahelschool.edu.sa/",
    methodology: "WordPress"
  },
  {
    id: 9,
    title: "Key Neo",
    category: "WordPress",
    image: "/photo/my-work/كيان نيبو.png",
    link: "https://kayannebu.com/",
    methodology: "WordPress"
  },
  {
    id: 10,
    title: "High Tech Vision",
    category: "WordPress",
    image: "/photo/my-work/هاي تك فيجن.png",
    link: "https://hightechvision.net/",
    methodology: "WordPress"
  },
  {
    id: 11,
    title: "Salsabeel Shop",
    category: "Next.js",
    image: "/photo/my-work/salsabeel-shop.png",
    link: "https://my-sclapture-app.vercel.app/",
    methodology: "Next.js"
  },
  {
    id: 12,
    title: "My New Sculpture App",
    category: "Next.js",
    image: "/photo/my-work/my-new-sclapture-app.png",
    link: "https://my-new-sclapture-app.vercel.app/",
    methodology: "Next.js"
  },
  {
    id: 13,
    title: "Smart Watch App",
    category: "Shopify",
    image: "/photo/my-work/ساعه.png",
    link: "https://m2msw.com/",
    methodology: "Shopify"
  },
  {
    id: 14,
    title: "DM World",
    category: "WordPress",
    image: "/photo/my-work/dm world.png",
    link: "https://dm-world.co/",
    methodology: "WordPress"
  },
  {
    id: 15,
    title: "HR Solution",
    category: "WordPress",
    image: "/photo/my-work/hr sulution.png",
    link: "https://hrsolution.ag/en/global-payroll-provider-hrsolution",
    methodology: "WordPress"
  },
  {
    id: 16,
    title: "Mid Pro",
    category: "Next.js",
    image: "/photo/my-work/ميد برو.png",
    link: "https://medproco.com/",
    methodology: "Next.js"
  },
  {
    id: 17,
    title: "Creative Agency CB",
    category: "WordPress",
    image: "/photo/my-work/cb.png",
    link: "https://cbegypt.com/",
    methodology: "WordPress"
  },
  {
    id: 18,
    title: "Future Academy",
    category: "WordPress",
    image: "/photo/my-work/اكادميه المستقبل.png",
    link: "https://futureacademyom.com/",
    methodology: "WordPress"
  },
  {
    id: 19,
    title: "Al-Roshd Transport",
    category: "WordPress",
    image: "/photo/my-work/شركه الرشد للنقل.png",
    link: "https://alroshd.com/ar/",
    methodology: "WordPress"
  },
  {
    id: 20,
    title: "Al-Rowad Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس الرواد.png",
    link: "https://www.rowad-t.com.sa/",
    methodology: "WordPress"
  },
  {
    id: 21,
    title: "Qortuba Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس قرطبة.png",
    link: "https://qurtuba.edu.sa/",
    methodology: "WordPress"
  },
  {
    id: 22,
    title: "Al-Thughr Schools",
    category: "WordPress",
    image: "/photo/my-work/مدارس الثغر.png",
    link: "https://thagherschool.com/",
    methodology: "WordPress"
  },
  {
    id: 23,
    title: "Ashal Platform",
    category: "WordPress",
    image: "/photo/my-work/اسهل.png",
    link: "https://ashal-kw.com/",
    methodology: "WordPress"
  }
];