import React, { useState, useEffect } from 'react';
import { LessonData } from '../types';
import { ThreeARViewer } from './ThreeARViewer';
import {
  Volume2, VolumeX, BookOpen, GraduationCap, Lightbulb, Globe,
  HelpCircle, CheckCircle2, XCircle, ArrowRight, Bookmark, RotateCcw
} from 'lucide-react';

interface LessonResultViewProps {
  lesson: LessonData;
  onScanNew: () => void;
}

export const LessonResultView: React.FC<LessonResultViewProps> = ({ lesson, onScanNew }) => {
  const [explanationMode, setExplanationMode] = useState<'simple' | 'deep'>('simple');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<{ [key: number]: number }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);
  const [savedBookmark, setSavedBookmark] = useState(false);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [lesson]);

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('เบราว์เซอร์ของคุณไม่รองรับระบบสังเคราะห์เสียงอ่าน (Text-to-Speech)');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();

      const textToSpeak = `${lesson.title}. ${
        explanationMode === 'simple' ? lesson.simpleExplanation : lesson.deepExplanation
      }`;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'th-TH';
      utterance.rate = 0.95;

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectQuizAnswer = (questionId: number, optionIndex: number) => {
    if (submittedQuiz) return;
    setSelectedQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    lesson.quiz.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Navigation & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onScanNew}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>สแกนรูปใหม่</span>
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">
            {lesson.subject}
          </span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            {lesson.chapter}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSavedBookmark(!savedBookmark)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              savedBookmark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedBookmark ? 'fill-white' : ''}`} />
            <span>{savedBookmark ? 'บันทึกแล้ว' : 'บันทึกบทเรียน'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left 3D AR Viewer + Right Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive 3D Model View */}
        <div className="lg:col-span-6 space-y-4 sticky top-24">
          <ThreeARViewer config={lesson.model3DConfig} title={lesson.title} subject={lesson.subject} />

          {/* Quick Stats Banner below 3D */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-center">
              <div className="text-[11px] font-semibold text-slate-500">ระดับชั้น</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">{lesson.gradeLevel}</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-center">
              <div className="text-[11px] font-semibold text-slate-500">มโนทัศน์หลัก</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">{lesson.keyConcepts.length} หัวข้อ</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-center">
              <div className="text-[11px] font-semibold text-slate-500">แบบทดสอบ</div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">{lesson.quiz.length} ข้อ</div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Learning Panel */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Lesson Header Title */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  {lesson.chapter}
                </span>
                <h1 className="text-2xl font-extrabold text-slate-900 mt-1 leading-snug">
                  {lesson.title}
                </h1>
              </div>

              {/* TTS Audio Player Button */}
              <button
                onClick={toggleAudio}
                className={`p-2.5 rounded-xl transition-all shadow-xs flex items-center gap-2 shrink-0 cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-rose-600 text-white animate-pulse'
                    : 'bg-sky-600 hover:bg-sky-700 text-white'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="text-xs font-bold pr-1">
                  {isPlayingAudio ? 'กำลังอ่าน...' : 'ฟังเสียงอ่าน'}
                </span>
              </button>
            </div>

            {/* Explanation Mode Toggle Tabs */}
            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={() => setExplanationMode('simple')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  explanationMode === 'simple'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>โหมดอธิบายแบบง่าย</span>
              </button>

              <button
                onClick={() => setExplanationMode('deep')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  explanationMode === 'deep'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>โหมดอธิบายเชิงลึก</span>
              </button>
            </div>

            {/* Explanation Content Box */}
            <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
              explanationMode === 'simple' ? 'bg-sky-50/80 border-sky-200 text-sky-950' : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}>
              <div className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 text-slate-700">
                {explanationMode === 'simple' ? (
                  <>
                    <BookOpen className="w-3.5 h-3.5 text-sky-700" />
                    <span>คำอธิบายระดับเข้าใจง่าย</span>
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-3.5 h-3.5 text-slate-700" />
                    <span>คำอธิบายทฤษฎีเชิงวิชาการ</span>
                  </>
                )}
              </div>
              <p className="mt-1">
                {explanationMode === 'simple' ? lesson.simpleExplanation : lesson.deepExplanation}
              </p>
            </div>
          </div>

          {/* Key Concepts Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>แนวคิดสำคัญ (Key Concepts)</span>
            </h3>
            <ul className="space-y-2">
              {lesson.keyConcepts.map((kc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real World Examples */}
          {lesson.realWorldExamples && lesson.realWorldExamples.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>ตัวอย่างการประยุกต์ใช้ในชีวิตจริง</span>
              </h3>
              <div className="space-y-2">
                {lesson.realWorldExamples.map((ex, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulary Section */}
          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-700" />
                <span>คำศัพท์วิชาการสำคัญ (Vocabulary)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lesson.vocabulary.map((v, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="font-bold text-sky-800 text-xs">{v.term}</div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5">{v.translation}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{v.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Section */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-slate-700" />
                  <span>แบบทดสอบประเมินผลความเข้าใจ</span>
                </h3>
                {submittedQuiz && (
                  <span className="px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold rounded-md border border-slate-300">
                    คะแนน: {calculateScore()} / {lesson.quiz.length}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {lesson.quiz.map((q, qIdx) => {
                  const selectedOpt = selectedQuizAnswers[q.id];
                  return (
                    <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                      <div className="text-xs sm:text-sm font-semibold text-slate-900">
                        {qIdx + 1}. {q.question}
                      </div>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          const isCorrect = q.correctIndex === optIdx;

                          let btnStyle = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100';
                          if (submittedQuiz) {
                            if (isCorrect) {
                              btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-sky-100 border-sky-400 text-sky-900 font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {submittedQuiz && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                              {submittedQuiz && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-500" />}
                            </button>
                          );
                        })}
                      </div>

                      {submittedQuiz && (
                        <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950">
                          <span className="font-bold">เฉลยคำอธิบาย: </span> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-3">
                {!submittedQuiz ? (
                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    disabled={Object.keys(selectedQuizAnswers).length === 0}
                    className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ตรวจคำตอบ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSubmittedQuiz(false);
                      setSelectedQuizAnswers({});
                    }}
                    className="w-full py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                  >
                    ทำแบบทดสอบอีกครั้ง
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Fun Facts / เกร็ดความรู้ */}
          {lesson.funFacts && lesson.funFacts.length > 0 && (
            <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-sm space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-sky-300">
                เกร็ดความรู้ทางวิชาการ
              </div>
              {lesson.funFacts.map((fact, idx) => (
                <p key={idx} className="text-xs font-medium leading-relaxed text-slate-300">
                  "{fact}"
                </p>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
