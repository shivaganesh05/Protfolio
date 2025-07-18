import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Shiv&apos;s Portfolio</title>
        <meta content="Shiva's Portfolio" name="title" />
        <meta content="Explore the best Next.js and React.js portfolio by shivaganesh. Featuring simple, dark and light theme designs and mobile responsiveness." name="description" />

        <meta content="website" property="og:type" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="og:url" />
        <meta content="Shiv's Portfolio" property="og:title" />
        <meta content="Explore the best Next.js and React.js portfolio by shivaganesh. Featuring simple, dark and light theme designs and mobile responsiveness." property="og:description" />
        <meta content="https://i.ibb.co/DDDmcq03/wallpaper.png" property="og:image" />

        <meta content="https://i.ibb.co/DDDmcq03/wallpaper.png" property="twitter:card" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="twitter:url" />
        <meta content="shivaganesh - Portfolio" property="twitter:title" />
        <meta content="Explore the best Next.js and React.js portfolio by shivaganesh. Featuring simple, dark and light theme designs and mobile responsiveness." property="twitter:description" />
        <meta content="https://i.ibb.co/DDDmcq03/wallpaper.png" property="twitter:image" />

        <meta content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan" name="keywords" />
        <meta content="shivaganesh" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <link href="https://shiv-s-portfolio.vercel.app/favicon.ico" rel="icon" type="image/x-icon" />

      </Head>
      <div>
        <div>
          <Navbar />
          <Intro />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <SocialMedia />
          <SendMail />
          {/* <Footer /> */}
         
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
