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
    bio: "Vivian Glenn is the Founder and President of Wellness Through Clay, a student-led initiative that creates space for students to unwind, connect, and explore ceramics. After taking ceramics throughout high school, she saw there wasn’t a place to engage with it recreationally at Rutgers and started WTC to bring that experience to campus. She is also involved in public health research, with experience at Brown University School of Public Health, the Rutgers Center for Alcohol and Substance Use Studies, and the RWJ Women’s Health Institute, focusing on substance use disorder, mental health, and policy. She works as a Learning Assistant for Physics for the Sciences. Outside of school, she enjoys baking, exploring coffee shops, and traveling.",
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
    role: "Social Media Chair",
    meta: "Social Media Chair · Class of 2027 · Middletown, NJ · Biological Sciences",
    bio: "Zabrina (Class of 2027) is from Middletown, New Jersey, and has lived here for the past 7 years. She is pursuing a major in Biological sciences and is on the pre-medical track. Outside of classroom, she volunteers at a non-profit health organization and translates for patients who are unable to speak English. Although she loves science with her whole heart, she values creativity just as much. She loves to draw both digitally and traditionally, bake, play video-games, write, and spend quality time with those closest to her.",
    imageSrc: "/assets/team/zabrina.png",
    imageAlt: "Zabrina Garofalo team portrait card",
    imagePosition: "49% 30%"
  },
  {
    name: "Zofia Garofalo",
    role: "Social Media Chair",
    meta: "Social Media Chair",
    bio: "Bio forthcoming.",
    imageSrc: "/assets/team/zofia.png",
    imageAlt: "Zofia Garofalo team portrait card",
    imagePosition: "52% 31%"
  },
  {
    name: "Sheila Tabanli",
    role: "Faculty Sponsor",
    meta: "Faculty Sponsor · Mathematics · Rutgers University–New Brunswick",
    bio: "Sheila Tabanli earned her Ph.D. in Computer Science from Missouri University of Science & Technology and is currently an Assistant Teaching Professor of Mathematics at Rutgers University–New Brunswick. Her work focuses on designing student-centered, evidence-based instructional strategies that improve learning experiences and foster a sense of belonging in math classrooms. She developed an instructional framework grounded in cognitive science and Social Emotional Learning (SEL). With over 20 years of experience in K–20 education, she brings deep expertise in inclusive and research-based teaching practices. She is also a Rutgers Chancellor Teaching Fellow, developing pedagogical innovations to support personalized learning pathways. In addition, she supports Wellness Through Clay as a dedicated faculty sponsor, offering guidance to advance its mission of creativity, wellness, and community.",
    imageSrc: "/assets/team/tabanli.jpg",
    imageAlt: "Sheila Tabanli portrait",
    imagePosition: "50% 25%"
  }
];

export const homeDoodles: DoodleAsset[] = [
  {
    src: "/assets/creations/clear-bg/frog-cowboy.png",
    alt: "Clay frog cowboy",
    width: 100,
    height: 100,
    style: { top: "7%", left: "4%", opacity: "0.82", rotate: "-5deg", zIndex: "6", animationDelay: "0s" }
  },
  {
    src: "/assets/creations/clear-bg/mushroom.png",
    alt: "Clay mushroom",
    width: 88,
    height: 98,
    style: { top: "7%", right: "4%", opacity: "0.78", rotate: "6deg", zIndex: "4", animationDelay: "0.7s" }
  },
  {
    src: "/assets/creations/clear-bg/axolotl.png",
    alt: "Clay axolotl",
    width: 112,
    height: 100,
    style: { top: "38%", left: "2%", opacity: "0.8", rotate: "-8deg", zIndex: "7", animationDelay: "1.3s" }
  },
  {
    src: "/assets/creations/clear-bg/manta-ray.png",
    alt: "Clay manta ray",
    width: 120,
    height: 88,
    style: { top: "35%", right: "2%", opacity: "0.82", rotate: "5deg", zIndex: "5", animationDelay: "0.4s" }
  },
  {
    src: "/assets/creations/clear-bg/snail-mushroom.png",
    alt: "Clay snail and mushroom",
    width: 98,
    height: 90,
    style: { bottom: "12%", left: "5%", opacity: "0.76", rotate: "4deg", zIndex: "6", animationDelay: "1.8s" }
  },
  {
    src: "/assets/creations/clear-bg/lemon-dish.png",
    alt: "Clay lemon dish",
    width: 92,
    height: 86,
    style: { bottom: "8%", left: "18%", opacity: "0.74", rotate: "-3deg", zIndex: "4", animationDelay: "0.9s" }
  },
  {
    src: "/assets/creations/clear-bg/flower-dish.png",
    alt: "Clay flower dish",
    width: 92,
    height: 92,
    style: { bottom: "8%", right: "5%", opacity: "0.78", rotate: "-5deg", zIndex: "5", animationDelay: "1.5s" }
  }
];

export const missingAssets = [
  "public/assets/team/sheila.png"
];
