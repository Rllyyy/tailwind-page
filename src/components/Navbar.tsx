import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    name: "Home",
  },
  {
    name: "Testimonials",
  },
  {
    name: "Support",
  },
  {
    name: "Platforms",
  },
  {
    name: "Pricing",
  },
];

export function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav);
  };

  const handleNavClose = () => {
    setNav(false);
  };

  return (
    <nav className='sticky top-0 left-0 right-0 z-50 flex items-center w-full max-w-full px-3 py-2 bg-zinc-200 drop-shadow-lg md:px-5 md:py-3'>
      <h1 className='mr-4 text-2xl font-bold md:text-3xl leading-0'>Brand</h1>
      <ul className='justify-around hidden mx-auto align-bottom md:flex gap-x-4'>
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item.name.toLowerCase()}`} className='text-lg hover:text-indigo-600 font-semibold'>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='hidden gap-2 md:flex'>
        <button className='px-4 py-2 text-black bg-transparent border-none btn'>Login</button>
        <button className='px-4 py-2 font-semibold btn'>Sign Up</button>
      </div>
      <button className='p-1 ml-auto md:hidden' onClick={handleNavClick}>
        {!nav ? <Bars3Icon className='w-7 ' /> : <XMarkIcon className='w-7' />}
      </button>
      <div className={!nav ? "hidden" : "absolute md:hidden bg-zinc-200 w-full px-8 pb-3 left-0 top-full gap-5"}>
        <ul>
          {navLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`${index < navLinks.length - 1 ? "border-b-2" : ""}  border-zinc-300 w-full text-center `}
              >
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className='inline-block w-full p-1 text-lg'
                  onClick={handleNavClose}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='flex flex-col gap-2 mt-2'>
          <button onClick={handleNavClose} className='p-8 py-3 text-indigo-600 bg-transparent btn '>
            Login
          </button>
          <button onClick={handleNavClose} className='px-8 py-3 btn'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
