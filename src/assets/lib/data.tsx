// import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import digi from "../img/digi.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import R_lang from "../img/R.svg";
import powerbi from "../img/power.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import project2 from "../img/project2.png";
import crypto from "../img/crypto.png";
// import javascripticon from "../../assets/icons/javascripticon.svg";
// import typescripticon from "../../assets/icons/typescripticon.svg";
// import reacticon from "../../assets/icons/reacticon.svg";
// import nextjsicon from "../../assets/icons/nextjsicon.svg";
// import nodejsicon from "../../assets/icons/nodejsicon.svg";
// import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
// import mongodbicon from "../../assets/icons/mongoicon.svg";
// import vuejsicon from "../../assets/icons/vueicon.svg";
// import expressicon from "../../assets/icons/expressicon.svg";
// import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
// import apiicon from "../../assets/icons/apiicon.svg";
import python from "../img/python.svg";
import SQL from "../img/sql.svg";
import premiere from"../img/premiere_pro.svg";
import photoshop from "../img/photoshop.svg";
import tableau from "../img/tableau.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
// import shopifyicon from "../../assets/icons/shopifyicon.svg";
// import webflowicon from "../../assets/icons/webflowicon.svg";
// import tastyMockup from "../../assets/img/tasty_mockup.webp";
// import instorMockup from "../../assets/img/instor_mockup.webp";
import AI from "../img/AI.jpg";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.png";
import caricon from "../../assets/icons/car-icon.svg";
// import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
// import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
// import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
// import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi ",
    en: "Hello, this is Vishnu Vardhan",
  },
  subtitle: "Data Analyst | Insight Strategist | Decision-Maker's Secret agent",
  description: {
    de: "Ich formen!",
    en: "Turning data into direction. Crafting insights that drive impact",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Cryptocurrency Analysis ",
    description:
      ".",
    description_EN:
      " Conducted end-to-end analysis of cryptocurrency market data using Python, Excel, and Power BI. Scraped real-time data from CoinMarketCap, performed correlation and growth analysis, and used ARIMA modeling for price prediction. Identified the top 10 cryptocurrencies based on price and market capitalization, and presented insights through interactive dashboards to support data-driven investment strategies.",   
       technologies: [
      { name: "R", icon: R_lang },
      { name: "CSS", icon: cssicon },
      { name: "PowerBi", icon: powerbi },
      // { name: "JavaScript", icon: javascripticon },
      // { name: "REST Api", icon: apiicon },
      // { name: "React", icon: reacticon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Canva", icon: canvaicon },
      // { name: "Netlify", icon: netlifyicon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: crypto,
    // deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/sairammohandass",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: " Exploring sales: insights and analysis ",
    description:
      ".",
    description_EN:
      "Investigated sales trends of ‘Joyland amusements and adventures pvt ltd’ by examining a dataset with over 30,000 entries, leveraging Python for statistical modeling and Power BI for visualization, which resulted in actionable insights that informed strategic decisions and drove a 15% increase in sales efficiency.",
    technologies: [
      { name: "R", icon: R_lang },
 
      { name: "Tableau", icon: tableau},
    
    ],
    image: project2,
    // deploymenturl: "https://silentmoon-grpw.onrender.com/",
    // githuburl:
    //  
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: " Voice Controlled AI Virtual Friend",
    description:
      ".",
    description_EN:
      " Designed and developed an AI-powered virtual friend using Machine Learning and Artificial Intelligence technologies. Integrated voice recognition and natural language processing (NLP) to enable seamless and interactive conversations.", 
         technologies: [
    
      // { name: "JavaScript", icon: javascripticon },
      { name: "Python", icon: python },
      

      
      { name: "Figma", icon: figmaicon },
   
      
    ],
    image: AI,
    // deploymenturl: "https://mern-haushaltsbuch.onrender.com /",
    
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "..",
    en: " DATA ANALYST HERE",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Tools",
    skills: [
      {
        title: "R",
        hash: "#R",
        icon: R_lang,
        color: "#1572B6",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: python,
        color: "#1572B6",
      },
    
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
     
    
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
        {
        title: "PowerBi",
        hash: "#PowerBi",
        icon: powerbi,
        color: "#4FC08D",
      },
      {
        title: "tableau",
        hash: "#tableau",
        icon: [tableau],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "wordpress",
        hash: "#wordpress",
        icon: [wordpressicon],
        color: ["#000000", "#FFFFFF"],
      },
      
    
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "PhotoShop", hash: "#Photoshop", icon: photoshop, color: "#F24E1E" },
      {
        title: "Premiere_pro",
        hash: "#Adobe ",
        icon: premiere,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Dataset",
    skills: [
      { title: "SQL", hash: "#SQL", icon: SQL, color: "#F24E1E" },
      
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "", hash: "#imprint", /*data: <Imprint /> */},
  { de: "Datenschutz", en: "", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:vishnuvardhanvv.2110@gmail.com",
  text: "myemail",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/vishnu-vardhan-233490211",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:vishnuvardhanvv.2110@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"If my mind can conceive it, and my heart can believe it—then I can achieve it."`,
    author: "Muhammad Ali",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"........Data doesn’t lie — it reveals."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "My Overall Experience",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: digi,
    },
  ],
  paragraphs_EN: [
    {
      title: " Business development associate 📲📞 Skill Lync -Chennai,India ",

      description:
        " Generated significant business opportunities through strategic cold calling and email outreach campaigns. Consistently led the team to exceed sales targets by closing high-value deals on a weekly basis.",

      icon: hardwareicon,
    },
    {
      title: "       Data manager Intern    | July -August  Eaton power quality Pvt Ltd  ",
      description:
        "Collaborated with the Data Management team over a 4-week period to organize, analyze, and maintain organizational data. Completed key tasks and deliverables on a daily basis, ensuring accuracy and efficiency in data handling.",
      icon: caricon,
    },
    {
      title: " Digital marketing 📃 | Nov 2021- Jan 22",
      description:
        " Collaborated with the marketing team to develop and execute digital marketing strategies for a study abroad consultancy. Managed social media platforms, created engaging content, and monitored campaign performance to increase brand visibility and engagement. ",

      icon: digi,
    },
  ],
};








export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Vishnu meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Vishnu Vardhan may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;





















export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};