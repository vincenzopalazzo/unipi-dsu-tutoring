import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  lang: 'en-US',
  title: 'DSA Computer Scienze Tutoring',
  description: 'TODO',
  logo: 'https://study-eu.s3.amazonaws.com/uploads/university/university-of-pisa-logo.png',
  theme: hopeTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: "Tools Available",
        link: "/tools"
      },
      {
        text: "Tutor Contact",
        link: "/tutor_contact"
      },
      {
        text: "University Contact",
        link: '/university_contact'
      },
    ],
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  }),
})