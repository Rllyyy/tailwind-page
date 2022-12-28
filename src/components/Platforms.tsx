import { CheckIcon } from "@heroicons/react/24/solid";

export function Platforms() {
  return (
    <section className='px-8 py-16' id='platforms'>
      <div className='flex flex-col items-center w-full max-w-screen-xl mx-auto gap-y-6'>
        <h2 className='text-5xl font-bold'>All-In-One Platform</h2>
        <p className='text-xl text-zinc-500'>
          Sunt libero tempore, repudiandae voluptatum inventore exercitationem excepturi nostrum qui enim modi magnam
          rem.
        </p>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {[...Array(8)].map((item, index) => {
            return (
              <article key={index} className='flex flex-row gap-x-2'>
                <CheckIcon className='flex-shrink-0 w-6 font-bold text-indigo-600 place-self-start' />
                <div>
                  <h4 className='text-lg font-bold'>Notifications</h4>
                  <p className='mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam fugiat quasi.
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
