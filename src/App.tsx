import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonials";
import { Support } from "./components/Support";
import { Platforms } from "./components/Platforms";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className='w-full min-h-screen relative bg-zinc-50 [&>*:nth-child(even)]:bg-zinc-200 [&>section]:scroll-mt-[52px] md:[&>section]:scroll-mt-[66px]'>
      <Navbar />
      <Hero />
      <Testimonial />
      <Support />
      <Platforms />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
