import { HtmlIcon, CssIcon, JavaScriptIcon, ReactJsIcon, PhpIcon, DjandoIcon, NextJsIcon, GitIcon, CIcon, CppIcon, JavaIcon, PythonIcon, MySQLIcon, NodeJsIcon, ScssIcon, TailwindIcon } from '@/components/icons';
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import coderImage from "@/../public/images/coder.svg"
import SocialLinks from '@/components/social-links';

export default function Home() {
  return (
    <>
      <Header />
      <main name="home" className="">
        <div className="mx-auto flex flex-col items-center justify-center px-5 max-w-5xl md:flex-row min-h-screen">
          <div className="mx-auto flex flex-col p-6 flex-grow-1 mt-10">
            <h3 className="text-gray-500 font-semibold text-lg py-2 max-w-md">Hi !</h3>
            <h1 className="font-bold text-4xl sm:text-7xl ">I'm Gyanendra Baghel</h1>
            <h3 className="text-gray-500 font-semibold text-lg py-2 max-w-md">I'm a <b className='text-gradient gradient-purple-darkpurple'>FullStack Developer</b></h3>
            <p className="text-gray-500 max-w-md mb-2">I have 4 years of experience building and designing software. Currently, I have to work on web application using technologies like React, Tailwind, Next JS and GraphQL</p>
            <a href="/resume.pdf" className="px-4 py-2 resume-btn" download>Download Resume</a>
            <SocialLinks />
          </div>
          <Image className="flex-grow-1" height={300} src={coderImage} alt="My Image" />
        </div>
        <hr />
        <div>
          <h1 id='skills' className="m-4 text-5xl font-bold text-center">Skills</h1>
          <div className='flex flex-wrap justify-center'>
            <div className='border max-w-xs p-3 m-3 rounded'>
              <h3 className='h3 font-bold text-3xl text-gray-500 text-center'>Frontend</h3>
              <div className='flex flex-wrap p-4'>
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <ReactJsIcon />
                <ScssIcon />
                <TailwindIcon />
              </div>
            </div>
            <div className='border m-3 p-3 rounded'>
              <h3 className='h3  font-bold text-3xl text-gray-500 text-center'>Backend</h3>
              <div className='flex flex-wrap p-4'>
                <PhpIcon />
                <DjandoIcon />
                <NextJsIcon />
                <MySQLIcon />
                <NodeJsIcon />
              </div>
            </div>
            <div className='border m-3 p-3 rounded'>
              <h3 className='h3 font-bold text-3xl text-gray-500 text-center'>Other</h3>
              <div className='flex flex-wrap p-4'>
                <CIcon />
                <CppIcon />
                <JavaIcon />
                <PythonIcon />
                <GitIcon />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
