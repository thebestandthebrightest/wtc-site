export type NavKey = "home" | "about" | "team" | "creations" | "sign-up";
export type TeamMember = {
  name: string;
  role: string;
  meta: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
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
    role: "Founder & President",
    meta: "Founder & President · Class of 2027 · Moorestown, NJ · Public Health",
    bio: "Vivian Glenn is the Founder and President of Wellness Through Clay, a student-led initiative that creates space for students to unwind, connect, and explore ceramics. After taking ceramics throughout high school, she noticed there wasn’t a place to engage with it recreationally at Rutgers and started WTC to bring that experience to campus. Alongside this, Vivian has been involved in public health research, with experience at Brown University School of Public Health, the Rutgers Center for Alcohol and Substance Use Studies, and the RWJ Women's Health Institute, focusing on substance use disorder, mental health, and policy. She also works as a Learning Assistant for Physics for the Sciences and previously studied abroad in London at City St George’s, University of London. Outside of school, Vivian enjoys baking desserts, exploring new coffee shops, and loves traveling. She has visited 14 countries in just three months.",
    imageSrc: "/assets/team/vivian.png",
    imageAlt: "Vivian Glenn headshot",
    imagePosition: "50% 35%"
  },
  {
    name: "Saulė Mikaliūnaitė",
    role: "Vice President",
    meta: "Vice President · Class of 2027 · Jefferson, NJ · Genetics + Data Science",
    bio: "Saulė (Class of 2027) is originally from Lithuania but has been living in Jefferson, New Jersey, for the past few years. She is majoring in Genetics with a minor in Data Science while also working as a chess instructor and an ODASIS Supplemental Instructor. Passionate about bringing creativity into everyday life, she strives to inspire others to do the same. Her favorite creative outlets include photography, fashion, writing, playing the piano, and various handcrafts.",
    imageSrc: "/assets/team/saule.png",
    imageAlt: "Saulė Mikaliūnaitė team portrait card",
    imagePosition: "49% 29%"
  },
  {
    name: "Leudgiana Marcelin",
    role: "Research Chair",
    meta: "Research Chair · Class of 2027 · East Orange, NJ · Exercise Science",
    bio: "Leudgiana Marcelin Class of 2027 is from East Orange. After working as a teacher at a daycare, she developed a passion for children’s health and well-being, inspiring her journey toward pediatric medicine. She is majoring in Exercise Science on the pre-medical track, with a special interest in stem cell research. Outside of class, she has been involved with Glamour Gals, and Gen’ Next. In her free time, she enjoys trying new activities, working out, and reading.",
    imageSrc: "/assets/team/leudgiana.png",
    imageAlt: "Leudgiana Marcelin team portrait card",
    imagePosition: "50% 31%"
  },
  {
    name: "Ikjot Puar",
    role: "Secretary",
    meta: "Secretary",
    bio: "Bio forthcoming.",
    imageSrc: "/assets/team/ikjot.png",
    imageAlt: "Ikjot Puar team portrait card",
    imagePosition: "51% 31%"
  },
  {
    name: "Zabrina Garofalo",
    role: "Founder",
    meta: "Founder · Class of 2027 · Middletown, NJ · Biological Sciences",
    bio: "Zabrina (Class of 2027) is from Middletown, New Jersey, and has lived here for the past 7 years. She is pursuing a major in Biological sciences and is on the pre-medical track. Outside of classroom, she volunteers at a non-profit health organization and translates for patients who are unable to speak English. Although she loves science with her whole heart, she values creativity just as much. She loves to draw both digitally and traditionally, bake, play video-games, write, and spend quality time with those closest to her.",
    imageSrc: "/assets/team/zabrina.png",
    imageAlt: "Zabrina Garofalo team portrait card",
    imagePosition: "49% 30%"
  },
  {
    name: "Zofia Garofalo",
    role: "Vice President",
    meta: "Vice President",
    bio: "Bio forthcoming.",
    imageSrc: "/assets/team/zofia.png",
    imageAlt: "Zofia Garofalo team portrait card",
    imagePosition: "52% 31%"
  },
  {
    name: "Sheila Tabanli",
    role: "Faculty Sponsor",
    meta: "Faculty Sponsor · Mathematics · Rutgers University–New Brunswick",
    bio: "Sheila Tabanli earned her Ph.D. in Computer Science at Missouri University of Science & Technology (Missouri S&T). She is currently an Assistant Teaching Professor of Mathematics at Rutgers University – New Brunswick. Her scholarship focuses on designing student-centered, evidence-based instructional strategies to improve student learning experiences and sense of belonging in math classrooms. She recently developed an instructional framework grounded on research in cognitive science and Social Emotional Learning (SEL). Dr. Tabanli has more than 20 years of experience in the K-20 education domain and has diverse hands-on experiences in designing and implementing inclusive, research-based, engaging learning practices. She is a fellow of Rutgers Chancellor Teaching Fellowship program to develop pedagogical innovations for personalized pathways aimed at improving student learning outcomes. In addition to her academic work, she has been actively supporting Wellness Through Clay as a thoughtful and dedicated faculty sponsor, providing invaluable guidance for our mission to promote creativity, wellness, and community engagement."
  }
];

