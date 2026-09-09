import React from 'react';
import { TranslationData, Language } from '../types';
import { GraduationCap, BookOpen, CheckCircle2, Clock, MapPin, Building, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationSectionProps {
  t: TranslationData;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ t, lang }) => {
  return (
    <section id="education" className="py-24 relative border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#064e3b]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.education.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.education.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Salafia College for Islamic Studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-black/40 border border-white/10 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:border-amber-500/40"
          >
            {/* Index Tag */}
            <div className="absolute top-4 right-4 text-amber-100/20 text-xs font-mono tracking-tighter">
              01
            </div>

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/50" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/50" />

            {/* Status & Badge */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#064e3b]/30 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.education.salafiaStatus}</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80 px-2 py-0.5 bg-white/5 border border-white/10">
                Madrasah
              </span>
            </div>

            {/* Institution Title */}
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-light font-serif text-amber-100 leading-snug">
                  {t.education.salafiaTitle}
                </h3>
                <p className="text-sm font-arabic font-medium text-amber-400/90 mt-1">
                  كلية السلفية للدراسات الإسلامية
                </p>
              </div>
            </div>

            {/* Language Quotations */}
            <div className="space-y-3 bg-black/60 border border-white/5 p-4 my-5">
              <div className="text-right">
                <span className="text-[9px] text-white/40 font-mono block mb-1 uppercase tracking-widest">
                  البيان بالعربية
                </span>
                <p className="text-lg font-arabic font-bold text-amber-100 leading-relaxed">
                  "{t.education.salafiaArabic}"
                </p>
              </div>

              <div className="h-px bg-white/5 my-2" />

              <div className="text-right">
                <span className="text-[9px] text-white/40 font-mono block mb-1 uppercase tracking-widest">
                  اردو تحریر
                </span>
                <p className="text-lg font-urdu text-white/90 leading-loose">
                  "{t.education.salafiaUrdu}"
                </p>
              </div>
            </div>

            {/* Description & Focus Areas */}
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              {t.education.salafiaDesc}
            </p>

            {/* Disciplines studied tags */}
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">
                Core Islamic Curriculum:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Tafsir & Quranic Sciences', 'Hadith & Mustalah', 'Fiqh & Usul', 'Arabic Nahw & Sarf', 'Aqeedah & Tawheed'].map(
                  (disc) => (
                    <span
                      key={disc}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/80"
                    >
                      {disc}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* 2. IGNOU (Indira Gandhi National Open University) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative bg-black/40 border border-white/10 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:border-amber-500/40"
          >
            {/* Index Tag */}
            <div className="absolute top-4 right-4 text-amber-100/20 text-xs font-mono tracking-tighter">
              02
            </div>

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/50" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/50" />

            {/* Status & Badge */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#064e3b]/30 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.education.ignouStatus}</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80 px-2 py-0.5 bg-white/5 border border-white/10">
                University
              </span>
            </div>

            {/* Institution Title */}
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-light font-serif text-amber-100 leading-snug">
                  {t.education.ignouTitle}
                </h3>
                <p className="text-sm font-arabic font-medium text-amber-400/90 mt-1">
                  جامعة أنديرا غاندي الوطنية المفتوحة
                </p>
              </div>
            </div>

            {/* Language Quotations */}
            <div className="space-y-3 bg-black/60 border border-white/5 p-4 my-5">
              <div className="text-right">
                <span className="text-[9px] text-white/40 font-mono block mb-1 uppercase tracking-widest">
                  البيان بالعربية
                </span>
                <p className="text-lg font-arabic font-bold text-amber-100 leading-relaxed">
                  "{t.education.ignouArabic}"
                </p>
              </div>

              <div className="h-px bg-white/5 my-2" />

              <div className="text-right">
                <span className="text-[9px] text-white/40 font-mono block mb-1 uppercase tracking-widest">
                  اردو تحریر
                </span>
                <p className="text-lg font-urdu text-white/90 leading-loose">
                  "{t.education.ignouUrdu}"
                </p>
              </div>
            </div>

            {/* Description & Focus Areas */}
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              {t.education.ignouDesc}
            </p>

            {/* Academic Horizons tags */}
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">
                Academic Development & Methodology:
              </span>
              <div className="flex flex-wrap gap-2">
                {['1st Year Undergraduate', 'Structured Research', 'Critical Analysis', 'Higher Academia Foundation'].map(
                  (disc) => (
                    <span
                      key={disc}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/80"
                    >
                      {disc}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
