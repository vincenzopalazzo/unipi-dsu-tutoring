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
    ],
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  }),
})