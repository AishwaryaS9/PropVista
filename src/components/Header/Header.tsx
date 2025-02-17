import React, { useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
    { path: '/', display: 'Home' },
    { path: '/aboutus', display: 'About' },
    { path: '/services', display: 'Services' },
    { path: '/contact', display: 'Contact' },
]

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 80) {
                    headerRef.current.classList.add('sticky__header');
                } else {
                    headerRef.current.classList.remove('sticky__header');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('show__menu');
        }
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/" >
                            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                                <span className="text-primaryColor">Prop</span>
                                <span className="text-slate-700">Vista</span>
                            </h1>
                        </Link>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                                                : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to="">
                                <figure className="w-[35px] h-[35px] rounder-full">
                                    <img src={userImg} alt="userImg" className="w-full rounded-full cursor-pointer" />
                                </figure>
                            </Link>
                        </div>
                        <Link to="/login">
                            <button className="bg-primaryColor py-2 px-6 rounded-[50px] text-white font-[600] h-[44px] flex items-center justify-center">
                                Login
                            </button>
                        </Link>
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className='w-6 h-6 cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header