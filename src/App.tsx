import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { DockNav } from '@/components/DockNav';

function App() {
  return (
    <div className="font-sans antialiased text-foreground bg-background min-h-screen">
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <DockNav />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
