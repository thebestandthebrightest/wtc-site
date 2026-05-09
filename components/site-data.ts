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
    bio: "Vivian Glenn is the Founder and President of Wellness Through Clay, a student-led initiative that creates space for students to unwind, connect, and explore ceramics. After taking ceramics throughout high school, she saw there wasn’t a place to engage with it recreationally at Rutgers and started WTC to bring that experience to campus. She is also involved in public health research, with experience at Brown University School of Public Health, the Rutgers Center for Alcohol and Substance Use Studies, and the RWJ Women’s Health Institute, focusing on substance use disorder, mental health, and policy. She works as a Learning Assistant for Physics for the Sciences. Outside of school, she enjoys baking, exploring coffee shops, and traveling. Fun fact: Vivian has traveled to 14 countries in 3 months!                                                                                                                              ",
    imageSrc: "/assets/team/vivian.png",
    imageAlt: "Vivian Glenn headshot",
    imagePosition: "50% 35%"
  },
  {
    name: "Saulė Mikaliūnaitė",
    role: "Vice President",
    meta: "Vice President · Class of 2027 · Vilnius, Lithuania · Genetics + Data Science",
    bio: "Having moved to the United States at 13, Saule has learned the importance of balancing consistent hard work with creative and physical outlets. She enjoys different forms of exercise like biking, rock climbing, skiing, hiking, swimming, and weightlifting. She also loves expressing her creativity through pottery, photography, and writing. With WTC, she is excited to help other high-achieving students create that balance and provide them with a space to socialize, relax, and engage through the tactile process of creating with clay! Alongside her rigorous coursework, Saule serves as an assistant researcher at Dr. Lei Yu’s lab, as well as a learning assistant for physics and a chess instructor for middle school students. She recently attended the American Association for Cancer Research Annual Meeting (in San Diego), where she presented her research poster. Fun fact: Saule has a twin sister who is a professional ballerina!",
    imageSrc: "/assets/team/saule.png",
    imageAlt: "Saulė Mikaliūnaitė team portrait card",
    imagePosition: "49% 29%"
  },
  {
    name: "Leudgiana Marcelin",
    role: "Research Chair",
    meta: "Research Chair · Class of 2027 · East Orange, NJ · Exercise Science, pre-medical track",
    bio: "Leudgiana Marcelin is an Exercise Science major with a strong interest in the intersection of physical health and clinical research. She currently works as a Recreation Aide, where she enjoys the opportunity to work closely with the elderly, assisting them with daily engagement and wellness activities. Her professional experience in recreation has sparked a commitment to understanding how movement can improve the quality of life for older populations. Leudgiana is dedicated to applying her academic background to meaningful research within her field. In her spare time, she is an avid reader and enjoys staying active through outdoor hobbies like hiking.",
    imageSrc: "/assets/team/leudgiana.png",
    imageAlt: "Leudgiana Marcelin team portrait card",
    imagePosition: "50% 31%"
  },
  {
    name: "Ikjot Puar",
    role: "Secretary",
    meta: "Secretary · Class of 2026 · Piscataway, NJ · Psychology + Biology, pre-optometry track",
    bio: "Ikjot Puar is from Piscataway, New Jersey, and is pursuing a major in Psychology with a minor in Biology on the pre-optometry track. She has been a member of RUPOPS, the Pre-Optometry Professions Society, for all of her years at Rutgers and served as President of the organization this past year. She is also a veteran volunteer for the New Jersey Special Olympics and the local clinical coordinator for Sikh Medical Initiative. Outside of school, Ikjot loves to draw and paint, cook, and run.                                                                                                                                                                      ",
    imageSrc: "/assets/team/ikjot.png",
    imageAlt: "Ikjot Puar team portrait card",
    imagePosition: "51% 31%"
  },
  {
    name: "Zabrina Garofalo",
    role: "Social Media Chair",
    meta: "Social Media Chair · Class of 2027 · Middletown, NJ · Biology, pre-medical track",
    bio: "Zabrina Garofalo is from Middletown, New Jersey, and has lived there for the past 8 years. She is pursuing a major in Biological Sciences and is on the pre-medical track. Outside of the classroom, she volunteers at a non-profit health organization as a community health worker (CHW) and translates for patients who are unable to speak English. Although she adores science, she values creativity just as much. She loves art, baking, playing video games, drawing both digitally and traditionally, writing, and spending quality time with those closest to her. Fun fact: Zabrina has moved over 10 times!                                                                                                                                                                                                       ",    
    imageSrc: "/assets/team/zabrina.png",
    imageAlt: "Zabrina Garofalo team portrait card",
    imagePosition: "49% 30%"
  },
  {
    name: "Zofia Garofalo",
    role: "Social Media Chair",
    meta: "Social Media Team Member · Class of 2030 · Middletown, NJ · Animal Science, pre-veterinary track",
    bio: "Zofia Garofalo moved from California to Middletown, New Jersey in 6th grade. Since then, they have decided to pursue their dream of becoming a veterinarian. Being a freshman, they haven’t had the opportunity to volunteer or research anything yet, but they were the treasurer for their previous school’s Environmental Club and participated in, through nomination, the Teen Arts Show. Along with a passion for the sciences, they have a love for all types of art. They have made clay creations before, but prefer drawing, both digitally and traditionally, and painting. They also enjoy playing video games, watching movies and anime, reading manga, watching and reading horror-related content, and spending time with their closest friends and family. Fun fact: Zofia has dyed their hair over 58 times!",
    imageAlt: "Zofia Garofalo team portrait card",
    imagePosition: "52% 31%"
  },
  {
    name: "Sheila Tabanli",
    role: "Faculty Sponsor",
    meta: "Faculty Sponsor · Department of Mathematics · Rutgers University–New Brunswick",
    bio: "Sheila Tabanli earned her Ph.D. in Computer Science from Missouri University of Science & Technology and is currently an Associate Professor of Mathematics at Rutgers University–New Brunswick. Her work focuses on designing student-centered, evidence-based instructional strategies that improve learning experiences and foster a sense of belonging in math classrooms. She developed an instructional framework grounded in cognitive science and Social Emotional Learning (SEL). With over 20 years of experience in K–20 education, she brings deep expertise in inclusive and research-based teaching practices. She is also a Rutgers Chancellor Teaching Fellow, developing pedagogical innovations to support personalized learning pathways. In addition, she supports Wellness Through Clay as a dedicated faculty sponsor, offering guidance to advance its mission of creativity, wellness, and community.",
    imageSrc: "/assets/team/tabanli.jpg",
    imageAlt: "Sheila Tabanli portrait",
    imagePosition: "50% 25%"
  }
];

