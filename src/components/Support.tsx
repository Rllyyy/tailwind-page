import supportImage from "../assets/support.jpg";
import { PhoneIcon, ArrowRightIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const stylesIcon = "w-12 p-3 -mt-8 bg-indigo-600 rounded-md text-zinc-50";

const supportItems = [
  {
    name: "Sales",
    text: "Our company provides a full range of sales services to help our customers find the right products and solutions to meet their needs. Our sales team is knowledgeable and experienced, and can provide personalized recommendations and support to help customers make informed decisions. We are dedicated to delivering exceptional customer service throughout the sales process.",
    icon: <PhoneIcon className={stylesIcon} />,
  },
  {
    name: "Technical Support",
    text: "Receive 24/7 support service to ensure timely assistance with any issues or questions they may have. Our support team is available to assist customers via phone, email, or chat, and we have a comprehensive knowledge base and online resources to help users resolve issues on their own.",
    icon: <LifebuoyIcon className={stylesIcon} />,
  },
  {
    name: "Media Inquiries",
    text: "We offer media inquiry services, including interviews and information for journalists. Our media team is available to assist with requests. We strive to provide timely and accurate information.",
    icon: <GlobeAltIcon className={stylesIcon} />,
  },
];

export function Support() {
  return (
    <section className='relative h-full px-8 py-16 min-h-[700px]' id='support'>
      {/* You should probably set this up as a backgroundImage instead of using position absolute */}
      <img
        src={supportImage}
        alt='Support Image'
        className='absolute top-0 left-0 object-cover w-full -z-1 brightness-[30%] min-h-[700px] max-h-full'
      />
      <div className='relative z-10 flex flex-col items-center justify-center w-full max-w-screen-xl min-h-full gap-8 mx-auto md:gap-12 '>
        <h3 className='text-2xl md:text-3xl text-zinc-100 font-semibold'>Support</h3>
        <h2 className='text-5xl font-semibold md:text-7xl text-zinc-50'>Finding the right Team</h2>
        <p className='text-lg md:text-xl text-zinc-200 text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eligendi vel itaque a quae, nemo blanditiis
          explicabo illum rem, culpa molestiae perspiciatis? Accusantium praesentium officiis voluptatum omnis, fugit
          enim sapiente.
        </p>
        <div className='relative z-10 grid w-full max-w-screen-xl grid-cols-1 gap-8 mt-24 md:mt-[20%] xl:mt-[30%] md:grid-cols-3 auto-rows-fr'>
          {supportItems.map((item) => {
            return (
              <article className='grid grid-rows-[1fr_min-content] h-full rounded-lg drop-shadow-xl ' key={item.name}>
                <div className='flex flex-col gap-2 p-4 rounded-t-lg bg-zinc-100'>
                  {item.icon}
                  <h4 className='text-xl font-bold'>{item.name}</h4>
                  <p className='text-zinc-600'>{item.text}</p>
                </div>
                <div className='px-4 py-3 rounded-b-lg bg-zinc-200'>
                  <button className='flex flex-row items-center gap-1 font-semibold text-indigo-600'>
                    <span>Contact Us</span>
                    <ArrowRightIcon className='w-4' />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
