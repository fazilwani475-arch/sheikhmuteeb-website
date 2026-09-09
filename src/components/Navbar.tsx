import React, { useState, useEffect } from 'react';
import { Language, TranslationData } from '../types';
import { Globe, Menu, X, Volume2, VolumeX, Sparkles, BookOpen, GraduationCap, Compass, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [oscNodes, setOscNodes] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Serene Ambient Contemplation Tone (pure harmonious meditative chord using Web Audio)
  const toggleAudio = () => {
    if (audioPlaying) {
      oscNodes.forEach((node) => {
        try {
          node.stop();
          node.disconnect();
        } catch {}
      });
      setOscNodes([]);
      setAudioPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Peaceful D-minor meditative triad (D3, A3, D4, F4) with soft low-pass filter
        const freqs = [146.83, 220.0, 293.66, 349.23];
        const newNodes: any[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle harmonic breathing
          gain.gain.setValueAtTime(0.03 / (idx + 1), ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);

          osc.start();
          newNodes.push(osc);
        });

        setAudioCtx(ctx);
        setOscNodes(newNodes);
        setAudioPlaying(true);
      } catch (err) {
        console.error('Audio initialization:', err);
      }
    }
  };

  const navLinks = [
    { href: '#about', label: t.nav.about, icon: BookOpen },
    { href: '#education', label: t.nav.education, icon: GraduationCap },
    { href: '#vision', label: t.nav.vision, icon: Compass },
    { href: '#values', label: t.nav.values, icon: Sparkles },
    { href: '#journey', label: t.nav.journey, icon: GraduationCap },
    { href: '#library', label: t.nav.library, icon: BookOpen },
    { href: '#contact', label: t.nav.contact, icon: Send },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3'
          : 'bg-black/20 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram in Immersive UI Diamond Style */}
          <a
            href="#"
            id="brand-monogram"
            className="flex items-center gap-4 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 border border-amber-600/50 flex items-center justify-center rotate-45 bg-[#064e3b]/20 shadow-[0_0_15px_rgba(217,119,6,0.15)] group-hover:border-amber-500 group-hover:bg-[#064e3b]/40 transition duration-300 shrink-0">
              <span className="-rotate-45 font-bold text-amber-500 font-arabic text-lg">م</span>
            </div>
            <div>
              <span className="block text-sm sm:text-base font-light font-arabic text-amber-100 leading-tight tracking-wide">
                الشيخ مطيب بن جاويد
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-white/50 font-serif">
                Scholar Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-widest text-amber-100/70 font-serif">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-amber-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Audio Toggle + Language Switcher + Quick Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Meditative Ambience Sound Button */}
            <button
              id="btn-peaceful-audio"
              onClick={toggleAudio}
              className={`px-2.5 py-1.5 rounded-sm border transition flex items-center gap-1.5 text-[10px] uppercase tracking-widest ${
                audioPlaying
                  ? 'bg-[#064e3b]/40 border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(217,119,6,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-amber-300 hover:border-amber-600/30'
              }`}
              title={audioPlaying ? 'Mute Peaceful Ambience' : 'Play Meditative Ambient Tone'}
            >
              {audioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="hidden sm:inline font-mono">Ambience</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-white/40" />
                  <span className="hidden sm:inline font-mono">Sound</span>
                </>
              )}
            </button>

            {/* Immersive Language Switcher */}
            <div
              id="lang-switcher"
              className="flex items-center bg-black/40 border border-white/10 rounded-sm p-0.5"
            >
              <button
                id="btn-lang-en"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-widest transition rounded-sm ${
                  lang === 'en'
                    ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-600/40'
                    : 'text-amber-100/60 hover:text-amber-400'
                }`}
              >
                EN
              </button>
              <button
                id="btn-lang-ar"
                onClick={() => setLang('ar')}
                className={`px-2.5 py-1 text-[11px] font-arabic font-bold transition rounded-sm ${
                  lang === 'ar'
                    ? 'bg-amber-600/20 text-amber-400 border border-amber-600/40'
                    : 'text-amber-100/60 hover:text-amber-400'
                }`}
              >
                العربية
              </button>
              <button
                id="btn-lang-ur"
                onClick={() => setLang('ur')}
                className={`px-2.5 py-1 text-[11px] font-urdu font-bold transition rounded-sm ${
                  lang === 'ur'
                    ? 'bg-amber-600/20 text-amber-400 border border-amber-600/40'
                    : 'text-amber-100/60 hover:text-amber-400'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Direct Contact Button */}
            <a
              id="btn-nav-contact"
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-amber-600/10 border border-amber-600/40 text-amber-300 font-serif text-[10px] uppercase tracking-widest hover:bg-amber-600/20 transition shadow-sm"
            >
              <span>{t.nav.contact}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 lg:hidden rounded-sm bg-black/40 border border-white/10 text-amber-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 border-b border-white/10 backdrop-blur-2xl px-4 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-sm text-xs uppercase tracking-widest text-amber-100/80 hover:bg-[#064e3b]/30 hover:text-amber-400 transition font-serif"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-amber-500" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40 uppercase tracking-widest font-mono">
                <span>Scholar Portfolio</span>
                <span className="text-amber-500 font-arabic text-sm">
                  الشيخ مطيب بن جاويد
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
