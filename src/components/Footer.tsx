const footerHeadingsStyles = "text-lg font-bold uppercase text-slate-300";
const footerItemsStyles = "flex flex-col gap-1 mt-2 text-slate-400";

export function Footer() {
  return (
    <footer className='px-8 pt-16 pb-4 bg-slate-900 '>
      <div className='w-full mx-auto max-w-screen-2xl '>
        <div className='grid gap-6 md:grid-cols-3 lg:grid-cols-6'>
          <div>
            <h4 className={footerHeadingsStyles}>Solutions</h4>
            <ul className={footerItemsStyles}>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Data</li>
              <li>Cloud</li>
            </ul>
          </div>
          <div>
            <h4 className={footerHeadingsStyles}>Support</h4>
            <ul className={footerItemsStyles}>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <h4 className={footerHeadingsStyles}>Company</h4>
            <ul className={footerItemsStyles}>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4 className={footerHeadingsStyles}>Legal</h4>
            <ul className={footerItemsStyles}>
              <li>Claim</li>
              <li>Privact</li>
              <li>Policies</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className='col-span-2 '>
            <h4 className={footerHeadingsStyles}>Subscribe to our Newsletter</h4>
            <p className='text-slate-400 '>The latest news, articles, and resources, sent to your inbox weekly</p>
            <form className='mt-2 flex flex-row'>
              <input
                type='email'
                className='inline p-2 focus-visible:outline rounded-l-md focus-visible:outline-2 focus-visible:outline-indigo-600 -outline-offset-2 w-full max-w-[200px] flex-shrink-1'
                placeholder='email'
                size={1}
              />
              <button type='button' className='h-full p-2 font-semibold bg-indigo-600 rounded-r-md text-slate-100'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className='my-4 border-slate-500 ' />
        <div>
          <p className='text-slate-400'>© Niklas Fischer</p>
        </div>
      </div>
    </footer>
  );
}
