import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  lang: 'en-US',
  title: 'DSA Computer Scienze Tutoring',
  description: 'Pagina dedicata al servizio di tutorato per studenti DSA del Dipartimento di Informatica.',
  logo: '/images/university-of-pisa-logo.png',
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