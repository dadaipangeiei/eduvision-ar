import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { SmartScanner } from './components/SmartScanner';
import { LessonResultView } from './components/LessonResultView';
import { SubjectsView } from './components/SubjectsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { LessonData } from './types';
import { SAMPLE_BOOKS } from './data/sampleBooks';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeLesson, setActiveLesson] = useState<LessonData | null>(null);

  const handleScanComplete = (lesson: LessonData) => {
    setActiveLesson(lesson);
    setActiveTab('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSampleLesson = (lesson: LessonData) => {
    setActiveLesson(lesson);
    setActiveTab('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStartScan={() => setActiveTab('scan')}
      />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'home' && (
          <HomeView
            onStartScan={() => setActiveTab('scan')}
            onSelectSampleLesson={handleSelectSampleLesson}
          />
        )}

        {activeTab === 'scan' && (
          <SmartScanner onScanComplete={handleScanComplete} />
        )}

        {activeTab === 'result' && activeLesson && (
          <LessonResultView
            lesson={activeLesson}
            onScanNew={() => setActiveTab('scan')}
          />
        )}

        {/* Fallback to first sample if user navigates to result without scanning */}
        {activeTab === 'result' && !activeLesson && (
          <LessonResultView
            lesson={SAMPLE_BOOKS[0].presetLesson}
            onScanNew={() => setActiveTab('scan')}
          />
        )}

        {activeTab === 'subjects' && (
          <SubjectsView onSelectLesson={handleSelectSampleLesson} />
        )}

        {activeTab === 'about' && <AboutView />}

        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
