import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import aboutus from "../../assets/images/aboutus.png";

const BrochurePage2 = () => {
  const { t } = useLanguage();

  /* ===== RESPONSIVE BREAKPOINTS ===== */
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  return (
    <section
      style={{
        ...styles.page,
        height: isMobile ? "auto" : 1124,
        paddingBottom: isMobile ? 40 : 0,
      }}
      className="brochure-page"
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          ...styles.content,
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "1fr 1fr"
              : "1fr 600px",
          padding: isMobile ? "24px 16px" : "40px 60px",
          gap: isMobile ? 24 : 40,
        }}
      >
        {/* TEXT */}
        <div
          style={{
            ...styles.textSection,
            paddingLeft: isMobile ? 0 : 60,
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile ? 26 : isTablet ? 32 : 40,
            }}
          >
            {t("page2.title")}
          </h1>

          <p
            style={{
              ...styles.para,
              fontSize: isMobile ? 16 : isTablet ? 20 : 24,
            }}
          >
            {t("page2.para")}
          </p>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            ...styles.imageWrapper,
            height: isMobile ? 260 : "100%",
            borderRadius: isMobile ? 16 : 0,
          }}
        >
          <img src={aboutus} alt="Araku Farmers" style={styles.image} />
        </motion.div>
      </div>
    </section>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    background: "#faf8f4",
  },

  content: {
    display: "grid",
    alignItems: "center",
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  title: {
    fontWeight: 500,
    color: "#1f3f2b",
    margin: 0,
  },

  para: {
    lineHeight: 1.7,
    color: "#1a1a1a",
    margin: 0,
    maxWidth: 800,
  },

  imageWrapper: {
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
};

export default BrochurePage2;
