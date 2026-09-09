import React from 'react';
import { TranslationData, Language } from '../types';
import { Sparkles, Compass, GraduationCap, BookOpen, Landmark, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface FutureVisionSectionProps {
  t: TranslationData;
  lang: Language;
}

export const FutureVisionSection: React.FC<FutureVisionSectionProps> = ({ t, lang }) => {
  return (
    <section
      id="vision"
      className="py-24 relative border-b border-white/5 overflow-hidden"
    >
      {/* Background Architectural Arch and Golden Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sacred Quranic Calligraphy Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.futureVision.aspirationTag}</span>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-3"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-arabic text-gold-gradient tracking-wide leading-relaxed drop-shadow-[0_4px_30px_rgba(217,119,6,0.3)]">
              " {t.futureVision.quranicHeading} "
            </h2>
            <p className="text-xs font-serif text-amber-400/80 tracking-[0.25em] uppercase mt-2">
              (O My Lord, Increase Me In Knowledge)
            </p>
          </motion.div>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans mt-3">
            {t.futureVision.sectionSubtitle}
          </p>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-5" />
        </div>

        {/* Central Master Card of Future Aspiration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-black/40 border border-white/10 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Top Explicit Aspiration Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rotate-45 shadow-[0_0_8px_rgba(217,119,6,0.8)]" />
              <span className="text-[11px] font-serif uppercase tracking-widest text-amber-200">
                Academic Horizon & Solemn Aspirations
              </span>
            </div>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-amber-400 font-mono uppercase tracking-widest">
              In Sha Allah • بإذن الله تعالى
            </span>
          </div>

          {/* Trilingual Vision Statements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Arabic Vision */}
            <div className="bg-black/60 border border-white/5 p-6 relative flex flex-col justify-between group hover:border-amber-500/30 transition">
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">01</div>
              <div>
                <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block mb-3 text-right">
                  الطموح الشرعي والأكاديمي (عربي)
                </span>
                <p className="text-xl font-arabic font-bold text-amber-100 leading-relaxed text-right dir-rtl">
                  "{t.futureVision.arabicText}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-right text-xs text-white/50 font-arabic">
                الجامعة الإسلامية بالمدينة المنورة • الدكتوراه
              </div>
            </div>

            {/* Urdu Vision */}
            <div className="bg-black/60 border border-white/5 p-6 relative flex flex-col justify-between group hover:border-amber-500/30 transition">
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">02</div>
              <div>
                <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block mb-3 text-right">
                  مستقبل کا علمی خواب (اردو)
                </span>
                <p className="text-xl font-urdu text-white/90 leading-loose text-right dir-rtl">
                  "{t.futureVision.urduText}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-right text-xs text-white/50 font-urdu">
                مدینہ یونیورسٹی • تخصص اور پی ایچ ڈی
              </div>
            </div>

            {/* English Vision */}
            <div className="bg-black/60 border border-white/5 p-6 relative flex flex-col justify-between group hover:border-amber-500/30 transition">
              <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">03</div>
              <div>
                <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest block mb-3">
                  Academic Aspiration (English)
                </span>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                  "{t.futureVision.englishText}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-white/50 font-mono">
                Islamic University of Madinah • PhD Ambition
              </div>
            </div>
          </div>

          {/* Two Structured Pillars of the Future Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Pillar 1: Madinah Goal */}
            <div className="p-5 bg-white/5 border border-white/10 flex items-start gap-4 hover:border-amber-500/30 transition">
              <div className="p-2.5 bg-[#064e3b]/30 text-amber-400 shrink-0 border border-amber-500/30">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  Target Destination (Aspired)
                </span>
                <h4 className="text-base font-light font-serif text-amber-100 mt-0.5">
                  {t.futureVision.madinahGoalTitle}
                </h4>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                  Pursuing rigorous higher degree studies under world-renowned Islamic scholars, specializing in Hadith, Fiqh, or Usul.
                </p>
              </div>
            </div>

            {/* Pillar 2: PhD & Research */}
            <div className="p-5 bg-white/5 border border-white/10 flex items-start gap-4 hover:border-amber-500/30 transition">
              <div className="p-2.5 bg-[#064e3b]/30 text-amber-400 shrink-0 border border-amber-500/30">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  Long-Term Academic Horizon
                </span>
                <h4 className="text-base font-light font-serif text-amber-100 mt-0.5">
                  {t.futureVision.phdGoalTitle}
                </h4>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                  Conducting verified academic research, authored treatises, lecturing, and continuous community instruction for the Ummah.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
