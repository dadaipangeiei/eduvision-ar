import React, { useState } from 'react';
import { Camera, BookOpen, Home, Info, PhoneCall, Sparkles, Menu, X, Layers } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartScan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onStartScan }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'scan', label: 'Smart Scan', icon: Camera },
    { id: 'subjects', label: 'รายวิชา', icon: BookOpen },
    { id: 'about', label: 'เกี่ยวกับโครงการ', icon: Info },
    { id: 'contact', label: 'ติดต่อสอบถาม', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Prominent Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 text-left focus:outline-none group cursor-pointer py-1"
        >
          {/* Glowing AR Lens Logo Emblem */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-70 blur-xs group-hover:opacity-100 transition-opacity animate-logo-pulse" />
            <div className="relative w-11 h-11 rounded-xl bg-slate-950 border border-sky-400/50 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
              <Camera className="w-5 h-5 text-sky-400 z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/40 via-transparent to-cyan-500/20" />
              {/* Spinning AR Lens Ring Accent */}
              <div className="absolute w-14 h-14 border border-sky-400/30 rounded-full border-t-sky-400 animate-spin-slow pointer-events-none" />
            </div>
          </div>

          {/* Logo Typography & Tagline */}
          <div className="flex flex-col">
            <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-slate-900 via-sky-950 to-sky-800 bg-clip-text text-transparent drop-shadow-2xs">
                EduVision
              </span>
              <span className="text-sky-600 font-extrabold tracking-wider">
                AR
              </span>
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-900 text-sky-300 font-bold border border-slate-700 shadow-2xs">
                3D AI
              </span>
            </div>
            <div className="text-[11px] font-semibold text-sky-800/80 tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping inline-block" />
              <span>นวัตกรรมระบบสแกนหนังสือเรียนเพื่อการศึกษา</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-sky-800 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-600' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              setActiveTab('scan');
              onStartScan();
            }}
            className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>สแกนบทเรียน</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('scan');
              onStartScan();
            }}
            className="px-3 py-2 rounded-lg bg-sky-600 text-white font-semibold text-xs shadow-sm flex items-center gap-1.5"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>สแกนบทเรียน</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>{item.label}</span>
                </div>
                {isActive && <div className="w-2 h-2 rounded-full bg-sky-600" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
