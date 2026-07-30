import React, { useState } from 'react';
import { SAMPLE_BOOKS } from '../data/sampleBooks';
import { LessonData } from '../types';
import { Search, Filter, ArrowRight } from 'lucide-react';

interface SubjectsViewProps {
  onSelectLesson: (lesson: LessonData) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({ onSelectLesson }) => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('ทั้งหมด');
  const [searchQuery, setSearchQuery] = useState('');

  const subjectsList = [
    'ทั้งหมด',
    'ชีววิทยา', 'เคมี', 'ฟิสิกส์', 'คณิตศาสตร์',
    'ภาษาไทย', 'ภาษาอังกฤษ', 'สังคมศึกษา',
    'ประวัติศาสตร์', 'ภูมิศาสตร์', 'คอมพิวเตอร์', 'ศิลปะ'
  ];

  const filteredBooks = SAMPLE_BOOKS.filter((book) => {
    const matchesSubject =
      selectedSubjectFilter === 'ทั้งหมด' || book.subject === selectedSubjectFilter;

    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="px-3 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200 inline-block">
          คลังสื่อการเรียนรู้รายวิชา
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          กลุ่มสาระการเรียนรู้ (11 รายวิชา)
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
          เลือกรายวิชาเพื่อเรียกดูสื่อ 3D WebAR โต้ตอบได้ คำอธิบายทางวิชาการ และแบบทดสอบ
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาชื่อรายวิชา บทเรียน หรือคำสำคัญ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
          />
        </div>

        {/* Subjects Filter Chips */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-sky-700" />
            <span>กรองตามกลุ่มสาระวิชา:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {subjectsList.map((subj) => {
              const isSelected = selectedSubjectFilter === subj;
              return (
                <button
                  key={subj}
                  onClick={() => setSelectedSubjectFilter(subj)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {subj}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Subject Sample Lessons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
                  {book.subject}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {book.presetLesson.gradeLevel}
                </span>
              </div>

              {/* Info Body */}
              <div className="p-5 space-y-2">
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                  {book.chapter}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>

            {/* Launch Button */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onSelectLesson(book.presetLesson)}
                className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>เปิดสื่อ 3D WebAR บทเรียนนี้</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
