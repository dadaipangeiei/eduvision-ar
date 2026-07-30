import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'นักเรียน',
    school: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="px-3 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200 inline-block">
          ช่องทางติดต่อและข้อเสนอแนะ
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          ติดต่อทีมงาน EduVision AR
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          สอบถามข้อมูล เสนอแนะข้อติชม หรือแจ้งขอรับการสนับสนุนสำหรับสถานศึกษา
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Form Column */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-sky-700" />
            <span>แบบฟอร์มติดต่อสอบถาม</span>
          </h2>

          {submitted ? (
            <div className="bg-slate-50 border border-slate-300 p-6 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">ส่งข้อความเรียบร้อยแล้ว</h3>
              <p className="text-xs text-slate-600">
                ขอบคุณสำหรับข้อเสนอแนะ ทีมงานจะนำข้อมูลไปปรับปรุงระบบ EduVision AR ให้ดียิ่งขึ้น
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs"
              >
                ส่งข้อความเพิ่มเติม
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="กรอกชื่อ-นามสกุล"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    สถานะผู้ใช้งาน *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  >
                    <option value="นักเรียน">นักเรียน</option>
                    <option value="ครูผู้สอน">ครูผู้สอน</option>
                    <option value="ผู้ปกครอง">ผู้ปกครอง</option>
                    <option value="กรรมการประเมินนวัตกรรม">กรรมการประเมินนวัตกรรม</option>
                    <option value="บุคคลทั่วไป">บุคคลทั่วไป</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    โรงเรียน / สถานศึกษา
                  </label>
                  <input
                    type="text"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    placeholder="ชื่อโรงเรียนหรือสังกัด"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    อีเมลติดต่อ *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@school.ac.th"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ข้อความรายละเอียด *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="เขียนข้อความสอบถามหรือข้อเสนอแนะ..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>ส่งข้อมูล</span>
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900">รายละเอียดการติดต่อ</h3>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">อีเมลทางการ</div>
                  <div className="text-sky-700">contact@eduvision-ar.in.th</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">โทรศัพท์</div>
                  <div className="text-slate-600">02-123-4567 (ศูนย์นวัตกรรมการเรียนรู้)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">ศูนย์ประสานงาน</div>
                  <div className="text-slate-600">ศูนย์นวัตกรรมเทคโนโลยีการศึกษา กรุงเทพมหานคร</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Box */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-600" />
              <span>คำถามที่พบบ่อย (FAQ)</span>
            </h4>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">ต้องติดตั้งแอปพลิเคชันหรือไม่?</div>
                <div className="mt-0.5 text-slate-600">สามารถประมวลผลผ่านเว็บเบราว์เซอร์มาตรฐานบนสมาร์ทโฟน หรือคอมพิวเตอร์ได้ทันที</div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">รองรับกี่รายวิชา?</div>
                <div className="mt-0.5 text-slate-600">รองรับครบทั้ง 11 กลุ่มสาระการเรียนรู้ตามหลักสูตรการศึกษาขั้นพื้นฐาน</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
