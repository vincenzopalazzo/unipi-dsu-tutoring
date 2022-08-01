import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  lang: 'en-US',
  title: 'DSA Computer Scienze Tutoring',
  description: 'TODO',
  logo: 'https://study-eu.s3.amazonaws.com/uploads/university/university-of-pisa-logo.png',
  theme: hopeTheme({
    sidebar: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: "Strumenti DSA",
        link: "/tools"
      },
      {
        text: "Contatti",
        link: "/tutor_contact"
      },
      {
        text: 'Universita',
        link: '/university_contact'
      },
    ],
    plugins: {
      mdEnhance: {
        enableAll: false,
      },
    },
  }),
})