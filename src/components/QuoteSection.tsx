import React, { useState } from 'react';
import { TranslationData, Language } from '../types';
import { Sparkles, Copy, Check, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface QuoteSectionProps {
  t: TranslationData;
  lang: Language;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ t, lang }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `وَقُلْ رَبِّ زِدْنِي عِلْمًا\n"And say: My Lord, increase me in knowledge." [Surah Ta-Ha 20:114]\n"اور کہیے: اے میرے رب! میرے علم میں اضافہ فرما۔"`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="quote" className="py-24 relative border-b border-white/5 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/40 border border-white/10 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl"
        >
          {/* Corner highlights */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/40" />

          {/* Surah Reference Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-6">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.quote.surahInfo}</span>
          </div>

          {/* Large Arabic Sacred Quranic Calligraphy */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-arabic text-gold-gradient tracking-wider leading-relaxed my-4 drop-shadow-[0_4px_25px_rgba(217,119,6,0.3)]">
            " {t.quote.arabicVerse} "
          </h2>

          {/* English & Urdu Translations */}
          <div className="mt-8 space-y-4 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-serif text-amber-100 font-light tracking-wide">
              "{t.quote.english}"
            </p>

            <p className="text-xl sm:text-2xl font-urdu text-white/90 leading-loose">
              "{t.quote.urdu}"
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-amber-300 font-mono uppercase tracking-widest transition active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied with Translations</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Copy Sacred Verse</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
