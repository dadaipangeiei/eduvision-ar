import React from 'react';
import { Camera, BookOpen, Layers, Volume2, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SAMPLE_BOOKS } from '../data/sampleBooks';
import { ThreeARViewer } from './ThreeARViewer';
import { LessonData } from '../types';

interface HomeViewProps {
  onStartScan: () => void;
  onSelectSampleLesson: (lesson: LessonData) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStartScan, onSelectSampleLesson }) => {
  const demoLesson = SAMPLE_BOOKS[0].presetLesson;

  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-6 pb-10 overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-slate-200/50 blur-3xl -z-10 rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Prominent Hero Brand Badge Showcase */}
          <div className="flex flex-col items-center justify-center animate-float-gentle">
            <div className="relative group cursor-pointer">
              {/* Outer Glowing Halo Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-400 opacity-30 blur-xl group-hover:opacity-60 transition-opacity animate-logo-pulse" />
              
              {/* Main Iconic Emblem Box */}
              <div className="relative bg-slate-950 border-2 border-sky-400/80 px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-5 text-white overflow-hidden">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-800 flex items-center justify-center shadow-inner shrink-0">
                  <Camera className="w-7 h-7 text-white z-10" />
                  <div className="absolute inset-0 bg-sky-400/20 blur-xs" />
                  <div className="absolute w-18 h-18 border-2 border-sky-400/40 rounded-full border-t-sky-300 animate-spin-slow pointer-events-none" />
                </div>

                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2">
                    <span className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
                      EduVision
                    </span>
                    <span className="text-sky-400 font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
                      AR
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-sky-200 tracking-wide mt-0.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>NEXT-GEN 3D TEXTBOOK SCANNER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            แพลตฟอร์มสแกนวิเคราะห์หนังสือเรียน <br />
            <span className="bg-gradient-to-r from-sky-700 via-indigo-800 to-sky-900 bg-clip-text text-transparent">
              นวัตกรรมสื่อ 3D WebAR อัจฉริยะ
            </span>
          </h1>

          {/* Subtitle / Concept */}
          <p className="text-base sm:text-lg font-medium text-slate-700 max-w-2xl mx-auto leading-relaxed">
            เปลี่ยนภาพถ่ายในหนังสือเรียนเป็นสื่อ 3 มิติ โต้ตอบได้ทันที พร้อมคำอธิบาย 2 ระดับ เสียงอ่านสังเคราะห์ภาษาไทย และแบบทดสอบประเมินความเข้าใจ
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartScan}
              className="px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>เริ่มสแกนรูปภาพหนังสือเรียน</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive 3D Demo Showcase Card */}
        <div className="mt-12 max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                ตัวอย่างการเรนเดอร์สื่อ 3D WebAR บนหน้าเว็บ
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                {demoLesson.title}
              </h3>
            </div>
            <button
              onClick={() => onSelectSampleLesson(demoLesson)}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>เปิดดูบทเรียนเต็ม</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <ThreeARViewer config={demoLesson.model3DConfig} title={demoLesson.title} subject={demoLesson.subject} />
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-bold text-slate-900">
            คุณสมบัติหลักของระบบ
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
            ออกแบบโครงสร้างระบบตามหลักวิชาการเพื่อรองรับการใช้งานของนักเรียนและครูผู้สอน
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Camera className="w-5 h-5 text-sky-700" />,
              title: 'Smart Image Scan',
              desc: 'ระบบตรวจจับภาพถ่ายจากหนังสือเรียน ระบุวิชาและสกัดโครงสร้างเนื้อหาด้วย AI'
            },
            {
              icon: <Layers className="w-5 h-5 text-slate-700" />,
              title: 'Interactive 3D View',
              desc: 'แสดงแบบจำลอง 3 มิติ รองรับการหมุน ซูม และโหมดแสดงภาพจำลอง WebAR บนสถานที่จริง'
            },
            {
              icon: <Volume2 className="w-5 h-5 text-sky-700" />,
              title: 'AI Audio & Dual Modes',
              desc: 'เสียงอ่านสังเคราะห์ภาษาไทย พร้อมคำอธิบาย 2 ระดับ ทั้งโหมดเข้าใจง่ายและโหมดเชิงลึก'
            },
            {
              icon: <Award className="w-5 h-5 text-slate-700" />,
              title: 'Assessment & Quiz',
              desc: 'แบบทดสอบวัดความเข้าใจประจำบทเรียน พร้อมระบบตรวจคำตอบและคำอธิบายเฉลยทันที'
            }
          ].map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supported 11 Subjects Banner */}
      <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-md space-y-6">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 rounded-md bg-slate-800 text-sky-300 text-xs font-bold border border-slate-700">
            ครอบคลุมหลักสูตรการศึกษาขั้นพื้นฐาน
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            รองรับครบทั้ง 11 กลุ่มสาระการเรียนรู้
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
            เลือกรายวิชาเพื่อทดสอบสื่อการเรียนรู้ 3 มิติ และแบบทดสอบประเมินผลได้ทันที
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SAMPLE_BOOKS.map((book) => (
            <div
              key={book.id}
              onClick={() => onSelectSampleLesson(book.presetLesson)}
              className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer space-y-1"
            >
              <div className="text-xs font-bold text-sky-400">{book.subject}</div>
              <div className="text-xs font-medium text-slate-200 line-clamp-1">{book.title}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
