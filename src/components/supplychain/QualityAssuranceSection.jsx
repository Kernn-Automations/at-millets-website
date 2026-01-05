import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { ShieldCheck, Microscope, ClipboardCheck, Repeat } from "lucide-react";
import { useMediaQuery } from "react-responsive";

/* =========================================================
   QUALITY & CONSISTENCY ASSURANCE
========================================================= */

const QualityAssuranceSection = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const pillars = [
    {
      icon: ShieldCheck,
      title: t("supply.quality.hygiene.title"),
      text: t("supply.quality.hygiene.text"),
    },
    {
      icon: Microscope,
      title: t("supply.quality.testing.title"),
      text: t("supply.quality.testing.text"),
    },
    {
      icon: ClipboardCheck,
      title: t("supply.quality.controls.title"),
      text: t("supply.quality.controls.text"),
    },
    {
      icon: Repeat,
      title: t("supply.quality.consistency.title"),
      text: t("supply.quality.consistency.text"),
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
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.title}>
            {t("supply.quality.titleMain")}
            <br />
            <span style={styles.titleAccent}>
              {t("supply.quality.titleAccent")}
            </span>
          </h2>

          <p style={styles.subtitle}>{t("supply.quality.subtitle")}</p>
        </motion.div>

        {/* QUALITY GRID */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          }}
        >
          {pillars.map((item, i) => {
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
                  <Icon size={24} color="#3c8b65" />
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

export default QualityAssuranceSection;

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
      "radial-gradient(circle at 50% 70%, rgba(120,194,154,0.12), transparent 60%)",
    pointerEvents: "none",
  },

  container: {
    maxWidth: 1200,
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
    fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#0d2817",
    marginBottom: 18,
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

  grid: {
    display: "grid",
    gap: 32,
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: 22,
    padding: "32px 30px",
    border: "1px solid rgba(60,139,101,0.14)",
    boxShadow: "0 16px 44px rgba(60,139,101,0.14)",
    transition: "all 0.3s ease",
  },

  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: "rgba(60,139,101,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 10,
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.65,
    color: "#3f5f4f",
  },
};
