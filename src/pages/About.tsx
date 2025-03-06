import React, { useEffect } from 'react'
import aboutImg from '../assets/images/about.png'
import aboutCardImg from '../assets/images/about-card.png'
import featureImg from '../assets/images/feature-img.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import ReactGA from 'react-ga4';

const About = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/aboutus', title: 'About Us' });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ml-4">
              <h2 className="heading">
                About Us
              </h2>
              <p className="text__para mt-[30px]">
                Welcome to PropVista, where we specialize in comprehensive real estate management services tailored to meet the unique needs of property owners and tenants alike. With years of experience in the industry, we have established ourselves as a trusted partner in the realm of property management, known for our commitment to excellence, transparency, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Our Mission
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  At PropVista, our mission is to provide top-notch property management solutions that maximize the value of your real estate investments while ensuring a seamless and enjoyable living or working experience for your tenants. We strive to be the bridge that connects property owners with their tenants, fostering a harmonious relationship built on trust and mutual respect.
                </li>
              </ul>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-[0]">
              <img src={featureImg} className='w-3/4' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F5F5F5" }}>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Integrity
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center">
                  We operate with the highest level of integrity, ensuring honesty and transparency in all our dealings. Our clients trust us to manage their valuable assets, and we take this responsibility seriously.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Excellence
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center">
                  We are committed to delivering exceptional service in every aspect of property management. From maintenance to financial management, we aim to exceed your expectations.
                </p>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Customer Focus
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center'>
                  Our clients are at the heart of everything we do. We tailor our services to meet your specific needs, providing personalized solutions that ensure your satisfaction and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ml-4'>
              <h2 className='heading'>Our Team</h2>
              <p className="text__para mt-[30px]">
                Our team is composed of seasoned professionals with diverse backgrounds in real estate, finance, legal, and customer service. Each member brings a wealth of knowledge and expertise to the table, ensuring that your property is managed with the utmost care and professionalism.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
