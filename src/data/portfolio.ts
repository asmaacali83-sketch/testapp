export const portfolio = {
  name: "Asmaa Cali Jimcaale",
  role: "Web Developer",
  tagline: "Creative & Colorful",
  about: {
    text: "Asmaa is a computer science enthusiast and a dedicated web developer who loves continually learning new skills.",
  },
  skills: ["HTML", "CSS", "Java", "Graphic Design", "AI"],
  services: [
    {
      title: "Responsive websites",
      description: "Website development shaped for screens of every size.",
      color: "aqua",
    },
    {
      title: "Landing pages",
      description: "Focused landing page design and development.",
      color: "coral",
    },
    {
      title: "Website redesign",
      description: "A fresh visual direction for an existing website.",
      color: "sun",
    },
    {
      title: "Frontend development",
      description: "Bringing website interfaces to life in the browser.",
      color: "purple",
    },
  ],
  projects: [
    {
      title: "Al-Noor Islamic Academy",
      image: "/images/projects/al-noor-islamic-academy.png",
      alt: "Al-Noor Islamic Academy website screenshot with course navigation and an academy hero section",
      description:
        "An Islamic academy website featuring course, faculty, and enrollment navigation.",
      details: {
        technologies: [] as string[],
        client: "",
        date: "",
        liveDemoUrl: "",
        githubUrl: "",
        metrics: [] as string[],
        outcome: "",
        testimonial: "",
      },
    },
    {
      title: "Asma Restaurant",
      image: "/images/projects/asma-restaurant.png",
      alt: "Asma Restaurant website screenshot with a restaurant hero and menu and reservation buttons",
      description:
        "A restaurant landing page with menu and reservation calls to action.",
      details: {
        technologies: [] as string[],
        client: "",
        date: "",
        liveDemoUrl: "",
        githubUrl: "",
        metrics: [] as string[],
        outcome: "",
        testimonial: "",
      },
    },
    {
      title: "Agricology",
      image: "/images/projects/agricology.png",
      alt: "Agricology website screenshot with agroecology navigation and a farm group photograph",
      description:
        "An agroecology website with farmer profiles, resources, projects, and news.",
      details: {
        technologies: [] as string[],
        client: "",
        date: "",
        liveDemoUrl: "",
        githubUrl: "",
        metrics: [] as string[],
        outcome: "",
        testimonial: "",
      },
    },
    {
      title: "Carewell Clinic",
      image: "/images/projects/carewell-clinic.png",
      alt: "Carewell Clinic website screenshot with primary care information and an appointment request button",
      description:
        "A clinic website presenting primary care information and an appointment request.",
      details: {
        technologies: [] as string[],
        client: "",
        date: "",
        liveDemoUrl: "",
        githubUrl: "",
        metrics: [] as string[],
        outcome: "",
        testimonial: "",
      },
    },
    {
      title: "Bakka Training Center",
      image: "/images/projects/bakka-training-center.png",
      alt: "Bakka Training Center website screenshot with a learning-focused hero and students",
      description:
        "A training center website with a learning-focused introduction and subject links.",
      details: {
        technologies: [] as string[],
        client: "",
        date: "",
        liveDemoUrl: "",
        githubUrl: "",
        metrics: [] as string[],
        outcome: "",
        testimonial: "",
      },
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
