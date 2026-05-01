export type NavKey = "home" | "about" | "team" | "creations" | "sign-up";
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export type CropAsset = {
  src: string;
  alt: string;
  objectPosition: string;
};

export type DoodleAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: Record<string, string>;
};

export const navLinks: Array<{ href: string; label: string; key: NavKey }> = [
  { href: "/about", label: "about", key: "about" },
  { href: "/team", label: "our team", key: "team" },
  { href: "/creations", label: "creations", key: "creations" },
  { href: "/sign-up", label: "sign up", key: "sign-up" }
];

export const aboutParagraphs = [
  [
    "At Rutgers, there wasn’t a space where students could interact with clay in a casual, recreational way. Creative outlets existed, but they were often structured, skill-based, or hard to access. There was a clear gap: ",
    "something simple, hands-on, and low-pressure."
  ],
  ["Wellness Through Clay was built to fill that gap."],
  [
    "The program started as an idea to make wellness easier to show up for, something you could walk into without experience or expectations, and ",
    "leave your stress at the door.",
    " From there, a team was formed, sessions were designed, and a pilot was launched."
  ],
  ["Students showed up and kept coming back, often bringing their friends with them."],
  [
    "Today, the program runs as a two-part experience. In the first session, you create your piece using air-dry clay, with support from workshop facilitators if you want it. You can follow a tutorial or make whatever you feel like. The following week, you come back to finish it with gloss and varnish."
  ],
  ["The room is relaxed, music playing, people talking, hands busy with clay."],
  ["It’s simple, but that’s the point."],
  [
    "You get a break. You make something with your hands. You spend time around other people without pressure. And you leave with something you actually made."
  ],
  ["What started as a gap is now a space people return to, because it works."],
  ["Anyone in the Rutgers community is welcome, including students, faculty, and staff."]
];

export const teamMembers: TeamMember[] = [
  {
    name: "Vivian Glenn",
    role: "Founder",
    bio: "Vivian (Class of 2027) is from Moorestown, New Jersey. After taking ceramics classes all four years of high school, she was inspired to bring a hands-on clay activity to Rutgers. She is pursuing the Public Health major and is on the pre-medical track. Outside of class, Vivian works as a Learning Assistant for Physics for the Sciences and is a research assistant at Brown University’s School of Public Health. In her free time, she enjoys baking desserts, exploring new coffee shops, and traveling.",
    imageSrc: "/assets/team/vivian.png",
    imageAlt: "Vivian Glenn team portrait card",
    imagePosition: "52% 34%"
  },
  {
    name: "Saulė Mikaliūnaitė",
    role: "Vice President",
    bio: "Saulė (Class of 2027) is originally from Lithuania but has been living in Jefferson, New Jersey, for the past few years. She is majoring in Genetics with a minor in Data Science while also working as a chess instructor and an ODASIS Supplemental Instructor. Passionate about bringing creativity into everyday life, she strives to inspire others to do the same. Her favorite creative outlets include photography, fashion, writing, playing the piano, and various handcrafts.",
    imageSrc: "/assets/team/saule.png",
    imageAlt: "Saulė Mikaliūnaitė team portrait card",
    imagePosition: "49% 29%"
  },
  {
    name: "Leudgiana Marcelin",
    role: "Research Chair",
    bio: "Leudgiana Marcelin Class of 2027 is from East Orange. After working as a teacher at a daycare, she developed a passion for children’s health and well-being, inspiring her journey toward pediatric medicine. She is majoring in Exercise Science on the pre-medical track, with a special interest in stem cell research. Outside of class, she has been involved with Glamour Gals, and Gen’ Next. In her free time, she enjoys trying new activities, working out, and reading.",
    imageSrc: "/assets/team/leudgiana.png",
    imageAlt: "Leudgiana Marcelin team portrait card",
    imagePosition: "50% 31%"
  },
  {
    name: "Ikjot Puar",
    role: "Secretary",
    bio: "Bio forthcoming.",
    imageSrc: "/assets/team/ikjot.png",
    imageAlt: "Ikjot Puar team portrait card",
    imagePosition: "51% 31%"
  },
  {
    name: "Zabrina Garofalo",
    role: "Founder",
    bio: "Zabrina (Class of 2027) is from Middletown, New Jersey, and has lived here for the past 7 years. She is pursuing a major in Biological sciences and is on the pre-medical track. Outside of classroom, she volunteers at a non-profit health organization and translates for patients who are unable to speak English. Although she loves science with her whole heart, she values creativity just as much. She loves to draw both digitally and traditionally, bake, play video-games, write, and spend quality time with those closest to her.",
    imageSrc: "/assets/team/zabrina.png",
    imageAlt: "Zabrina Garofalo team portrait card",
    imagePosition: "49% 30%"
  },
  {
    name: "Zofia Garofalo",
    role: "Vice President",
    bio: "Bio forthcoming.",
    imageSrc: "/assets/team/zofia.png",
    imageAlt: "Zofia Garofalo team portrait card",
    imagePosition: "52% 31%"
  },
  {
    name: "Sheila Tabanli",
    role: "Faculty Sponsor",
    bio: "Sheila Tabanli earned her Ph.D. in Computer Science at Missouri University of Science & Technology (Missouri S&T). She is currently an Assistant Teaching Professor of Mathematics at Rutgers University – New Brunswick. Her scholarship focuses on designing student-centered, evidence-based instructional strategies to improve student learning experiences and sense of belonging in math classrooms. She recently developed an instructional framework grounded on research in cognitive science and Social Emotional Learning (SEL). Dr. Tabanli has more than 20 years of experience in the K-20 education domain and has diverse hands-on experiences in designing and implementing inclusive, research-based, engaging learning practices. She is a fellow of Rutgers Chancellor Teaching Fellowship program to develop pedagogical innovations for personalized pathways aimed at improving student learning outcomes. In addition to her academic work, she has been actively supporting Wellness Through Clay as a thoughtful and dedicated faculty sponsor, providing invaluable guidance for our mission to promote creativity, wellness, and community engagement."
  }
];

