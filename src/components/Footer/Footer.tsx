import React from 'react'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className='group-hover"text-white w-4 h-5' />,
  },
  {
    path: "https://www.github.com/",
    icon: <AiFillGithub className='group-hover"text-white w-4 h-5' />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className='group-hover"text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className='group-hover"text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: '/services',
    display: 'Services'
  },

];

const quickLinks02 = [

  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: '/',
    display: 'Find a Location'
  },
  {
    path: '/',
    display: 'Get a Opinion'
  }
];

const quickLinks03 = [

  {
    path: "/contact",
    display: "Contact US",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">
                Prop
              </span>
              <span className="text-slate-700">
                Vista
              </span>
            </h1>
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright &copy; {year} &nbsp;&nbsp;Developed by Aishwarya S.&nbsp;&nbsp;All rights reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E]
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[200] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li className="mb-4" key={index}>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}</Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer