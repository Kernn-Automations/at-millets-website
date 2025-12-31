import { motion } from "framer-motion";
import { useState } from "react";
import { LuHeartHandshake } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { GiEarthAsiaOceania } from "react-icons/gi";

/* =========================================================
   VALUES / PHILOSOPHY SECTION
========================================================= */

const VALUES = [
  {
    number: "01",
    icon: <LuHeartHandshake size={28} color="#8b7355" />,
    title: "Integrity at Origin",
    text: "We work directly with tribal farmers, ensuring transparency, fair pricing, and long-term relationships built on mutual respect.",
    color: "#8b7355",
  },
  {
    number: "02",
    icon: <PiPottedPlant size={28} color="#6b9d5f" />,
    title: "Respect for the Land",
    text: "Our practices honor indigenous farming wisdom — preserving soil health, biodiversity, and ecological balance.",
    color: "#6b9d5f",
  },
  {
    number: "03",
    icon: <BsStars size={28} color="#d4a574" />,
    title: "Purity Without Compromise",
    text: "No shortcuts. No additives. Every grain is processed with care to retain its natural nutrition and character.",
    color: "#d4a574",
  },
  {
    number: "04",
    icon: <GiEarthAsiaOceania size={28} color="#7a9d7e" />,
    title: "Growth With Responsibility",
    text: "As we scale, our responsibility grows — to communities, consumers, and the future of sustainable food.",
    color: "#7a9d7e",
  },
];

const ValuesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={styles.wrapper}>
      {/* Animated background elements */}
      <div style={styles.backgroundTexture} />

      <motion.div
        style={styles.floatingOrb1}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={styles.floatingOrb2}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={styles.container}>
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          style={styles.header}
        >
          <motion.span
            style={styles.eyebrow}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ✦ Our Philosophy
          </motion.span>

          <h2 style={styles.title}>
            Principles That
            <br />
            <span style={styles.titleAccent}>Guide Every Decision</span>
          </h2>

          <p style={styles.subtitle}>
            At AT Millets, our values are not statements on a wall — they are
            embedded into how we source, process, and grow.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div style={styles.valuesGrid}>
          {VALUES.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                ...styles.valueCard,
                boxShadow:
                  hoveredIndex === index
                    ? "0 25px 60px rgba(139,115,85,0.2)"
                    : "0 10px 30px rgba(139,115,85,0.08)",
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                style={styles.cardGradient}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Card content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={styles.valueHeader}>
                  <motion.div
                    style={styles.iconCircle}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span style={styles.valueIcon}>{value.icon}</span>
                  </motion.div>

                  <div style={{ flex: 1 }}>
                    <div style={styles.valueTop}>
                      <span
                        style={{ ...styles.valueNumber, color: value.color }}
                      >
                        {value.number}
                      </span>
                      <motion.div
                        style={styles.valueDivider}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>

                <h4 style={styles.valueTitle}>{value.title}</h4>
                <p style={styles.valueText}>{value.text}</p>

                {/* Hover indicator */}
                <motion.div
                  style={styles.hoverIndicator}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={styles.closing}
        >
          <div style={styles.closingDivider}>
            <div style={styles.closingDot} />
            <div style={styles.closingLine} />
            <div style={styles.closingDot} />
          </div>

          <p style={styles.closingText}>
            These values define who we are — today, and for generations to come.
          </p>

          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span style={styles.badgeText}>
              Built on Trust. Grown with Purpose.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;

/* =========================================================
   STYLES
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "160px 0",
    background:
      "linear-gradient(180deg, #f5efe3 0%, #f0e8db 50%, #efe4d6 100%)",
    overflow: "hidden",
  },

  backgroundTexture: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 15% 25%, rgba(212,184,150,0.08) 0%, transparent 40%),
      radial-gradient(circle at 85% 75%, rgba(139,115,85,0.08) 0%, transparent 40%)
    `,
    pointerEvents: "none",
  },

  floatingOrb1: {
    position: "absolute",
    top: "15%",
    right: "10%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,184,150,0.15), transparent)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },

  floatingOrb2: {
    position: "absolute",
    bottom: "20%",
    left: "8%",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139,115,85,0.12), transparent)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 48px",
    zIndex: 1,
  },

  header: {
    maxWidth: "620px",
    marginBottom: "80px",
  },

  eyebrow: {
    display: "inline-block",
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#8b7355",
    fontWeight: 600,
    marginBottom: "20px",
    padding: "8px 20px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(139,115,85,0.2)",
    boxShadow: "0 2px 8px rgba(139,115,85,0.08)",
  },

  title: {
    fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#2a1f15",
    marginBottom: "24px",
    letterSpacing: "-0.01em",
  },

  titleAccent: {
    background: "linear-gradient(135deg, #8b7355 0%, #d4b896 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#5a4a3a",
  },

  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
  },

  valueCard: {
    position: "relative",
    background: "rgba(255,255,255,0.85)",
    borderRadius: "24px",
    padding: "40px",
    border: "1px solid rgba(139,115,85,0.15)",
    backdropFilter: "blur(10px)",
    transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
    overflow: "hidden",
    cursor: "pointer",
  },

  cardGradient: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(212,184,150,0.08) 0%, rgba(139,115,85,0.05) 100%)",
    pointerEvents: "none",
  },

  valueHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "24px",
  },

  iconCircle: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(212,184,150,0.2) 0%, rgba(139,115,85,0.15) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    border: "2px solid rgba(139,115,85,0.2)",
    transition: "all 0.3s ease",
  },

  valueIcon: {
    fontSize: "1.6rem",
    lineHeight: 1,
  },

  valueTop: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  valueNumber: {
    fontSize: "1.3rem",
    fontWeight: 800,
    letterSpacing: "0.1em",
    transition: "color 0.3s ease",
  },

  valueDivider: {
    flex: 1,
    height: "2px",
    background: "linear-gradient(90deg, rgba(139,115,85,0.4), transparent)",
    transformOrigin: "left",
  },

  valueTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#2a1f15",
    marginBottom: "12px",
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },

  valueText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#6b5a4a",
    margin: 0,
  },

  hoverIndicator: {
    position: "absolute",
    bottom: "40px",
    right: "40px",
    fontSize: "1.5rem",
    color: "#8b7355",
    fontWeight: 600,
  },

  closing: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
  },

  closingDivider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },

  closingDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#8b7355",
  },

  closingLine: {
    width: "60px",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #8b7355, transparent)",
  },

  closingText: {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#2a1f15",
    letterSpacing: "0.01em",
    textAlign: "center",
    maxWidth: "600px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 32px",
    background: "linear-gradient(135deg, #8b7355 0%, #6b5a3f 100%)",
    borderRadius: "40px",
    boxShadow: "0 8px 24px rgba(139,115,85,0.25)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  badgeText: {
    fontSize: "0.9rem",
    color: "#fff",
    fontWeight: 600,
    letterSpacing: "0.03em",
  },
};
