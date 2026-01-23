import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";
import shopImage from "../../assets/images/at-millets-new-shop.png";

const BrochurePage9 = () => {
  const { t } = useLanguage();

  const benefits = t("page9.benefits") || [];
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <section
      className="brochure-page"
      style={{
        ...styles.page,
        padding: isMobile ? "24px 16px" : "40px 56px",
      }}
    >
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? 24 : 34,
          }}
        >
          {t("page9.title")}
        </h1>
        <p
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? 14 : 16,
          }}
        >
          {t("page9.subtitle")}
        </p>
        <HeaderDivider />
      </header>

      {/* ===== MAIN CONTAINER ===== */}
      <div
        style={{
          ...styles.container,
          padding: isMobile ? "20px 16px 24px" : "28px 32px 36px",
        }}
      >
        <p
          style={{
            ...styles.mainPara,
            fontSize: isMobile ? 14 : 15,
          }}
        >
          {t("page9.mainPara")}
        </p>

        {/* IMAGE */}
        <div style={styles.imageWrap}>
          <img src={shopImage} alt="AT Millets Store" style={styles.image} />
        </div>

        {/* BENEFITS GRID */}
        <div
          style={{
            ...styles.benefitsGrid,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 18 : 22,
          }}
        >
          {benefits.map((item, index) => (
            <div key={index} style={styles.benefitCard}>
              <div style={styles.checkIcon}>✓</div>
              <h3
                style={{
                  ...styles.benefitTitle,
                  fontSize: isMobile ? 15 : 17,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  ...styles.benefitDesc,
                  fontSize: isMobile ? 13 : 14,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    background: "#faf8f3",
    fontFamily: "serif",
  },

  /* HEADER */
  header: {
    textAlign: "center",
    marginBottom: 32,
  },

  title: {
    fontWeight: 700,
    color: "#1f4d3a",
  },

  subtitle: {
    color: "#3a6b55",
    marginTop: 6,
  },

  /* CONTAINER */
  container: {
    maxWidth: 980,
    margin: "0 auto",
    border: "2px solid #e3b23c",
    borderRadius: 28,
    background: "#fffdf6",
  },

  mainPara: {
    lineHeight: 1.7,
    textAlign: "center",
    maxWidth: 760,
    margin: "0 auto 24px",
    color: "#2f2f2f",
  },

  /* IMAGE */
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

  /* BENEFITS */
  benefitsGrid: {
    display: "grid",
  },

  benefitCard: {
    position: "relative",
    border: "1.8px solid #e3b23c",
    borderRadius: 20,
    padding: "22px 20px 20px",
    background: "#fff",
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
    fontWeight: 700,
    color: "#1f4d3a",
    marginBottom: 6,
  },

  benefitDesc: {
    lineHeight: 1.6,
    color: "#2f2f2f",
  },
};

export default BrochurePage9;
