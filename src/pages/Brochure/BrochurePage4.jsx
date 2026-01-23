import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

import product1 from "../../assets/images/millets.png";
import product2 from "../../assets/images/pulses&legumes.png";
import product3 from "../../assets/images/araku-natural-products.png";
import product4 from "../../assets/images/araku-special-products.png";
import product5 from "../../assets/images/instantmixes.png";

const BrochurePage4 = () => {
  const { t } = useLanguage();

  const products = t("page4.products") || [];
  const productImages = [product1, product2, product3, product4, product5];

  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <section
      className="brochure-page"
      style={{
        ...styles.page,
        padding: isMobile ? "16px" : "20px 36px",
      }}
    >
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page4.title")}</h1>
        <p style={styles.subTitle}>{t("page4.subTitle")}</p>
        <HeaderDivider />
      </header>

      {/* PRODUCT GRID */}
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? 20 : 45,
        }}
      >
        {products.slice(0, 4).map((item, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>{item.title}</div>

            <div
              style={{
                ...styles.imagePlaceholder,
                height: isMobile ? 180 : 230,
              }}
            >
              <img src={productImages[idx]} style={styles.image} alt="" />
            </div>

            <ul
              style={{
                ...styles.list,
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              }}
            >
              {item.list.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM CARD */}
      {products[4] && (
        <div style={styles.bottomCard}>
          <div style={styles.bottomHeader}>{products[4].title}</div>

          <div
            style={{
              ...styles.bottomContent,
              gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
              gap: isMobile ? 16 : 20,
            }}
          >
            <div
              style={{
                ...styles.bottomImage,
                height: isMobile ? 200 : 270,
              }}
            >
              <img src={productImages[4]} style={styles.image} alt="" />
            </div>

            <ul
              style={{
                ...styles.bottomList,
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              }}
            >
              {products[4].list.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gap: 24,
    background: "#faf8f4",
    fontFamily: `"Noto Serif", serif`,
    color: "#1f3f2b",
  },

  header: {
    textAlign: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: 600,
    margin: 0,
  },

  subTitle: {
    fontSize: 14,
    color: "#355f46",
    margin: 0,
  },

  grid: {
    display: "grid",
    maxWidth: 1000,
    margin: "auto",
  },

  card: {
    background: "#fff7dc",
    borderRadius: 20,
    padding: 16,
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    border: "2px solid #e0c676",
    position: "relative",
  },

  cardHeader: {
    background: "#1f3f2b",
    color: "#fff",
    borderRadius: 999,
    padding: "8px 14px",
    fontWeight: 600,
    alignSelf: "center",
    position: "absolute",
    top: -20,
  },

  imagePlaceholder: {
    borderRadius: 16,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  list: {
    paddingLeft: 18,
    margin: 0,
    lineHeight: 1.6,
    display: "grid",
    gap: 6,
  },

  bottomCard: {
    background: "#fff7dc",
    borderRadius: 24,
    padding: 18,
    paddingTop: 40,
    border: "2px solid #e0c676",
    maxWidth: 1000,
    margin: "auto",
    position: "relative",
  },

  bottomHeader: {
    background: "#1f3f2b",
    color: "#fff",
    borderRadius: 999,
    padding: "10px 18px",
    fontWeight: 600,
    alignSelf: "center",
    position: "absolute",
    top: -24,
  },

  bottomContent: {
    display: "grid",
    alignItems: "center",
  },

  bottomImage: {
    borderRadius: 16,
    overflow: "hidden",
  },

  bottomList: {
    paddingLeft: 18,
    margin: 0,
    lineHeight: 1.6,
    display: "grid",
    gap: 6,
  },
};

export default BrochurePage4;
