import duberBackendServer from '../../public/images/portfolio/duberBackendServer.png'
import duberCustomerWeb from '../../public/images/portfolio/duberCustomerWeb.png'
import duberDesignSystem from '../../public/images/portfolio/duberDesignSystem.png'
import duberMobileApp from '../../public/images/portfolio/duberMobileApp.png'
import duberPilotWeb from '../../public/images/portfolio/duberPilotWeb.png'
import reactTailwindDashboard from '../../public/images/portfolio/ReactTailwindDashboard.png'


export const NavLinks: TNavLink[] = [
  { id: 0, text: "Home", slug: '/#home' },
  { id: 1, text: "About", slug: "/#about" },
  { id: 2, text: "Portfolio", slug: "/#portfolio" },
  { id: 3, text: "Testimonials", slug: "/#testimonials" },
  { id: 4, text: "Skills", slug: "/#skills" },
  { id: 5, text: "Contact", slug: "/#contact" }
]

export const AboutMe_Paragraphs: string[] = [
  `
  I’m Vihanga Rashan Silva from Sri Lanka. I am a motivated and
  versatile individual, always eager to take on new challenges.
  With passion for learning I am dedicated to delivering
  High Quality results.`,
  `
  I always willing to learn latest updates in Full Stack Development
  Field and I have more than 4+ years of experience on working
  with my clients as a freelancer and remote employer. 
  `
]


export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Duber Drone Pilots",
    description: "Duber web application for customer end, Built with NextJS combining with Supabase Database, Authentication & Storage etc.",
    githubLink: "https://github.com/Duberapp/Customer-Facing-App-v2",
    previewLink: "https://www.duber.uk/",
    techStacks: [
      {
        id: 1,
        name: "NextJS",
        designation: "",
        image: "nextjs"
      },
      {
        id: 2,
        name: "Supabase",
        designation: "",
        image: "supabase"
      },
      {
        id: 3,
        name: "ReactJS",
        designation: "",
        image: "react"
      }, {
        id: 4,
        name: "TypeScript",
        designation: "",
        image: 'ts'
      }, {
        id: 5,
        designation: "",
        image: 'tailwindcss',
        name: "Tailwind CSS"
      }, {
        id: 6,
        name: 'Vercel',
        designation: "",
        image: "vercel"
      }],
    thumbnail: duberCustomerWeb
  },
  {
    id: 2,
    title: "Duber - Pilot Application",
    description: "Duber pilot side web application for allow to claim customers placed jobs and get paid through this pilot side web application",
    githubLink: "https://github.com/Duberapp/Pilot-Facing-App-v2",
    previewLink: "https://pilot.duber.uk",
    techStacks: [
      {
        id: 1,
        name: "NextJS",
        designation: "",
        image: "nextjs"
      },
      {
        id: 2,
        name: "Supabase",
        designation: "",
        image: "supabase"
      },
      {
        id: 3,
        name: "ReactJS",
        designation: "",
        image: "react"
      }, {
        id: 4,
        name: "TypeScript",
        designation: "",
        image: 'ts'
      }, {
        id: 5,
        designation: "",
        image: 'tailwindcss',
        name: "Tailwind CSS"
      }, {
        id: 6,
        name: 'Vercel',
        designation: "",
        image: "vercel"
      }],
    thumbnail: duberPilotWeb
  },
  {
    id: 3,
    title: "Duber Backend Server",
    description: "Working as single server between all client side web applications of Duber Enterprises.",
    githubLink: "https://github.com/Duberapp/Duber-Backend-Server",
    previewLink: "#",
    techStacks: [{
      id: 1,
      name: "NodeJS",
      designation: "",
      image: "nodejs"
    }, {
      id: 2,
      name: "Express JS",
      designation: "",
      image: "expressjs"
    }, {
      id: 3,
      name: "TypeScript",
      designation: "",
      image: "ts"
    }, {
      id: 4,
      name: "AWS",
      designation: "",
      image: "aws"
    }, {
      id: 5,
      name: "Github",
      designation: "",
      image: "github"
    }, {
      id: 6,
      name: "Supabase",
      designation: "",
      image: "supabase"
    }, {
      id: 7,
      name: "NGINX",
      designation: "",
      image: "nginx"
    }],
    thumbnail: duberBackendServer
  },
  {
    id: 4,
    title: "Duber - UI Design System",
    description: "Share UI Component library design system for all client side web applications of Duber Enterprises.",
    githubLink: "https://github.com/Duberapp/duber-uk",
    previewLink: "https://duber-ui.vercel.app",
    techStacks: [{
      id: 1,
      name: "ReactJS",
      designation: "",
      image: "react"
    }, {
      id: 2,
      name: "NextJS",
      designation: "",
      image: "nextjs"
    }, {
      id: 3,
      name: "CSS",
      designation: "",
      image: "css"
    }, {
      id: 4,
      name: "Tailwind CSS",
      designation: "",
      image: "tailwindcss"
    }],
    thumbnail: duberDesignSystem
  },
  {
    id: 5,
    title: "Duber Mobile App UI",
    description: "Figma UI Design of Duber iOS & Android mobile application.",
    githubLink: "#",
    previewLink: "#",
    techStacks: [{
      id: 1,
      name: "Figma",
      designation: "",
      image: "figma"
    }],
    thumbnail: duberMobileApp
  },
  {
    id: 6,
    title: "React ECommerce Dashboard",
    description: "Simple React Ecommerce Dashboard with TailwindCSS and Dark mode",
    githubLink: "#",
    previewLink: "#",
    techStacks: [{
      id: 1,
      name: "Reactjs",
      designation: "",
      image: "react"
    },
    {
      id: 2,
      name: "TailwindCSS",
      designation: "",
      image: "tailwindcss"
    }
    ],
    thumbnail: reactTailwindDashboard
  },
]


export const getTechStackIconLink = (techStack: string): string => `https://skillicons.dev/icons?i=${techStack}`

export const renderTooltipItems = (items: TooltipItem[], theme: string): TooltipItem[] => {
  const preparedItems: TooltipItem[] = [];

  items.slice(0, 5).map(item => {
    let newItem: TooltipItem = {
      ...item,
      image: getTechStackIconLink(item.image) + `&theme=${theme}`
    }

    preparedItems.push(newItem);
  })

  return preparedItems
}