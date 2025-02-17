import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './../pages/Home.tsx';
import Services from './../pages/Services.tsx';
import Contact from './../pages/Contact.tsx';
import Header from '../components/Header/Header.tsx';
import About from '../pages/About.tsx';
import Footer from '../components/Footer/Footer.tsx';
import Login from '../pages/Login.tsx';
import SignUp from './../pages/SignUp.tsx';
import ForgotPassword from './../pages/ForgotPassword.tsx';
import ResetPassword from '../pages/ResetPassword.tsx';
import TermsAndConditions from '../pages/TermsAndConditions.tsx';
import OTPInput from '../pages/OTPInput.tsx';
import Dashboard from './../pages/Dashboard.tsx';
import Profile from '../pages/Profile.tsx';
import Listing from '../pages/Listing.tsx';
import ListingDescription from '../pages/ListingDescription.tsx';
import Favorites from '../pages/Favorites.tsx';

const AppRoutes = () => {
    const location = useLocation();
    const hideHeaderFooter = ['/dashboard', '/listings', '/favorites', '/profile'].includes(location.pathname) || location.pathname.startsWith('/listingdescription/');

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/otpinput/:email/:password" element={<OTPInput />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/listings' element={<Listing />} />
                <Route path="/listingdescription/:id" element={<ListingDescription />} />
                <Route path="/favorites" element={<Favorites />} />

            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

const Routers = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default Routers;
