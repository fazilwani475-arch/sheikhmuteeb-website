import React, { useState } from 'react';
import { TranslationData, Language } from '../types';
import { BookOpen, UserCheck, Sparkles, Feather, Bookmark, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  t: TranslationData;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'en' | 'ar' | 'ur'>('all');

  return (
    <section id="about" className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <UserCheck className="w-3 h-3 text-amber-500" />
            <span>{t.about.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.about.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        {/* View Filter Tabs for Language Explorations */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/40 border border-white/10 p-1 rounded-sm flex items-center gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-mono transition ${
                activeTab === 'all'
                  ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-600/40'
                  : 'text-white/50 hover:text-white/90'
              }`}
            >
              Trilingual View (الكل)
            </button>
            <button
              onClick={() => setActiveTab('ar')}
              className={`px-3 py-1.5 rounded-sm text-xs font-arabic font-bold transition ${
                activeTab === 'ar'
                  ? 'bg-amber-600/20 text-amber-400 border border-amber-600/40'
                  : 'text-white/50 hover:text-white/90'
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setActiveTab('ur')}
              className={`px-3 py-1.5 rounded-sm text-xs font-urdu font-bold transition ${
                activeTab === 'ur'
                  ? 'bg-amber-600/20 text-amber-400 border border-amber-600/40'
                  : 'text-white/50 hover:text-white/90'
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => setActiveTab('en')}
              className={`px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-mono transition ${
                activeTab === 'en'
                  ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-600/40'
                  : 'text-white/50 hover:text-white/90'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Biography Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Arabic Bio Card */}
          {(activeTab === 'all' || activeTab === 'ar') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-black/40 border border-white/10 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/30 transition ${
                activeTab === 'ar' ? 'lg:col-span-3 max-w-3xl mx-auto' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#064e3b]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">01</div>
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 pl-6">
                  <span className="text-[10px] font-mono text-amber-400/90 tracking-widest uppercase">
                    السيرة بالعربية
                  </span>
                  <Bookmark className="w-4 h-4 text-amber-500/70" />
                </div>
                <p className="text-xl md:text-2xl font-arabic text-amber-100 leading-relaxed text-right dir-rtl">
                  "{t.about.arabicBio}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                <span className="font-arabic text-amber-200/80">طالب العلم الشرعي</span>
                <span className="font-mono text-amber-500/80 uppercase text-[10px]">العربية الأصيلة</span>
              </div>
            </motion.div>
          )}

          {/* Urdu Bio Card */}
          {(activeTab === 'all' || activeTab === 'ur') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`bg-black/40 border border-white/10 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/30 transition ${
                activeTab === 'ur' ? 'lg:col-span-3 max-w-3xl mx-auto' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">02</div>
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 pl-6">
                  <span className="text-[10px] font-mono text-amber-400/90 tracking-widest uppercase">
                    اردو تعارف
                  </span>
                  <Feather className="w-4 h-4 text-amber-500/70" />
                </div>
                <p className="text-xl md:text-2xl font-urdu text-white/90 leading-loose text-right dir-rtl">
                  "{t.about.urduBio}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                <span className="font-urdu text-amber-200/80">طلبِ علم کا پرخلوص جذبہ</span>
                <span className="font-mono text-amber-500/80 uppercase text-[10px]">اردو زبان</span>
              </div>
            </motion.div>
          )}

          {/* English Bio Card */}
          {(activeTab === 'all' || activeTab === 'en') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`bg-black/40 border border-white/10 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/30 transition ${
                activeTab === 'en' ? 'lg:col-span-3 max-w-3xl mx-auto' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#064e3b]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">03</div>
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 pl-6">
                  <span className="text-[10px] font-mono text-amber-400/90 tracking-widest uppercase">
                    English Biography
                  </span>
                  <BookOpen className="w-4 h-4 text-amber-500/70" />
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                  "{t.about.englishBio}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/50 font-mono">
                <span className="text-amber-200/80">Student of Islamic Sciences</span>
                <span className="text-amber-500/80 uppercase">English Record</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Scholarly Method / Academic Ethos Highlight Banner */}
        <div className="mt-12 bg-black/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="p-3 bg-[#064e3b]/30 text-amber-400 border border-amber-500/30 shrink-0">
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-light font-serif text-amber-100">
              {t.about.studentFocusTitle}
            </h3>
            <p className="text-sm text-white/70 mt-1 leading-relaxed">
              {t.about.studentFocusDesc}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-amber-400">
              Salafia College • IGNOU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
