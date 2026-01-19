import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";
import shopImage from "../../assets/images/at-millets-new-shop.png";

const BrochurePage9 = () => {
  const { t } = useLanguage();

  const benefits = t("page9.benefits");

  return (
    <section style={styles.page} className="brochure-page">
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page9.title")}</h1>
        <p style={styles.subtitle}>{t("page9.subtitle")}</p>
        <HeaderDivider />
      </header>

      {/* ===== MAIN CONTAINER ===== */}
      <div style={styles.container}>
        <p style={styles.mainPara}>{t("page9.mainPara")}</p>

        {/* IMAGE */}
        <div style={styles.imageWrap}>
          <img src={shopImage} alt="AT Millets Store" style={styles.image} />
        </div>

        {/* BENEFITS GRID */}
        <div style={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div key={index} style={styles.benefitCard}>
              <div style={styles.checkIcon}>✓</div>
              <h3 style={styles.benefitTitle}>{item.title}</h3>
              <p style={styles.benefitDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#faf8f3",
    padding: "40px 56px",
    fontFamily: "serif",
  },

  /* ===== HEADER ===== */
  header: {
    textAlign: "center",
    marginBottom: 32,
  },

  title: {
    fontSize: 34,
    fontWeight: 700,
    color: "#1f4d3a",
  },

  subtitle: {
    fontSize: 16,
    color: "#3a6b55",
    marginTop: 6,
  },

  /* ===== OUTER BOX ===== */
  container: {
    maxWidth: 980,
    margin: "0 auto",
    border: "2px solid #e3b23c",
    borderRadius: 28,
    padding: "28px 32px 36px",
    background: "#fffdf6",
  },

  mainPara: {
    fontSize: 15,
    lineHeight: 1.7,
    textAlign: "center",
    maxWidth: 760,
    margin: "0 auto 24px",
    color: "#2f2f2f",
  },

  /* ===== IMAGE ===== */
  imageWrap: {
    maxWidth: 720,
    margin: "0 auto 28px",
    borderRadius: 18,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  /* ===== BENEFITS ===== */
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 22,
  },

  benefitCard: {
    position: "relative",
    border: "1.8px solid #e3b23c",
    borderRadius: 20,
    padding: "22px 20px 20px",
    background: "#fff",
    textAlign: "left",
  },

  checkIcon: {
    position: "absolute",
    top: -14,
    left: -14,
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#f2c94c",
    color: "#fff",
    fontWeight: 900,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },

  benefitTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: "#1f4d3a",
    marginBottom: 6,
  },

  benefitDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#2f2f2f",
  },

  /* ===== FOOTER ===== */
  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 28,
  },
};

export default BrochurePage9;
