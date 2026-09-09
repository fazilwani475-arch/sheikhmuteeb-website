import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, ZoomIn, Check, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortraitCardProps {
  lang: 'en' | 'ar' | 'ur';
}

export const PortraitCard: React.FC<PortraitCardProps> = ({ lang }) => {
  // Check local storage for persistent user photo if updated
  const [photoUrl, setPhotoUrl] = useState<string>('/muteeb.jpeg');
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('muteeb_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
      setHasCustomPhoto(true);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setHasCustomPhoto(true);
          try {
            localStorage.setItem('muteeb_profile_photo', result);
          } catch {
            // Storage quota handled safely
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('muteeb_profile_photo');
    setPhotoUrl('/muteeb.jpeg');
    setHasCustomPhoto(false);
  };

  return (
    <div id="scholar-portrait-container" className="relative group mx-auto max-w-md w-full">
      {/* Ambient Aura Glow Background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/20 via-[#064e3b]/30 to-amber-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Frame */}
      <div
        className="relative bg-black/50 border border-white/10 rounded-xl p-3.5 shadow-2xl backdrop-blur-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle Decorative Geometric Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-500/50 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-500/50 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-500/50 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-500/50 pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between px-3 py-2 mb-2.5 bg-white/5 rounded-sm border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-medium tracking-widest text-amber-400/90 uppercase font-mono">
              {lang === 'ar'
                ? 'الصورة الأكاديمية الرسمية'
                : lang === 'ur'
                ? 'مستند علمی تصویر'
                : 'Official Academic Portrait'}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              id="btn-zoom-portrait"
              onClick={() => setIsZoomed(true)}
              className="p-1 rounded text-white/60 hover:text-amber-400 hover:bg-white/10 transition text-xs"
              title="Inspect Portrait"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              id="btn-upload-portrait-trigger"
              onClick={() => fileInputRef.current?.click()}
              className="p-1 rounded text-white/60 hover:text-amber-400 hover:bg-white/10 transition text-xs flex items-center gap-1"
              title="Upload / Refresh Photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            {hasCustomPhoto && (
              <button
                id="btn-reset-portrait"
                onClick={handleResetPhoto}
                className="p-1 rounded text-red-400 hover:text-red-200 hover:bg-red-950/40 transition text-xs"
                title="Reset to default photo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Hidden File Input for seamless photo uploading */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Main Image Viewport */}
        <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-black/80 border border-white/10 shadow-inner">
          <img
            src={photoUrl}
            alt="الشيخ مطيب بن جاويد - Sheikh Muteeb Bin Javed"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('/muteeb.jpeg')) {
                target.src = '/muteeb.jpg';
              }
            }}
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03] transition-all duration-700 group-hover:scale-105"
          />

          {/* Subtle gradient overlay at base */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Quick Details Floating Card */}
          <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-xl rounded-sm border border-white/10 text-center">
            <h3 className="text-sm font-bold font-arabic text-amber-100 tracking-wide">
              الشيخ مطيب بن جاويد
            </h3>
            <p className="text-[11px] text-amber-400/90 font-serif mt-0.5 font-medium tracking-wide">
              Sheikh Muteeb Bin Javed
            </p>
            <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/80 uppercase tracking-widest">
              <BookOpen className="w-2.5 h-2.5 text-amber-400" />
              <span>طالبُ العلمِ • Islamic Studies Student</span>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-2.5 flex items-center justify-between text-[10px] text-white/50 px-2 font-mono uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            <span>Verified Scholar</span>
          </span>
          <span className="text-amber-500/80">Salafia • IGNOU</span>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full bg-black/90 border border-amber-500/40 rounded-lg p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div>
                  <h4 className="text-lg font-bold font-arabic text-amber-100">
                    الشيخ مطيب بن جاويد
                  </h4>
                  <p className="text-xs text-amber-400 font-serif">Sheikh Muteeb Bin Javed</p>
                </div>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/80 hover:bg-white/10 transition"
                >
                  Close ✕
                </button>
              </div>

              <div className="w-full aspect-[3/4] rounded overflow-hidden bg-black border border-white/10">
                <img
                  src={photoUrl}
                  alt="Sheikh Muteeb Bin Javed"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-white/60 font-serif">
                <span>Salafia College for Islamic Studies</span>
                <span className="text-amber-400 font-arabic">طالب العلم الشرعي</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
