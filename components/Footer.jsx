import Link from 'next/link';
import { useState } from 'react';

export const Footer = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:stcechurch@gmail.com?subject=Website Inquiry&body=Name: ${name}\nPhone/Email: ${contact}\nMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  const brochureLink = 'https://drive.google.com/file/d/1jaxthDyjfGIHZDEuIaMNJEoCz00N_MFs/view?usp=sharing';

  return (
    <div className="bg-neutral-800 p-5">
      <div className="my-10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-32">
        <div className="flex flex-col items-center md:items-start space-y-5">
          <h2 className="text-neutral-500 uppercase text-xl font-bold">
            Quick Links
          </h2>

          <div className="flex flex-col items-center md:items-start space-y-3 uppercase">
            <Link href={'/#home'} className="btns">
              Home
            </Link>
            {/* <Link href={'events'} className="btns">
              Events
            </Link> */}
            <Link href={'gallery'} className="btns">
              Gallery
            </Link>
            <Link href={'/#about'} className="btns">
              About Us
            </Link>
            <Link href={'/#contact'} className="btns">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <h2 className="text-neutral-500 uppercase text-xl font-bold">
            Documents
          </h2>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <a href={brochureLink} target="_blank" rel="noopener noreferrer" className="btns uppercase">
              Brochure
            </a>
            {/* <button className="btns uppercase">Committee Members</button> */}
            <Link href={'/simplepage'} className="btns uppercase">
              Doctrinal Statement
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <h2 className="text-neutral-500 uppercase text-xl font-bold">
            Get in touch
          </h2>

          <div className="flex flex-col space-y-2 uppercase">
            <input
              type="text"
              placeholder="Name"
              className="textfield"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone/ Email"
              className="textfield"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Leave us a message"
              rows={3}
              className="textfield"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="sendbtn" onClick={handleSendEmail}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-neutral-500 mt-10">
         Copyright &copy; STCEC 2025.
      </div>
    </div>
  );
};