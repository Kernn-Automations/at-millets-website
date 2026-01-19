import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

import b1 from "../../assets/images/healthy-food.png";
import b2 from "../../assets/images/digestion.png";
import b3 from "../../assets/images/diabetes.png";
import b4 from "../../assets/images/kids-growth.png";
import b5 from "../../assets/images/farmers.png";
import b6 from "../../assets/images/natural-farming.png";
import b7 from "../../assets/images/sustainable-farming.png";
import b8 from "../../assets/images/support-farmers.png";

import p1 from "../../assets/images/finger-millet.png";
import p2 from "../../assets/images/jowar-millet.png";
import p3 from "../../assets/images/foxtail-millet.png";
import p4 from "../../assets/images/little-millet.png";
import p5 from "../../assets/images/barnyard-millet.png";
import p6 from "../../assets/images/kodo-millet.png";

const positions = [
  { top: "-2%", left: "50%", transform: "translateX(-50%)" },
  { top: "5%", right: "5%" },
  { top: "36%", right: "-6%" },
  { bottom: "-1%", right: "4%" },
  { bottom: "-6%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "0%", left: "6%" },
  { top: "38%", left: "-3%" },
  { top: "7%", left: "7%" },
];

const BrochurePage7 = () => {
  const { t } = useLanguage();

  const types = t("page7.types");
  const ourBenefits = t("page7.ourBenefits");

  const benefitImages = [b1, b2, b3, b4, b5, b6, b7, b8];

  const productImages = [p1, p2, p3, p4, p5, p6];

  return (
    <section style={styles.page} className="brochure-page">
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page7.title")}</h1>
        <p style={styles.subtitle}>{t("page7.subtitle")}</p>
        <HeaderDivider />
      </header>

      {/* ===== TOP BENEFITS ===== */}
      <div style={styles.typesGrid}>
        {types.map((item, i) => (
          <div key={i} style={styles.typeCard}>
            <h3 style={styles.typeTitle}>{item.title}</h3>
            <ul style={styles.bulletList}>
              {item.benefits.map((b, j) => (
                <li key={j} style={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ul>
            <div style={styles.imagePlaceholder}>
              <img style={styles.image} src={productImages[i]} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* ===== RADIAL BENEFITS ===== */}
      <div style={styles.radialWrapper}>
        <div style={styles.centerCircle}>
          <span>{ourBenefits.title}</span>
        </div>

        {ourBenefits.benefits.map((b, i) => (
          <div
            key={i}
            style={{
              ...styles.radialItem,
              ...positions[i],
            }}
          >
            <img src={benefitImages[i]} alt={b} style={styles.benefitImage} />
            <span style={styles.benefitText}>{b}</span>
          </div>
        ))}
      </div>

      {/* <hr /> */}
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

  /* ===== TOP GRID ===== */
  typesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    maxWidth: 1100,
    margin: "0 auto 50px",
  },

  typeCard: {
    border: "2px solid #e3b23c",
    borderRadius: 20,
    padding: "16px 20px",
    background: "#fffdf6",
    position: "relative",
    paddingTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },

  imagePlaceholder: {
    height: 100,
    width: 200,

    borderRadius: 16,
    background: "#d9d9d9",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  typeTitle: {
    background: "#1f3f2b",
    color: "#fff",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 15,
    fontWeight: 600,
    alignSelf: "center",
    position: "absolute",
    top: -20,
  },

  bulletList: {
    paddingLeft: 18,
  },

  bulletItem: {
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 4,
  },

  /* ===== RADIAL ===== */
  radialWrapper: {
    position: "relative",
    width: 720,
    height: 720,
    margin: "0 auto 60px",
  
  },

  centerCircle: {
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: 250,
    height: 250,
    borderRadius: "50%",
    border: "4px solid #2f6f4e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
    color: "#1f4d3a",
    padding: 12,
    background: "#fff",
  },

  radialItem: {
    position: "absolute",
    width: 200,
    textAlign: "center",
    fontSize: 12,
  },

  benefitImage: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #e3b23c",
    marginBottom: 6,
  },

  benefitText: {
    display: "block",
    lineHeight: 1.4,
  },

  footer: {
    textAlign: "center",
    fontSize: 13,
  },
};

export default BrochurePage7;
