import React from 'react';
import { Camera, BookOpen, Award, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Main Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10 rounded-xl bg-slate-950 border border-sky-400/60 flex items-center justify-center text-white shadow-lg overflow-hidden">
                <Camera className="w-5 h-5 text-sky-400 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/60 to-cyan-500/20" />
              </div>
              <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                <span>EduVision</span>
                <span className="text-sky-400 font-extrabold">AR</span>
              </div>
            </div>

            <p className="text-sky-300 text-sm font-semibold">
              แพลตฟอร์มการเรียนรู้อัจฉริยะเพื่อยกระดับการศึกษาขั้นพื้นฐาน
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              วิเคราะห์ภาพถ่ายหนังสือเรียนผ่านระบบ AI และเทคโนโลยี WebAR แสดงสื่อ 3 มิติ โต้ตอบได้ เสียงอ่านสังเคราะห์ภาษาไทย และแบบทดสอบประเมินผล รองรับ 11 กลุ่มสาระการเรียนรู้
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                โครงการนวัตกรรมเทคโนโลยีเพื่อการเรียนรู้
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              เมนูหลัก
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">
                  หน้าแรก
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('scan')} className="hover:text-white transition-colors cursor-pointer">
                  Smart Scan (ระบบสแกนหนังสือ)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('subjects')} className="hover:text-white transition-colors cursor-pointer">
                  รายวิชาทั้งหมด (11 กลุ่มสาระ)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors cursor-pointer">
                  เกี่ยวกับโครงการ & เทคโนโลยี
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors cursor-pointer">
                  ติดต่อสอบถาม
                </button>
              </li>
            </ul>
          </div>

          {/* Supported Subjects Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              รองรับ 11 กลุ่มสาระการเรียนรู้
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'ชีววิทยา', 'เคมี', 'ฟิสิกส์', 'คณิตศาสตร์',
                'ภาษาไทย', 'ภาษาอังกฤษ', 'สังคมศึกษา',
                'ประวัติศาสตร์', 'ภูมิศาสตร์', 'คอมพิวเตอร์', 'ศิลปะ'
              ].map((s) => (
                <span
                  key={s}
                  onClick={() => setActiveTab('subjects')}
                  className="cursor-pointer bg-slate-800 hover:bg-sky-900 text-slate-300 hover:text-white text-xs px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 EduVision AR — ระบบนวัตกรรมเทคโนโลยีการเรียนรู้ดิจิทัล
          </div>
          <div className="text-slate-400">
            ระบบประมวลผลผ่านเว็บเบราว์เซอร์มาตรฐานสากล
          </div>
        </div>
      </div>
    </footer>
  );
};
