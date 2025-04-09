import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import sky from '../public/assets/bg3.jpg';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';
import dLogo from '../public/assets/header.jpg';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const Header = () => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="h-[50vh] sm:h-[70vh] w-[100vw] sm:w-full relative" style={{ marginTop: '80px' }}>
      <Image
        src={sky}
        width={3950}
        height={4937}
        alt="Header"
        className="w-[100vw] h-[50vh] sm:h-[70vh] object-cover"
        priority
      />

      <div className="fixed top-0 w-full text-white z-10">
        <div className="bg-main-olive/100">
          <nav
            className={`flex items-center py-5 px-5 z-30 ${active ? 'bg-main-olive text-white' : ''}`}
            style={{ justifyContent: 'space-between', maxWidth: '5xl', margin: '0 auto' }}
          >
            <div className="flex items-center">
              <Link href={'/#home'} className="sm:text-lg font-bold z-30 mr-4">
                STCEC
              </Link>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginRight: '0.5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></div>
            </div>

            <div className="hidden md:flex space-x-6">
              <Link href={'#home'} className="navlinks uppercase">
                Home
              </Link>

              <Link href={'#about'} className="navlinks uppercase">
                About Us
              </Link>

              <Link href={'simplepage'} className="navlinks uppercase">
                Doctrinal Statement
              </Link>

              <Link href={'gallery'} className="navlinks uppercase">
                Gallery
              </Link>

              <Link href={'#contact'} className="navlinks uppercase">
                Contact Us
              </Link>
            </div>

            <div className="md:hidden z-30">
              {!active && (
                <RiMenu4Line onClick={() => setActive(!active)} className="w-8 h-8" />
              )}
              {active && (
                <TfiClose onClick={() => setActive(!active)} className="w-6 h-6" />
              )}
            </div>
          </nav>
        </div>
      </div>

      <div id="home" className="absolute top-0 h-full w-full text-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-65 h-65 rounded-full overflow-hidden mb-4">
            <Image src={dLogo} alt="main Logo" width={150} height={150} style={{ objectFit: 'cover' }} />
          </div>

          <h2 className="text-sm sm:text-[1rem] font-bold text-gray-100">SANSKRUTHI TOWNSHIP</h2>

          <div className="space-y-1 text-center font-bold text-[2.7rem] leading-[2.7rem] text-xl sm:leading-none md:text-5xl lg:text-7xl">
            <h2 className="uppercase">Christ Evangelical Church</h2>
          </div>
        </div>

        {active && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              ref={wrapperRef}
              className="fixed top-20 bottom-0 right-0 left-0 bg-main-olive md:hidden flex flex-col space-y-5 items-center justify-center font-semibold z-20"
            >
              <motion.div variants={item}>
                <Link href={'#home'} onClick={() => setActive(!active)} className="btns !text-white text-2xl uppercase">
                  Home
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link href={'#about'} onClick={() => setActive(!active)} className="btns !text-white text-2xl uppercase">
                  About
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link href={'simplepage'} onClick={() => setActive(!active)} className="btns !text-white text-2xl uppercase">
                  Doctrinal Statement
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link href={'gallery'} onClick={() => setActive(!active)} className="btns !text-white text-2xl uppercase">
                  Gallery
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link href={'#contact'} onClick={() => setActive(!active)} className="btns !text-white text-2xl uppercase">
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};