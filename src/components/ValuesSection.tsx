import React from 'react';
import { TranslationData, Language } from '../types';
import { Sparkles, BookOpen, Heart, Shield, Award, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface ValuesSectionProps {
  t: TranslationData;
  lang: Language;
}

const valueIcons = [BookOpen, Heart, Shield, Award, Flame];

export const ValuesSection: React.FC<ValuesSectionProps> = ({ t, lang }) => {
  return (
    <section id="values" className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.values.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.values.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        {/* 5 Core Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.values.items.map((val, idx) => {
            const IconComp = valueIcons[idx % valueIcons.length];
            return (
              <motion.div
                key={val.arabic}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative bg-black/40 border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Index tag */}
                <div className="absolute top-4 left-4 text-amber-100/20 text-xs font-mono tracking-tighter">
                  0{idx + 1}
                </div>

                <div>
                  {/* Top Icon & Arabic Term */}
                  <div className="flex items-center justify-between mb-5 pl-6">
                    <div className="p-2.5 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-bold font-arabic text-gold-gradient tracking-wide">
                      {val.arabic}
                    </span>
                  </div>

                  {/* Bilingual Headings */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                    <h3 className="text-base font-light font-serif text-amber-100 group-hover:text-amber-300 transition">
                      {val.english}
                    </h3>
                    <span className="text-base font-urdu text-amber-400 font-semibold">
                      {val.urdu}
                    </span>
                  </div>

                  {/* Urdu Explanation */}
                  <p className="text-base font-urdu text-white/90 leading-relaxed text-right dir-rtl mb-3">
                    "{val.descUr}"
                  </p>

                  {/* English Explanation */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                    {val.descEn}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span className="uppercase tracking-widest">Pillar {idx + 1} / 5</span>
                  <span className="text-amber-500 font-arabic">خلق أصيل</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
