import React from 'react';
import { TranslationData, Language } from '../types';
import { ArrowUp, BookOpen, Heart, Sparkles, Mail, Phone, Globe } from 'lucide-react';

interface FooterProps {
  t: TranslationData;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          {/* Col 1: Scholar Master Identity */}
          <div className="md:col-span-6 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-arabic text-gold-gradient tracking-wide mb-1">
              الشيخ مطيب بن جاويد
            </h3>
            <h4 className="text-lg font-serif text-amber-100 font-light tracking-wider">
              Sheikh Muteeb Bin Javed
            </h4>

            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-amber-300 text-[10px] font-mono uppercase tracking-widest">
              <BookOpen className="w-3 h-3 text-amber-500" />
              <span className="font-arabic font-bold text-xs">طالبُ العلم</span>
              <span className="text-white/40">• Student of Islamic Knowledge</span>
            </div>

            <p className="mt-4 text-xs text-white/50 max-w-md italic font-serif">
              "{t.footer.motto}"
            </p>
          </div>

          {/* Col 2: Direct Contact Quick Reference */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 text-xs text-white/60 font-mono">
            <div className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
              Verified Academic Contacts
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-500/70" />
              <span>shaykhmuteeb88@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-500/70" />
              <span>+91 6006720643</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Globe className="w-3.5 h-3.5 text-amber-500/70" />
              <span>@shaykhmuteeb</span>
            </div>
          </div>

          {/* Col 3: Back to Top */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/5 border border-white/10 text-amber-300 hover:bg-white/10 hover:border-amber-500/40 shadow-xl transition-all group flex flex-col items-center gap-1 text-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-amber-500 group-hover:-translate-y-1 transition-transform" />
              <span className="font-mono text-[9px] uppercase tracking-widest">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Honorific Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4 text-center sm:text-left font-mono">
          <div>
            © {new Date().getFullYear()} Sheikh Muteeb Bin Javed (الشيخ مطيب بن جاويد). {t.footer.rights}
          </div>
          <div className="flex items-center gap-2 text-amber-400/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Salafia College • IGNOU • Islamic Studies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
