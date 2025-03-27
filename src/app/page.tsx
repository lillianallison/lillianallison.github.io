"use client";

const link:string = "text-md sm:text-lg md:text-xl cursor-pointer";

import SampleSet from "@/components/SampleSet";
import { Sample } from "@/components/SampleSet";

const firstSample: Sample = {
  title: "Tech Roster Admin",
  description: ( <>
  Developed an admin dashboard for managing a technology roster using <span className='text-textHighlight'>Next.js, MongoDB,</span> and <span className='text-textHighlight'>Tailwind CSS</span>. The application uses a RESTful API to allow the user to create, update, and remove technologies and courses from the database.
  </>
  ),
  infoLink: "/contact",
  image: "/images/techroster.PNG",
  anchor: true,
}

const secondSample: Sample = {
  title: "Budgeting App",
  description: ( <>
  Developed a budgeting application using <span className='text-textHighlight'>Laravel</span> and <span className='text-textHighlight'>Tailwind CSS</span>. The application allows users to create/update/delete their own budget categories and expenses. Users can view their expenses for any given month, and each budget category features a progress bar to illustrate how much of the budget has been spent that month.
  </>
  ),
  infoLink: "/contact",
  image: "/images/budgetapp.PNG"
}

const thirdSample: Sample = {
  title: "Weather Reporter",
  description: ( <> 
  A weather website created with <span className='text-textHighlight'>JavaScript</span> using the openweathermap API. Displays weather information for all Canadian cities.
  </>
  ),
  liveLink: "https://lillianallison.github.io/weatherReporter.github.io",
  infoLink: "/contact",
  image: "images/weatherapp.PNG"
}

const fourthSample: Sample = {
  title: "Shop Website",
  description: ( <>
  A simple shop website created with <span className='text-textHighlight'>PHP</span> and <span className='text-textHighlight'>Tailwind CSS</span>. It allows users to view and leave reviews on products. The user&apos;s name is remembered by the website after they leave their first review.
  </>
  ),
  infoLink: "/contact",
  image: "/images/shopapp.PNG"
}

export default function Home() {

  return (
    <>
      <div className="flex flex-col" id="top">
        <div className="md:min-h-screen">
          <div className="mt-[18%] md:mt-[20%] text-[1.6rem] sm:text-[2.5rem] md:text-[2.8rem] leading-[3.2rem] md:leading-[3.4rem] tracking-wider text-left">
            <div className="flex items-center gap-3">Hello! <img className="inline h-[1.6rem] sm:h-[2.25rem] select-none" src="sparkle.svg" alt="sparkle graphic"></img></div>
            <div>My name is <span className="text-textHighlight">Lillian</span>.</div>
            <div>I am a <span className="text-textHighlight">web developer</span>.</div>
          </div>

          <div className="mt-3 md:mt-6 flex gap-2.5 tracking-wide">
            <a href="/contact" className={`fade ${link} text-textHighlight`}><img className="inline h-[1.2rem] mr-2 select-none" src="contact.svg" alt="email icon graphic"></img>Contact me</a>
            •
            <a className={`fade ${link}`} href="#projects">Projects</a>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-[90%] mx-auto">
        <div className="w-full flex md:justify-center">
          <div className="mt-[25%] md:mt-[10%] text-right md:text-left w-full md:w-auto">
            <div className="text-2xl sm:text-3xl tracking-wide mb-3 sm:mb-6">My skills</div>
            <div className="text-md sm:text-lg md:text-xl mb-2 sm:mb-5">
              <span className="text-textHighlight leading-10">
                Javascript, Next.JS, PHP, Laravel, Java, Python, TailwindCSS, MySql, MongoDB
              </span>.
            </div>
            <div className="text-lg md:text-xl">
              Proficient in <span className="text-textHighlight">English</span> and <span className="text-textHighlight">French</span>.
              <div className="text-left md:text-right">
                <div className="text-2xl sm:text-3xl tracking-wide mt-[25%] md:mt-[10%] mb-3 sm:mb-6">Education</div>
                <div className="text-md sm:text-lg md:text-xl mb-2 md:mb-5">
                  <span className="text-textHighlight leading-10">
                    Nova Scotia Community College
                  </span>
                  <span className="mx-2">–</span>
                  <span className="text-textHighlight leading-10">
                    IT Web Programming
                  </span>
                </div>
                September 2023<span className="mx-2">–</span>Present
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="gap-10 lg:gap-48 flex flex-col w-[98%] md:w-[90%] lg:w-[80%] mb-10 lg:mb-20 text-center">

            <SampleSet firstSample={firstSample} secondSample={secondSample}></SampleSet>
            <SampleSet firstSample={thirdSample} secondSample={fourthSample}></SampleSet>

          <a className={`fade ${link} mt-8 lg:mt-0 lg:text-left`} href="#top">Back to top</a>

        </div>
      </div>
    </>
  );
}