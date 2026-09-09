import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeIslamicGeometryProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeIslamicGeometry: React.FC<ThreeIslamicGeometryProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all Islamic geometry
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Islamic Star Polyhedron (Interlocking Octahedra / 8-pointed 3D Star)
    const starGroup = new THREE.Group();

    // Golden material with subtle metallic sheen
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const goldWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xf3e5ab,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const emeraldMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c4b37,
      metalness: 0.6,
      roughness: 0.35,
      transparent: true,
      opacity: 0.85,
    });

    // Create 2 nested intersecting cubes/octahedra forming an 8-pointed 3D Star
    const octGeo1 = new THREE.OctahedronGeometry(1.6, 0);
    const octMesh1 = new THREE.Mesh(octGeo1, emeraldMaterial);
    const octWire1 = new THREE.Mesh(octGeo1, goldWireMaterial);

    const octGeo2 = new THREE.OctahedronGeometry(1.6, 0);
    const octMesh2 = new THREE.Mesh(octGeo2, goldMaterial);
    octMesh2.rotation.y = Math.PI / 4;
    octMesh2.rotation.x = Math.PI / 4;
    octMesh2.scale.set(0.9, 0.9, 0.9);

    const icosaGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const icosaWire = new THREE.Mesh(icosaGeo, goldWireMaterial);

    starGroup.add(octMesh1);
    starGroup.add(octWire1);
    starGroup.add(octMesh2);
    starGroup.add(icosaWire);
    masterGroup.add(starGroup);

    // 2. Concentric Sacred Orbital Rings
    const ringGroup = new THREE.Group();
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x58d68d,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const ringGeo1 = new THREE.TorusGeometry(2.5, 0.02, 16, 64);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.015, 16, 64);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;

    const ringGeo3 = new THREE.TorusGeometry(3.1, 0.01, 16, 64);
    const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat1);
    ringMesh3.rotation.x = -Math.PI / 4;

    ringGroup.add(ringMesh1);
    ringGroup.add(ringMesh2);
    ringGroup.add(ringMesh3);
    masterGroup.add(ringGroup);

    // 3. Floating Golden Stardust / Amber Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      particleScales[i] = Math.random() * 0.04 + 0.01;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfce8a6,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a3324, 1.5);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xffdf78, 2.5, 20);
    goldPointLight.position.set(4, 4, 5);
    scene.add(goldPointLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 2, 20);
    emeraldPointLight.position.set(-4, -3, 3);
    scene.add(emeraldPointLight);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      masterGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      masterGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + mouseY;

      // Inner star rotation counter
      starGroup.rotation.z = Math.cos(elapsedTime * 0.2) * 0.2;
      starGroup.rotation.y = elapsedTime * 0.35;

      // Orbiting rings
      ringMesh1.rotation.z = elapsedTime * 0.15;
      ringMesh2.rotation.z = -elapsedTime * 0.2;
      ringMesh3.rotation.y = elapsedTime * 0.12;

      // Floating gentle breathing
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      starGroup.scale.set(scale, scale, scale);

      // Particle subtle swirl
      particles.rotation.y = -elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth && newHeight) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      id="three-geometry-canvas-wrapper"
      ref={mountRef}
      className={`relative w-full h-full min-h-[280px] flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
};
