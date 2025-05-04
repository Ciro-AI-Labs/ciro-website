import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  connections: number[];
  originalX?: number;
  originalY?: number;
  isFixed?: boolean;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Handle window resize and update dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Set canvas dimensions to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Track mouse position and state for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    const handleMouseEnter = () => setIsMouseInCanvas(true);
    const handleMouseLeave = () => {
      setIsMouseInCanvas(false);
      setIsMouseDown(false);
    };
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    
    // Create particles
    const particles: Particle[] = [];
    
    // Create a much sparser grid of fixed points - adjusted for screen size
    const isSmallScreen = window.innerWidth < 768;
    const gridSize = isSmallScreen 
      ? Math.min(80, Math.max(50, Math.floor(window.innerWidth / 10)))
      : Math.min(120, Math.max(80, Math.floor(window.innerWidth / 15)));
      
    const rows = Math.ceil(canvas.height / gridSize) + 1;
    const cols = Math.ceil(canvas.width / gridSize) + 1;
    
    // Minimum number of points for small screens
    const minPointsForSmallScreen = isSmallScreen ? 25 : 0;
    
    // Generate minimal fixed grid points in a clean pattern
    // Ensure at least a minimum number of grid points on small screens
    let fixedPointCount = 0;
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Skip some grid points on larger screens for sparser look
        // But ensure minimum density on smaller screens
        if (!isSmallScreen && Math.random() > 0.8 && fixedPointCount > minPointsForSmallScreen) continue;
        
        // Add slight variation to grid positions
        const jitter = gridSize * 0.1; // Less jitter for cleaner look
        const posX = x * gridSize + (Math.random() * jitter - jitter/2);
        const posY = y * gridSize + (Math.random() * jitter - jitter/2);
        
        particles.push({
          x: posX,
          y: posY,
          originalX: posX,
          originalY: posY,
          size: isSmallScreen ? Math.random() * 1.5 + 0.8 : Math.random() * 1.2 + 0.8,
          speedX: 0,
          speedY: 0,
          color: '#ffffff',
          alpha: Math.random() * 0.3 + 0.2, // Slightly higher opacity for smaller screens
          connections: [],
          isFixed: true
        });
        
        fixedPointCount++;
      }
    }
    
    // Add very few, carefully placed dynamic particles - adjusted for screen size
    const dynamicParticleCount = isSmallScreen
      ? Math.min(15, Math.max(8, Math.floor(window.innerWidth * window.innerHeight / 40000)))
      : Math.min(20, Math.floor(window.innerWidth * window.innerHeight / 50000));
    
    for (let i = 0; i < dynamicParticleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 1, // Slightly larger moving particles
        speedX: (Math.random() - 0.5) * 0.4, // Slower movement
        speedY: (Math.random() - 0.5) * 0.4, // Slower movement
        color: Math.random() > 0.4 ? '#a855f7' : '#3b82f6', // Purple or blue accent
        alpha: Math.random() * 0.5 + 0.3, // More visible
        connections: []
      });
    }
    
    // Calculate connections with greater distance for sparser network - adjusted for screen size
    function updateConnections() {
      const connectionDistance = isSmallScreen
        ? Math.min(180, Math.max(120, window.innerWidth / 6))
        : Math.min(240, Math.max(180, window.innerWidth / 8));
      
      // Reset all connections
      particles.forEach(p => p.connections = []);
      
      // Find connections - limit max connections per particle for cleaner look
      for (let i = 0; i < particles.length; i++) {
        // Adjust max connections based on screen size
        const maxConnections = isSmallScreen ? 4 : 3;
        let connectionCount = 0;
        
        // Find closest particles to connect to
        const potentialConnections = [];
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            potentialConnections.push({ index: j, distance });
          }
        }
        
        // Sort by distance and take closest ones
        potentialConnections.sort((a, b) => a.distance - b.distance);
        potentialConnections.slice(0, maxConnections).forEach(conn => {
          particles[i].connections.push(conn.index);
          connectionCount++;
        });
      }
    }
    
    updateConnections();
    
    // Function to draw the grid pattern - very subtle
    function drawGrid() {
      // Skip grid on very small screens
      if (window.innerWidth < 480) return;
      
      // Draw almost invisible grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.3;
      
      // Vertical lines - fewer
      for (let x = 0; x <= canvas.width; x += gridSize * 2) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines - fewer
      for (let y = 0; y <= canvas.height; y += gridSize * 2) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
    
    // Animate particles and connections
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint grid first
      drawGrid();
      
      // Mouse influence variables
      const mouseRadius = isMouseDown ? 300 : 200;
      const mouseInfluenceStrength = isMouseDown ? 4 : 3;
      const mouseRepelStrength = isMouseDown ? 0.15 : 0;
      
      // Update particle positions
      particles.forEach((particle, index) => {
        if (!particle.isFixed) {
          // Move free particles
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Mouse influence - particles are attracted or repelled by mouse
          if (isMouseInCanvas) {
            const dx = mousePosition.x - particle.x;
            const dy = mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseRadius) {
              const force = (mouseRadius - distance) / mouseRadius;
              if (isMouseDown) {
                // Repel on mouse down (push effect)
                particle.speedX -= (dx / distance) * force * mouseRepelStrength;
                particle.speedY -= (dy / distance) * force * mouseRepelStrength;
              } else {
                // Attract normally
                particle.speedX += (dx / distance) * force * 0.03 * mouseInfluenceStrength;
                particle.speedY += (dy / distance) * force * 0.03 * mouseInfluenceStrength;
              }
            }
          }
          
          // Apply damping to avoid excessive speed
          particle.speedX *= 0.98;
          particle.speedY *= 0.98;
          
          // Bounce off edges with subtle randomness
          if (particle.x < 0) {
            particle.x = 0;
            particle.speedX = Math.abs(particle.speedX) * 0.6 + Math.random() * 0.1;
          } else if (particle.x > canvas.width) {
            particle.x = canvas.width;
            particle.speedX = -Math.abs(particle.speedX) * 0.6 - Math.random() * 0.1;
          }
          
          if (particle.y < 0) {
            particle.y = 0;
            particle.speedY = Math.abs(particle.speedY) * 0.6 + Math.random() * 0.1;
          } else if (particle.y > canvas.height) {
            particle.y = canvas.height;
            particle.speedY = -Math.abs(particle.speedY) * 0.6 - Math.random() * 0.1;
          }
        } else {
          // For fixed grid particles, allow very subtle movement around original position
          const maxJitter = 0.8; // Less movement for fixed particles
          particle.x = (particle.originalX || 0) + Math.sin(Date.now() * 0.0005 + index) * maxJitter;
          particle.y = (particle.originalY || 0) + Math.cos(Date.now() * 0.0005 + index * 0.7) * maxJitter;
          
          // If mouse is close, allow some movement toward mouse
          if (isMouseInCanvas) {
            const dx = mousePosition.x - particle.x;
            const dy = mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseRadius) {
              const force = (mouseRadius - distance) / mouseRadius;
              particle.x += (dx / distance) * force * 0.3;
              particle.y += (dy / distance) * force * 0.3;
            }
          }
        }
      });
      
      // Draw connections first - thin elegant lines
      particles.forEach((particle, index) => {
        particle.connections.forEach(connectedIndex => {
          // Only draw connection once
          if (index < connectedIndex) {
            const connectedParticle = particles[connectedIndex];
            const dx = connectedParticle.x - particle.x;
            const dy = connectedParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Fade connection based on distance - more elegant fade
            const opacity = isSmallScreen 
              ? 0.22 * Math.pow(1 - distance / 180, 1.5) // Slightly higher opacity on small screens
              : 0.18 * Math.pow(1 - distance / 240, 1.5);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(connectedParticle.x, connectedParticle.y);
            
            // Create gradient for connections with elegant fade
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              connectedParticle.x, connectedParticle.y
            );
            
            const purpleColor = 'rgba(168, 85, 247, ' + opacity + ')';
            const blueColor = 'rgba(59, 130, 246, ' + opacity + ')';
            const whiteColor = 'rgba(255, 255, 255, ' + (opacity * 0.7) + ')';
            
            if (particle.color === '#a855f7' || connectedParticle.color === '#a855f7') {
              gradient.addColorStop(0, whiteColor);
              gradient.addColorStop(1, purpleColor);
            } else if (particle.color === '#3b82f6' || connectedParticle.color === '#3b82f6') {
              gradient.addColorStop(0, whiteColor);
              gradient.addColorStop(1, blueColor);
            } else {
              gradient.addColorStop(0, 'rgba(255, 255, 255, ' + (opacity * 0.5) + ')');
              gradient.addColorStop(1, 'rgba(255, 255, 255, ' + (opacity * 0.2) + ')');
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = isSmallScreen ? 0.7 : 0.5; // Slightly thicker on small screens for visibility
            ctx.stroke();
          }
        });
      });
      
      // Draw particles after connections
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (particle.color === '#ffffff') {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        } else if (particle.color === '#a855f7') {
          ctx.fillStyle = `rgba(168, 85, 247, ${particle.alpha})`;
        } else {
          ctx.fillStyle = `rgba(59, 130, 246, ${particle.alpha})`;
        }
        
        ctx.fill();
      });
      
      // Mouse position effects - more subtle and elegant
      if (isMouseInCanvas) {
        // Mouse cursor glow - subtle
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
        
        // Mouse radius visualization - very subtle
        ctx.beginPath();
        const mouseGlow = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, mouseRadius
        );
        
        if (isMouseDown) {
          mouseGlow.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
          mouseGlow.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          mouseGlow.addColorStop(0, 'rgba(168, 85, 247, 0.05)');
          mouseGlow.addColorStop(1, 'rgba(168, 85, 247, 0)');
        }
        
        ctx.fillStyle = mouseGlow;
        ctx.arc(mousePosition.x, mousePosition.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Update connections occasionally
      if (Math.random() < 0.01) {
        updateConnections();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize to update canvas and particle positions
    const handleResize = () => {
      setCanvasSize();
      
      // Reset connections on resize
      updateConnections();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [windowSize]); // Now the effect reruns when window size changes
  
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Canvas for interactive particles and grid */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-100 pointer-events-auto"
        style={{ display: 'block', backgroundColor: 'transparent' }}
      />
      
      {/* Animated glow spots - fewer, more subtle, responsive sizes */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full bg-purple-500/5 blur-[120px] mix-blend-screen"
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [0.9, 1.05, 0.9],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-[20vw] h-[20vw] max-w-[280px] max-h-[280px] rounded-full bg-blue-500/5 blur-[120px] mix-blend-screen"
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [0.95, 1.1, 0.95],
          rotate: [0, -5, 0] 
        }}
        transition={{ 
          duration: 15, 
          delay: 5,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </div>
  );
} 