export const homeDoodles: DoodleAsset[] = [
  {
    src: "/assets/doodles/oleander-doodle.png",
    alt: "Oleander doodle",
    width: 60,
    height: 88,
    style: { top: "12%", left: "5%", opacity: "0.75", transform: "rotate(-6deg)" }
  },
  {
    src: "/assets/doodles/lily-doodle.png",
    alt: "Lily doodle",
    width: 70,
    height: 116,
    style: { top: "11%", right: "7%", opacity: "0.68", transform: "rotate(7deg)" }
  },
  {
    src: "/assets/doodles/flying-butterfly-doodle.png",
    alt: "Flying butterfly doodle",
    width: 78,
    height: 80,
    style: { top: "34%", left: "4%", opacity: "0.8", transform: "rotate(-8deg)" }
  },
  {
    src: "/assets/doodles/bee-doodle.png",
    alt: "Bee doodle",
    width: 52,
    height: 45,
    style: { top: "16%", left: "48%", opacity: "0.72", transform: "rotate(4deg)" }
  },
  {
    src: "/assets/doodles/open-butterfly-doodle.png",
    alt: "Open butterfly doodle",
    width: 74,
    height: 60,
    style: { bottom: "17%", left: "18%", opacity: "0.74", transform: "rotate(3deg)" }
  },
  {
    src: "/assets/doodles/brown-butterfly-doodle.png",
    alt: "Brown butterfly doodle",
    width: 78,
    height: 49,
    style: { bottom: "13%", right: "16%", opacity: "0.79", transform: "rotate(-4deg)" }
  },
  {
    src: "/assets/doodles/orchid-doodle.png",
    alt: "Orchid doodle",
    width: 56,
    height: 85,
    style: { bottom: "8%", right: "5%", opacity: "0.7", transform: "rotate(5deg)" }
  }
];

export const creationsDoodles: DoodleAsset[] = [
  {
    src: "/assets/doodles/record-doodle.png",
    alt: "Record doodle",
    width: 50,
    height: 41,
    style: { top: "12%", right: "8%", opacity: "0.55", transform: "rotate(6deg)" }
  },
  {
    src: "/assets/doodles/oleander-doodle-flip.png",
    alt: "Oleander doodle",
    width: 42,
    height: 64,
    style: { top: "38%", left: "4%", opacity: "0.58", transform: "rotate(-5deg)" }
  },
  {
    src: "/assets/doodles/frog-doodle.png",
    alt: "Frog doodle",
    width: 46,
    height: 56,
    style: { bottom: "9%", right: "7%", opacity: "0.6", transform: "rotate(4deg)" }
  }
];

export const creationsGallery: Array<
  {
    key: string;
    src: string;
    alt: string;
  }
> = [
  {
    key: "watermelon",
    src: "/assets/creations/clear-bg/watermelon.png",
    alt: "Watermelon clay dish"
  },
  {
    key: "mini-landscape",
    src: "/assets/creations/clear-bg/mini-landscape.png",
    alt: "Mini clay landscape dish"
  },
  {
    key: "waffle",
    src: "/assets/creations/clear-bg/waffle.png",
    alt: "Clay waffle dish"
  },
  {
    key: "duck-bowl",
    src: "/assets/creations/clear-bg/duck-bowl.png",
    alt: "Clay duck pond bowl"
  },
  {
    key: "blue-creature",
    src: "/assets/creations/clear-bg/blue-creature.png",
    alt: "Blue clay creature"
  },
  {
    key: "cat-pond",
    src: "/assets/creations/clear-bg/cat-pond.png",
    alt: "Clay cat floating by a pond"
  },
  {
    key: "owl",
    src: "/assets/creations/clear-bg/owl.png",
    alt: "Clay owl with leaves"
  },
  {
    key: "manta-ray",
    src: "/assets/creations/clear-bg/manta-ray.png",
    alt: "Clay manta ray"
  },
  {
    key: "elephant",
    src: "/assets/creations/clear-bg/elephant.png",
    alt: "Clay elephant"
  },
  {
    key: "axolotl",
    src: "/assets/creations/clear-bg/axolotl.png",
    alt: "Clay axolotl"
  },
  {
    key: "mushroom",
    src: "/assets/creations/clear-bg/mushroom.png",
    alt: "Clay mushroom candle holder"
  },
  {
    key: "flower-dish",
    src: "/assets/creations/clear-bg/flower-dish.png",
    alt: "Clay flower dish"
  }
];

export const missingAssets = [
  "public/assets/team/sheila.png"
];
