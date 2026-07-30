import React from 'react';
import { Cpu, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="px-3 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200 inline-block">
          เกี่ยวกับโครงการนวัตกรรม EduVision AR
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          ยกระดับการเรียนรู้ดิจิทัลด้วย AI & WebAR
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          "สแกนหนังสือเรียนเพื่อวิเคราะห์และแสดงสื่อ 3 มิติ โต้ตอบได้ทันที"
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5 text-sky-700" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">วิสัยทัศน์โครงการ (Project Vision)</h2>
            <p className="text-xs text-slate-500">นวัตกรรมเทคโนโลยีเพื่อการศึกษาขั้นพื้นฐาน</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          ภาพประกอบในหนังสือเรียนมาตรฐานเป็นรูปแบบ 2 มิติ ซึ่งทำให้นักเรียนทำความเข้าใจโครงสร้างเชิงซ้อน เช่น เซลล์ชีววิทยา โมเลกุลเคมี หรือวงจรคอมพิวเตอร์ได้ยาก
          <strong className="text-sky-800 font-semibold"> EduVision AR </strong> จึงถูกพัฒนาขึ้นเพื่อวิเคราะห์ภาพถ่ายหนังสือเรียนผ่านระบบ AI และเรนเดอร์เป็นแบบจำลอง 3 มิติ โต้ตอบได้บนเว็บเบราว์เซอร์ พร้อมระบบเสียงสังเคราะห์อ่านบทเรียนภาษาไทย เพื่อส่งเสริมความเข้าใจและความสนใจในการเรียนรู้
        </p>
      </div>

      {/* Technology Stack Grid */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-sky-700" />
          <span>โครงสร้างเทคโนโลยีประมวลผล (System Architecture)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-sky-700">Gemini 3.6 Flash AI</div>
            <div className="text-sm font-bold text-slate-900">Multimodal Vision</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              วิเคราะห์ภาพถ่ายหนังสือเรียน ระบุรายวิชาและสกัดโครงสร้างเนื้อหา แบบทดสอบ และคำศัพท์
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-700">Three.js & WebAR</div>
            <div className="text-sm font-bold text-slate-900">Interactive 3D Engine</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              เรนเดอร์วัตถุ 3 มิติ โต้ตอบผ่านเว็บเบราว์เซอร์มาตรฐานโดยไม่ต้องติดตั้งแอปพลิเคชันเพิ่ม
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-emerald-700">Thai Web Speech TTS</div>
            <div className="text-sm font-bold text-slate-900">Audio Synthesis</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              ระบบสังเคราะห์เสียงอ่านเนื้อหาบทเรียนเป็นภาษาไทยตามจังหวะมาตรฐาน
            </p>
          </div>
        </div>
      </div>

      {/* Benefits checklist */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-base font-bold flex items-center gap-2">
          <Award className="w-4 h-4 text-sky-400" />
          <span>ประโยชน์ต่อการจัดการเรียนการสอน</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
          {[
            'เพิ่มความเข้าใจในบทเรียนซับซ้อนผ่านสื่อ 3 มิติ โต้ตอบได้',
            'สแกนได้จากภาพถ่ายหนังสือเรียนจริงทุกสำนักพิมพ์',
            'เลือกระดับคำอธิบายได้ทั้งโหมดเข้าใจง่ายและโหมดเชิงลึก',
            'รองรับวิชาครอบคลุมทั้ง 11 กลุ่มสาระการเรียนรู้',
            'มีแบบทดสอบประเมินผลความเข้าใจพร้อมเฉลยคำอธิบาย',
            'ใช้งานผ่านเว็บเบราว์เซอร์มาตรฐานบนทุกอุปกรณ์'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
