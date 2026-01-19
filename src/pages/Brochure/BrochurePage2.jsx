import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import aboutus from "../../assets/images/aboutus.png";

const BrochurePage2 = () => {
  const { t } = useLanguage();

  return (
    <section style={styles.page} className="brochure-page">
      {/* MAIN CONTENT */}
      <div style={styles.content}>
        {/* LEFT TEXT */}
        <div style={styles.textSection}>
          <h1 style={styles.title}>{t("page2.title")}</h1>
          

          <p style={styles.para}>{t("page2.para")}</p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.imageWrapper}
        >
          <img src={aboutus} alt="Araku Farmers" style={styles.image} />
        </motion.div>
      </div>
    </section>
  );
};

/* ================= STYLES (GRID + FLEX) ================= */

const styles = {
  page: {
    width: "100%",
    height: 1124,
    margin: "0 auto",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    background: "#faf8f4",
  },

  

  /* MAIN GRID */
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 600px",
    gap: 40,
    padding: "40px 60px",
    alignItems: "center",
  },

  /* LEFT TEXT */
  textSection: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    paddingLeft: 60
  },

  title: {
    fontSize: 40,
    fontWeight: 500,
    color: "#1f3f2b",
    margin: 0,
  },

  para: {
    fontSize: 24,
    lineHeight: 1.7,
    color: "#1a1a1a",
    margin: 0,
    maxWidth: 800,
  },

  /* IMAGE */
  imageWrapper: {
    height: "100%",
    overflow: "hidden",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  /* FOOTER */
  footer: {
    padding: "24px 0",
    textAlign: "center",
    fontSize: 13,
    fontWeight: 500,
    color: "#1a1a1a",
  },
};

export default BrochurePage2;
