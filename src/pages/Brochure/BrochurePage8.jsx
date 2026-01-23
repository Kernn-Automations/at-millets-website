import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

/* images */
import img1 from "../../assets/images/farmers.png";
import img2 from "../../assets/images/natural-farming.png";
import img3 from "../../assets/images/sustainable-farming.png";
import img4 from "../../assets/images/premium-quality-products.png";
import img5 from "../../assets/images/healthy-products.png";
import img6 from "../../assets/images/villagers.png";

const BrochurePage8 = () => {
  const { t } = useLanguage();

  const details = t("page8.details") || [];
  const images = [img1, img2, img3, img4, img5, img6];

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
          {t("page8.title")}
        </h1>
        <p
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? 14 : 16,
          }}
        >
          {t("page8.subtitle")}
        </p>
        <HeaderDivider />
      </header>

      {/* ===== GRID ===== */}
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 24 : "36px 60px",
        }}
      >
        {details.map((item, i) => (
          <div key={i} style={styles.card}>
            <div
              style={{
                ...styles.imageWrap,
                width: isMobile ? 120 : 160,
                height: isMobile ? 120 : 160,
              }}
            >
              <img src={images[i]} alt={item.title} style={styles.image} />
            </div>

            <h3
              style={{
                ...styles.cardTitle,
                fontSize: isMobile ? 16 : 18,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                ...styles.cardDesc,
                fontSize: isMobile ? 13 : 14,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
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
    marginBottom: 36,
  },

  title: {
    fontWeight: 700,
    color: "#1f4d3a",
  },

  subtitle: {
    color: "#3a6b55",
    marginTop: 6,
  },

  /* GRID */
  grid: {
    display: "grid",
    maxWidth: 1100,
    margin: "0 auto",
  },

  /* CARD */
  card: {
    textAlign: "center",
    padding: "12px 18px",
  },

  imageWrap: {
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
    fontWeight: 700,
    color: "#000",
    marginBottom: 6,
  },

  cardDesc: {
    lineHeight: 1.6,
    color: "#2f2f2f",
  },
};

export default BrochurePage8;
