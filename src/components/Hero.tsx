import { ArrowDown, Download, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Additional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="fade-in animate">
          <h1 className="heading-xl mb-6 text-white">
            Hi, I'm <span className="text-secondary-light">Akshatha Sakragowda</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light text-white">
            Passionate AI/ML Student & Software Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Building innovative solutions that merge technology with real-world impact.
            200+ DSA problems solved, HackerRank Gold Badge holder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-hero text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
            <button
              onClick={scrollToAbout}
              className="btn-outline-hero text-white border-white hover:bg-white hover:text-primary"
            >
              Learn More About Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Akshatha015"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            <a
              href="mailto:akshathasakragowda@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-white/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;