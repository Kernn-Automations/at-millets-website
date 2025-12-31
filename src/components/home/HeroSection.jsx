import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import Button from "../../components/common/Button";

/* =========================================================
   ANIMATED COUNTER COMPONENT
========================================================= */

const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const display = useTransform(springValue, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

/* =========================================================
   FLOWING ORGANIC WAVES - LIVING ECOSYSTEM VISUALIZATION
========================================================= */

function OrganicWaves() {
  const meshRef = useRef();
  const materialRef = useRef();

  // Create flowing wave geometry
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 12, 100, 60);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;

    // Create multiple wave patterns that flow organically
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // Layered wave motion - like grain fields in wind
      const wave1 = Math.sin(x * 0.5 + time * 0.8) * 0.3;
      const wave2 = Math.sin(y * 0.7 - time * 0.6) * 0.25;
      const wave3 = Math.sin((x + y) * 0.3 + time * 0.5) * 0.35;
      const ripple =
        Math.sin(Math.sqrt(x * x + y * y) * 0.4 - time * 1.2) * 0.2;

      const z = wave1 + wave2 + wave3 + ripple;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();

    // Subtle rotation for depth
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;

    // Color shift over time
    if (materialRef.current) {
      const hue = 0.15 + Math.sin(time * 0.2) * 0.05;
      materialRef.current.color.setHSL(hue, 0.35, 0.65);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-0.3, 0, 0]}
      position={[0, -1, -3]}
    >
      <meshStandardMaterial
        ref={materialRef}
        color="#d4b896"
        wireframe={false}
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

// Floating organic particles - seeds dispersing
function FloatingSeeds() {
  const count = 150;
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
        ],
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        size: 0.02 + Math.random() * 0.04,
      });
    }
    return temp;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      const t = clock.getElapsedTime() * particle.speed + particle.phase;
      const child = meshRef.current.children[i];
      if (child) {
        child.position.y += Math.sin(t) * 0.002;
        child.position.x += Math.cos(t * 0.7) * 0.001;
        child.rotation.x = t * 0.5;
        child.rotation.y = t * 0.3;
      }
    });
  });

  return (
    <group ref={meshRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshStandardMaterial
            color={
              i % 3 === 0 ? "#8b5a3c" : i % 3 === 1 ? "#d4b896" : "#f5ecd7"
            }
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Glowing ambient light spheres - representing natural energy
function EnergyOrbs() {
  const orbs = useMemo(
    () => [
      { position: [-4, 2, -4], size: 0.6, color: "#f5ecd7", intensity: 0.6 },
      { position: [5, -1, -5], size: 0.8, color: "#d4b896", intensity: 0.5 },
      { position: [-2, -2, -3], size: 0.5, color: "#e8dcc4", intensity: 0.4 },
    ],
    []
  );

  return (
    <>
      {orbs.map((orb, i) => (
        <group key={i} position={orb.position}>
          <mesh>
            <sphereGeometry args={[orb.size, 32, 32]} />
            <meshBasicMaterial color={orb.color} transparent opacity={0.15} />
          </mesh>
          <pointLight
            color={orb.color}
            intensity={orb.intensity}
            distance={8}
          />
        </group>
      ))}
    </>
  );
}

/* =========================================================
   INTERACTIVE REVEAL EFFECT
========================================================= */

const InteractiveReveal = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  return (
    <motion.div
      style={{
        ...styles.content,
        perspective: 1000,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  return (
    <section style={styles.wrapper}>
      {/* Flowing Organic Background */}
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={styles.canvas}>
        {/* Gradient background */}
        <color attach="background" args={["#f8f4ed"]} />
        <fog attach="fog" args={["#f8f4ed", 5, 15]} />

        {/* Soft ambient lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#fffbf5"
        />
        <directionalLight
          position={[-3, 2, -2]}
          intensity={0.4}
          color="#f5ecd7"
        />

        {/* Organic elements */}
        <OrganicWaves />
        <FloatingSeeds />
        <EnergyOrbs />
      </Canvas>

      {/* Animated gradient overlay */}
      <motion.div
        style={styles.gradientOverlay}
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(212,184,150,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(245,236,215,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(212,184,150,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Content with 3D tilt */}
      <InteractiveReveal>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.span
            style={styles.eyebrow}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From the Hills of Araku
          </motion.span>

          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where Ancient Wisdom
            <br />
            <span style={styles.titleAccent}>Meets Modern Wellness</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p style={styles.subtitle}>
              Experience the living rhythm of nature through our
              climate-resilient millets — sourced transparently from indigenous
              farmers, nurtured by tradition, and crafted for your conscious
              lifestyle.
            </p>
          </motion.div>

          <motion.div
            style={styles.statsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div style={styles.stat}>
              <div style={styles.statNumber}>1000+</div>
              <div style={styles.statLabel}>Farmer Partners</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>8</div>
              <div style={styles.statLabel}>Ancient Varieties</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Organic Process</div>
            </div>
          </motion.div>

          <motion.div
            style={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button size="lg">Explore Our Range</Button>
            <Button variant="secondary" size="lg">
              Partner With Us
            </Button>
          </motion.div>
        </motion.div>
      </InteractiveReveal>

      {/* Scroll indicator */}
      <motion.div
        style={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div style={styles.scrollLine} />
        <span style={styles.scrollText}>Scroll to discover</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

/* =========================================================
   INLINE STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    height: "100vh",
    background:
      "linear-gradient(135deg, #f8f4ed 0%, #f5efe3 50%, #f0e8db 100%)",
    overflow: "hidden",
  },

  canvas: {
    position: "absolute",
    inset: 0,
    opacity: 0.7,
  },

  gradientOverlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "120px 48px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  eyebrow: {
    display: "inline-block",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#8b7355",
    marginBottom: "16px",
    fontWeight: 600,
    padding: "6px 16px",
    background: "rgba(212,184,150,0.15)",
    borderRadius: "30px",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
    fontWeight: 900,
    lineHeight: 1.08,
    marginBottom: "20px",
    color: "#2a1f15",
    letterSpacing: "-0.02em",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #d4b896 0%, #8b7355 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
  },

  subtitle: {
    maxWidth: "620px",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#5a4a3a",
    marginBottom: "32px",
    fontWeight: 400,
  },

  statsContainer: {
    display: "flex",
    gap: "40px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },

  stat: {
    display: "flex",
    flexDirection: "column",
  },

  statNumber: {
    fontSize: "2.2rem",
    fontWeight: 800,
    color: "#2a1f15",
    lineHeight: 1,
    marginBottom: "6px",
  },

  statLabel: {
    fontSize: "0.8rem",
    color: "#8b7355",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 600,
  },

  actions: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "48px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    zIndex: 3,
  },

  scrollLine: {
    width: "2px",
    height: "40px",
    background: "linear-gradient(180deg, transparent 0%, #8b7355 100%)",
    borderRadius: "2px",
  },

  scrollText: {
    fontSize: "0.7rem",
    color: "#8b7355",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontWeight: 600,
  },
};
