"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Shiv&apos;s Portfolio</title>
      </Head>
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="translate-x-[-500px] transition-all duration-700 opacity-0"
            ref={introRef}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Hi There !
            </p>
            {/* Profile Name */}
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans">
              I&apos;m a Front end
              <span className="text-[#5b56ef] dark:text-[#07d0e5]">
                {" "}
                Developer <span className="text-white">|</span>
              </span>{" "}
            </p>
            <br></br>
            <p className="text-lg">
              Hello, I'm a Frontend Developer with knowledge in
              <span className="font-medium ">
                {" "}
                HTML, CSS, JS, React JS, and Next JS
              </span>
              . <br></br>I enjoy creating clean and easy-to-use websites. I'm
              always learning and looking for<br></br> better ways to build
              things with code.
            </p>

            <div className="mt-5 md:mt-10 flex gap-3">
              {/* Hire Me Button */}
              <Link
                className="text-white text-xl font-semibold rounded bg-blue-400 dark:bg-red-400 hover:bg-red-500 px-2 py-1"
                href={"#getInTouch"}
              >
                Hire me
              </Link>
              {/* Download CV Button */}
              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1"
                // href='https://drive.google.com/file/d/1CYHcG-qNjlm4AbQExy-srnxkBsUD9jIq/view?usp=sharing'
                href="https://drive.google.com/file/d/131zGIY5iqeKt6KptViPyVRaIAEHFNgPk/view"
                target="_blank"
              >
                Download CV
              </Link>

              {/* <Link
                className='text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1'
                href='https://drive.google.com/file/d/1Dz9Dry0sYpr0wbcg43rdAFLKzFulvryu/view?usp=drive_link'
                target='_blank'
              >
                Download CV
              </Link>
 */}
            </div>
          </div>

          {/* Image */}
          <div
            className="translate-x-[500px] transition-all opacity-0 duration-700 w-[300px] h-[370px] md:w-[300px] md:h-[370px] bg-cover bg-center rounded-b-full bg-no-repeat md:m-0 p-16 md:mt-0"
            ref={profileRef}
            style={{
              backgroundImage: "url(https://i.ibb.co/fYRKWsQC/photo.png)",
              // backgroundImage: "url(https://i.ibb.co/84XH2Gq3/image444.jpg)",
              margin: "10px",
            }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
