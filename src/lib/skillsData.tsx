import React from 'react'
import { StaticImageData } from 'next/image'
import BackendLight from '../../public/images/icons/BackEnd-Light.png'
import BackendDark from '../../public/images/icons/BackEnd-Dark.png'
import FrontendLight from '../../public/images/icons/FrontEnd-Dark.png'
import FrontendDark from '../../public/images/icons/FrontEnd-Light.png'
import databaseLight from '../../public/images/icons/databaseManagement-Light.png'
import databaseDark from '../../public/images/icons/databaseManagementDark.png'
import versionControlDark from '../../public/images/icons/versionControlDark.png'
import versionControlLight from '../../public/images/icons/versionControlLight.png'
import responsiveDark from '../../public/images/icons/responsiveDark.png'
import responsiveLight from '../../public/images/icons/responsiveLight.png'
import uiDark from '../../public/images/icons/uiDark.png'
import uiLight from '../../public/images/icons/uiLight.png'
import { IconType } from 'react-icons/lib'
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiSocketdotio,
  SiSwagger,
  SiDjango,
  SiFlask,
  SiVite,
  SiShadcnui,
  SiFramer,
  SiStyledcomponents,
  SiRedux,
  SiStorybook,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPrisma,
  SiDrizzle,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiHeroku,
  SiDigitalocean,
  SiGooglecloud,
  SiAwslambda,
  SiAmazonec2,
  SiRabbitmq,
  SiApachekafka
} from "react-icons/si";
import { GrGraphQl, GrMysql, GrReactjs } from "react-icons/gr";
import { SiStrapi } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";


export interface ServiceSkillT {
  id: number,
  iconImg?: { light?: StaticImageData, dark?: StaticImageData },
  title: string
  description: string
}

export interface SkillIconT {
  id: number,
  name: string,
  icon: IconType,
  category: 'backend' | 'frontend' | 'database' | 'devops'
}

export const ServiceSkills: ServiceSkillT[] = [
  {
    id: 1,
    title: "Front-end Development",
    description: "Im expert in ReactJS, TypeScript and Javascript (ES6+), NextJS and Tailwind CSS",
    iconImg: {
      dark: FrontendDark,
      light: FrontendLight
    }
  },
  {
    id: 2,
    title: "Back-end Development",
    description: "Im expert & doing NodeJS, Bun, ExpressJS and GoLang",
    iconImg: {
      dark: BackendLight,
      light: BackendDark
    }
  },
  {
    id: 3,
    title: "Database Management",
    description: "Im working both NoSQL & SQL Database Systems, Such as MonogoDB, SQL & PostgreSQL",
    iconImg: {
      dark: databaseDark,
      light: databaseLight
    }
  },
  {
    id: 4,
    title: "Version Control & DevOps",
    description: "Im expert in & working with Git, Github, Docker & CI/CD as Primary DevOps practices",
    iconImg: {
      dark: versionControlDark,
      light: versionControlLight
    }
  },
  {
    id: 5,
    title: "Responsive Design",
    description: "Creating visually appealing and functional user interfaces across devices",
    iconImg: {
      dark: responsiveDark,
      light: responsiveLight
    }
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Wireframing, Prototyping & Userflow Analysing with Figma / Adobe XD",
    iconImg: {
      dark: uiDark,
      light: uiLight
    }
  }
]

const linkedinLearningIcon = "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/12_FullStackDeveloper/LinkedInLearning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTJfRnVsbFN0YWNrRGV2ZWxvcGVyL0xpbmtlZEluTGVhcm5pbmcucG5nIiwiaWF0IjoxNzIxMDMwNTQ2LCJleHAiOjE3NTI1NjY1NDZ9.YEde11LM63D3GnfqEDpRgH7gjCC6udy7BjTppEb3v8Q&t=2024-07-15T08%3A02%3A27.119Z"

