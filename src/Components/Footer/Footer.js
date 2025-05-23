import React from 'react';
import logo from '../../assets/logo.png';
import { FaEnvelope, FaFacebook, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
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

    return (
        <div id='footer' className='text-wrap break-words   text-white '>
            <div className="bg-[#16171A] w-full flex justify-center items-center text-white border-t-8 border-t-blue-700 rounded-t-3xl">
                <footer className={` footer max-w-[1350px] w-full bg-transparent bg-[#16171A]  z-10  text-white flex justify-center items-center pt-24 pb-10 pl-16 pr-16 `} style={{

                }}>
                    <div className="w-full md:flex md:justify-between md:items-start mx-auto">
                        <div className='md:flex md:justify-center w-full md:max-w-5/12'>
                            <div>
                                <aside className='w-full max-w-sm md:mr-5 mb-3 md:mb-0'>
                                    <div className={`mb-5`} >
                                        <img src={logo} className={`w-80 py-2 rounded-x`} alt="" />
                                    </div>
                                    <p className='text-base text-slate-300'>
                                        Cqube International, Since 2019
                                    </p>
                                    <p className='text-base text-slate-300 mb-3'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                                    <p className='pt-1 text-base text-slate-300' style={{
                                        textAlign: "justify",
                                        textJustify: "  We are a government approved licensed organization and we have the expertise to prepare students and their VISA, passport.We take you to aboard for your dream come true.We will take you to world’s top public & private Universities and Colleges. we will take you to Canada, America, Australia, Britain/UK/England and many more."
                                    }}>
                                        We are a licensed and government-approved organization, specializing in helping students with their visa, passport, and study preparations. Let us guide you to achieve your dream of studying at top universities and colleges abroad.
                                    </p>
                                    <div className="flex justify-start pt-6 items-center gap-3">
                                        <FaFacebook className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-blue-600' style={{ border: "1px solid #1E6DEB " }}></FaFacebook>
                                        <FaXTwitter className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-white' style={{ border: "1px solid #1E6DEB " }}></FaXTwitter>
                                        <FaLinkedinIn className='text-[2.3rem] p-1.5 rounded-full leading-10 text-white transition-all duration-500 hover:text-blue-600' style={{ border: "1px solid #1E6DEB " }}></FaLinkedinIn>
                                        <FaInstagram className='text-[2.3rem] p-1.5 leading-10 rounded-full text-white transition-all duration-500 hover:text-pink-400' style={{ border: "1px solid #1E6DEB " }}></FaInstagram>
                                    </div>
                                </aside>
                            </div>
                            <div className='text-[#68696C] md:ml-5 mr-10'>
                                <nav className='flex flex-col gap-2'>
                                    <h6 className="text-[#1E6DEB] text-xl uppercase mb-2 font-medium">Services</h6>
                                    <a className="link link-hover text-base text-slate-300" href='#homepage'>Home</a>
                                    <a className="link link-hover text-base text-slate-300" href='#about-us-sect'>About Us</a>
                                    <Link to={"/contact-us"} className="link link-hover text-base text-slate-300">Contact</Link>
                                    <a className="link link-hover text-base text-slate-300">Faqs</a>
                                    <a className="link link-hover text-base text-slate-300">Gallery</a>
                                    <a className="link link-hover text-base text-slate-300">Book Appointment</a>
                                    <a className="link link-hover text-base text-slate-300">Study Abroad</a>
                                </nav>
                            </div>
                        </div>
                        <div className='md:flex md:justify-center md:items-start w-full md:max-w-5/12 mt-3 md:mt-0'>
                            <div className="md:w-[450px] md:h-[370px] w-3/4 h-[400px] mb-3 md:mb-0 rounded-lg overflow-hidden shadow-lg border border-gray-700">
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
                            <div className='text-[#68696C] md:ml-5 md:mr-10 px-5 break-words break-all'>
                                <nav className='flex flex-col gap-2'>
                                    <h6 className="text-xl uppercase mb-2 font-medium text-[#1E6DEB]">Contact</h6>
                                    <div className="text-base flex items-center" ><FaEnvelope className='text-[#1E6DEB] mr-2'></FaEnvelope><span className='text-slate-300'>visa@apprent.azshakil.com</span></div>
                                    <div className="text-base flex items-center" ><FaEnvelope className='text-[#1E6DEB] mr-2'></FaEnvelope><span className='text-slate-300'>apprentbd@gmail.com</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span className='text-slate-300'>China office: 8 NO Guangdong Road, Hongqiao, Tianjin, China</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span className='text-slate-300'>Dhaka South: 35/7/1, Golapbag, Sayedabad,Dhaka-1203</span></div>
                                    <div className="text-base flex items-center" ><FaMapMarkerAlt className='text-[#1E6DEB] mr-2'></FaMapMarkerAlt><span className='text-slate-300 break-before-avoid break-after-avoid break-keep ' style={{ overflowWrap: "none" }}>Baridhara Office: House no- 2, Road No- 7, Block- J, Baridhara, Dhaka, Bangladesh</span></div>
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