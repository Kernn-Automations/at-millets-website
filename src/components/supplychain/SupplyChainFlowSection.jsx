import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMediaQuery } from "react-responsive";

import SupplyChainSvg from "../../assets/illustrations/supply-chain-flow.svg";

/* =========================================================
   SUPPLY CHAIN FLOW – ANIMATED VISUAL
========================================================= */

const SupplyChainFlowSection = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const steps = [
    {
      key: "procurement",
      title: t("supply.flow.procurement.title"),
      text: t("supply.flow.procurement.text"),
    },
    {
      key: "processing",
      title: t("supply.flow.processing.title"),
      text: t("supply.flow.processing.text"),
    },
    {
      key: "packaging",
      title: t("supply.flow.packaging.title"),
      text: t("supply.flow.packaging.text"),
    },
    {
      key: "warehousing",
      title: t("supply.flow.warehousing.title"),
      text: t("supply.flow.warehousing.text"),
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.background} />

      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.title}>
            {t("supply.flow.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("supply.flow.titleAccent")}
            </span>
          </h2>

          <p style={styles.subtitle}>{t("supply.flow.subtitle")}</p>
        </motion.div>

        {/* FLOW VISUAL */}
        <motion.div
          style={styles.visualWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={SupplyChainSvg}
            alt={t("supply.flow.imageAlt")}
            style={styles.svg}
          />
        </motion.div>

        {/* STEPS */}
        <div
          style={{
            ...styles.stepsGrid,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              style={styles.stepCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span style={styles.stepIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 style={styles.stepTitle}>{step.title}</h4>
              <p style={styles.stepText}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainFlowSection;

/* =========================================================
   STYLES
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
      "radial-gradient(circle at 50% 20%, rgba(120,194,154,0.12), transparent 60%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
  },

  header: {
    maxWidth: 720,
    marginBottom: 72,
  },

  title: {
    fontSize: "clamp(2.4rem, 4.8vw, 3.6rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 20,
  },

  titleAccent: {
    background: "linear-gradient(135deg,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },

  visualWrap: {
    marginBottom: 80,
    display: "flex",
    justifyContent: "center",
  },

  svg: {
    width: "100%",
    maxWidth: 1000,
    height: "auto",
  },

  stepsGrid: {
    display: "grid",
    gap: 28,
  },

  stepCard: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: "28px 26px",
    border: "1px solid rgba(60,139,101,0.14)",
    boxShadow: "0 12px 36px rgba(60,139,101,0.14)",
  },

  stepIndex: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    color: "#3c8b65",
    marginBottom: 10,
    display: "inline-block",
  },

  stepTitle: {
    fontSize: "1.05rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 8,
  },

  stepText: {
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: "#3f5f4f",
  },
};
