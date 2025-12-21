const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "29 May 2025",
    title: "Learn HTML AND CSS",
    image: "/images/scrimba.webp",
    link: "https://drive.google.com/file/d/1UiNW0RXtLxQ24GkvA7-gbv_h8owD7_y1/view",
  },
  {
    id: 2,
    date: "03 June, 2025",
    title: "Learn JavaScript",
    image: "/images/scrimba.webp",
    link: "https://drive.google.com/file/d/1I-pyxWXLrCsqsBkPzGxo6rC4Mc42p0rS/view",
  },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Web-Dev",
    items: [ "HTML", "CSS", "JavaScript", "React" , "Tailwind CSS"],
  },
  {
    category: "Programming Languages",
    items: ["C++","Python", "Java"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/abhinavv305",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/vabhinav305/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/abhinav-v-a66131332/",
  },
  // {
  //   id: 4,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/",
  // },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/project-1.png",
  },
  {
    id: 2,
    img: "/images/project-2.png",
  },
  {
    id: 3,
    img: "/images/project-3.png",
  },
  // {
  //   id: 4,
  //   img: "/images/project-4.png",
  // },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "ToDo Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-50", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "ToDo Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The To-Do App website is a clean and minimal platform designed to help users organize their daily tasks effortlessly.",
            "Instead of a cluttered task manager, it focuses on simplicity and clarity, making task creation and tracking feel lightweight and intuitive.",
            "Think of it like a digital checklist that keeps your thoughts organized—right from your phone or laptop.",
            "It’s built with modern frontend technologies and deployed on Netlify, ensuring fast performance, responsive design, and a smooth user experience.",
          ],
        },
        {
          id: 2,
          name: "todo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://to-do-app-07.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "todo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Wildfire Prediction",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-50",
      children: [
        {
          id: 1,
          name: "Wildfire Prediction Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Our Wildfire Smoke Prediction app is an intelligent tool designed to estimate and visualize the potential impact of wildfire smoke using environmental and predictive data.",
            "Instead of manually checking weather and air quality reports, it allows users to quickly understand where smoke may travel and how severe exposure could be.",
            "Think of it like an early-warning dashboard—helping people stay informed and prepared before air quality deteriorates.",
            "It’s built with Python and Streamlit, combining data science and interactive visualization to make complex predictions easy to understand.",
          ],
        },
        {
          id: 2,
          name: "wildfire-prediction.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wildfire-smoke-prediction.streamlit.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "wildfire-prediction.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Netflix Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[40vh] left-50",
      children: [
        {
          id: 1,
          name: "Netflix Clone Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Netflix Clone is a sleek and immersive platform designed to explore movies and TV shows in a familiar streaming layout.",
            "Instead of a static webpage, it recreates the Netflix experience with dynamic sections, featured banners, and smooth navigation.",
            "Think of it like browsing Netflix itself—discovering entertainment right from your phone or laptop.",
            "It’s built with modern web technologies like React and Tailwind CSS, delivering fast performance, responsive design, and a polished UI."
          ],
        },
        {
          id: 2,
          name: "netflix-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://netflix-clone-delta-abhinav.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "netflix-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/developer.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/developer.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/developer.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/developer.png",
      description: [
        "Hey! I’m Abhinav 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, and React , I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };