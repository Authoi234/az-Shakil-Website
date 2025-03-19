import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FaEnvelope, FaFacebook, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLink, FaX, FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import azShakilPortfolioImage from '../../assets/azShakilPortfolioImage.png';
import plane from '../../assets/plane.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    const locations = [
        { id: 1, name: "8 NO Guandong Road, Hongqiao, Tianjin, China", position: [39.1019152, 117.2153112] },
        { id: 2, name: "35/7/1, Golapbag, Sayedabad, Dhaka-1203", position: [23.7223012, 90.425395] },
        { id: 3, name: "House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh", position: [23.8009244, 90.4236441] },
    ];

    /* 
    Explore
    Home
    About Us
    Contact
    Faqs
    Gallery
    Events
    Book Appointment
    visa@apprent.azshakil.com
    apprentbd@gmail.com
    */
    // Baridhara Office: House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh
    // China office: 8 NO Guandong Road, Hongqiao, Tianjin, China
    // Dhaka South: 35/7/1, Golapbag, Sayedabad,Dhaka-1203
    // Baridhara Office: House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh


    return (
        <div id='footer' className='text-wrap break-words   text-white '>
            {/* <div className="w-80 ">
                <img src={plane} className='relative -top-48 -mt-24 w-full -rotate-[7deg]' style={{
                    filter: "drop-shadow(rgba(254, 254, 254, 0.5) 33px 32px 25px)"
                }} alt="" />
            </div> */}
            <div className="bg-[#16171A] w-full flex justify-center items-center text-white border-t-8 border-t-blue-700 rounded-t-3xl">
                <footer className={` footer max-w-[1350px] w-full bg-transparent bg-[#16171A]  z-10  text-white pt-24 pb-10 pl-16 pr-5 `} style={{

                }}>
                    <div className="w-full flex justify-between items-start">
                        <div className='flex justify-center w-full max-w-5/12'>
                            <div>
                                <aside className='w-full max-w-sm mr-5'>
                                    <div className={``} >
                                        <img src={logo} className={`w-80 py-2 rounded-x`} alt="" />
                                    </div>
                                    <p className='text-base text-[#68696C]'>
                                        Cqube International, Since 2019
                                    </p>
                                    <p className='text-base text-[#68696C]'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                                    <p className='pt-1 text-base text-[#68696C]' style={{
                                        textAlign: "justify",
                                        textJustify: "  We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more."
                                    }}>
                                        We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more.
                                    </p>
                                    <div className="flex justify-start pt-6 items-center gap-3">
                                        <FaFacebook className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-blue-600' style={{ border: "1px solid #1E6DEB " }}></FaFacebook>
                                        <FaXTwitter className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-white' style={{ border: "1px solid #1E6DEB " }}></FaXTwitter>
                                        <FaLinkedinIn className='text-[2.3rem] p-1.5 rounded-full leading-10 text-white transition-all duration-500 hover:text-blue-600' style={{ border: "1px solid #1E6DEB " }}></FaLinkedinIn>
                                        <FaInstagram className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-pink-400' style={{ border: "1px solid #1E6DEB " }}></FaInstagram>
                                    </div>
                                </aside>
                            </div>
                            <div className='text-[#68696C] ml-5 mr-10'>
                                <nav className='flex flex-col gap-2'>
                                    <h6 className="opacity-65 text-white text-xl uppercase mb-2 font-medium">Services</h6>
                                    <a className="link link-hover text-base" href='#homepage'>Home</a>
                                    <a className="link link-hover text-base" href='#about-us-sect'>About Us</a>
                                    <Link to={"/contact-us"} className="link link-hover text-base">Contact</Link>
                                    <a className="link link-hover text-base">Faqs</a>
                                    <a className="link link-hover text-base">Gallery</a>
                                    <a className="link link-hover text-base">Book Appointment</a>
                                    <a className="link link-hover text-base">Study Abroad</a>
                                </nav>
                            </div>
                        </div>
                        <div className='flex justify-center items-start w-full max-w-5/12'>
                            <div className="w-[450px] h-[370px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
                                <MapContainer
                                    center={[23.7223012, 90.425395]}
                                    zoom={13}
                                    style={{ height: "100%", width: "100%" }}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {locations?.map((location) => (
                                        <Marker key={location.id} position={location.position}>
                                            <Popup>{location.name}</Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                            <div className='text-[#68696C] ml-5 mr-10 px-5 break-words break-all'>
                                <nav className='flex flex-col gap-2'>
                                    <h6 className="opacity-65 text-white text-xl uppercase mb-2 font-medium">Contact</h6>
                                    <div className="text-base flex items-center" ><FaEnvelope className='text-[#1E6DEB] mr-2'></FaEnvelope><span>visa@apprent.azshakil.com</span></div>
                                    <div className="text-base flex items-center" ><FaEnvelope className='text-[#1E6DEB] mr-2'></FaEnvelope><span>apprentbd@gmail.com</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span>China office: 8 NO Guangdong Road, Hongqiao, Tianjin, China</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span>Dhaka South: 35/7/1, Golapbag, Sayedabad,Dhaka-1203</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span>Baridhara Office: House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh</span></div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Footer;