import React, { useState } from 'react';
import { TranslationData, Language, LibraryBook } from '../types';
import { classicalBooks } from '../data/translations';
import { BookOpen, Bookmark, Search, Sparkles, Filter, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DigitalLibrarySectionProps {
  t: TranslationData;
  lang: Language;
}

export const DigitalLibrarySection: React.FC<DigitalLibrarySectionProps> = ({ t, lang }) => {
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null);
  const [filterTag, setFilterTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tags = ['all', 'Hadith', 'Fiqh Hadith', 'Aqeedah', 'Arabic', 'Usul al-Fiqh'];

  const filteredBooks = classicalBooks.filter((book) => {
    const matchesTag = filterTag === 'all' || book.tags.includes(filterTag);
    const matchesSearch =
      book.titleAr.includes(searchQuery) ||
      book.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.includes(searchQuery) ||
      book.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="library" className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.library.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.library.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-black/40 p-4 border border-white/10 backdrop-blur-xl">
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-amber-500/70 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search classical titles, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-black/60 border border-white/10 text-xs text-amber-100 placeholder-white/30 focus:outline-none focus:border-amber-500/60 font-mono"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition capitalize ${
                  filterTag === tag
                    ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-600/40'
                    : 'bg-white/5 text-white/50 hover:text-white/90 border border-white/5'
                }`}
              >
                {tag === 'all' ? 'All Disciplines' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bookshelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedBook(book)}
              className="group cursor-pointer bg-black/40 border border-white/10 p-6 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Discipline Badge & Bookmark */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-amber-400">
                    {book.level}
                  </span>
                  <Bookmark className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition" />
                </div>

                {/* Arabic Main Book Title */}
                <h3 className="text-xl font-bold font-arabic text-amber-100 tracking-wide text-right dir-rtl mb-1">
                  {book.titleAr}
                </h3>

                {/* English Transliteration */}
                <h4 className="text-sm font-serif font-medium text-white/90 mb-2">
                  {book.titleEn}
                </h4>

                {/* Author */}
                <p className="text-xs text-amber-400/80 font-arabic text-right dir-rtl mb-4">
                  المؤلف: {book.author}
                </p>

                {/* Summary based on current language */}
                <p className="text-xs text-white/60 leading-relaxed line-clamp-3 font-sans">
                  {lang === 'ar' ? book.summaryAr : lang === 'ur' ? book.summaryUr : book.summaryEn}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">{book.discipline}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[10px] font-mono uppercase">
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Book Detailed Overview */}
        <AnimatePresence>
          {selectedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                className="relative max-w-2xl w-full bg-[#020617] border border-amber-500/40 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/80 hover:bg-white/10 transition"
                >
                  ✕ Close
                </button>

                <div className="mb-4">
                  <span className="px-2.5 py-0.5 bg-amber-600/20 border border-amber-600/40 text-[10px] font-mono uppercase tracking-widest text-amber-400">
                    {selectedBook.discipline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-arabic text-gold-gradient tracking-wide mb-1 text-right dir-rtl">
                  {selectedBook.titleAr}
                </h3>
                <h4 className="text-lg font-serif text-amber-100 font-medium mb-2">
                  {selectedBook.titleEn}
                </h4>

                <div className="p-3 bg-black/60 border border-white/5 my-4 text-xs text-amber-400 font-mono">
                  Author / المصنف: <span className="text-white/90 font-arabic text-sm">{selectedBook.author}</span>
                </div>

                {/* Trilingual Explanations */}
                <div className="space-y-3 my-4">
                  <div className="p-3 bg-black/40 border border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block mb-1 text-right">عربي</span>
                    <p className="text-sm font-arabic text-amber-100 text-right dir-rtl leading-relaxed">
                      {selectedBook.summaryAr}
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 border border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block mb-1 text-right">اردو</span>
                    <p className="text-sm font-urdu text-white/90 text-right dir-rtl leading-loose">
                      {selectedBook.summaryUr}
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 border border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 block mb-1">English Note</span>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {selectedBook.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[10px] text-white/40 font-mono">
                  <span className="uppercase tracking-widest">Student Library Reference</span>
                  <span className="text-amber-500">Salafia College Reference</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
