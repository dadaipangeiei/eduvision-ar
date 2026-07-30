export type SubjectType = 
  | 'ชีววิทยา'
  | 'เคมี'
  | 'ฟิสิกส์'
  | 'คณิตศาสตร์'
  | 'ภาษาไทย'
  | 'ภาษาอังกฤษ'
  | 'สังคมศึกษา'
  | 'ประวัติศาสตร์'
  | 'ภูมิศาสตร์'
  | 'คอมพิวเตอร์'
  | 'ศิลปะ';

export interface Hotspot3D {
  id: string;
  label: string;
  description: string;
  position: [number, number, number];
}

export interface Model3DConfig {
  type: 'cell' | 'dna' | 'molecule' | 'atom' | 'solar' | 'geometry' | 'pendulum' | 'monument' | 'chip' | 'sculpture' | 'map' | 'heart' | 'generic';
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  animationType?: 'rotate' | 'pulse' | 'orbit' | 'oscillate' | 'fold';
  hotspots?: Hotspot3D[];
}

export interface VocabItem {
  term: string;
  translation: string;
  meaning: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonData {
  id: string;
  subject: SubjectType;
  title: string;
  chapter: string;
  gradeLevel: string;
  simpleExplanation: string;
  deepExplanation: string;
  keyConcepts: string[];
  realWorldExamples: string[];
  vocabulary: VocabItem[];
  quiz: QuizQuestion[];
  funFacts: string[];
  model3DConfig: Model3DConfig;
  imageUrl?: string;
}

export interface SampleTextbookPage {
  id: string;
  subject: SubjectType;
  title: string;
  chapter: string;
  thumbnail: string;
  description: string;
  presetLesson: LessonData;
}
