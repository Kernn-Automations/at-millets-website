import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================================
   BREAKPOINT HOOK (INLINE-STYLES SAFE)
========================================================= */

const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    isMobile: width <= 768,
    isTablet: width <= 1024,
  };
};

/* =========================================================
   ORIGIN SECTION
========================================================= */

const OriginSection = () => {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <section style={styles.wrapper}>
      <div style={styles.backgroundPattern} />

      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isTablet ? "1fr" : "1.1fr 1fr",
          gap: isTablet ? "64px" : "100px",
          padding: isMobile ? "0 24px" : "0 48px",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          style={{ ...styles.content, maxWidth: isTablet ? "100%" : "560px" }}
        >
          <motion.span style={styles.eyebrow}>✦ Our Origin Story</motion.span>

          <h2
            style={{
              ...styles.title,
              fontSize: isMobile
                ? "clamp(1.9rem, 7vw, 2.6rem)"
                : "clamp(2.2rem, 4vw, 3.5rem)",
            }}
          >
            Rooted in Araku.
            <br />
            <span style={styles.titleAccent}>Sustained by Trust.</span>
          </h2>

          <p
            style={{
              ...styles.text,
              fontSize: isMobile ? "0.95rem" : "1.05rem",
            }}
          >
            AT Millets began in the tribal highlands of Araku Valley, where
            ancient grains have been cultivated for generations. We work
            directly with indigenous farmers — building long-term partnerships
            that respect land, people, and tradition.
          </p>

          <div style={{ ...styles.pillars, gap: isMobile ? "12px" : "16px" }}>
            {[
              {
                icon: "🌾",
                title: "Direct Sourcing",
                desc: "No middlemen. Transparent procurement at fair prices.",
              },
              {
                icon: "🤝",
                title: "Tribal Partnerships",
                desc: "Long-term collaboration with farming communities.",
              },
              {
                icon: "📿",
                title: "Indigenous Knowledge",
                desc: "Farming methods preserved, not replaced.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                style={{
                  ...styles.pillar,
                  padding: isMobile ? "16px 20px" : "20px 24px",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(139,115,85,0.15)",
                }}
              >
                <div style={styles.pillarIcon}>{pillar.icon}</div>
                <div>
                  <h4 style={styles.pillarTitle}>{pillar.title}</h4>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              ...styles.badge,
              padding: isMobile ? "8px 16px" : "10px 20px",
            }}
          >
            <span style={styles.badgeText}>
              Empowering 1000+ tribal families since 2020
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateZ: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          style={{
            ...styles.visual,
            height: isMobile ? "340px" : isTablet ? "400px" : "500px",
          }}
        >
          {!isMobile && (
            <motion.div
              style={{
                ...styles.visualRing,
                width: isTablet ? "320px" : "420px",
                height: isTablet ? "320px" : "420px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div style={styles.ringDot1} />
              <div style={styles.ringDot2} />
              <div style={styles.ringDot3} />
            </motion.div>
          )}

          <div
            style={{
              ...styles.visualInner,
              width: isMobile ? "260px" : isTablet ? "300px" : "360px",
              height: isMobile ? "260px" : isTablet ? "300px" : "360px",
            }}
          >
            <div style={styles.visualContent}>
              <span style={styles.visualText}>Araku Valley</span>
              <span style={styles.visualSubtext}>Andhra Pradesh</span>
              <div style={styles.coordinates}>18°19'N 82°52'E</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginSection;

/* =========================================================
   STYLES (UNCHANGED DESIGN)
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    background:
      "linear-gradient(180deg, #f8f4ed 0%, #f5efe3 50%, #f0e8db 100%)",
    padding: "140px 0",
    overflow: "hidden",
  },

  backgroundPattern: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(212,184,150,0.08), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(245,236,215,0.1), transparent 40%)
    `,
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
  },

  content: {},

  eyebrow: {
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#8b7355",
    fontWeight: 600,
    marginBottom: "20px",
    padding: "8px 18px",
    borderRadius: "30px",
    background: "rgba(212,184,150,0.12)",
    border: "1px solid rgba(139,115,85,0.2)",
    display: "inline-block",
  },

  title: {
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#2a1f15",
    marginBottom: "24px",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #8b7355, #d4b896)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  text: {
    lineHeight: 1.8,
    color: "#5a4a3a",
    marginBottom: "40px",
  },

  pillars: {
    display: "grid",
    marginBottom: "32px",
  },

  pillar: {
    display: "flex",
    gap: "16px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(139,115,85,0.12)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
  },

  pillarIcon: {
    fontSize: "1.8rem",
  },

  pillarTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#2a1f15",
  },

  pillarDesc: {
    fontSize: "0.9rem",
    color: "#6b5a4a",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #8b7355, #6b5a3f)",
    borderRadius: "30px",
    boxShadow: "0 4px 12px rgba(139,115,85,0.25)",
  },

  badgeText: {
    fontSize: "0.85rem",
    color: "#fff",
    fontWeight: 600,
  },

  visual: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  visualRing: {
    position: "absolute",
    borderRadius: "50%",
    border: "2px dashed rgba(139,115,85,0.2)",
  },

  ringDot1: {
    position: "absolute",
    top: "10%",
    right: "20%",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#d4b896",
  },

  ringDot2: {
    position: "absolute",
    bottom: "25%",
    left: "15%",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#8b7355",
  },

  ringDot3: {
    position: "absolute",
    top: "50%",
    left: "10%",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#e8dcc4",
  },

  visualInner: {
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f5ecd7, #e8dcc4, #d8cbb2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid rgba(255,255,255,0.8)",
    boxShadow:
      "0 20px 60px rgba(139,115,85,0.25), inset 0 2px 10px rgba(255,255,255,0.5)",
  },

  visualContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  visualText: {
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#2a1f15",
  },

  visualSubtext: {
    fontSize: "0.85rem",
    color: "#6b5a3f",
    fontWeight: 600,
  },

  coordinates: {
    fontSize: "0.75rem",
    color: "#8b7355",
  },
};
