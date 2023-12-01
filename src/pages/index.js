import Header from '@/Components/Header';
import About from '@/Components/About';
import Works from '@/Components/Works';
import Contact from '@/Components/Contact';

export default function Home() {
  return (
    <div className='flex flex-col items-center scroll-smooth'>
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
