import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-6xl md:text-8xl font-bold tracking-wider hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('people')}
            className="text-6xl md:text-8xl font-bold tracking-wider hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            PEOPLE
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-6xl md:text-8xl font-bold tracking-wider hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* HOME Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-24 py-20 lg:pt-[150px]">
        <div className="w-full max-w-7xl mx-auto lg:ml-[calc(50%-672px-60px)]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            {/* Left Content - Title (right justified on desktop) */}
            <div className="lg:text-right">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white"
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  lineHeight: '0.9'
                }}
              >
                <div>HUMANS</div>
                <div>IN THE</div>
                <div>LOOP</div>
              </h1>
            </div>

            {/* Right Image - Desktop only */}
            <div className="hidden lg:block">
              <img
                src="/WhatsApp Image 2025-11-10 at 15.57.29.jpeg"
                alt="Humans in the Loop"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Image for mobile - shown below title */}
          <div className="lg:hidden mt-12">
            <img
              src="/WhatsApp Image 2025-11-10 at 15.57.29.jpeg"
              alt="Humans in the Loop"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          {/* Subtitles and Content */}
          <div className="mt-6 lg:mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Subtitles - Right justified */}
            <div className="text-right" style={{ lineHeight: '1.8' }}>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Human Insight
              </h2>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Smart Technology
              </h2>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Real Results
              </h2>
            </div>

            {/* Text content */}
            <div className="space-y-8">
              <h3
                className="text-xl md:text-2xl font-medium leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Authentic, narrative marketing driven by{' '}
                <button
                  onClick={() => scrollToSection('people')}
                  className="underline hover:text-gray-400 transition-colors"
                >
                  people
                </button>
                , supported by technology
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed text-gray-300"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                We are senior-level marketing and content experts here to help you create real
                connections with your real human audience.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed text-gray-300"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Our decades of experience telling stories saves you time and lost opportunity in a fast-paced world. And whether we use AI or old-fashioned computers, we always put the human at the heart of everything we do.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Ready for something more human?{' '}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="underline hover:text-gray-400 transition-colors"
                >
                  Let's chat
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE Section */}
      <section id="people" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white text-black">
        <div className="max-w-5xl w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            PEOPLE
          </h2>

          <div className="space-y-16">
            {/* David Zemke */}
            <div className="border-b border-gray-300 pb-16 flex flex-col md:flex-row gap-8">
              <img
                src="/DZ-Headshot01.png"
                alt="David Zemke"
                className="w-48 h-48 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3
                  className="text-2xl md:text-3xl font-medium mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  David Zemke
                </h3>
                <p
                  className="text-lg mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Brand strategy / Marketing
                </p>
                <p
                  className="text-lg mb-4 text-gray-600"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Specialties: brand strategy, GTM planning, creative production, video production, events, business development
                </p>
                <p
                  className="text-lg text-gray-600"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Past work @ Electronic Arts, Capcom, Sega, LucasArts, Konami, Glu Mobile, Rovio
                </p>
              </div>
            </div>

            {/* Marlowe Fawcett */}
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src="/MF-Headshot01.png"
                alt="Marlowe Fawcett"
                className="w-48 h-48 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3
                  className="text-2xl md:text-3xl font-medium mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Marlowe Fawcett
                </h3>
                <p
                  className="text-lg mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Creative Director / Filmmaker
                </p>
                <p
                  className="text-lg mb-4 text-gray-600"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Specialties: strategy, storytelling/scripting, film/video production, editing
                </p>
                <p
                  className="text-lg text-gray-600"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                >
                  Past clients: Bloomberg, Verizon, Visa, The Water Research Foundation, US
                  Paralympics, Pangea Organics, Left Hand Brewing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            CONTACT
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
          >
            Let's create something human together.
          </p>
          <a
            href="mailto:info@humansintheloop.work"
            className="text-xl md:text-2xl text-blue-400 hover:text-blue-300 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
          >
            info@humansintheloop.work
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
