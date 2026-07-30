import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, BookOpen, RefreshCw, AlertCircle, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { SAMPLE_BOOKS } from '../data/sampleBooks';
import { LessonData, SubjectType } from '../types';

interface SmartScannerProps {
  onScanComplete: (lesson: LessonData) => void;
}

export const SmartScanner: React.FC<SmartScannerProps> = ({ onScanComplete }) => {
  const [scanMode, setScanMode] = useState<'camera' | 'upload' | 'samples'>('camera');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | ''>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subjectsList: SubjectType[] = [
    'ชีววิทยา', 'เคมี', 'ฟิสิกส์', 'คณิตศาสตร์',
    'ภาษาไทย', 'ภาษาอังกฤษ', 'สังคมศึกษา',
    'ประวัติศาสตร์', 'ภูมิศาสตร์', 'คอมพิวเตอร์', 'ศิลปะ'
  ];

  useEffect(() => {
    if (scanMode === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [scanMode]);

  const startCamera = () => {
    setCameraError(null);
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
    })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCameraActive(true);
        }
      })
      .catch((err) => {
        console.warn('Camera error:', err);
        setCameraActive(false);
        setCameraError('ไม่สามารถเข้าถึงกล้องได้ กรุณาตรวจสอบการอนุญาตสิทธิ์ใช้งานกล้อง หรือเลือกอัปโหลดรูปภาพ / เลือกตัวอย่างหนังสือเรียน');
      });
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const handleCapturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageBase64 = canvas.toDataURL('image/jpeg', 0.85);

    await analyzeImage(imageBase64);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      await analyzeImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async (imageBase64?: string, subjectHint?: string) => {
    setIsAnalyzing(true);

    try {
      const response = await fetch('/api/scan-textbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64,
          subjectHint: subjectHint || selectedSubject || undefined
        })
      });

      const json = await response.json();
      if (json.success && json.data) {
        const lessonData: LessonData = {
          id: 'scanned-' + Date.now(),
          subject: json.data.subject || selectedSubject || 'ชีววิทยา',
          title: json.data.title || 'บทเรียนสแกนวิเคราะห์ด้วยระบบ AI',
          chapter: json.data.chapter || 'บทเรียนในหนังสือเรียน',
          gradeLevel: json.data.gradeLevel || 'มัธยมศึกษา',
          simpleExplanation: json.data.simpleExplanation || 'ระบบ AI วิเคราะห์ภาพและสรุปสาระสำคัญในรูปแบบภาษาเข้าใจง่าย',
          deepExplanation: json.data.deepExplanation || 'สรุปทฤษฎีทางวิชาการและแนวคิดเชิงลึกประยุกต์',
          keyConcepts: json.data.keyConcepts || ['สาระสำคัญที่ 1', 'สาระสำคัญที่ 2'],
          realWorldExamples: json.data.realWorldExamples || ['ตัวอย่างการประยุกต์ใช้ในชีวิตจริง'],
          vocabulary: json.data.vocabulary || [],
          quiz: json.data.quiz || [],
          funFacts: json.data.funFacts || [],
          model3DConfig: json.data.model3DConfig || { type: 'cell', primaryColor: '#0284c7' }
        };

        onScanComplete(lessonData);
      } else {
        // Fallback matched sample
        const matched = SAMPLE_BOOKS.find((b) => b.subject === selectedSubject) || SAMPLE_BOOKS[0];
        onScanComplete(matched.presetLesson);
      }
    } catch (err) {
      console.error('Analysis error:', err);
      const matched = SAMPLE_BOOKS.find((b) => b.subject === selectedSubject) || SAMPLE_BOOKS[0];
      onScanComplete(matched.presetLesson);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200">
          <span>Smart Scan Engine powered by Gemini AI</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          สแกนรูปภาพในหนังสือเรียน
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          เปิดกล้องหรืออัปโหลดรูปภาพจากหนังสือเรียน ระบบ AI จะระบุรายวิชาและประมวลผลสื่อ 3 มิติให้โดยอัตโนมัติ
        </p>
      </div>

      {/* Subject Filter Chips */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-sky-700" />
          <span>ระบุกลุ่มสาระวิชาการเรียนรู้ (ตัวเลือกช่วยคัดกรอง):</span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {subjectsList.map((subj) => {
            const isSelected = selectedSubject === subj;
            return (
              <button
                key={subj}
                onClick={() => setSelectedSubject(isSelected ? '' : subj)}
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

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-xl max-w-md mx-auto">
        <button
          onClick={() => setScanMode('camera')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            scanMode === 'camera' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>เปิดกล้องสแกน</span>
        </button>

        <button
          onClick={() => setScanMode('upload')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            scanMode === 'upload' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>อัปโหลดรูปภาพ</span>
        </button>

        <button
          onClick={() => setScanMode('samples')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            scanMode === 'samples' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>ตัวอย่างหนังสือ</span>
        </button>
      </div>

      {/* Camera Scanning View Mode */}
      {scanMode === 'camera' && (
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg min-h-[380px] flex flex-col items-center justify-center">
          
          <video
            ref={videoRef}
            className="w-full h-[400px] object-cover"
            playsInline
            muted
          />

          <canvas ref={canvasRef} className="hidden" />

          {/* Target Scanner Framing Box Overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 border-2 border-sky-400/80 rounded-2xl overflow-hidden">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-3 border-l-3 border-sky-400 rounded-tl-md" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-3 border-r-3 border-sky-400 rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-3 border-l-3 border-sky-400 rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-3 border-r-3 border-sky-400 rounded-br-md" />

              {/* Laser Scan Line Animation */}
              <div className="w-full h-0.5 bg-sky-400 shadow-[0_0_12px_#38bdf8] animate-scan-laser" />

              <div className="absolute bottom-3 inset-x-0 text-center">
                <span className="text-[11px] font-medium text-slate-200 bg-slate-900/90 px-3 py-1 rounded-md">
                  จัดวางรูปภาพในหนังสือให้อยู่ภายในกรอบ
                </span>
              </div>
            </div>
          </div>

          {/* Camera Error Handling */}
          {cameraError && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <AlertCircle className="w-10 h-10 text-rose-500" />
              <p className="text-xs text-slate-300 max-w-md">{cameraError}</p>
              <button
                onClick={() => setScanMode('samples')}
                className="px-4 py-2 rounded-lg bg-sky-600 text-white font-bold text-xs"
              >
                เลือกใช้ตัวอย่างหนังสือเรียนแทน
              </button>
            </div>
          )}

          {/* Capture Trigger Button */}
          <div className="absolute bottom-6 z-20">
            <button
              onClick={handleCapturePhoto}
              disabled={isAnalyzing || !cameraActive}
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>ระบบ AI กำลังประมวลผลรูปภาพ...</span>
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4" />
                  <span>บันทึกภาพถ่ายสแกน</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* File Upload Mode */}
      {scanMode === 'upload' && (
        <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-300 text-center space-y-4 hover:border-sky-500 transition-colors">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          <div className="w-14 h-14 rounded-xl bg-slate-100 text-slate-700 mx-auto flex items-center justify-center">
            <Upload className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900">เลือกไฟล์รูปภาพจากอุปกรณ์</h3>
            <p className="text-xs text-slate-500 mt-0.5">รองรับไฟล์ประเภท JPG, PNG, WEBP (ภาพถ่ายจากหนังสือเรียน)</p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isAnalyzing}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>กำลังวิเคราะห์...</span>
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>เลือกไฟล์รูปภาพ</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Sample Textbook Pages Mode */}
      {scanMode === 'samples' && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            ตัวอย่างหน้าหนังสือเรียนชุดสาธิตระบบ (ทดสอบได้ทันที):
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_BOOKS.map((book) => (
              <div
                key={book.id}
                onClick={() => onScanComplete(book.presetLesson)}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-sky-500 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-32 overflow-hidden bg-slate-100">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {book.subject}
                  </span>
                </div>

                <div className="p-3.5 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-sky-700 transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-[11px] font-semibold text-sky-700">
                    <span>เปิดแสดงสื่อ 3D WebAR</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
