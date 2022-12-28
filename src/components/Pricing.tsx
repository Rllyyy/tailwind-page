import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const pricingOptions = [
  {
    version: "standard",
    price: "49",
  },
  {
    version: "enterprise",
    price: "89",
  },
];

export function Pricing() {
  return (
    <section className='relative px-8 py-16 overflow-hidden' id='pricing'>
      <div className='bg-slate-900 w-full h-[600px] absolute top-0 left-0 -z-1 ' />
      <div className='relative flex flex-col items-center w-full max-w-screen-xl mx-auto gap-y-6 '>
        <h3 className='text-3xl font-semibold text-zinc-200'>Pricing</h3>
        <h2 className='text-5xl font-bold text-zinc-100'>The right price for your research.</h2>
        <h4 className='text-xl text-zinc-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, in?
        </h4>
        <div className='flex flex-row flex-wrap w-full gap-8 mt-12 justify-evenly'>
          {pricingOptions.map((item) => {
            return <PricingCard version={item.version} price={item.price} key={item.version} />;
          })}
        </div>
      </div>
    </section>
  );
}

//, typeof pricingOptions[0]

function PricingCard({
  version,
  price,
  className: passedClassName = "",
  ...props
}: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement> & typeof pricingOptions[0]) {
  return (
    <article className={`p-4 rounded-lg bg-zinc-50 drop-shadow-lg ${passedClassName}`} key={version} {...props}>
      <p className='inline-block px-2 py-1 mb-2 text-xs font-bold text-indigo-800 uppercase bg-indigo-300 rounded-full'>
        {version}
      </p>
      <p className='mb-6 text-4xl font-bold'>${price}/mo</p>
      <p className='mb-4 text-lg text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ul className='flex flex-col mb-4 gap-y-3'>
        {[...Array(5)].map((item, index) => {
          return (
            <li className='flex flex-row items-center' key={index}>
              <CheckIcon className='inline-block w-6 text-green-700' />
              <span className='ml-3 text-lg text-slate-500'>Lorem ipsum dolor sit amet.</span>
            </li>
          );
        })}
      </ul>
      <button className='w-full p-3 font-semibold rounded-md bg-slate-800 text-slate-50 hover:bg-slate-600'>
        Get Started
      </button>
    </article>
  );
}
