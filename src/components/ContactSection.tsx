import React, { useState } from 'react';
import { TranslationData, Language } from '../types';
import { Mail, Phone, Globe, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare, Download } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  t: TranslationData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const emailValue = 'shaykhmuteeb88@gmail.com';
  const phoneValue = '+91 6006720643';
  const rawPhone = '6006720643';
  const handleValue = '@shaykhmuteeb';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger subtle golden celebration confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#10b981', '#fce8a6', '#059669'],
    });

    setSubmitted(true);
    // Prepare mailto link as direct realistic action
    const mailtoUrl = `mailto:${emailValue}?subject=${encodeURIComponent(
      formData.subject || `Academic Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <section id="contact" className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-mono uppercase tracking-[0.25em] mb-3">
            <Send className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.contact.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-amber-100 tracking-wide">
            {t.contact.sectionSubtitle}
          </h2>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols) - Official Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-xl flex items-center justify-between group hover:border-amber-500/30 transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${emailValue}`}
                    className="text-xs sm:text-sm font-mono text-amber-100 hover:text-amber-300 transition"
                  >
                    {emailValue}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(emailValue, 'email')}
                className="p-2 bg-white/5 border border-white/10 text-amber-400 hover:bg-white/10 transition text-xs"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-xl flex items-center justify-between group hover:border-amber-500/30 transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">
                    {t.contact.phoneLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${rawPhone}`}
                      className="text-xs sm:text-sm font-mono text-amber-100 hover:text-amber-300 transition"
                    >
                      {phoneValue}
                    </a>
                    <a
                      href={`https://wa.me/${rawPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 bg-[#064e3b]/40 text-emerald-300 text-[9px] font-mono border border-emerald-500/30 hover:bg-[#064e3b]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(phoneValue, 'phone')}
                className="p-2 bg-white/5 border border-white/10 text-amber-400 hover:bg-white/10 transition text-xs"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Digital Handle Card */}
            <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-xl flex items-center justify-between group hover:border-amber-500/30 transition">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#064e3b]/20 text-amber-400 border border-amber-500/30 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">
                    {t.contact.handleLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-amber-100">
                    {handleValue}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleCopy(handleValue, 'handle')}
                className="p-2 bg-white/5 border border-white/10 text-amber-400 hover:bg-white/10 transition text-xs"
                title="Copy Handle"
              >
                {copiedField === 'handle' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Academic CV / Record Card */}
            <div className="bg-black/50 border border-white/10 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif text-amber-100">
                    Academic Student Dossier
                  </h4>
                  <p className="text-xs text-white/50 mt-0.5 font-sans">
                    Sheikh Muteeb Bin Javed • Salafia & IGNOU
                  </p>
                </div>
                <button
                  onClick={handlePrintSummary}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-600/40 text-[10px] font-mono uppercase tracking-widest text-amber-300 transition active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Print Dossier</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) - Interactive Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-white/10 p-6 sm:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 bg-[#064e3b]/30 text-amber-400 border border-amber-500/30">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-light font-serif text-amber-100">
                    {t.contact.sendMessageTitle}
                  </h3>
                  <p className="text-xs text-white/50 font-sans">
                    Direct correspondence with Sheikh Muteeb Bin Javed
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-black/60 border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="text-base font-serif text-amber-100">
                    {t.contact.successMessage}
                  </h4>
                  <p className="text-xs text-white/70 mt-2">
                    Opening your default email client to send your message directly to{' '}
                    <span className="text-amber-400 font-mono">{emailValue}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 bg-white/5 text-[10px] font-mono uppercase tracking-widest text-amber-400 border border-white/10 hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                        Your Name / اسمك
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 bg-black/60 border border-white/10 text-xs text-amber-100 placeholder-white/30 focus:outline-none focus:border-amber-500/60 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                        Your Email / بريدك الإلكتروني
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 bg-black/60 border border-white/10 text-xs text-amber-100 placeholder-white/30 focus:outline-none focus:border-amber-500/60 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                      Subject / موضوع الاستفسار
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2 bg-black/60 border border-white/10 text-xs text-amber-100 placeholder-white/30 focus:outline-none focus:border-amber-500/60 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                      Message / الرسالة
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 bg-black/60 border border-white/10 text-xs text-amber-100 placeholder-white/30 focus:outline-none focus:border-amber-500/60 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-black font-semibold text-xs font-mono uppercase tracking-[0.2em] shadow-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.sendButton}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