export const Certificates: Certificate[] = [
  {
    slug: "html-essential-learning",
    name: "Certificate in HTML Essential Training",
    link: "https://www.linkedin.com/learning/certificates/7d6dae14464b9ae9cd9452d61fea98bcd9e4d24eecf2f4d482c09ce0db42d1e3",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/1_HTML_EssentialTraining/1._HTML_Essential_Training.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMV9IVE1MX0Vzc2VudGlhbFRyYWluaW5nLzEuX0hUTUxfRXNzZW50aWFsX1RyYWluaW5nLnBuZyIsImlhdCI6MTcyMTAyMTY4NywiZXhwIjoxNzUyNTU3Njg3fQ.oY2zT5yELMVg_TPlMq6r0IkUMCxokFXWUfvDg_nvzKQ&t=2024-07-15T05%3A34%3A48.148Z",
    provider: {
      name: "Linkedin Learning",
      icon: linkedinLearningIcon
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/1_HTML_EssentialTraining/1._HTML_Essential_Training.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMV9IVE1MX0Vzc2VudGlhbFRyYWluaW5nLzEuX0hUTUxfRXNzZW50aWFsX1RyYWluaW5nLnBuZyIsImlhdCI6MTcyMTAyMTY4NywiZXhwIjoxNzUyNTU3Njg3fQ.oY2zT5yELMVg_TPlMq6r0IkUMCxokFXWUfvDg_nvzKQ&t=2024-07-15T05%3A34%3A48.148Z"
  },
  {
    slug: "css-essential-training",
    name: "Certificate in CSS Essential Training",
    link: "https://www.linkedin.com/learning/certificates/64a29b09e363e23b4950984b819fa2e573593755dd5d5f6a46dd7c6ae0dc59f2",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/2_CSS_EssentialTraining/2._CSS_Essential_Training___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMl9DU1NfRXNzZW50aWFsVHJhaW5pbmcvMi5fQ1NTX0Vzc2VudGlhbF9UcmFpbmluZ19fX0NlcnRpZmljYXRlT2ZDb21wbGV0aW9uLnBkZiIsImlhdCI6MTcyMTAyMjEwNSwiZXhwIjoxNzUyNTU4MTA1fQ.dITwOCvxajcuzzyZbs0tW7IgN9eUrwhp_iLa1hYd4t0&t=2024-07-15T05%3A41%3A45.725Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/2_CSS_EssentialTraining/2._CSS_Essential_Training___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMl9DU1NfRXNzZW50aWFsVHJhaW5pbmcvMi5fQ1NTX0Vzc2VudGlhbF9UcmFpbmluZ19fX0NlcnRpZmljYXRlT2ZDb21wbGV0aW9uXzEuanBnIiwiaWF0IjoxNzIxMDIyMjU5LCJleHAiOjE3NTI1NTgyNTl9.FIHxfTUcU6W77VIYFLxABJTbrJnV1FL5k6bfeWJvoY4&t=2024-07-15T05%3A44%3A27.832Z"
  },
  {
    slug: "javascript-essential-training",
    name: "Certificate in Javascript Essential Training",
    link: "https://www.linkedin.com/learning/certificates/1ad7f426cbd05bed4d627d81c53299ee08e85a7df73e43689d340b4d5dc4d2f1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bl9Oo8D9oS3iOtM26hNvRmw%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/3_JavascriptEssentialTraining/3._JavaScript_Essential_Training___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvM19KYXZhc2NyaXB0RXNzZW50aWFsVHJhaW5pbmcvMy5fSmF2YVNjcmlwdF9Fc3NlbnRpYWxfVHJhaW5pbmdfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbi5wZGYiLCJpYXQiOjE3MjEwMjM4ODksImV4cCI6MTc1MjU1OTg4OX0.mjY29X9D5x_qNSdMzL1p2Ri-kSyhMAE8APVp4RubU-U&t=2024-07-15T06%3A11%3A29.788Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/3_JavascriptEssentialTraining/3._JavaScript_Essential_Training___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvM19KYXZhc2NyaXB0RXNzZW50aWFsVHJhaW5pbmcvMy5fSmF2YVNjcmlwdF9Fc3NlbnRpYWxfVHJhaW5pbmdfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbl8xLmpwZyIsImlhdCI6MTcyMTAyMzkyMywiZXhwIjoxNzUyNTU5OTIzfQ.ygpgtZHgmmlx-B76p1qSgY8gkjBMHymDweG7TGqu6d8&t=2024-07-15T06%3A12%3A03.565Z"
  },
  {
    slug: "search-techniques-for-developers",
    name: "Certificate in Search Techniques for Web Developers",
    link: "https://www.linkedin.com/learning/certificates/cdededec4f7027627fe25553ee22ea22f7933b476ed782026e4c52a43de4d92c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bl9Oo8D9oS3iOtM26hNvRmw%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/4_SearchTechniques/4._Search_Techniques_for_Web_Developers___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNF9TZWFyY2hUZWNobmlxdWVzLzQuX1NlYXJjaF9UZWNobmlxdWVzX2Zvcl9XZWJfRGV2ZWxvcGVyc19fX0NlcnRpZmljYXRlT2ZDb21wbGV0aW9uLnBkZiIsImlhdCI6MTcyMTAyNDAxMCwiZXhwIjoxNzUyNTYwMDEwfQ.ly2OZ5ixRsYMnludOV8oGJ0Q60jyA1hgzAML49iQS6s&t=2024-07-15T06%3A13%3A32.600Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/4_SearchTechniques/4._Search_Techniques_for_Web_Developers___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNF9TZWFyY2hUZWNobmlxdWVzLzQuX1NlYXJjaF9UZWNobmlxdWVzX2Zvcl9XZWJfRGV2ZWxvcGVyc19fX0NlcnRpZmljYXRlT2ZDb21wbGV0aW9uXzEuanBnIiwiaWF0IjoxNzIxMDI0MDI3LCJleHAiOjE3NTI1NjAwMjd9.O2L99VNtHrv6FdLezbbb_LHd_gu7E-3jeafSGdh5Z3o&t=2024-07-15T06%3A13%3A47.896Z"
  },
  {
    slug: "ecma-script-6-certificate",
    name: "Certificate in Learning ECMAScript 6+",
    link: "https://www.linkedin.com/learning/certificates/10ad46f8fbe60501e90e9787ea883fadf59f23b2ed7c2932a4ab964feccd689c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bl9Oo8D9oS3iOtM26hNvRmw%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/5_LearningES6/5._Learning_ECMAScript_6_ES6___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNV9MZWFybmluZ0VTNi81Ll9MZWFybmluZ19FQ01BU2NyaXB0XzZfRVM2X19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb24ucGRmIiwiaWF0IjoxNzIxMDI0MDg3LCJleHAiOjE3NTI1NjAwODd9.s4A-SDNj-as3mr0awUyn7AKZYuRRpa1J0qpFeFBZ7sI&t=2024-07-15T06%3A14%3A47.328Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/5_LearningES6/5._Learning_ECMAScript_6_ES6___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNV9MZWFybmluZ0VTNi81Ll9MZWFybmluZ19FQ01BU2NyaXB0XzZfRVM2X19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb25fMS5qcGciLCJpYXQiOjE3MjEwMjQxMTQsImV4cCI6MTc1MjU2MDExNH0.DOM_y68YehOCcYK6VMTHhp35Ip6dRIhm7cwnTm3hluM&t=2024-07-15T06%3A15%3A14.457Z"
  },
  {
    slug: "git-essentials",
    name: "Certificate in Git Essential",
    link: "https://www.linkedin.com/learning/certificates/cb0bf8251748bb30a9b7db590c23c101654b7b83ef1db6ba640e5e59ffb8785d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bl9Oo8D9oS3iOtM26hNvRmw%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/6_GitEssentialTraining/6._Git_Essential_Training_The_Basics___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNl9HaXRFc3NlbnRpYWxUcmFpbmluZy82Ll9HaXRfRXNzZW50aWFsX1RyYWluaW5nX1RoZV9CYXNpY3NfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbi5wZGYiLCJpYXQiOjE3MjEwMjQxOTAsImV4cCI6MTc1MjU2MDE5MH0.xax8OV-UrOVVN3gZhZkIy0HCozNLoYn5DDV4KtWdCro&t=2024-07-15T06%3A16%3A30.721Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/6_GitEssentialTraining/6._Git_Essential_Training_The_Basics___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvNl9HaXRFc3NlbnRpYWxUcmFpbmluZy82Ll9HaXRfRXNzZW50aWFsX1RyYWluaW5nX1RoZV9CYXNpY3NfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbl8xLmpwZyIsImlhdCI6MTcyMTAyNDMwMSwiZXhwIjoxNzUyNTYwMzAxfQ.VCWrgvzwdWRSD8l0lV60vemb8lOaGELddf7uKsGAF6Q&t=2024-07-15T06%3A18%3A21.572Z"
  },
  {
    slug: "reactjs-essential-training",
    name: "Certificate in ReactJS Essential",
    link: "https://www.linkedin.com/learning/certificates/48f25a6af4e4e0502c7fab6ffb6fa9033c9529b96cfaa130f5e53e368084f391?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bl9Oo8D9oS3iOtM26hNvRmw%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/7_ReactJSTraining/7._React.js_Essential_Training_2020___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvN19SZWFjdEpTVHJhaW5pbmcvNy5fUmVhY3QuanNfRXNzZW50aWFsX1RyYWluaW5nXzIwMjBfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbi5wZGYiLCJpYXQiOjE3MjEwMjI4NDksImV4cCI6MTc1MjU1ODg0OX0.F03R6p1v2UsNeFSi5yhWeWzhtjjHCO-Jz1lNAxQbcLk&t=2024-07-15T05%3A54%3A09.588Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/7_ReactJSTraining/7._React.js_Essential_Training_2020___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvN19SZWFjdEpTVHJhaW5pbmcvNy5fUmVhY3QuanNfRXNzZW50aWFsX1RyYWluaW5nXzIwMjBfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbl8xLmpwZyIsImlhdCI6MTcyMTAyODI5MiwiZXhwIjoxNzUyNTY0MjkyfQ.hmY_7aYX21V8YMrtFOiyEikiUue_qzyiFG8YETMxaro&t=2024-07-15T07%3A24%3A52.214Z"

  },
  {
    slug: "nodejs-essential-training",
    name: "Certificate in NodeJS Essential Training",
    link: "https://www.linkedin.com/learning/certificates/1ad7f426cbd05bed4d627d81c53299ee08e85a7df73e43689d340b4d5dc4d2f1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOTPBEXrhSOKvnuh1HLo9FQ%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/8_NodeJSEssentialTraining/8._Node.js_Essential_Training___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvOF9Ob2RlSlNFc3NlbnRpYWxUcmFpbmluZy84Ll9Ob2RlLmpzX0Vzc2VudGlhbF9UcmFpbmluZ19fX0NlcnRpZmljYXRlT2ZDb21wbGV0aW9uLnBkZiIsImlhdCI6MTcyMTAyODM0NywiZXhwIjoxNzUyNTY0MzQ3fQ.cGUNqrwR2CxxaqL8tZmm3QKBJZv7-kIQsLISP7lx2lc&t=2024-07-15T07%3A25%3A47.899Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/8_NodeJSEssentialTraining/8._Nodejs_Essential_Traning.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvOF9Ob2RlSlNFc3NlbnRpYWxUcmFpbmluZy84Ll9Ob2RlanNfRXNzZW50aWFsX1RyYW5pbmcuanBnIiwiaWF0IjoxNzIxMDI4MzY2LCJleHAiOjE3NTI1NjQzNjZ9.FyeFfV0v26VwCsUk0123KwlQfVqecSBY4BX9ehau6ss&t=2024-07-15T07%3A26%3A06.269Z",
    featured: true
  },
  {
    slug: "sql-essential-training",
    name: "Certificate in SQL Essential Training",
    link: "https://www.linkedin.com/learning/certificates/e30dc0ddb5dd89421861226615d0a4531632c7d2a58bebc0340704fd3e0c6768?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOTPBEXrhSOKvnuh1HLo9FQ%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/9_SQLTraining/9._SQL_Essential_Training___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvOV9TUUxUcmFpbmluZy85Ll9TUUxfRXNzZW50aWFsX1RyYWluaW5nX19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb24ucGRmIiwiaWF0IjoxNzIxMDI4OTc5LCJleHAiOjE3NTI1NjQ5Nzl9.TUVMTLXOiSAzrAUU01UGv49VIeuw1KFBa59j0ORObqo&t=2024-07-15T07%3A36%3A21.220Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/9_SQLTraining/9._SQL_Essential_Training___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvOV9TUUxUcmFpbmluZy85Ll9TUUxfRXNzZW50aWFsX1RyYWluaW5nX19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb25fMS5qcGciLCJpYXQiOjE3MjEwMjkwMDgsImV4cCI6MTc1MjU2NTAwOH0.4rUW99eeb3MVh8L7n9CAp0WY6uhdPRuDSjf-IKn00JY&t=2024-07-15T07%3A36%3A48.264Z",
    featured: true
  },
  {
    slug: "no-sql-essential-training",
    name: "Certificate in NoSQL Essential Training",
    link: "https://www.linkedin.com/learning/certificates/db2092d5b2a31bd6559d925df62e7e5e32ce77acc794a89ed940abafdde807f2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOTPBEXrhSOKvnuh1HLo9FQ%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/10_NoSQLTraning/10._NoSQL_Essential_Training___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTBfTm9TUUxUcmFuaW5nLzEwLl9Ob1NRTF9Fc3NlbnRpYWxfVHJhaW5pbmdfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbi5wZGYiLCJpYXQiOjE3MjEwMjkwNjgsImV4cCI6MTc1MjU2NTA2OH0.mQ-MuE48DOGp2EpzD3f1us-aNsUl6uyYQjqUZHYgVSo&t=2024-07-15T07%3A37%3A48.664Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/10_NoSQLTraning/10._NoSQL_Essential_Training___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTBfTm9TUUxUcmFuaW5nLzEwLl9Ob1NRTF9Fc3NlbnRpYWxfVHJhaW5pbmdfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbl8xLmpwZyIsImlhdCI6MTcyMTAyOTExOCwiZXhwIjoxNzUyNTY1MTE4fQ.sXaPCm6VRiiMg8IlnKGGH9hgggbbRrQNn_uduH4qoak&t=2024-07-15T07%3A38%3A38.436Z",
    featured: true
  },
  {
    slug: "rest-api-essential-training",
    name: "Certificate in Learning REST-API Essentials",
    link: "https://www.linkedin.com/learning/certificates/e382d21e4e6698eef2bb8f1a316e72cc3954908cef1c8a1f392fa5158c626f80?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOTPBEXrhSOKvnuh1HLo9FQ%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/11_LearningRESTAPI/11._Learning_REST_APIs___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTFfTGVhcm5pbmdSRVNUQVBJLzExLl9MZWFybmluZ19SRVNUX0FQSXNfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbi5wZGYiLCJpYXQiOjE3MjEwMjkzODQsImV4cCI6MTc1MjU2NTM4NH0.OB3Y6MWqV2NQizrAEvlWLeInckoZsF3ZLiu-rz_SW9g&t=2024-07-15T07%3A43%3A05.170Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/11_LearningRESTAPI/11._Learning_REST_APIs___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTFfTGVhcm5pbmdSRVNUQVBJLzExLl9MZWFybmluZ19SRVNUX0FQSXNfX19DZXJ0aWZpY2F0ZU9mQ29tcGxldGlvbl8xLmpwZyIsImlhdCI6MTcyMTAyOTYzNCwiZXhwIjoxNzUyNTY1NjM0fQ.aCJg4-a_dRHSdTPRUIgZJQ5h59qXzsMoWaWhO1FOMk0&t=2024-07-15T07%3A47%3A14.588Z"
  },
  {
    slug: "full-stack-web-developer",
    name: "Certificate in Become a Full-Stack Developer",
    link: "https://www.linkedin.com/learning/certificates/a6f7cec702c00e4da241cd286ef274ffaf83b04f5a6cf92a8a6643aa049db07f?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOTPBEXrhSOKvnuh1HLo9FQ%3D%3D",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/12_FullStackDeveloper/12._FINAL___Become_a_FullStack_Web_Developer___CertificateOfCompletion.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTJfRnVsbFN0YWNrRGV2ZWxvcGVyLzEyLl9GSU5BTF9fX0JlY29tZV9hX0Z1bGxTdGFja19XZWJfRGV2ZWxvcGVyX19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb24ucGRmIiwiaWF0IjoxNzIxMDI5Nzk3LCJleHAiOjE3NTI1NjU3OTd9.M1YY6OmxWVn2FInmGW2qWh8WKJe12F0R2VuJ8aLpOMo&t=2024-07-15T07%3A49%3A57.807Z",
    provider: {
      icon: linkedinLearningIcon,
      name: "Linkedin Learning"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/12_FullStackDeveloper/12._FINAL___Become_a_FullStack_Web_Developer___CertificateOfCompletion_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvMTJfRnVsbFN0YWNrRGV2ZWxvcGVyLzEyLl9GSU5BTF9fX0JlY29tZV9hX0Z1bGxTdGFja19XZWJfRGV2ZWxvcGVyX19fQ2VydGlmaWNhdGVPZkNvbXBsZXRpb25fMS5qcGciLCJpYXQiOjE3MjEwMjk4NjYsImV4cCI6MTc1MjU2NTg2Nn0.MOHmxUYYsjnWDA8SxTeVa_zfWXq_hDYVQp1pxZUwZHE&t=2024-07-15T07%3A51%3A06.474Z",
    featured: true
  },
  {
    slug: "certified-backend-developer",
    name: "Certificate in Backend Development",
    link: "https://www.freecodecamp.org/certification/vihanga_silva/back-end-development-and-apis",
    fileLink: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/FreeCodeCamp_BackendDeveloper/www.freecodecamp.org_certification_vihanga_silva_back_end_development_and_apis_(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvRnJlZUNvZGVDYW1wX0JhY2tlbmREZXZlbG9wZXIvd3d3LmZyZWVjb2RlY2FtcC5vcmdfY2VydGlmaWNhdGlvbl92aWhhbmdhX3NpbHZhX2JhY2tfZW5kX2RldmVsb3BtZW50X2FuZF9hcGlzXygxKS5wbmciLCJpYXQiOjE3MjEwMzAwMTIsImV4cCI6MTc1MjU2NjAxMn0.6BnXZSnr7YhSW0HDl2_hyqxXmTF0GScL60qq1DvgoIs&t=2024-07-15T07%3A53%3A33.013Z",
    provider: {
      icon: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/FreeCodeCamp_BackendDeveloper/FreeCodeCamp.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvRnJlZUNvZGVDYW1wX0JhY2tlbmREZXZlbG9wZXIvRnJlZUNvZGVDYW1wLnBuZyIsImlhdCI6MTcyMTAzMDU3MiwiZXhwIjoxNzUyNTY2NTcyfQ.I-xZQb5qv5PmS1u3NyzPJ-RTlK22p-TWdh5OMFrRxdA&t=2024-07-15T08%3A02%3A52.896Z",
      name: "FreeCodeCamp"
    },
    thumbnail: "https://lgrjpckdqgtibclhjdhp.supabase.co/storage/v1/object/sign/site-assets/certificates/FreeCodeCamp_BackendDeveloper/www.freecodecamp.org_certification_vihanga_silva_back_end_development_and_apis_(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jZXJ0aWZpY2F0ZXMvRnJlZUNvZGVDYW1wX0JhY2tlbmREZXZlbG9wZXIvd3d3LmZyZWVjb2RlY2FtcC5vcmdfY2VydGlmaWNhdGlvbl92aWhhbmdhX3NpbHZhX2JhY2tfZW5kX2RldmVsb3BtZW50X2FuZF9hcGlzXygxKS5wbmciLCJpYXQiOjE3MjEwMzAwMTIsImV4cCI6MTc1MjU2NjAxMn0.6BnXZSnr7YhSW0HDl2_hyqxXmTF0GScL60qq1DvgoIs&t=2024-07-15T07%3A53%3A33.013Z",
    featured: true
  },
]

// Skill Icons
export const skillIcons: SkillIconT[] = [
  { id: 1, name: "NodeJS", icon: FaNodeJs, category: 'backend' },
  { id: 2, name: "ExpressJS", category: "backend", icon: SiExpress },
  { id: 3, name: "GraphQL", category: "backend", icon: GrGraphQl },
  { id: 4, name: "SocketIO", category: "backend", icon: SiSocketdotio },
  { id: 5, name: "Strapi", category: "backend", icon: SiStrapi },
  { id: 6, name: "Swagger", category: "backend", icon: SiSwagger },
  { id: 7, name: "GoLang", category: "backend", icon: FaGolang },
  { id: 8, name: "Django", category: "backend", icon: SiDjango },
  { id: 8, name: "Flask", category: "backend", icon: SiFlask },
  { id: 9, name: "ReactJS", category: "frontend", icon: GrReactjs },
  { id: 10, name: "NextJS", category: "frontend", icon: RiNextjsFill },
  { id: 16, name: "Redux Toolkit", category: "frontend", icon: SiRedux },
  { id: 10, name: "TailwindCSS", category: "frontend", icon: RiTailwindCssFill },
  { id: 11, name: "Vite", category: "frontend", icon: SiVite },
  { id: 12, name: "Shadcn UI", category: "frontend", icon: SiShadcnui },
  { id: 13, name: "Framer Motion", category: "frontend", icon: SiFramer },
  { id: 14, name: "Styled Components", category: "frontend", icon: SiStyledcomponents },
  { id: 15, name: "Redux", category: "frontend", icon: SiRedux },
  { id: 17, name: "ThreeJS", category: "frontend", icon: TbBrandThreejs },
  { id: 17, name: "Storybook", category: "frontend", icon: SiStorybook },
  { id: 18, name: "MySQL", category: "database", icon: GrMysql },
  { id: 19, name: "MongoDB", category: "database", icon: SiMongodb },
  { id: 20, name: "Firebase", category: "database", icon: SiFirebase },
  { id: 21, name: "Supabase", category: "database", icon: SiSupabase },
  { id: 22, name: "PostgreSQL", category: "database", icon: SiPostgresql },
  { id: 23, name: "Microsoft SQL Server", category: "database", icon: SiMicrosoftsqlserver },
  { id: 24, name: "Prisma ORM", category: "database", icon: SiPrisma },
  { id: 25, name: "Drizzle ORM", category: "database", icon: SiDrizzle },
  { id: 26, name: "Github", category: "devops", icon: SiGithub },
  { id: 27, name: "Docker", category: "devops", icon: SiDocker },
  { id: 28, name: "Amazon AWS", category: "devops", icon: SiAmazonaws },
  { id: 29, name: "Microsoft Azure", category: "devops", icon: SiMicrosoftazure },
  { id: 30, name: "Heroku", category: "devops", icon: SiHeroku },
  { id: 31, name: "DigitalOcean", category: "devops", icon: SiDigitalocean },
  { id: 31, name: "Google Cloud", category: "devops", icon: SiGooglecloud },
  { id: 31, name: "EC2", category: "devops", icon: SiAmazonec2 },
  { id: 31, name: "Lambda", category: "devops", icon: SiAwslambda },
  { id: 31, name: "RabbitMQ", category: "devops", icon: SiRabbitmq },
  { id: 31, name: "Kafka", category: "devops", icon: SiApachekafka },
]