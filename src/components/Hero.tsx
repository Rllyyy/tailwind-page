import { CloudArrowDownIcon, PaperAirplaneIcon, ServerIcon, CircleStackIcon } from "@heroicons/react/24/solid";

import backgroundImage from "../assets/cyber-bg.png";

export function Hero() {
  return (
    <section className='flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 md:px-5' id='home'>
      <div className='flex flex-row flex-wrap justify-around w-full gap-y-16'>
        <div className='flex flex-col justify-center gap-3'>
          <p className='text-xl md:text-2xl'>Unique Sequencing & Production</p>
          <h1 className='text-4xl font-bold md:text-6xl xl:text-7xl'>Cloud Management</h1>
          <p className='text-xl md:text-2xl'>This is our tech brand</p>
          <button className='w-full max-w-lg py-3 text-lg font-semibold btn'>Get Started</button>
        </div>
        <img className='w-full max-w-sm 2xl:max-w-lg' src={backgroundImage} alt='Background Image' />
      </div>
      <div className='bg-zinc-100 rounded-md drop-shadow-xl p-2 px-4 w-[80%] md:w-full max-w-2xl mt-4 md:mt-[10vh]'>
        <p className='mb-1 text-lg font-semibold text-center'>Data Services</p>
        <ul className='flex flex-col flex-wrap items-center w-full mb-2 md:flex-row md:justify-between gap-x-4 gap-y-3'>
          <li className='flex gap-x-1'>
            <CircleStackIcon className='w-6 text-indigo-600' />
            <span className='text-gray-600'>App Security</span>
          </li>
          <li className='flex gap-x-1'>
            <ServerIcon className='w-6 text-indigo-600' />
            <span className='text-gray-600'>Dashboard Design</span>
          </li>
          <li className='flex gap-x-1'>
            <CloudArrowDownIcon className='w-6 text-indigo-600' />
            <span className='text-gray-600'>Cloud Data</span>
          </li>
          <li className='flex gap-x-1'>
            <PaperAirplaneIcon className='w-6 text-indigo-600' />
            <span className='text-gray-600'>API Services</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