export const homeDoodles: DoodleAsset[] = [
  {
    src: "/assets/creations/clear-bg/frog-cowboy.png",
    alt: "Clay frog cowboy",
    width: 140,
    height: 140,
    style: { top: "10%", left: "7%", opacity: "0.9", rotate: "-6deg", zIndex: "6", animationDelay: "0s" }
  },
  {
    src: "/assets/creations/clear-bg/axolotl.png",
    alt: "Clay axolotl",
    width: 150,
    height: 135,
    style: { top: "42%", left: "6%", opacity: "0.92", rotate: "-8deg", zIndex: "7", animationDelay: "1.2s" }
  },
  {
    src: "/assets/creations/clear-bg/manta-ray.png",
    alt: "Clay manta ray",
    width: 160,
    height: 120,
    style: { top: "39%", right: "3%", opacity: "0.9", rotate: "5deg", zIndex: "5", animationDelay: "0.5s" }
  },
  {
    src: "/assets/creations/clear-bg/lemon-dish.png",
    alt: "Clay lemon dish",
    width: 120,
    height: 110,
    style: { bottom: "14%", left: "22%", opacity: "0.85", rotate: "-3deg", zIndex: "4", animationDelay: "0.9s" }
  },
  {
    src: "/assets/creations/clear-bg/snake.png",
    alt: "Clay snake",
    width: 135,
    height: 115,
    style: { bottom: "12%", right: "24%", opacity: "0.88", rotate: "4deg", zIndex: "5", animationDelay: "1.4s" }
  },
  {
    src: "/assets/creations/clear-bg/sun-tile.png",
    alt: "Clay sun tile",
    width: 120,
    height: 120,
    style: { top: "10%", right: "7%", opacity: "0.85", rotate: "6deg", zIndex: "4", animationDelay: "0.7s" }
  },
  {
    src: "/assets/creations/clear-bg/torso-sculpture.png",
    alt: "Clay torso sculpture",
    width: 150,
    height: 170,
    style: { bottom: "10%", right: "8%", opacity: "0.9", rotate: "-4deg", zIndex: "6", animationDelay: "1.6s" }
  }
];

export const missingAssets = [
  "public/assets/team/sheila.png"
];
