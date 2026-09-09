import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { ValuesSection } from './components/ValuesSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { DigitalLibrarySection } from './components/DigitalLibrarySection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  // Handle RTL & LTR changes and font adjustment on root HTML
  useEffect(() => {
    const isRtl = lang === 'ar' || lang === 'ur';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if (lang === 'ar') {
      document.body.className = 'bg-[#020617] text-[#fdfbf7] font-arabic antialiased selection:bg-amber-600/30 selection:text-amber-200 overflow-x-hidden';
    } else if (lang === 'ur') {
      document.body.className = 'bg-[#020617] text-[#fdfbf7] font-urdu antialiased selection:bg-amber-600/30 selection:text-amber-200 overflow-x-hidden';
    } else {
      document.body.className = 'bg-[#020617] text-[#fdfbf7] font-sans antialiased selection:bg-amber-600/30 selection:text-amber-200 overflow-x-hidden';
    }
  }, [lang]);

  const currentTranslation = translations[lang];

  return (
    <div className="min-h-screen bg-[#020617] text-[#fdfbf7] flex flex-col justify-between relative overflow-hidden selection:bg-amber-600/30 selection:text-amber-200">
      {/* Immersive UI Star Lattice Background and Ambient Gradients */}
      <div className="fixed inset-0 bg-immersive-lattice pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 bg-gradient-to-tr from-[#064e3b]/30 via-transparent to-[#020617] pointer-events-none z-0" />
      
      {/* Floating Ambient Glowing Spheres */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#064e3b]/20 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-amber-600/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Top Fixed Header with Trilingual Switcher & Ambience Audio */}
      <div className="relative z-40">
        <Navbar lang={lang} setLang={setLang} t={currentTranslation} />
      </div>

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <HeroSection t={currentTranslation} lang={lang} />

        {/* 2. About Me Section */}
        <AboutSection t={currentTranslation} lang={lang} />

        {/* 3. Academic Education (Salafia & IGNOU 1st Year) */}
        <EducationSection t={currentTranslation} lang={lang} />

        {/* 4. Future Vision ("رَبِّ زِدْنِي عِلْمًا" — Madinah & PhD Research) */}
        <FutureVisionSection t={currentTranslation} lang={lang} />

        {/* 5. Guiding Islamic Values (العلم، الإخلاص، الأمانة، التواضع، الاستمرار) */}
        <ValuesSection t={currentTranslation} lang={lang} />

        {/* 6. My Academic Journey (Interactive 6-Step Timeline) */}
        <JourneyTimeline t={currentTranslation} lang={lang} />

        {/* 7. Classical Islamic Digital Library Shelf (Reflecting photo backdrop) */}
        <DigitalLibrarySection t={currentTranslation} lang={lang} />

        {/* 8. Sacred Quranic Quote & Contemplation ("وَقُلْ رَبِّ زِدْنِي عِلْمًا") */}
        <QuoteSection t={currentTranslation} lang={lang} />

        {/* 9. Official Academic Contact & Inquiries */}
        <ContactSection t={currentTranslation} lang={lang} />
      </main>

      {/* 10. Footer */}
      <div className="relative z-20">
        <Footer t={currentTranslation} lang={lang} />
      </div>
    </div>
  );
}
