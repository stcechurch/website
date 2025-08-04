import { ImLocation, ImPhone } from 'react-icons/im';
import { MdEmail, MdAccessTime } from 'react-icons/md';
import {
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaPodcast,
    FaWhatsapp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import getInTouch from '../public/assets/getintouch.jpg';
import Image from 'next/image';
import { useState } from 'react';

export const Contact = () => {
    const [lng, setLng] = useState(-0.029529);
    const [lat, setLat] = useState(5.694385);

    return (
        <div id="contact" className="w-full lg:grid lg:grid-cols-6 space-y-10 lg:space-y-0">
            {/* Rest of your Contact component code */}
            <div className="relative h-full w-full col-span-2">
                <Image
                    src={getInTouch}
                    alt="Get In Touch"
                    className="w-full h-[40vh] sm:h-[44vh] object-cover"
                />

                <div className="absolute top-0 flex flex-col items-center justify-center h-full w-full">
                    <div className="text-center bg-gray-500/50 w-full py-5 text-white font-bold text-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="uppercase"
                        >
                            Contact Us
                        </motion.p>
                        <h1 className="text-sm font-normal ">
                            We would love to hear from you
                        </h1>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-10 text-gray-900 bg-gray-100 p-4">
                <div className="space-y-2 font-semibold">
                    <p className="flex items-center text-sm uppercase">
                        <span>
                            <ImLocation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-red-500" />
                        </span>
                        Sanskruthi Township , Opposite C7 Block , Pocharam, Ghatkesar, Hyderabad - 500088
                    </p>

                    <p className="flex items-center text-sm uppercase">
                        <span>
                            <ImPhone className="w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-sky-400" />
                        </span>
                        +91 87901 86584 | +91 89784 60307
                    </p>

                    <p className="flex items-center text-sm uppercase">
                        <span>
                            <MdAccessTime className="w-4 h-5 sm:w-5 mr-1 sm:mr-2 text-black" />
                        </span>
                        MAIN SERVICE: SUNDAYS 10:00AM - 01:00PM
                    </p>

                    <p className="flex items-center text-sm uppercase">
                        <span>
                            <MdEmail className="w-4 h-5 sm:w-5 mr-1 sm:mr-2 text-gray-700" />
                        </span>
                        <a href="mailto:stcechurch@gmail.com" className="hover:underline">
                            stcechurch@gmail.com
                        </a>
                    </p>

                    <p className="flex flex-col items-start text-sm uppercase mt-2">
                        <span className="flex items-center">
                            <a href="https://chat.whatsapp.com/DDKXevnKUEtIRv7z33Bhz1?mode=ac_t" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                                <FaWhatsapp className="w-5 h-5 text-green-500 mr-2" />
                                WhatsApp
                            </a>
                        </span>
                        <span className="flex items-center mt-2">
                            <a href="https://www.youtube.com/@STCEChurch" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                                <FaYoutube className="w-5 h-5 text-[#FF0000] mr-2" />
                                YouTube
                            </a>
                        </span>
                    </p>
                </div>
            </div>

            <div className="lg:col-span-2 h-[40vh] sm:h-[44vh] flex justify-center lg:justify-end">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.38102235546!2d78.64032059678955!3d17.441468099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9dded4c03ccf%3A0xd2a8574bdd4aa5d1!2sSanskruthi%20Township%20Christ%20Evangelical%20Church!5e0!3m2!1sen!2sin!4v1742046216791!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};
