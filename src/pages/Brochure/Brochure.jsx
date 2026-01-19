import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import logo from "../../assets/images/at_logo.png";
import bg from "../../assets/images/page-1-bg.jpg";
import BrochurePage2 from "./BrochurePage2";
import BrochurePage3 from "./BrochurePage3";
import BrochurePage4 from "./BrochurePage4";
import BrochurePage5 from "./BrochurePage5";
import BrochurePage6 from "./BrochurePage6";
import BrochurePage7 from "./BrochurePage7";
import BrochurePage8 from "./BrochurePage8";
import BrochurePage9 from "./BrochurePage9";
import BrochurePage10 from "./BrochurePage10";
import BrochurePage11 from "./BrochurePage11";

const Brochure = () => {
  const { t } = useLanguage();

  return (
    <>
      <section style={styles.page} className="brochure-page">
        {/* LOGO */}
        <img src={logo} alt="AT Millets Logo" style={styles.logo} />

        {/* COMPANY NAME */}
        <div style={styles.company}>{t("page1.company")}</div>

        {/* MAIN TELUGU LINE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          {t("page1.title")}
        </motion.div>

        {/* SUB TITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.subtitle}
        >
          {t("page1.subtitle")}
        </motion.div>
      </section>
      <BrochurePage2 />
      <BrochurePage3 />
      <BrochurePage4 />
      <BrochurePage5 />
      <BrochurePage6 />
      <BrochurePage7 />
      <BrochurePage8 />
      <BrochurePage9 />
      <BrochurePage10 />
      <BrochurePage11 />
    </>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    width: "100%", // A4 width
    height: 1100, // A4 height
    margin: "0 auto",
    position: "relative",
    backgroundImage: `url("/src/assets/images/page-1-bg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: `"Noto Serif Telugu", serif`,
    overflow: "hidden",
  },

  logo: {
    position: "absolute",
    top: 100,
    left: "50%",
    transform: "translateX(-50%)",
    width: 500,
  },

  company: {
    position: "absolute",
    top: 360,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#f2c14f",
    textTransform: "uppercase",
    textAlign: "center",
  },

  title: {
    position: "absolute",
    top: 430,
    width: "100%",
    transform: "translateX(-50%)",
    fontSize: 26,
    lineHeight: 1.6,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 500,
  },

  subtitle: {
    position: "absolute",
    top: 460,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 26,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 400,
  },
};

export default Brochure;
