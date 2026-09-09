import React, { useState } from 'react';
import { TranslationData, Language } from '../types';
import { CheckCircle2, Clock, Sparkles, GraduationCap, Compass, Landmark, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface JourneyTimelineProps {
  t: TranslationData;
  lang: Language;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ t, lang }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

  const getStatusBadge = (status: 'completed' | 'current' | 'future') => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-medium font-mono">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Completed Foundation</span>
          </span>
        );
      case 'current':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0a3827] border border-[#d4af37]/60 text-[#fce8a6] text-[11px] font-medium font-mono animate-pulse">
            <Clock className="w-3 h-3 text-[#d4af37]" />
            <span>Currently Active</span>
          </span>
        );
      case 'future':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#122b22] border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-medium font-mono">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Future Aspiration</span>
          </span>
        );
    }
  };

  return (
    <section id="journey" className="py-24 relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.journey.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.journey.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 sm:hidden" />

          <div className="space-y-12">
            {t.journey.milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = selectedMilestone === m.id;

              return (
                <div
                  key={m.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition duration-300 ${
                        m.status === 'current'
                          ? 'bg-[#064e3b] border-amber-500 text-amber-300 shadow-[0_0_12px_rgba(217,119,6,0.6)]'
                          : m.status === 'completed'
                          ? 'bg-black border-emerald-500/60 text-emerald-400'
                          : 'bg-black border-white/20 text-white/50'
                      }`}
                    >
                      <span className="text-[10px] font-bold font-mono">0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      onClick={() => setSelectedMilestone(isSelected ? null : m.id)}
                      className={`cursor-pointer p-6 border transition-all duration-300 backdrop-blur-xl ${
                        m.status === 'current'
                          ? 'bg-black/50 border-amber-500/50 shadow-[0_0_25px_rgba(217,119,6,0.12)]'
                          : 'bg-black/40 border-white/10 hover:border-amber-500/30 hover:bg-black/60'
                      }`}
                    >
                      {/* Top Header: Period & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        {getStatusBadge(m.status)}
                        <span className="text-[10px] font-mono text-white/50">
                          {m.period}
                        </span>
                      </div>

                      {/* Main Title in Current Display Mode */}
                      <h3 className="text-base sm:text-lg font-light font-serif text-amber-100 mb-1">
                        {lang === 'ar' ? m.titleAr : lang === 'ur' ? m.titleUr : m.title}
                      </h3>

                      {/* Arabic / Urdu Sub-heading */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-arabic font-medium text-amber-400/90">
                          {m.titleAr}
                        </span>
                        <span className="text-xs text-white/20">•</span>
                        <span className="text-xs font-urdu text-white/70">
                          {m.titleUr}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-3">
                        {lang === 'ar' ? m.descAr : lang === 'ur' ? m.descUr : m.desc}
                      </p>

                      {/* Detailed Trilingual View when clicked */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-white/10 space-y-2 bg-black/60 p-3"
                        >
                          <div className="text-right">
                            <span className="text-[9px] text-amber-400 font-mono block uppercase">عربي</span>
                            <p className="text-xs font-arabic text-amber-100">{m.descAr}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] text-amber-400 font-mono block uppercase">اردو</span>
                            <p className="text-xs font-urdu text-white/90">{m.descUr}</p>
                          </div>
                        </motion.div>
                      )}

                      <div className="mt-3 flex items-center justify-between text-[10px] text-white/40 font-mono">
                        <span className="uppercase tracking-wider">Milestone 0{idx + 1}</span>
                        <span className="text-amber-400/80 hover:text-amber-300">
                          {isSelected ? 'Collapse' : 'Tap for trilingual detail'}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
