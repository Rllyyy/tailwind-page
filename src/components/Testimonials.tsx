const testimonialInfo = [
  {
    top: "100%",
    bottom: "Completion",
  },
  {
    top: "24/7",
    bottom: "Delivery",
  },
  {
    top: "100K",
    bottom: "Transactions",
  },
];

export function Testimonial() {
  return (
    <section
      className='min-h-[70vh] flex flex-col justify-center gap-y-6 w-full max-w-screen-xl mx-auto px-8 py-16'
      id='testimonials'
    >
      <div className='block text-5xl font-bold text-center md:text-7xl'>
        <h2 className='inline text-indigo-700'>Trusted</h2>
        <h2 className='inline'> by Developers across the World</h2>
      </div>
      <p className='text-lg text-center md:text-xl text-zinc-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi omnis odit et vitae nihil magni, beatae
        dolore impedit ipsam iste fugit ipsum labore blanditiis laboriosam modi temporibus hic esse!
      </p>
      <div className='flex flex-col flex-wrap w-full gap-4 mt-8 md:flex-row justify-evenly md:mt-16'>
        {testimonialInfo.map((item, index) => {
          return (
            <div
              key={index}
              className='py-8 px-12 shadow-lg shadow-zinc-400 rounded-md border-[1px] border-slate-100 flex-1'
            >
              <p className='text-5xl font-bold text-center text-indigo-600 md:text-6xl'>{item.top}</p>
              <p className='text-base text-center text-zinc-500'>{item.bottom}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
