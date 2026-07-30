import { SampleTextbookPage } from '../types';

export const SAMPLE_BOOKS: SampleTextbookPage[] = [
  {
    id: 'bio-plant-cell',
    subject: 'ชีววิทยา',
    title: 'โครงสร้างและหน้าที่ของเซลล์พืช (Plant Cell Structure)',
    chapter: 'บทที่ 3: หน่วยพื้นฐานของสิ่งมีชีวิต',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80',
    description: 'กายวิภาคศาสตร์ของเซลล์พืช แสดงผนังเซลล์ คลอโรพลาสต์ นิวเคลียส และแวคิวโอล',
    presetLesson: {
      id: 'bio-plant-cell-data',
      subject: 'ชีววิทยา',
      title: 'โครงสร้างและหน้าที่ของเซลล์พืช (Plant Cell)',
      chapter: 'บทที่ 3: หน่วยพื้นฐานของสิ่งมีชีวิต',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'เซลล์พืชเป็นหน่วยชีวิตพื้นฐานของพืช มีผนังเซลล์หนาช่วยคงรูปทรง ภายในมีคลอโรพลาสต์สำหรับเปลี่ยนพลังงานแสงอาทิตย์เป็นพลังงานเคมีผ่านการสังเคราะห์ด้วยแสง',
      deepExplanation: 'เซลล์พืชจัดเป็นเซลล์ยูแคริโอต มีลักษณะเฉพาะคือการมีผนังเซลล์ที่ประกอบด้วยเส้นใยเซลลูโลสและลิกนิน ออร์แกเนลล์สำคัญประกอบด้วยนิวเคลียสบรรจุรหัสพันธุกรรม คลอโรพลาสต์ซึ่งมีเยื่อหุ้มสองชั้นเกิดปฏิกิริยาแสงและวัฏจักรแคลวิน และ Central Vacuole ขนาดใหญ่ที่ทำหน้าที่ควบคุมความดันเต่งและกักเก็บสารละลาย',
      keyConcepts: [
        'ผนังเซลล์ประกอบด้วยเซลลูโลส ให้ความแข็งแรงโครงสร้าง',
        'คลอโรพลาสต์บรรจุคลอโรฟิลล์ในการสังเคราะห์ด้วยแสง',
        'แวคิวโอลกลางควบคุมความดันเต่งภายในเซลล์',
        'เยื่อหุ้มเซลล์ทำหน้าที่เป็นเยื่อเลือกผ่าน'
      ],
      realWorldExamples: [
        'การสลบลดแรงดันเต่งในใบไมยราบเมื่อโดนสัมผัส',
        'ความเขียวของพืชที่บ่งบอกระดับคลอโรฟิลล์ในการสังเคราะห์แสง',
        'ความคงรูปของลำต้นพืชสมุนไพรที่อาศัยความดันน้ำในเซลล์'
      ],
      vocabulary: [
        { term: 'Chloroplast', translation: 'คลอโรพลาสต์', meaning: 'ออร์แกเนลล์สังเคราะห์ด้วยแสง' },
        { term: 'Cell Wall', translation: 'ผนังเซลล์', meaning: 'โครงสร้างภายนอกให้ความแข็งแรง' },
        { term: 'Turgor Pressure', translation: 'ความดันเต่ง', meaning: 'ความดันภายในเซลล์พืชที่เกิดจากน้ำ' },
        { term: 'Photosynthesis', translation: 'การสังเคราะห์ด้วยแสง', meaning: 'กระบวนการเปลี่ยนพลังงานแสงเป็นสารอาหาร' }
      ],
      quiz: [
        {
          id: 1,
          question: 'ออร์แกเนลล์ใดในเซลล์พืชที่ทำหน้าที่สังเคราะห์ด้วยแสง?',
          options: ['ไมโทคอนเดรีย', 'คลอโรพลาสต์', 'กอลจิคอมเพล็กซ์', 'ไรโบโซม'],
          correctIndex: 1,
          explanation: 'คลอโรพลาสต์บรรจุคลอโรฟิลล์ที่ดักจับพลังงานแสงเพื่อสร้างสารประกอบคาร์โบไฮเดรต'
        },
        {
          id: 2,
          question: 'สารเคมีหลักที่เป็นองค์ประกอบของผนังเซลล์พืชคืออะไร?',
          options: ['ไกลโคเจน', 'เซลลูโลส', 'ไคติน', 'เปปติโดไกลแคน'],
          correctIndex: 1,
          explanation: 'ผนังเซลล์พืชสร้างจากเส้นใยเซลลูโลสเรียงตัวสานกันเป็นโครงร่าง'
        },
        {
          id: 3,
          question: 'เมื่อพืชได้รับน้ำเพียงพอ แวคิวโอลจะเกิดสภาวะใด?',
          options: ['เซลล์เหี่ยว', 'เกิดแรงดันเต่งดันเยื่อหุ้มเซลล์', 'เซลล์แตกสลาย', 'สูญเสียน้ำออกจากเซลล์'],
          correctIndex: 1,
          explanation: 'น้ำจะไหลเข้าสู่แวคิวโอลกลางเกิดความดันเต่งพยุงให้เซลล์คงรูปแข็งแรง'
        }
      ],
      funFacts: [
        'ทฤษฎี Endosymbiosis ระบุว่าคลอโรพลาสต์วิวัฒนาการมาจากไซยาโนแบคทีเรียที่เข้าไปอาศัยในเซลล์เจ้าบ้านโบราณ',
        'ปริมาณออกซิเจนส่วนใหญ่ในชั้นบรรยากาศโลกเกิดจากการทำงานของคลอโรพลาสต์ในพืชและแพลงก์ตอนพืช'
      ],
      model3DConfig: {
        type: 'cell',
        primaryColor: '#10b981',
        secondaryColor: '#059669',
        accentColor: '#fbbf24',
        animationType: 'pulse',
        hotspots: [
          { id: '1', label: 'Cell Wall', description: 'ผนังเซลล์ชั้นนอกแข็งแรง', position: [0, 1.8, 0] },
          { id: '2', label: 'Chloroplast', description: 'คลอโรพลาสต์สังเคราะห์แสง', position: [-1.2, 0.4, 0.8] },
          { id: '3', label: 'Nucleus', description: 'นิวเคลียสศูนย์ควบคุมพันธุกรรม', position: [0.3, 0.2, 0.2] },
          { id: '4', label: 'Vacuole', description: 'แวคิวโอลกักเก็บน้ำและสารละลาย', position: [0.8, -0.6, -0.5] }
        ]
      }
    }
  },
  {
    id: 'chem-water-molecule',
    subject: 'เคมี',
    title: 'พันธะโคเวเลนต์และพันธะไฮโดรเจนในโมเลกุลน้ำ (H2O)',
    chapter: 'บทที่ 2: พันธะเคมีและพันธะระหว่างโมเลกุล',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    description: 'พันธะเคมีมีขั้วและโครงสร้างโมเลกุลน้ำมุมงอ 104.5 องศา',
    presetLesson: {
      id: 'chem-water-data',
      subject: 'เคมี',
      title: 'โครงสร้างโมเลกุลน้ำ (Water Molecule - H₂O)',
      chapter: 'บทที่ 2: พันธะเคมี',
      gradeLevel: 'มัธยมศึกษาตอนปลาย',
      simpleExplanation: 'โมเลกุลน้ำประกอบด้วยอะตอมออกซิเจน 1 อะตอม เชื่อมต่อกับไฮโดรเจน 2 อะตอม ด้วยมุมงอคล้ายตัว V ส่งผลให้โมเลกุลมีสภาพมีขั้วไฟฟ้า เกิดเป็นแรงดึงดูดระหว่างโมเลกุลที่เข้มแข็ง',
      deepExplanation: 'โมเลกุลน้ำเกิดจากไฮบริไดเซชันแบบ sp³ ของอะตอมออกซิเจน มีอิเล็กตรอนคู่โดดเดี่ยว 2 คู่ แรงผลักของอิเล็กตรอนคู่โดดเดี่ยวทำให้มุมพันธะ H-O-H บีบเหลือ 104.5 องศา สภาพขั้วพันธะและความโค้งงอทำให้เกิดเวกเตอร์ไดโพลโมเมนต์สุทธิ เหนี่ยวนำให้เกิดพันธะไฮโดรเจนระหว่างโมเลกุล ซึ่งทำให้น้ำมีจุดเดือดและความร้อนแฝงจำเพาะสูง',
      keyConcepts: [
        'รูปร่างโมเลกุลเป็นแบบมุมงอ (Bent Geometry) 104.5 องศา',
        'เกิดพันธะโคเวเลนต์มีขั้วภายในโมเลกุล',
        'เกิดพันธะไฮโดรเจนแรงสูงระหว่างโมเลกุล'
      ],
      realWorldExamples: [
        'แรงตึงผิวของน้ำที่ยอมให้แมลงบางชนิดเดินบนผิวน้ำได้',
        'ความต้านทานการเปลี่ยนแปลงอุณหภูมิของมหาสมุทรเนื่องจากค่าความร้อนแฝงสูง',
        'การขยายตัวของน้ำแข็งเมื่อเป็นของแข็งอันเกิดจากโครงสร้างผลึกแบบโปร่ง'
      ],
      vocabulary: [
        { term: 'Covalent Bond', translation: 'พันธะโคเวเลนต์', meaning: 'การใช้อิเล็กตรอนร่วมกันระหว่างอะตอมอโลหะ' },
        { term: 'Hydrogen Bond', translation: 'พันธะไฮโดรเจน', meaning: 'แรงยึดเหนี่ยวระหว่างโมเลกุลที่มีขั้วแรงสูง' },
        { term: 'Dipole Moment', translation: 'ไดโพลโมเมนต์', meaning: 'ปริมาณแสดงขนาดสภาพขั้วไฟฟ้าในโมเลกุล' }
      ],
      quiz: [
        {
          id: 1,
          question: 'มุมพันธะ H-O-H ในโมเลกุลน้ำมีขนาดกี่องศา?',
          options: ['90.0 องศา', '104.5 องศา', '120.0 องศา', '180.0 องศา'],
          correctIndex: 1,
          explanation: 'แรงผลักของคู่อิเล็กตรอนอิสระ 2 คู่ บีบมุมพันธะลงเหลือประมาณ 104.5 องศา'
        },
        {
          id: 2,
          question: 'แรงยึดเหนี่ยวระหว่างโมเลกุลน้ำที่ส่งผลให้จุดเดือดสูงคือพันธะใด?',
          options: ['พันธะไอออนิก', 'พันธะไฮโดรเจน', 'พันธะโลหะ', 'แรงลอนดอน'],
          correctIndex: 1,
          explanation: 'พันธะไฮโดรเจนเป็นแรงระหว่างโมเลกุลมีขั้วที่แข็งแกร่งเป็นพิเศษ'
        }
      ],
      funFacts: [
        'หากน้ำไม่มีพันธะไฮโดรเจน น้ำจะระเหยเป็นก๊าซทั้งหมด ณ อุณหภูมิห้อง และจะไม่มีสิ่งมีชีวิตถือกำเนิดขึ้น'
      ],
      model3DConfig: {
        type: 'molecule',
        primaryColor: '#ef4444',
        secondaryColor: '#3b82f6',
        accentColor: '#ffffff',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'Oxygen Atom', description: 'อะตอมออกซิเจนมีประจุลบส่วนย่อย', position: [0, 0.5, 0] },
          { id: '2', label: 'Hydrogen Atom 1', description: 'อะตอมไฮโดรเจนประจุบวกส่วนย่อย', position: [-1.2, -0.6, 0] },
          { id: '3', label: 'Hydrogen Atom 2', description: 'อะตอมไฮโดรเจน ทำมุม 104.5 องศา', position: [1.2, -0.6, 0] }
        ]
      }
    }
  },
  {
    id: 'phy-pendulum-wave',
    subject: 'ฟิสิกส์',
    title: 'การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (Simple Harmonic Motion)',
    chapter: 'บทที่ 8: การสั่นและการเคลื่อนที่แบบคลื่น',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    description: 'การแกว่งกวัดของลูกตุ้มนาฬิกา แรงดึงกลับ คาบ และความถี่การแกว่ง',
    presetLesson: {
      id: 'phy-pendulum-data',
      subject: 'ฟิสิกส์',
      title: 'การเคลื่อนที่แบบฮาร์มอนิกอย่างง่าย (Simple Harmonic Motion)',
      chapter: 'บทที่ 8: การสั่นกวัด',
      gradeLevel: 'มัธยมศึกษาตอนปลาย',
      simpleExplanation: 'การเคลื่อนที่กลับไปกลับมารอบตำแหน่งสมดุลอย่างสม่ำเสมอ เช่น การแกว่งของลูกตุ้มนาฬิกาหรือการสั่นของสปริง โดยมีแรงพยายามดึงวัตถุกลับสู่ตำแหน่งศูนย์กลางเสมอ',
      deepExplanation: 'Simple Harmonic Motion (SHM) คือการเคลื่อนที่ซึ่งมีความเร่งแปรผันตรงกับระยะกระจัดจากตำแหน่งสมดุล แต่มีทิศทางตรงข้าม (a = -ω²x) สมการคาบการแกว่งของลูกตุ้มนาฬิกาคือ T = 2π√(L/g) แสดงว่าคาบการแกว่งขึ้นอยู่กับความยาวเชือก L และค่าความเร่งเนื่องจากแรงโน้มถ่วง g โดยไม่ขึ้นกับมวลของลูกตุ้ม',
      keyConcepts: [
        'คาบ (T): เวลาที่ใช้วัตถุแกว่งครบ 1 รอบ',
        'ความถี่ (f): จำนวนรอบการแกว่งในหนึ่งหน่วยเวลา (f = 1/T)',
        'ตำแหน่งสมดุลมีความเร็วสูงสุด แต่วัตถุไม่มีความเร่ง',
        'ตำแหน่งแอมพลิจูดสูงสุดมีความเร็วเป็นศูนย์ แต่มีความเร่งสูงสุด'
      ],
      realWorldExamples: [
        'ระบบลูกตุ้มนาฬิกาควบคุมการเดินเวลาของนาฬิกาอนาล็อก',
        'ระบบสปริงโช้คอัพซับแรงกระแทกในยานพาหนะ',
        'การสั่นสะเทือนของสายเครื่องดนตรีประเภทกำพวด'
      ],
      vocabulary: [
        { term: 'Amplitude', translation: 'แอมพลิจูด', meaning: 'ระยะกระจัดสูงสุดจากตำแหน่งสมดุล' },
        { term: 'Period', translation: 'คาบการแกว่ง', meaning: 'เวลาที่ใช้เคลื่อนที่ครบหนึ่งรอบเต็ม' },
        { term: 'Restoring Force', translation: 'แรงดึงกลับ', meaning: 'แรงที่ทำหน้าที่พาสารกลับสู่จุดสมดุล' }
      ],
      quiz: [
        {
          id: 1,
          question: 'หากเพิ่มความยาวเชือกของลูกตุ้มเป็น 4 เท่า คาบการแกว่ง T จะเปลี่ยนอย่างไร?',
          options: ['เท่าเดิม', 'เพิ่มขึ้นเป็น 2 เท่า', 'เพิ่มขึ้นเป็น 4 เท่า', 'ลดลงครึ่งหนึ่ง'],
          correctIndex: 1,
          explanation: 'จากสูตร T = 2π√(L/g) เมื่อ L เพิ่มขึ้น 4 เท่า การถอนรากที่สอง √4 = 2 เท่า'
        }
      ],
      funFacts: [
        'กาลิเลโอเป็นนักวิทยาศาสตร์คนแรกที่สังเกตพบว่า คาบการแกว่งของลูกตุ้มไม่ขึ้นอยู่กับระยะการแกว่งขนาดเล็ก'
      ],
      model3DConfig: {
        type: 'pendulum',
        primaryColor: '#0284c7',
        secondaryColor: '#f59e0b',
        accentColor: '#38bdf8',
        animationType: 'oscillate',
        hotspots: [
          { id: '1', label: 'Pivot Point', description: 'จุดหมุนตรึงส่วนบน', position: [0, 2, 0] },
          { id: '2', label: 'Bob Mass', description: 'ตุ้มมวลเกิดแรงดึงกลับ', position: [1.2, -1.2, 0] },
          { id: '3', label: 'Equilibrium Line', description: 'แนวตำแหน่งสมดุล', position: [0, -1.5, 0] }
        ]
      }
    }
  },
  {
    id: 'math-pythagoras',
    subject: 'คณิตศาสตร์',
    title: 'ทฤษฎีบทพีทาโกรัสและเรขาคณิตสามเหลี่ยมมุมฉาก',
    chapter: 'บทที่ 1: ความสัมพันธ์ทางเรขาคณิต',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
    description: 'สมการความสัมพันธ์พื้นที่บนด้านของสามเหลี่ยมมุมฉาก a² + b² = c²',
    presetLesson: {
      id: 'math-pythagoras-data',
      subject: 'คณิตศาสตร์',
      title: 'ทฤษฎีบทพีทาโกรัส (Pythagorean Theorem)',
      chapter: 'บทที่ 1: สามเหลี่ยมมุมฉาก',
      gradeLevel: 'มัธยมศึกษาตอนต้น',
      simpleExplanation: 'ในรูปสามเหลี่ยมที่มีมุมฉาก 90 องศา ผลรวมพื้นที่ของรูปสี่เหลี่ยมจัตุรัสบนด้านประกอบมุมฉากสองด้าน จะเท่ากับพื้นที่ของรูปสี่เหลี่ยมจัตุรัสบนด้านตรงข้ามมุมฉากพอดี',
      deepExplanation: 'ทฤษฎีบทพีทาโกรัสระบุว่า ในรูปสามเหลี่ยมมุมฉากใดๆ มีความสัมพันธ์ a² + b² = c² โดย c คือความยาวด้านตรงข้ามมุมฉาก และ a, b คือความยาวด้านประกอบมุมฉาก สมการนี้นำไปสู่การหาเวกเตอร์ระยะทางในระบบพิกัดฉาก 2 มิติและ 3 มิติ d = √((Δx)² + (Δy)² + (Δz)²)',
      keyConcepts: [
        'สมการพื้นฐาน: a² + b² = c²',
        'ด้าน c คือด้านที่ยาวที่สุดและอยู่ตรงข้ามมุม 90 องศาเสมอ',
        'อัตราส่วนความยาวจำนวนเต็มพบบ่อย: 3-4-5, 5-12-13, 8-15-17'
      ],
      realWorldExamples: [
        'การฉากเสาและกำแพงอาคารในการก่อสร้างด้วยเชือกอัตราส่วน 3-4-5',
        'การคำนวณระยะทางแนวทแยงมุมของหน้าจอแสดงผลคอมพิวเตอร์และโทรทัศน์',
        'การคำนวณพิกัดระยะทางตรงในระบบนำทางดาวเทียม GPS'
      ],
      vocabulary: [
        { term: 'Hypotenuse', translation: 'ด้านตรงข้ามมุมฉาก', meaning: 'ด้านที่ยาวที่สุดในสามเหลี่ยมมุมฉาก' },
        { term: 'Right Angle', translation: 'มุมฉาก', meaning: 'มุมที่มีขนาด 90 องศา' },
        { term: 'Pythagorean Triple', translation: 'ชุดสามจำนวนพีทาโกรัส', meaning: 'ชุดจำนวนเต็มที่สอดคล้องกับสมการ' }
      ],
      quiz: [
        {
          id: 1,
          question: 'สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 6 และ 8 หน่วย ด้านตรงข้ามมุมฉากยาวเท่าใด?',
          options: ['9 หน่วย', '10 หน่วย', '12 หน่วย', '14 หน่วย'],
          correctIndex: 1,
          explanation: 'c² = 6² + 8² = 36 + 64 = 100 ดังนั้น c = √100 = 10 หน่วย'
        }
      ],
      funFacts: [
        'ชาวอียิปต์โบราณใช้เชือกผูกปม 12 ช่วงเท่าๆ กันเพื่อสร้างมุมฉากในการรังวัดที่ดินหลังน้ำท่วมลุ่มแม่น้ำไนล์'
      ],
      model3DConfig: {
        type: 'geometry',
        primaryColor: '#3b82f6',
        secondaryColor: '#10b981',
        accentColor: '#ec4899',
        animationType: 'fold',
        hotspots: [
          { id: '1', label: 'Side a', description: 'ด้านประกอบมุมฉากแรก', position: [-1, 0, 0] },
          { id: '2', label: 'Side b', description: 'ด้านประกอบมุมฉากที่สอง', position: [0, -1, 0] },
          { id: '3', label: 'Hypotenuse c', description: 'ด้านตรงข้ามมุมฉาก c² = a² + b²', position: [0.5, 0.5, 0] }
        ]
      }
    }
  },
  {
    id: 'thai-traibhum',
    subject: 'ภาษาไทย',
    title: 'วรรณคดีไตรภูมิพระร่วง และวรรณศิลป์สุโขทัย',
    chapter: 'บทที่ 4: วรรณคดีมรดกทางวัฒนธรรม',
    thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: 'สมุดไทยโบราณ ลายรดน้ำ และคุณค่าทางวรรณศิลป์ของไตรภูมิพระร่วง',
    presetLesson: {
      id: 'thai-traibhum-data',
      subject: 'ภาษาไทย',
      title: 'ไตรภูมิพระร่วง (เตภูมิกถา)',
      chapter: 'วรรณคดีสมัยสุโขทัย',
      gradeLevel: 'มัธยมศึกษาตอนปลาย',
      simpleExplanation: 'วรรณคดีร้อยแก้วเล่มแรกของไทย แต่งโดยพระมหาธรรมราชาที่ 1 (พญาลิไทย) มุ่งสั่งสอนศีลธรรม ให้คนทำความดี ละเว้นความชั่ว ผ่านการอธิบายภพภูมิทั้งสาม',
      deepExplanation: 'เตภูมิกถา แต่งขึ้นเพื่อเทศนาโปรดพระมารดาและอบรมราษฎร คุณค่าทางวรรณศิลป์มีความโดดเด่นด้วยการใช้โวหารพรรณนา การเปรียบเทียบ (อุปมาโวหาร) สร้างจินตภาพเกี่ยวกับจักรวาลวิทยา คติธรรมเรื่องสังสารวัฏ และการรับรู้ทางประสาทสัมผัส สะท้อนอิทธิพลพุทธศาสนาต่อสังคมไทย',
      keyConcepts: [
        'ผู้แต่ง: พระมหาธรรมราชาที่ 1 (พญาลิไทย) สมัยสุโขทัย',
        'ลักษณะคำประพันธ์: ร้อยแก้วเทศนาพรรณนา',
        'ภพภูมิทั้ง 3: กามภูมิ รูปภูมิ และอรูปภูมิ'
      ],
      realWorldExamples: [
        'จิตรกรรมฝาผนังในวัดวาอารามไทยที่ได้รับอิทธิพลจากคติไตรภูมิ',
        'โวหารและศัพท์โบราณที่นำมาใช้ในงานวรรณกรรมไทยร่วมสมัย'
      ],
      vocabulary: [
        { term: 'กามภูมิ', translation: 'Kamabhumi', meaning: 'แดนที่ยังเกี่ยวข้องกับกามคุณ ได้แก่ มนุษย์ สวรรค์ นรก' },
        { term: 'อุปมาโวหาร', translation: 'Simile', meaning: 'โวหารเปรียบเทียบสิ่งหนึ่งกับอีกสิ่งหนึ่ง' },
        { term: 'สังสารวัฏ', translation: 'Samsara', meaning: 'การเวียนว่ายตายเกิดในภพภูมิต่างๆ' }
      ],
      quiz: [
        {
          id: 1,
          question: 'วรรณคดีเรื่องไตรภูมิพระร่วงแต่งขึ้นในสมัยใด?',
          options: ['สมัยสุโขทัย', 'สมัยอยุธยา', 'สมัยธนบุรี', 'สมัยรัตนโกสินทร์'],
          correctIndex: 0,
          explanation: 'แต่งโดยพญาลิไทยในสมัยสุโขทัยเพื่ออบรมศีลธรรมแก่ประชาชน'
        }
      ],
      funFacts: [
        'ไตรภูมิพระร่วงได้รับการขึ้นทะเบียนเอกสารมรดกความทรงจำแห่งชาติจากคัมภีร์อ้างอิงกว่า 30 เล่ม'
      ],
      model3DConfig: {
        type: 'sculpture',
        primaryColor: '#f59e0b',
        secondaryColor: '#d97706',
        accentColor: '#fef3c7',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'กามภูมิ', description: 'แดนมนุษย์ สวรรค์ และนรกภูมิ', position: [0, -1, 0] },
          { id: '2', label: 'รูปภูมิ', description: 'แดนรูปพรหม 16 ชั้น', position: [0, 0.3, 0] },
          { id: '3', label: 'อรูปภูมิ', description: 'แดนอรูปพรหม 4 ชั้น', position: [0, 1.5, 0] }
        ]
      }
    }
  },
  {
    id: 'eng-tenses-grammar',
    subject: 'ภาษาอังกฤษ',
    title: 'Present Perfect Tense & Aspect Analysis',
    chapter: 'Unit 4: Advanced English Grammar',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    description: 'โครงสร้างไวยากรณ์การใช้ Present Perfect ในการสื่อสารระดับสากล',
    presetLesson: {
      id: 'eng-tenses-data',
      subject: 'ภาษาอังกฤษ',
      title: 'Present Perfect Tense (Subject + have/has + V.3)',
      chapter: 'Unit 4: Grammar & Timeline',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'ใช้เล่าเหตุการณ์ที่เกิดขึ้นในอดีต แต่ยังมีผลลัพธ์ ประสบการณ์ หรือความเกี่ยวเนื่องเชื่อมโยงมาถึงเวลาปัจจุบัน',
      deepExplanation: 'Present Perfect Tense (S + have/has + Past Participle) ใช้สื่อสารใน 3 บริบทหลัก: 1) Experiential Aspect (ประสบการณ์ชีวิต) 2) Continuative Aspect (เหตุการณ์ดำเนินต่อเนื่องโดยมักใช้คู่กับ since หรือ for) 3) Resultative Aspect (เหตุการณ์ที่เพิ่งสิ้นสุดและส่งผลต่อสภาวะปัจจุบันอย่างชัดเจน)',
      keyConcepts: [
        'โครงสร้าง: Subject + have/has + Past Participle (V.3)',
        'คำระบุเวลาสำคัญ: since (จุดเริ่มต้น), for (ระยะเวลา), already, yet, ever, never',
        'ข้อแตกต่างจาก Past Simple: Past Simple เกิดและจบสิ้นลงแล้วในอดีตอย่างสมบูรณ์'
      ],
      realWorldExamples: [
        'I have lived in Thailand for ten years. (อยู่อาศัยมา 10 ปีและปัจจุบันยังอยู่)',
        'She has just submitted her examination. (เพิ่งส่งข้อสอบเสร็จสมบูรณ์)'
      ],
      vocabulary: [
        { term: 'Past Participle', translation: 'กริยาช่องที่ 3', meaning: 'รูปแบบกริยาสำหรับใช้ใน Perfect Tense' },
        { term: 'Duration', translation: 'ช่วงระยะเวลา', meaning: 'ความยาวของเวลาตั้งแต่เริ่มต้นจนถึงปัจจุบัน' },
        { term: 'Aspect', translation: 'ลักษณะทางไวยากรณ์', meaning: 'มิติของเวลาและการดำเนินไปของกริยา' }
      ],
      quiz: [
        {
          id: 1,
          question: 'ประโยคใดใช้ Present Perfect Tense ได้ถูกต้องตามหลักไวยากรณ์?',
          options: [
            'She has went to Tokyo yesterday.',
            'They have lived in Bangkok since 2018.',
            'He is studied English for two hours.',
            'I have saw that textbook last week.'
          ],
          correctIndex: 1,
          explanation: 'They + have + lived (V.3) + since + จุดเริ่มต้นปี 2018 ถูกต้องตามโครงสร้าง'
        }
      ],
      funFacts: [
        'ในภาษาอังกฤษแบบอเมริกัน มักใช้ Past Simple แทน Present Perfect ในภาษาพูดประจำวันเมื่อมีคำว่า just หรือ already'
      ],
      model3DConfig: {
        type: 'generic',
        primaryColor: '#8b5cf6',
        secondaryColor: '#ec4899',
        accentColor: '#a78bfa',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'Past Event', description: 'จุดเริ่มต้นในอดีต (Since)', position: [-1.5, 0, 0] },
          { id: '2', label: 'Duration Line', description: 'ระยะเวลารวม (For)', position: [0, 0.3, 0] },
          { id: '3', label: 'Present Result', description: 'ผลลัพธ์ในปัจจุบัน', position: [1.5, 0, 0] }
        ]
      }
    }
  },
  {
    id: 'soc-governance',
    subject: 'สังคมศึกษา',
    title: 'อำนาจอธิปไตยและการถ่วงดุลอำนาจ (Separation of Powers)',
    chapter: 'บทที่ 2: หน้าที่พลเมืองและการปกครอง',
    thumbnail: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
    description: 'หลักการแบ่งแยกและถ่วงดุลอำนาจ นิติบัญญัติ บริหาร และตุลาการ',
    presetLesson: {
      id: 'soc-governance-data',
      subject: 'สังคมศึกษา',
      title: 'อำนาจอธิปไตยและหลักการแบ่งแยกอำนาจ',
      chapter: 'บทที่ 2: หน้าที่พลเมือง',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'อำนาจสูงสุดในการปกครองประเทศเป็นของประชาชน โดยแบ่งออกเป็น 3 ฝ่าย ได้แก่ รัฐสภา (อกกฎหมาย) รัฐบาล (บริหารประเทศ) และศาล (พิจารณาคดี) เพื่อถ่วงดุลไม่ให้อำนาจตกอยู่กับฝ่ายใดฝ่ายหนึ่ง',
      deepExplanation: 'หลักการแบ่งแยกอำนาจ (Separation of Powers) มีจุดประสงค์เพื่อคุ้มครองสิทธิเสรีภาพของประชาชนจากการรวมอำนาจ ประกอบด้วย 1) อำนาจนิติบัญญัติ ผ่านทางรัฐสภา 2) อำนาจบริหาร ผ่านทางคณะรัฐมนตรี และ 3) อำนาจตุลาการ ผ่านทางระบบศาล โดยมีกลไกตรวจสอบและถ่วงดุลอำนาจ (Checks and Balances) ระหว่างกัน',
      keyConcepts: [
        'อำนาจอธิปไตยเป็นอำนาจสูงสุดในการปกครองรัฐ',
        'กลไกการตรวจสอบและถ่วงดุลอำนาจป้องกันการใช้อำนาจเกินขอบเขต',
        'หลักนิติธรรม (Rule of Law) สังคมอยู่ภายใต้กฎหมายเดียวกันอย่างเท่าเทียม'
      ],
      realWorldExamples: [
        'การอภิปรายไม่ไว้วางใจรัฐมนตรีโดยสภาผู้แทนราษฎร',
        'การพิจารณาวินิจฉัยความชอบด้วยรัฐธรรมนูญของกฎหมายโดยศาลรัฐธรรมนูญ'
      ],
      vocabulary: [
        { term: 'Sovereignty', translation: 'อำนาจอธิปไตย', meaning: 'อำนาจสูงสุดในการปกครองประเทศ' },
        { term: 'Legislative', translation: 'นิติบัญญัติ', meaning: 'ฝ่ายที่มีหน้าที่ในการตรากฎหมาย' },
        { term: 'Judiciary', translation: 'ตุลาการ', meaning: 'ฝ่ายที่มีหน้าที่ในการพิจารณาพิพากษาคดี' }
      ],
      quiz: [
        {
          id: 1,
          question: 'องค์กรใดทำหน้าที่ใช้อำนาจนิติบัญญัติในการออกกฎหมายของประเทศไทย?',
          options: ['คณะรัฐมนตรี', 'รัฐสภา', 'ศาลฎีกา', 'คณะกรรมการการเลือกตั้ง'],
          correctIndex: 1,
          explanation: 'รัฐสภาประกอบด้วยสภาผู้แทนราษฎรและวุฒิสภา ทำหน้าที่ตรากฎหมายของรัฐ'
        }
      ],
      funFacts: [
        'แนวคิดเรื่องการแบ่งแยกอำนาจอธิปไตยได้รับการเสนอโดยมองเตสกีเออ นักคิดชาวฝรั่งเศสในศตวรรษที่ 18'
      ],
      model3DConfig: {
        type: 'monument',
        primaryColor: '#0ea5e9',
        secondaryColor: '#f59e0b',
        accentColor: '#10b981',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'Legislative', description: 'รัฐสภา ออกกฎหมาย ตรวจสอบบริหาร', position: [-1.2, 0.8, 0] },
          { id: '2', label: 'Executive', description: 'คณะรัฐมนตรี บริหารแผ่นดิน', position: [1.2, 0.8, 0] },
          { id: '3', label: 'Judiciary', description: 'ศาล พิจารณาพิพากษาคดีความ', position: [0, -1.2, 0] }
        ]
      }
    }
  },
  {
    id: 'his-sukhothai-inscription',
    subject: 'ประวัติศาสตร์',
    title: 'ศิลาจารึกหลักที่ 1 และพัฒนาการประวัติศาสตร์สุโขทัย',
    chapter: 'บทที่ 3: อาณาจักรไทยในอดีต',
    thumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    description: 'บันทึกประวัติศาสตร์การประดิษฐ์ลายสือไทย สภาพเศรษฐกิจ สังคม และการปกครองสุโขทัย',
    presetLesson: {
      id: 'his-sukhothai-data',
      subject: 'ประวัติศาสตร์',
      title: 'ศิลาจารึกพ่อขุนรามคำแหงมหาราช (หลักที่ 1)',
      chapter: 'ประวัติศาสตร์สุโขทัย',
      gradeLevel: 'มัธยมศึกษาตอนต้น',
      simpleExplanation: 'หลักฐานทางประวัติศาสตร์สำคัญที่บันทึกเรื่องราวการประดิษฐ์อักษรไทยใน พ.ศ. 1826 สภาพชีวิตความเป็นอยู่ และระบบการปกครองแบบพ่อปกครองลูกในสมัยสุโขทัย',
      deepExplanation: 'ศิลาจารึกหลักที่ 1 ทำจากหินชนวนรูปแท่นสี่เหลี่ยมยอดแหลม จารึกด้วยอักษรไทยสุโขทัย บันทึกพระราชประวัติ สภาพเศรษฐกิจการค้าเสรี สังคม วัฒนธรรม และพระพุทธศาสนา ได้รับการขึ้นทะเบียนเป็นมรดกความทรงจำแห่งโลก (Memory of the World) โดยยูเนสโก ในปี พ.ศ. 2546',
      keyConcepts: [
        'ประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826',
        'สะท้อนการปกครองแบบปิตุลาธิปไตย (พ่อปกครองลูก)',
        'สะท้อนระบบการค้าแบบเสรีไร้ภาษีจังกอบ'
      ],
      realWorldExamples: [
        'พัฒนาการของอักษร พยัญชนะ สระ ภาษาไทยที่ใช้อ่านเขียนในปัจจุบัน',
        'แนวคิดระบบรับเรื่องร้องเรียนร้องทุกข์จากประชาชนในหน่วยงานรัฐ'
      ],
      vocabulary: [
        { term: 'Inscription', translation: 'ศิลาจารึก', meaning: 'การสลักข้อความลงบนแผ่นหินเพื่อเป็นหลักฐาน' },
        { term: 'Memory of the World', translation: 'มรดกความทรงจำแห่งโลก', meaning: 'การยกย่องเอกสารสำคัญโดยยูเนสโก' }
      ],
      quiz: [
        {
          id: 1,
          question: 'พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นใน พ.ศ. ใด?',
          options: ['พ.ศ. 1780', 'พ.ศ. 1826', 'พ.ศ. 1900', 'พ.ศ. 2000'],
          correctIndex: 1,
          explanation: 'ตามข้อความในศิลาจารึกระบุว่าลายสือไทยประดิษฐ์ขึ้นใน พ.ศ. 1826'
        }
      ],
      funFacts: [
        'ศิลาจารึกหลักที่ 1 ถูกค้นพบโดยพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 4) ณ เมืองเก่าสุโขทัย'
      ],
      model3DConfig: {
        type: 'sculpture',
        primaryColor: '#0284c7',
        secondaryColor: '#38bdf8',
        accentColor: '#f59e0b',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'อักษรไทยโบราณ', description: 'ลายสือไทยสลักบนแผ่นหินชนวน', position: [0, 0.5, 0.4] },
          { id: '2', label: 'ยอดแท่นจารึก', description: 'ทรงสี่เหลี่ยมยอดตัดแหลม', position: [0, 1.4, 0] }
        ]
      }
    }
  },
  {
    id: 'geo-map-projections',
    subject: 'ภูมิศาสตร์',
    title: 'พิกัดภูมิศาสตร์ แผนที่ และภาพถ่ายทางอากาศ',
    chapter: 'บทที่ 1: เครื่องมือทางภูมิศาสตร์',
    thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
    description: 'เส้นละติจูด ลองจิจูด และเทคโนโลยีสารสนเทศภูมิศาสตร์ GIS/Remote Sensing',
    presetLesson: {
      id: 'geo-map-data',
      subject: 'ภูมิศาสตร์',
      title: 'พิกัดภูมิศาสตร์และเทคโนโลยี GIS',
      chapter: 'บทที่ 1: เครื่องมือทางภูมิศาสตร์',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'การระบุตำแหน่งบนโลกด้วยเส้นสมมติ ละติจูด (เส้นแนวนอนบอกแนวดิ่ง) และ ลองจิจูด (เส้นแนวตั้งบอกเวลา) ร่วมกับการใช้ระบบสารสนเทศภูมิศาสตร์ GIS ในการวิเคราะห์พื้นที่',
      deepExplanation: 'พิกัดภูมิศาสตร์กำหนดตำแหน่งบนทรงกลมโลกด้วยค่ามุม ละติจูด (Latitude: 0° ถึง 90° น./ใต้) และ ลองจิจูด (Longitude: 0° ถึง 180° ต./ตก.) ปัจจุบันนำมาประยุกต์ใช้ใน Geographic Information System (GIS) ซึ่งเป็นระบบจัดเก็บ จัดการ และวิเคราะห์ข้อมูลเชิงพื้นที่ร่วมกับข้อมูลอธิบาย (Attribute Data)',
      keyConcepts: [
        'เส้นศูนย์สูตร (Equator: 0° Latitude) แบ่งซีกโลกเหนือ-ใต้',
        'เส้นเมริเดียนแรก (Prime Meridian: 0° Longitude) แบ่งซีกโลกตะวันออก-ตะวันตก',
        'ระบบ GIS วิเคราะห์ข้อมูลแบบซ้อนทับชั้นข้อมูล (Layer Stacking)'
      ],
      realWorldExamples: [
        'การใช้แอปพลิเคชันแผนที่นำทางในการเดินทางตามเวลาจริง',
        'การวางแผนรับมือภัยธรรมชาติและการจัดการใช้ประโยชน์ที่ดินของเมือง'
      ],
      vocabulary: [
        { term: 'Latitude', translation: 'ละติจูด', meaning: 'เส้นพิกัดแนวนอนกำหนดตำแหน่งเหนือ-ใต้' },
        { term: 'Longitude', translation: 'ลองจิจูด', meaning: 'เส้นพิกัดแนวตั้งกำหนดตำแหน่งและเขตเวลา' },
        { term: 'GIS', translation: 'สารสนเทศภูมิศาสตร์', meaning: 'ระบบคอมพิวเตอร์วิเคราะห์ข้อมูลเชิงพื้นที่' }
      ],
      quiz: [
        {
          id: 1,
          question: 'เส้นพิกัดภูมิศาสตร์ใดที่ใช้เป็นเกณฑ์กำหนดเวลามาตรฐานโลก (GMT)?',
          options: ['เส้นศูนย์สูตร', 'เส้นเมริเดียนแรก (0°)', 'เส้นทอปิกออฟแคนเซอร์', 'เส้นขั้วโลกเหนือ'],
          correctIndex: 1,
          explanation: 'เส้นเมริเดียนแรก ลากผ่านตำบลกริตช์ กรุงลอนดอน เป็นเกณฑ์เวลา 0° ลองจิจูด'
        }
      ],
      funFacts: [
        'ลองจิจูดทุกๆ 15 องศา จะทำให้เวลาท้องถิ่นแตกต่างกัน 1 ชั่วโมงเต็ม'
      ],
      model3DConfig: {
        type: 'map',
        primaryColor: '#0ea5e9',
        secondaryColor: '#10b981',
        accentColor: '#f59e0b',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'Equator (0°)', description: 'เส้นศูนย์สูตรแบ่งซีกโลกเหนือและใต้', position: [0, 0, 1.6] },
          { id: '2', label: 'Prime Meridian', description: 'เส้นเมริเดียนแรกกำหนดเวลาโลก', position: [0, 1.2, 1.2] }
        ]
      }
    }
  },
  {
    id: 'comp-architecture',
    subject: 'คอมพิวเตอร์',
    title: 'สถาปัตยกรรมคอมพิวเตอร์และหน่วยประมวลผลกลาง (CPU)',
    chapter: 'บทที่ 2: ระบบฮาร์ดแวร์และโครงสร้างคอมพิวเตอร์',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    description: 'โครงสร้างไมโครโพรเซสเซอร์ ALU หน่วยควบคุม และวงรอบ Fetch-Decode-Execute',
    presetLesson: {
      id: 'comp-cpu-data',
      subject: 'คอมพิวเตอร์',
      title: 'โครงสร้างและการทำงานของ CPU (Central Processing Unit)',
      chapter: 'บทที่ 2: ระบบฮาร์ดแวร์',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'ซีพียูเปรียบเสมือนสมองของคอมพิวเตอร์ ทำหน้าที่คำนวณตัวเลข ประมวลผลคำสั่งตามโปรแกรม และควบคุมการทำงานของอุปกรณ์ฮาร์ดแวร์ทั้งหมด',
      deepExplanation: 'CPU ทำงานตามสถาปัตยกรรม von Neumann ประกอบด้วย 3 ส่วนหลัก: 1) Control Unit (CU) ควบคุมลำดับคำสั่ง 2) Arithmetic Logic Unit (ALU) คำนวณทางคณิตศาสตร์และตรรกศาสตร์ 3) Register บันทึกข้อมูลความเร็วสูง วงรอบการทำงานคือ Machine Cycle (Fetch, Decode, Execute, Store)',
      keyConcepts: [
        'Control Unit (CU): ควบคุมทิศทางสัญญาณและลำดับคำสั่ง',
        'ALU: ดำเนินการคำนวณคณิตศาสตร์และเปรียบเทียบตรรกะ',
        'Machine Cycle: ดึงคำสั่ง แปลความหมาย ประมวลผล และบันทึกผล'
      ],
      realWorldExamples: [
        'ความเร็วการประมวลผลของสมาร์ทโฟนและคอมพิวเตอร์กราฟิก',
        'การทำงานของไมโครคอนโทรลเลอร์ในระบบสมองกลฝังตัวและอุปกรณ์ IoT'
      ],
      vocabulary: [
        { term: 'ALU', translation: 'หน่วยคำนวณและตรรกะ', meaning: 'ส่วนประมวลผลตัวเลขและตรรกศาสตร์' },
        { term: 'Control Unit', translation: 'หน่วยควบคุม', meaning: 'ส่วนควบคุมจังหวะและลำดับการทำงาน' },
        { term: 'Clock Speed', translation: 'ความเร็วสัญญาณนาฬิกา', meaning: 'ความเร็วรอบในการประมวลผลต่อวินาที (GHz)' }
      ],
      quiz: [
        {
          id: 1,
          question: 'หน่วยใดใน CPU ที่ทำหน้าที่คำนวณทางคณิตศาสตร์และเปรียบเทียบตรรกะ?',
          options: ['Control Unit', 'Arithmetic Logic Unit (ALU)', 'RAM Memory', 'Cache Level 3'],
          correctIndex: 1,
          explanation: 'ALU ทำหน้าที่ประมวลผลตัวเลขและเงื่อนไขทางตรรกศาสตร์โดยตรง'
        }
      ],
      funFacts: [
        'ชิปซีพียูระดับพรีเมียมในปัจจุบันบรรจุทรานซิสเตอร์ขนาดนาโนเมตรมากถึงหลายหมื่นล้านตัว'
      ],
      model3DConfig: {
        type: 'chip',
        primaryColor: '#0284c7',
        secondaryColor: '#38bdf8',
        accentColor: '#f59e0b',
        animationType: 'rotate',
        hotspots: [
          { id: '1', label: 'CPU Core', description: 'แกนประมวลผลหลักประมวลผลคำสั่ง', position: [0, 0.2, 0] },
          { id: '2', label: 'Contact Pins', description: 'เข็มสัญญาณเชื่อมต่อเมนบอร์ด', position: [0, -0.2, 0.8] }
        ]
      }
    }
  },
  {
    id: 'art-perspective',
    subject: 'ศิลปะ',
    title: 'ทัศนธาตุและทฤษฎีเปอร์สเปกทีฟ (Perspective Drawing)',
    chapter: 'บทที่ 3: หลักการทัศนศิลป์และการวาดภาพ',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    description: 'เส้นระดับสายตา (Eye Level Line) และจุดรวมสายตา (Vanishing Point) ในมิติทางศิลปะ',
    presetLesson: {
      id: 'art-perspective-data',
      subject: 'ศิลปะ',
      title: 'ทฤษฎีเปอร์สเปกทีฟและทัศนธาตุ (Perspective in Art)',
      chapter: 'บทที่ 3: การวาดภาพลงน้ำหนักมิติ',
      gradeLevel: 'มัธยมศึกษาตอนต้น / ตอนปลาย',
      simpleExplanation: 'เทคนิคการวาดภาพบนแผ่นกระดาษ 2 มิติ ให้ดูลึก มีระยะใกล้-ไกล และมีความเป็น 3 มิติ สมจริงเหมือนสายตามนุษย์มองเห็น',
      deepExplanation: 'การวาดภาพเปอร์สเปกทีฟอาศัยหลักเรขาคณิตทัศนศิลป์ ประกอบด้วย เส้นระดับสายตา (Horizon Line / Eye Level) และจุดรวมสายตา (Vanishing Point - VP) แบ่งออกเป็น 1 จุด (One-point Perspective), 2 จุด (Two-point Perspective) และ 3 จุด นำเสนอความสัมพันธ์ระหว่างแสง เงา น้ำหนัก และระยะมิติวัตถุ',
      keyConcepts: [
        'จุดรวมสายตา (Vanishing Point): จุดที่เส้นทแยงมุมลู่ไปรวมกัน',
        'เส้นระดับสายตา (Horizon Line): เส้นแบ่งระดับสายตาผู้มอง',
        'การสร้างมิติลึกด้วยน้ำหนักอ่อน-แก่ของแสงและเงา'
      ],
      realWorldExamples: [
        'ภาพรางรถไฟหรือเสาไฟฟ้าข้างถนนที่ดูลีบเล็กลงเมื่อมองไกลออกไป',
        'การออกแบบฉากทัศน์ในภาพยนตร์แอนิเมชันและสถาปัตยกรรม'
      ],
      vocabulary: [
        { term: 'Vanishing Point', translation: 'จุดรวมสายตา', meaning: 'จุดลู่รวมของเส้นสายตาในภาพเปอร์สเปกทีฟ' },
        { term: 'Horizon Line', translation: 'เส้นระดับสายตา', meaning: 'เส้นแนวนอนอ้างอิงระดับสายตาของผู้ดู' }
      ],
      quiz: [
        {
          id: 1,
          question: 'จุดที่เส้นขนานในภาพเปอร์สเปกทีฟวิ่งไปลู่รวมกันเรียกว่าอะไร?',
          options: ['จุดศูนย์กลาง', 'จุดรวมสายตา (Vanishing Point)', 'จุดตัดมุมฉาก', 'จุดสะท้อนแสง'],
          correctIndex: 1,
          explanation: 'Vanishing Point คือจุดบนเส้นระดับสายตาที่เส้นนำสายตาไปลู่รวมกันเกิดมิติลึก'
        }
      ],
      funFacts: [
        'ศิลปินยุคเรอเนซองส์ เช่น เลโอนาร์โด ดา วินชี เป็นผู้พัฒนาทฤษฎีเปอร์สเปกทีฟทางคณิตศาสตร์ในภาพเขียนอย่างสมบูรณ์แบบ'
      ],
      model3DConfig: {
        type: 'geometry',
        primaryColor: '#ec4899',
        secondaryColor: '#f59e0b',
        accentColor: '#8b5cf6',
        animationType: 'fold',
        hotspots: [
          { id: '1', label: 'Horizon Line', description: 'เส้นอ้างอิงระดับสายตา', position: [0, 1, 0] },
          { id: '2', label: 'Vanishing Point', description: 'จุดรวมสายตาสร้างมิติลึก', position: [0, 0, 0] }
        ]
      }
    }
  }
];
