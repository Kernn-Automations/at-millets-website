import { FaFilePdf } from "react-icons/fa";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { exportBrochurePdf } from "./exportBrochurePdf";

const BrochureFloat = () => {
  const { lang } = useLanguage();

  return createPortal(
    <button style={styles.float} onClick={() => exportBrochurePdf(lang)}>
      <FaFilePdf style={styles.icon} />
    </button>,
    document.body // 🔑 OUTSIDE brochure tree
  );
};

const styles = {
  float: {
    position: "fixed",
    bottom: "105px", // above WhatsApp
    right: "26px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#E53935",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999, // higher than anything
    boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
    textDecoration: "none",
    cursor: "pointer",
    border: "none"
  },
  icon: {
    color: "#fff",
    fontSize: "26px",
  },
};

export default BrochureFloat;
