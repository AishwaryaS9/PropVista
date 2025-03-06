import React from 'react'
import heroImage1 from '../assets/images/hero-img01.jpg';
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import About from './About.tsx'
import PropertyList from '../components/Property/PropertyList.tsx';
import Testimonial from './../components/Testimonial/Testimonial.tsx';
import { Link } from 'react-router-dom';
import { getAnalytics, logEvent } from 'firebase/analytics';

const Home = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'Home Page Loaded');

    return (
        <>
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px]
                            text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    Let's hunt for your dream residence
                                </h1>
                                <p className="text__para">
                                    Explore our range of beautiful properties with the addition of separate accomodation suitable for you.
                                </p>
                                <button className="btn">
                                    Request an Appointment
                                </button>
                            </div>

                            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap=5 lg:gap-[30px]'>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        30+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">

                                    </span>
                                    <p className="text__para">Years of Experience</p>
                                </div>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] 
                                    lg:text-[44px] lg:leadig-[54px] font-[700] text-headingColor'>15+</h2>
                                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>Location</p>
                                </div>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] 
                                    lg:text-[44px] lg:leadig-[54px] font-[700] text-headingColor'>100%</h2>
                                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                    <p className='text__para'>Customer Satisfaction</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className='w-full' src={heroImage1} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section style={{ background: "#F5F5F5" }}>
                <div className="container">
                    <div className="lg:w-[600px] mx-auto">
                        <h2 className="heading text-center">
                            Giving you peace of mind
                        </h2>
                        <p className="text__para text-center">
                            Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Comfortable
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center">
                                    Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.
                                </p>
                            </div>
                        </div>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Extra Security
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center'>
                                    You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.
                                </p>
                            </div>
                        </div>

                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt="" />
                            </div>

                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                    Luxury
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center'>
                                    Find out how we provide the highest standard of professional property management to give you all the benefits of property.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]'>
                        <div className="py-[30px] px-5">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Best price
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center">
                                    Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.
                                </p>
                            </div>
                        </div>
                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt="" />
                            </div>

                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                    Strategic location
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center'>
                                    located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.
                                </p>

                            </div>
                        </div>

                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt="" />
                            </div>

                            <div className='mt-[30px]'>
                                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                    Efficient
                                </h2>
                                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 gtext-center'>
                                    Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />

            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                The new way to find your<br /> new home
                            </h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    Find your dream place to live in with more than 10k+ properties listed.
                                </li>
                            </ul>
                            <Link to="/">
                                <button className="btn">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-[0]">
                            <img src={featureImg} className="w-3/4" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: "#F5F5F5" }}>
                <div className="container">
                    <div className="xl:w-[600px] mx-auto">
                        <h2 className="heading text-center">
                            Best Recomendation
                        </h2>
                        <p className="text__para text-center">
                            Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.
                        </p>
                    </div>
                    <PropertyList />
                </div>
            </section>

            <section style={{ background: '#F5F5F5' }}>
                <div className="container">
                    <div className='xl:w-[600px] mx-auto'>
                        <h2 className='heading text-center'>Recent Properties</h2>
                        <p className='text__para text-center'>
                            Explore a curated collection of exclusive luxury homes, where elegance meets architectural brilliance.
                        </p>
                    </div>
                    <PropertyList />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            People say about us?
                        </h2>
                        <p className="text__para text-center">
                            See what our property managers, landlords, and tenants have to say.
                        </p>
                    </div>
                    <Testimonial />
                </div>
            </section>
        </>
    )
}

export default Home
