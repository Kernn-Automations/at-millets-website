import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
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

  /* ===== RESPONSIVE BREAKPOINTS ===== */
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <>
      <section
        style={{
          ...styles.page,
          height: isMobile ? "100vh" : 1100,
          paddingTop: isMobile ? 60 : 0,
        }}
        className="brochure-page"
        data-dark
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="AT Millets Logo"
          style={{
            ...styles.logo,
            top: isMobile ? 60 : 100,
            width: isMobile ? 220 : isTablet ? 340 : 500,
          }}
        />

        {/* COMPANY NAME */}
        <div
          style={{
            ...styles.company,
            top: isMobile ? 200 : 360,
            fontSize: isMobile ? 18 : isTablet ? 24 : 30,
          }}
        >
          {t("page1.company")}
        </div>

        {/* MAIN TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            ...styles.title,
            top: isMobile ? 250 : 430,
            fontSize: isMobile ? 18 : isTablet ? 22 : 26,
            padding: isMobile ? "0 16px" : 0,
          }}
        >
          {t("page1.title")}
        </motion.div>

        {/* SUB TITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            ...styles.subtitle,
            top: isMobile ? 300 : 460,
            fontSize: isMobile ? 16 : isTablet ? 22 : 26,
            padding: isMobile ? "0 16px" : 0,
          }}
        >
          {t("page1.subtitle")}
        </motion.div>
      </section>

      {/* OTHER PAGES */}
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
    width: "100%",
    margin: "0 auto",
    position: "relative",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: `"Noto Serif Telugu", serif`,
    overflow: "hidden",
  },

  logo: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  company: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: 700,
    letterSpacing: 1,
    color: "#f2c14f",
    textTransform: "uppercase",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  title: {
    position: "absolute",
    width: "100%",
    //left: "50%",
    transform: "translateX(-50%)",
    lineHeight: 1.6,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 500,
  },

  subtitle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 400,
  },
};

export default Brochure;
