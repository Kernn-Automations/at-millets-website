import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

/* images – replace with your actual assets */
import img1 from "../../assets/images/farmers.png";
import img2 from "../../assets/images/natural-farming.png";
import img3 from "../../assets/images/sustainable-farming.png";
import img4 from "../../assets/images/premium-quality-products.png";
import img5 from "../../assets/images/healthy-products.png";
import img6 from "../../assets/images/villagers.png";

const BrochurePage8 = () => {
  const { t } = useLanguage();

  const details = t("page8.details");
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section style={styles.page} className="brochure-page">
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page8.title")}</h1>
        <p style={styles.subtitle}>{t("page8.subtitle")}</p>
        <HeaderDivider />
      </header>

      {/* ===== GRID ===== */}
      <div style={styles.grid}>
        {details.map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.imageWrap}>
              <img src={images[i]} alt={item.title} style={styles.image} />
            </div>

            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.desc}</p>
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

  /* ===== HEADER ===== */
  header: {
    textAlign: "center",
    marginBottom: 36,
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

  /* ===== GRID ===== */
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "36px 60px",
    maxWidth: 1100,
    margin: "0 auto",
  },

  /* ===== CARD ===== */
  card: {
    textAlign: "center",
    padding: "12px 18px",
    position: "relative",
  },

  imageWrap: {
    width: 160,
    height: 160,
    margin: "0 auto 12px",
    borderRadius: "50%",
    border: "3px solid #e3b23c",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#000",
    marginBottom: 6,
  },

  cardDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#2f2f2f",
  },

  /* ===== FOOTER ===== */
  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 32,
  },
};

export default BrochurePage8;
