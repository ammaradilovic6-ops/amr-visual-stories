import gordon01 from "@/assets/gordon-shortform-01.mp4.asset.json";
import gordon02 from "@/assets/gordon-shortform-02.mp4.asset.json";
import gordon03 from "@/assets/gordon-shortform-03.mp4.asset.json";
import admir01 from "@/assets/admir-shortform-01.mp4.asset.json";
import admir02 from "@/assets/admir-shortform-02.mp4.asset.json";

export type Tag =

  | "EDIT"
  | "SHOOT"
  | "MOTION"
  | "SHORT-FORM"
  | "LONG-FORM"
  | "SPORTS";

export type Media =
  | { kind: "youtube"; id: string; url: string; label: string }
  | { kind: "reel"; url: string; label: string }
  | { kind: "placeholder"; label: string };

export type Project = {
  slug: string;
  title: string;
  categories: string[];
  tags: Tag[];
  description: string;
  role: string[];
  media: Media[];
  layout: "wide" | "tall" | "full" | "small";
};

export const projects: Project[] = [
  {
    slug: "gordon-kast",
    title: "Gordon Kast",
    categories: ["VIDEO EDITING", "VIDEOGRAPHY", "LONG-FORM", "SHORT-FORM"],
    tags: ["EDIT", "SHOOT", "LONG-FORM", "SHORT-FORM"],
    description:
      "Long-form and short-form content covering interviews, vlogs, events and creator-led content.",
    role: [
      "Long-form editing",
      "Short-form editing",
      "Videography",
      "Interview filming",
      "Vlog filming",
      "Event filming",
      "Post-production",
    ],
    media: [{ kind: "placeholder", label: "VIDEO EDITING / VIDEOGRAPHY" }],
    layout: "full",
  },
  {
    slug: "admir-shera",
    title: "Admir Shera",
    categories: ["VIDEO EDITING", "LONG-FORM", "SHORT-FORM", "SOCIAL"],
    tags: ["EDIT", "LONG-FORM", "SHORT-FORM"],
    description: "Long-form and short-form editing for creator-led social content.",
    role: [
      "Long-form editing",
      "Short-form editing",
      "Social media editing",
      "Pacing",
      "Storytelling",
      "Visual enhancement",
    ],
    media: [{ kind: "placeholder", label: "VIDEO EDITING / SOCIAL" }],
    layout: "wide",
  },
  {
    slug: "kenny-marshall",
    title: "Kenny Marshall",
    categories: ["VIDEOGRAPHY", "EDITING", "PRODUCTION"],
    tags: ["SHOOT", "EDIT"],
    description: "Filmed and edited content from production through post-production.",
    role: ["Filming", "Camera operation", "Editing", "Post-production"],
    media: [
      {
        kind: "youtube",
        id: "LRIP0yRXU20",
        url: "https://www.youtube.com/watch?v=LRIP0yRXU20",
        label: "Filmed & Edited",
      },
    ],

    layout: "tall",
  },
  {
    slug: "yurii",
    title: "Yurii",
    categories: ["SHORT-FORM", "TIKTOK", "INFLUENCER CONTENT"],
    tags: ["EDIT", "SHORT-FORM"],
    description:
      "Short-form social content created for influencer-led campaigns and digital promotions.",
    role: [
      "TikTok editing",
      "Short-form editing",
      "Captions",
      "Pacing",
      "Social-first editing",
    ],
    media: [{ kind: "placeholder", label: "SHORT-FORM / INFLUENCER CONTENT" }],
    layout: "small",
  },
  {
    slug: "football-player-profile",
    title: "Football Player Profile",
    categories: ["SPORTS", "VIDEOGRAPHY", "EDITING"],
    tags: ["SPORTS", "SHOOT", "EDIT"],
    description:
      "A football player profile created to present match footage and playing ability in a concise, professional format.",
    role: [
      "Filming",
      "Editing",
      "Sports storytelling",
      "Highlight selection",
      "Music/edit synchronization",
    ],
    media: [{ kind: "placeholder", label: "SPORTS / VIDEOGRAPHY" }],
    layout: "small",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Real supplied media. Association with a specific project is not established,
// so it lives under MORE WORK rather than being guessed onto a client.
export const youtubeWork: { id: string; url: string }[] = [
  { id: "l7b7hpGra8U", url: "https://www.youtube.com/watch?v=l7b7hpGra8U" },
  { id: "mi5nyErchKA", url: "https://www.youtube.com/watch?v=mi5nyErchKA" },
  { id: "d2uj8zEG9EA", url: "https://www.youtube.com/watch?v=d2uj8zEG9EA" },
];

/** Real uploaded short-form MP4s. Exactly five. */
export type ShortFormClip = {
  id: string;
  src: string;
  client: string;
  slug: string;
  label: string;
};

export const shortForm: ShortFormClip[] = [
  {
    id: "gordon-01",
    src: gordon01.url,
    client: "Gordon Kast",
    slug: "gordon-kast",
    label: "Short-form editing",
  },
  {
    id: "gordon-02",
    src: gordon02.url,
    client: "Gordon Kast",
    slug: "gordon-kast",
    label: "Short-form editing",
  },
  {
    id: "gordon-03",
    src: gordon03.url,
    client: "Gordon Kast",
    slug: "gordon-kast",
    label: "Short-form editing",
  },
  {
    id: "admir-01",
    src: admir01.url,
    client: "Admir Shera",
    slug: "admir-shera",
    label: "Short-form editing",
  },
  {
    id: "admir-02",
    src: admir02.url,
    client: "Admir Shera",
    slug: "admir-shera",
    label: "Short-form editing",
  },
];

export const clipsFor = (slug: string) => shortForm.filter((c) => c.slug === slug);


export const capabilities = [
  {
    key: "EDIT",
    items: [
      "Long-form",
      "YouTube",
      "Short-form",
      "Social Media",
      "Storytelling",
      "Pacing",
      "Sound Design",
    ],
  },
  {
    key: "SHOOT",
    items: [
      "Interviews",
      "Events",
      "Vlogs",
      "On-location Production",
      "Camera Operation",
    ],
  },
  {
    key: "MOTION",
    items: [
      "Motion Graphics",
      "Typography",
      "Visual Effects",
      "Animated UI",
      "Transitions",
    ],
  },
];

export const experience = [
  { name: "Gordon Kast", meta: "Video Editing · Videography · Long-form · Short-form" },
  { name: "Admir Shera", meta: "Video Editing · Long-form · Short-form" },
  { name: "Yurii", meta: "Short-form · TikTok · Influencer Content" },
  { name: "Kenny Marshall", meta: "Videography · Editing" },
  { name: "Football Player Profile", meta: "Sports · Videography · Editing" },
];

export const EMAIL = "ammaradilovic6@gmail.com";
export const INSTAGRAM = "ammaradilovicc";
export const INSTAGRAM_URL = "https://www.instagram.com/ammaradilovicc/";
