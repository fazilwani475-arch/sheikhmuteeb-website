import React from 'react';
import { TranslationData, Language } from '../types';
import { PortraitCard } from './PortraitCard';
import { ThreeIslamicGeometry } from './ThreeIslamicGeometry';
import { GraduationCap, Compass, BookOpen, Send, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  t: TranslationData;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, lang }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* 3D WebGL Islamic Geometry floating in background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30 md:opacity-40">
        <ThreeIslamicGeometry className="w-full h-full max-w-4xl max-h-[750px]" />
      </div>

      {/* Radial soft emerald ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#064e3b]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Identity, Titles, Calligraphy, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`lg:col-span-7 flex flex-col justify-center ${
              lang === 'ar' || lang === 'ur' ? 'text-right' : 'text-left'
            }`}
          >
            {/* Scholar Student Badge in Immersive UI style */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-amber-200 text-xs w-fit mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              <span className="font-arabic font-semibold text-xs tracking-wider">
                {t.hero.scholarRole}
              </span>
            </div>

            {/* Main Arabic Calligraphy Master Title */}
            <div className="relative mb-4">
              <motion.h1
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-arabic text-gold-gradient tracking-wide leading-tight drop-shadow-[0_4px_30px_rgba(217,119,6,0.3)]"
              >
                الشيخ مطيب بن جاويد
              </motion.h1>

              {/* Latin & Urdu secondary transliterated titles */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wider text-amber-100/90 font-medium">
                  Sheikh Muteeb Bin Javed
                </h2>
                <span className="text-amber-500/60 text-lg hidden sm:inline">•</span>
                <span className="text-lg sm:text-xl font-urdu text-amber-100/80">
                  شیخ مطیب بن جاوید
                </span>
              </div>
            </div>

            {/* Subtitles (English & Urdu) */}
            <div className="space-y-2 mt-3 mb-8">
              <p className="text-base sm:text-lg font-medium text-amber-400/90 tracking-wide flex items-center gap-2 font-serif">
                <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
                <span>{t.hero.englishSubtitle}</span>
              </p>

              <p className="text-base sm:text-lg font-urdu text-white/80 leading-relaxed">
                "{t.hero.urduSubtitle}"
              </p>
            </div>

            {/* Current Academic Status Badges - Immersive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 bg-black/40 border border-white/10 backdrop-blur-xl flex items-center gap-3 relative overflow-hidden group hover:border-amber-500/30 transition">
                <div className="p-2 bg-[#064e3b]/30 border border-amber-500/20 text-amber-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest font-mono">
                    Current Study
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {t.hero.statusBadge1}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/10 backdrop-blur-xl flex items-center gap-3 relative overflow-hidden group hover:border-amber-500/30 transition">
                <div className="p-2 bg-[#064e3b]/30 border border-amber-500/20 text-amber-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest font-mono">
                    University Degree
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {t.hero.statusBadge2}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs in Immersive UI Style */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                id="hero-btn-journey"
                href="#journey"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600/20 border border-amber-500/50 text-amber-300 font-serif text-xs uppercase tracking-widest hover:bg-amber-600/30 shadow-[0_0_15px_rgba(217,119,6,0.15)] transition transform active:scale-95"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>{t.hero.btnJourney}</span>
              </a>

              <a
                id="hero-btn-education"
                href="#education"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 font-serif text-xs uppercase tracking-widest transition transform active:scale-95"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{t.hero.btnEducation}</span>
              </a>

              <a
                id="hero-btn-vision"
                href="#vision"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 font-serif text-xs uppercase tracking-widest transition transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.btnVision}</span>
              </a>

              <a
                id="hero-btn-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#064e3b]/30 hover:bg-[#064e3b]/50 border border-emerald-500/30 text-emerald-200 font-serif text-xs uppercase tracking-widest transition transform active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.btnContact}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column (5 cols) - Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PortraitCard lang={lang} />
          </motion.div>
        </div>
      </div>

      {/* Decorative subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
