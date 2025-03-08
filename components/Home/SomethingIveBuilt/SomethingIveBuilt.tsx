import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
             Here&#39;s what I&#39;ve built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://color-platter-uvhn.vercel.app/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Colors.co </span>
                
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Color Palettes
                  </span>
                
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">Colors </span>,  is the essential tool for creating and collecting color palettes.It allows you to generate perfect matching colors in seconds. 
                  Even if you are not so skilled in design!. You may use a variety of color spaces, including RGB, CMYK, LAB etc.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.Js</span>
                <span className="pr-4 z-10">React.Js</span>
                <span className="pr-4 z-10">Node</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Express.Js</span>
                <span className="pr-4 z-10">SCSS/SASS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              <GithubIcon link="https://github.com/iamsurajchahar/color_platter" />
              <a href="https://color-platter-uvhn.vercel.app/" target={"_blank"} rel="noreferrer">
                <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://github.com/iamsurajchahar/Algorithm_Visualizer"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/img/YPredict-v1.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/iamsurajchahar/Algorithm_Visualizer" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Algorithm Visualizer
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                This project brings complex algorithms to life, 
                allowing you to see how they work step-by-step. Whether you&#39;re learning about <span className="text-AAsecondary">sorting,</span>{" "}
                  <span className="text-AAsecondary">searching</span> and{" "}
                  <span className="text-AAsecondary"> or graph traversal</span>.This visualizer provides an intuitive and 
                  engaging way to explore and understand these fundamental concepts. 
                  Perfect for students, educators, and enthusiasts,
                   this tool helps demystify algorithms through dynamic animations and clear explanations.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">Javascript</span>
                <span className="pr-4 z-10">Algorithms</span>
                
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/iamsurajchahar/Algorithm_Visualizer" />
                <a href="https://github.com/iamsurajchahar/Algorithm_Visualizer" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
          
            <div className="relative rounded w-full h-full col-span-7 ">
            <a href="https://typing-ace-main.vercel.app/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/typing.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://typing-ace-main.vercel.app/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Speed Typing
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help you to improve your <span className="text-AAsecondary"> typing </span> by
                  tracking your progress in <span className="text-AAsecondary"> each round</span> and give you a{" "}
                  <span className="text-AAsecondary"> score</span> based on your typing speed and accuracy through a
                  table of <span className="text-AAsecondary"> statistics</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Algorithms</span>
                <span className="pr-4 z-10">Framer Motion</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">TypeScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/iamsurajchahar/typing_ace" />
                <a href="https://typing-ace-main.vercel.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
            <a href="https://jsonhierarchyvisualizer-suuraajs-projects.vercel.app/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
             </a>
              <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/hackme.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://jsonhierarchyvisualizer-suuraajs-projects.vercel.app/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Json Formatter
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                This project allows you to easily convert JSON data structures into
                  <span className="text-AAsecondary"> tree</span>,{" "}
                  <span className="text-AAsecondary">graph formats</span>,{" "}
                  providing an intuitive way to explore and understand the relationships and hierarchies within your data. 
                 
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Json</span>
                <span className="pr-4 z-10">Next.Js</span>
                <span className="pr-4 z-10">Diagram-editor</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">reaflow</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/iamsurajchahar/Json_Tree" />
                <a href="https://jsonhierarchyvisualizer-suuraajs-projects.vercel.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://game-vault-brown.vercel.app/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">In initiation...</span>
              </div>

              <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">In initiation...</span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://game-vault-brown.vercel.app/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    ManyGame
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Many Games is an offline gaming website offering a diverse selection of fun, challenging, and engaging
                 <span className="text-AAsecondary">Puzzle,</span> <span className="text-AAsecondary">Word,</span> <span className="text-AAsecondary">Memory games</span>,You can enjoy Many Games directly in your browser or download
                  it as a standalone mobile app via Chrome.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">ReactJs</span>
                <span className="pr-4 z-10">TailwindCSS</span>
                <span className="pr-4 z-10">SCSS</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/iamsurajchahar/Game_Vault" />
                <a href="https://game-vault-brown.vercel.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://intelli-learn.vercel.app/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/CallCenter.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/CallCenter.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/iamsurajchahar/Intelli_Learn" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Intelli Learn-EdTech Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                This comprehensive educational platform offers a seamless and interactive learning experience, 
                featuring a wide range of courses, real-time collaboration tools, and personalized learning paths. 
                Designed for students, educators, 
                and institutions, our platform makes quality education accessible and engaging. 
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">MongoDB/Mongoose</span>
                <span className="pr-4 z-10">ExpressJs</span>
                <span className="pr-4 z-10">TailwindCSS</span>
                <span className="pr-4 z-10">NodeJs</span>
                <span className="pr-4 z-10">Javascript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/iamsurajchahar/Intelli_Learn" />
                <a href="https://intelli-learn.vercel.app/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      

    {/* // ? Project 7 */}
    <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
    {/* Left image */}
    <div
      className="hidden bg-AAprimary z-10  py-4 
    absolute md:grid grid-cols-12 w-full h-full  content-center"
    >
      <div className="relative rounded w-full h-full col-span-7 ">
        <a href="https://kanban-sooty-mu.vercel.app/" target={"_blank"} rel="noreferrer">
          <div
            // onClick={}
            className="absolute w-full h-full rounded bg-AAprimary 
     transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
          ></div>
        </a>
        <Img src={"/kanban-ss.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
      </div>
    </div>

    {/* right Content */}
    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
      {/* background for text in mobile responsive */}
      <div className="absolute w-full h-full bg-opacity-70 z-0">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
          <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
          <Img src={"/kanban-ss.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
        </div>
      </div>
      <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
        <div className="w-full"></div>
        <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">In initiation...</span>
      </div>
      <div
        className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
      col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
      >
        <div className="flex flex-col space-y-1 md:items-end z-10">
          <span className="text-AAsecondary text-base">Recent Project</span>
          <a href="https://kanban-sooty-mu.vercel.app/" target={"_blank"} rel="noreferrer">
            <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                Kanban
            </span>
          </a>
        </div>
        <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
          <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
          Kanban is a modern <span></span>
           <span className="text-AAsecondary">task management website designed to streamline your workflow</span><span></span>,It provides an intuitive and visually appealing way to organize and track tasks efficiently, 
           helping you stay productive and focused. 🚀
          </p>
        </div>
        <ul
          className="flex flex-wrap w-full text-gray-300 md:text-gray-400
         text-sm font-Text2 md:justify-end"
        >
          <span className="pr-4 z-10">ReactJs</span>
          <span className="pr-4 z-10">TailwindCSS</span>
          <span className="pr-4 z-10">HTML</span>
          <span className="pr-4 z-10">Typescript</span>
        </ul>
        <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
          <GithubIcon link="https://github.com/iamsurajchahar/kanban" />
          <a href="https://kanban-sooty-mu.vercel.app/" target={"_blank"} rel="noreferrer">
            <ExternalLink url={""} router={router} />
          </a>
        </div>
      </div>
    </div>
  </div>
            {/* // ?  Project 6 */}
         <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://github.com/iamsurajchahar/Time-series-data-visualizer" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/time-ss.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/time-ss.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://github.com/iamsurajchahar/Time-series-data-visualizer" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  A Smarter Way to Visualize JSON Data 
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                Effortlessly explore and analyze JSON data with JSON Tree, a powerful visualization tool 
                designed for clarity and efficiency. Whether you&#39;re a developer, data analyst, or API enthusiast, 
                JSON Tree simplifies data representation in both graph 📈 and tree 🌲 formats, 
                making it easier to navigate complex structures.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJs</span>             
                <span className="pr-4 z-10">TailwindCSS</span>
                <span className="pr-4 z-10">Tauri</span>
                <span className="pr-4 z-10">typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/iamsurajchahar/Time-series-data-visualizer" />
                <a href="https://github.com/iamsurajchahar/Time-series-data-visualizer" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
  </div>
  </div>
  );
}