export const homeDoodles: DoodleAsset[] = [
  {
    src: "/assets/doodles/oleander-sticker.png",
    alt: "Oleander sticker",
    width: 138,
    height: 202,
    style: { top: "15.5%", left: "11.2%" }
  },
  {
    src: "/assets/doodles/lily-sticker.png",
    alt: "Lily sticker",
    width: 126,
    height: 210,
    style: { top: "17.2%", right: "11%" }
  },
  {
    src: "/assets/doodles/flying-butterfly-sticker.png",
    alt: "Flying butterfly sticker",
    width: 150,
    height: 154,
    style: { top: "44.8%", left: "4.6%" }
  },
  {
    src: "/assets/doodles/record-sticker.png",
    alt: "Record sticker",
    width: 144,
    height: 118,
    style: { top: "42.8%", right: "5.2%" }
  },
  {
    src: "/assets/doodles/open-butterfly-sticker.png",
    alt: "Open butterfly sticker",
    width: 154,
    height: 124,
    style: { bottom: "11.2%", left: "14.6%" }
  },
  {
    src: "/assets/doodles/bee-sticker.png",
    alt: "Bee sticker",
    width: 144,
    height: 127,
    style: { bottom: "7.6%", left: "47.5%" }
  },
  {
    src: "/assets/doodles/brown-butterfly-downturned.png",
    alt: "Brown butterfly sticker",
    width: 168,
    height: 105,
    style: { bottom: "10.3%", right: "15%" }
  },
  {
    src: "/assets/doodles/orchid-sticker.png",
    alt: "Orchid sticker",
    width: 112,
    height: 171,
    style: { bottom: "5.9%", right: "5.4%" }
  }
];

export const creationsGallery: Array<
  CropAsset & {
    key: string;
    label: string;
    shape: "portrait" | "square" | "landscape";
  }
> = [
  {
    key: "flower",
    src: "/assets/creations/wtc-info-clay.png",
    alt: "Clay flower creation in progress",
    objectPosition: "28% 79%",
    label: "flower",
    shape: "portrait"
  },
  {
    key: "manta",
    src: "/assets/creations/thank-you-creations.png",
    alt: "Clay manta ray creation",
    objectPosition: "78% 18%",
    label: "manta ray",
    shape: "square"
  },
  {
    key: "cup",
    src: "/assets/creations/sign-up-cup.png",
    alt: "Clay cup creation",
    objectPosition: "26% 75%",
    label: "cup",
    shape: "portrait"
  },
  {
    key: "palette",
    src: "/assets/creations/paint-palette.png",
    alt: "Clay turtle palette creation",
    objectPosition: "50% 35%",
    label: "palette",
    shape: "landscape"
  },
  {
    key: "cat",
    src: "/assets/creations/flyer-clay-pieces.png",
    alt: "Clay cat face creation",
    objectPosition: "49% 24%",
    label: "cat",
    shape: "square"
  }
];

export const missingAssets = [
  "public/assets/team/sheila.png"
];
