import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Model3DConfig } from '../types';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Camera, Eye, Sparkles, Layers, RefreshCw } from 'lucide-react';

interface ThreeARViewerProps {
  config: Model3DConfig;
  title?: string;
  subject?: string;
}

export const ThreeARViewer: React.FC<ThreeARViewerProps> = ({ config, title, subject }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isArMode, setIsArMode] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const reqIdRef = useRef<number | null>(null);

  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    // Clear element
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(config.primaryColor || '#0284c7', 2, 10);
    pointLight.position.set(-3, 2, 2);
    scene.add(pointLight);

    // Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    groupRef.current = mainGroup;

    // Build Geometry based on model type
    buildModelGeometry(mainGroup, config, wireframe);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      if (isPlaying && mainGroup) {
        const elapsedTime = clock.getElapsedTime();

        if (config.animationType === 'pulse') {
          const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
          mainGroup.scale.set(scale, scale, scale);
          mainGroup.rotation.y += 0.005;
        } else if (config.animationType === 'oscillate') {
          mainGroup.rotation.z = Math.sin(elapsedTime * 2.5) * 0.4;
          mainGroup.rotation.y += 0.003;
        } else if (config.animationType === 'fold') {
          mainGroup.rotation.y = Math.sin(elapsedTime) * 0.8;
          mainGroup.rotation.x = Math.cos(elapsedTime * 0.7) * 0.3;
        } else {
          // Default rotate
          mainGroup.rotation.y += 0.01;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 450;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [config, wireframe]);

  // Handle AR Mode Camera Video Stream
  useEffect(() => {
    if (isArMode) {
      setCameraError(null);
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.warn('AR Camera access error:', err);
          setCameraError('ไม่สามารถเข้าถึงกล้องสำหรับโหมด AR ได้ (กรุณาอนุญาตสิทธิ์การใช้กล้อง)');
        });
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [isArMode]);

  // Update Zoom
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 5.5 / zoomLevel;
    }
  }, [zoomLevel]);

  // Mouse / Touch Drag Rotation Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !groupRef.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    groupRef.current.rotation.y += deltaX * 0.008;
    groupRef.current.rotation.x += deltaY * 0.008;

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !groupRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

    groupRef.current.rotation.y += deltaX * 0.008;
    groupRef.current.rotation.x += deltaY * 0.008;

    previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900 border border-sky-100/20 shadow-2xl group">
      {/* Background WebAR Camera Feed */}
      {isArMode && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          playsInline
          muted
        />
      )}

      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="relative z-10 w-full h-[380px] sm:h-[450px] cursor-grab active:cursor-grabbing select-none"
      />

      {/* AR Camera Overlay Grid Indicator */}
      {isArMode && (
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-dashed border-sky-400/50 rounded-2xl animate-pulse" />
          <div className="absolute top-4 left-4 bg-sky-500/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            WebAR Active - วางโมเดลบนฉากจริง
          </div>
        </div>
      )}

      {/* Camera Error Alert */}
      {cameraError && (
        <div className="absolute top-4 left-4 right-4 z-20 bg-rose-500/90 text-white text-xs px-4 py-2.5 rounded-xl backdrop-blur-md shadow-lg">
          {cameraError}
        </div>
      )}

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="bg-sky-500/90 backdrop-blur-md text-white font-medium text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          3D WebAR Interactive
        </span>
        {subject && (
          <span className="bg-slate-800/80 backdrop-blur-md text-sky-200 text-xs px-3 py-1.5 rounded-full border border-sky-500/30">
            {subject}
          </span>
        )}
      </div>

      {/* Hotspots Overlay Buttons */}
      {config.hotspots && config.hotspots.length > 0 && (
        <div className="absolute top-16 right-4 z-20 flex flex-col gap-2 max-w-[200px]">
          <div className="text-[10px] font-semibold text-sky-200 tracking-wider uppercase bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-slate-700">
            จุดสังเกต 3D (Hotspots)
          </div>
          {config.hotspots.map((hs) => {
            const isSelected = activeHotspot === hs.id;
            return (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(isSelected ? null : hs.id)}
                className={`text-left px-3 py-1.5 rounded-xl text-xs transition-all backdrop-blur-md border shadow-md flex items-start gap-1.5 ${
                  isSelected
                    ? 'bg-sky-500 text-white border-sky-300 font-medium scale-105'
                    : 'bg-slate-900/80 text-sky-100 hover:bg-slate-800/90 border-slate-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0 animate-pulse" />
                <div>
                  <div className="font-semibold">{hs.label}</div>
                  {isSelected && (
                    <div className="text-[11px] text-sky-100 mt-0.5 leading-snug">
                      {hs.description}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2 p-2 bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl">
        {/* Left Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'หยุดเคลื่อนไหว' : 'หมุนโมเดล'}
            className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-sky-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={() => {
              if (groupRef.current) {
                groupRef.current.rotation.set(0, 0, 0);
              }
              setZoomLevel(1);
            }}
            title="รีเซ็ตมุมมอง"
            className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setWireframe(!wireframe)}
            title="โหมดโครงร่าง (Wireframe)"
            className={`p-2 rounded-xl transition-colors ${
              wireframe ? 'bg-sky-500/30 text-sky-300 font-semibold' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>

        {/* Center Hint */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-300">
          <Eye className="w-3.5 h-3.5 text-sky-400" />
          <span>ลากเพื่อหมุน 360°</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-slate-800 rounded-xl px-1">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
              className="p-1.5 text-slate-300 hover:text-white"
              title="ย่อ"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-sky-300 px-1.5">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.2))}
              className="p-1.5 text-slate-300 hover:text-white"
              title="ขยาย"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* AR Toggle Button */}
          <button
            onClick={() => setIsArMode(!isArMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all shadow-md ${
              isArMode
                ? 'bg-rose-500 hover:bg-rose-600 text-white'
                : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{isArMode ? 'ปิด AR' : 'โหมด WebAR'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to build 3D mesh geometries for each subject
function buildModelGeometry(group: THREE.Group, config: Model3DConfig, wireframe: boolean) {
  const pColor = new THREE.Color(config.primaryColor || '#0284c7');
  const sColor = new THREE.Color(config.secondaryColor || '#38bdf8');
  const aColor = new THREE.Color(config.accentColor || '#f59e0b');

  switch (config.type) {
    case 'cell': {
      // Cell Wall / Outer Membrane
      const cellGeo = new THREE.SphereGeometry(1.6, 32, 32);
      const cellMat = new THREE.MeshPhongMaterial({
        color: pColor,
        transparent: true,
        opacity: 0.45,
        wireframe,
        shininess: 90,
      });
      const cellMesh = new THREE.Mesh(cellGeo, cellMat);
      group.add(cellMesh);

      // Nucleus
      const nucGeo = new THREE.SphereGeometry(0.65, 24, 24);
      const nucMat = new THREE.MeshStandardMaterial({
        color: aColor,
        roughness: 0.3,
        metalness: 0.2,
      });
      const nucMesh = new THREE.Mesh(nucGeo, nucMat);
      nucMesh.position.set(0.1, 0.1, 0);
      group.add(nucMesh);

      // Chloroplasts (Green pods)
      for (let i = 0; i < 5; i++) {
        const podGeo = new THREE.CapsuleGeometry(0.18, 0.4, 8, 16);
        const podMat = new THREE.MeshStandardMaterial({ color: 0x10b981 });
        const podMesh = new THREE.Mesh(podGeo, podMat);
        const angle = (i / 5) * Math.PI * 2;
        podMesh.position.set(Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, (i % 2 === 0 ? 0.3 : -0.3));
        podMesh.rotation.z = angle;
        group.add(podMesh);
      }
      break;
    }

    case 'molecule': {
      // Water / Chemical Molecule (Central Atom + Hydrogen Kids + Bond Cylinders)
      const centerGeo = new THREE.SphereGeometry(0.7, 32, 32);
      const centerMat = new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.2 });
      const centerMesh = new THREE.Mesh(centerGeo, centerMat);
      group.add(centerMesh);

      const hGeo = new THREE.SphereGeometry(0.45, 24, 24);
      const hMat = new THREE.MeshStandardMaterial({ color: sColor, roughness: 0.2 });

      // H1
      const h1 = new THREE.Mesh(hGeo, hMat);
      h1.position.set(-1.3, -0.7, 0);
      group.add(h1);

      // H2
      const h2 = new THREE.Mesh(hGeo, hMat);
      h2.position.set(1.3, -0.7, 0);
      group.add(h2);

      // Bonds
      const bondGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.4, 16);
      const bondMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.5 });

      const b1 = new THREE.Mesh(bondGeo, bondMat);
      b1.position.set(-0.65, -0.35, 0);
      b1.rotation.z = Math.PI / 3;
      group.add(b1);

      const b2 = new THREE.Mesh(bondGeo, bondMat);
      b2.position.set(0.65, -0.35, 0);
      b2.rotation.z = -Math.PI / 3;
      group.add(b2);
      break;
    }

    case 'pendulum': {
      // Pendulum Stand & Bob
      const topGeo = new THREE.BoxGeometry(2.4, 0.15, 0.4);
      const topMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
      const topMesh = new THREE.Mesh(topGeo, topMat);
      topMesh.position.set(0, 1.8, 0);
      group.add(topMesh);

      // String
      const lineGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.8, 8);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const lineMesh = new THREE.Mesh(lineGeo, lineMat);
      lineMesh.position.set(0, 0.4, 0);
      group.add(lineMesh);

      // Bob Sphere
      const bobGeo = new THREE.SphereGeometry(0.5, 32, 32);
      const bobMat = new THREE.MeshStandardMaterial({ color: pColor, metalness: 0.6, roughness: 0.2 });
      const bobMesh = new THREE.Mesh(bobGeo, bobMat);
      bobMesh.position.set(0, -1.0, 0);
      group.add(bobMesh);
      break;
    }

    case 'chip': {
      // Microprocessor CPU
      const baseGeo = new THREE.BoxGeometry(2.2, 0.15, 2.2);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      group.add(baseMesh);

      // Die Core
      const dieGeo = new THREE.BoxGeometry(1.0, 0.08, 1.0);
      const dieMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.1 });
      const dieMesh = new THREE.Mesh(dieGeo, dieMat);
      dieMesh.position.set(0, 0.12, 0);
      group.add(dieMesh);

      // Pins array
      for (let x = -1; x <= 1; x += 0.2) {
        for (let z = -1; z <= 1; z += 0.2) {
          if (Math.abs(x) > 0.8 || Math.abs(z) > 0.8) {
            const pinGeo = new THREE.BoxGeometry(0.05, 0.25, 0.05);
            const pinMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9 });
            const pinMesh = new THREE.Mesh(pinGeo, pinMat);
            pinMesh.position.set(x, -0.15, z);
            group.add(pinMesh);
          }
        }
      }
      break;
    }

    case 'sculpture': {
      // Thai Inscription Stone Monument
      const pillarGeo = new THREE.BoxGeometry(1.0, 2.4, 0.6);
      const pillarMat = new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.7 });
      const pillarMesh = new THREE.Mesh(pillarGeo, pillarMat);
      group.add(pillarMesh);

      // Pyramid top
      const topGeo = new THREE.ConeGeometry(0.7, 0.8, 4);
      const topMat = new THREE.MeshStandardMaterial({ color: aColor, roughness: 0.5 });
      const topMesh = new THREE.Mesh(topGeo, topMat);
      topMesh.position.set(0, 1.6, 0);
      topMesh.rotation.y = Math.PI / 4;
      group.add(topMesh);

      // Pedestal Base
      const baseGeo = new THREE.BoxGeometry(1.6, 0.4, 1.2);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.set(0, -1.3, 0);
      group.add(baseMesh);
      break;
    }

    case 'geometry':
    default: {
      // Mathematical Polyhedron / Geometry
      const geo = new THREE.IcosahedronGeometry(1.4, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: pColor,
        roughness: 0.2,
        metalness: 0.3,
        wireframe,
      });
      const mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);

      // Outer wireframe cage
      const cageGeo = new THREE.IcosahedronGeometry(1.7, 1);
      const cageMat = new THREE.MeshBasicMaterial({ color: sColor, wireframe: true, transparent: true, opacity: 0.4 });
      const cageMesh = new THREE.Mesh(cageGeo, cageMat);
      group.add(cageMesh);
      break;
    }
  }
}
