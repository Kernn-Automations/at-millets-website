import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Boxes, Factory, Warehouse } from "lucide-react";
import { useMediaQuery } from "react-responsive";

/* =========================================================
   SUPPLY CHAIN – INTRO SECTION
========================================================= */

const SupplyChainIntroSection = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const points = [
    {
      icon: Boxes,
      title: t("supply.intro.points.procurement.title"),
      text: t("supply.intro.points.procurement.text"),
    },
    {
      icon: Factory,
      title: t("supply.intro.points.processing.title"),
      text: t("supply.intro.points.processing.text"),
    },
    {
      icon: Warehouse,
      title: t("supply.intro.points.distribution.title"),
      text: t("supply.intro.points.distribution.text"),
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={styles.eyebrow}>
            <span style={styles.dot}>●</span>
            {t("supply.intro.eyebrow")}
          </span>

          <h1 style={styles.title}>
            {t("supply.intro.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("supply.intro.titleAccent")}
            </span>
          </h1>

          <p style={styles.subtitle}>{t("supply.intro.subtitle")}</p>
        </motion.div>

        {/* CORE PRINCIPLES */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          }}
        >
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                style={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div style={styles.iconWrap}>
                  <Icon size={26} color="#3c8b65" />
                </div>

                <h4 style={styles.cardTitle}>{item.title}</h4>
                <p style={styles.cardText}>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainIntroSection;

/* =========================================================
   STYLES – WHITE + GREEN SYSTEM
========================================================= */

const styles = {
  wrapper: {
    position: "relative",
    padding: "clamp(120px, 14vw, 160px) 0",
    background: "#ffffff",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 18% 25%, rgba(120,194,154,0.14), transparent 55%), radial-gradient(circle at 82% 75%, rgba(60,139,101,0.12), transparent 55%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 720,
    marginBottom: 72,
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#3c8b65",
    fontWeight: 600,
    marginBottom: 24,
    padding: "8px 20px",
    background: "rgba(60,139,101,0.08)",
    borderRadius: 50,
    border: "1px solid rgba(60,139,101,0.15)",
  },

  dot: {
    fontSize: "0.5rem",
    color: "#78c29a",
  },

  title: {
    fontSize: "clamp(2.6rem, 5vw, 4rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 24,
    letterSpacing: "-0.02em",
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#3f5f4f",
  },

  grid: {
    display: "grid",
    gap: 32,
  },

  card: {
    background: "rgba(255,255,255,0.92)",
    borderRadius: 24,
    padding: "36px 32px",
    border: "1px solid rgba(60,139,101,0.14)",
    boxShadow: "0 14px 42px rgba(60,139,101,0.14)",
    transition: "all 0.3s ease",
  },

  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 10,
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },
};
