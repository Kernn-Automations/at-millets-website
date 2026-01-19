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

  return (
    <section style={styles.page} className="brochure-page">
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page4.title")}</h1>
        <p style={styles.subTitle}>{t("page4.subTitle")}</p>
        <HeaderDivider />
      </header>

      {/* PRODUCT GRID (TOP 4 CARDS) */}
      <div style={styles.grid}>
        {products.slice(0, 4).map((item, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>{item.title}</div>

            {/* Image placeholder (background image can be added later) */}
            <div style={styles.imagePlaceholder}>
              <img style={styles.image} src={productImages[idx]} alt="" />
            </div>
            <ul style={styles.list}>
              {item.list.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM WIDE CARD */}
      {products[4] && (
        <div style={styles.bottomCard}>
          <div style={styles.bottomHeader}>{products[4].title}</div>

          <div style={styles.bottomContent}>
            {/* Image placeholder */}
            <div style={styles.bottomImage}>
              <img style={styles.image} src={productImages[4]} alt="" />
            </div>

            <ul style={styles.bottomList}>
              {products[4].list.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* <hr /> */}
    </section>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "20px 36px",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gap: 24,
    background: "#faf8f4",
    fontFamily: `"Noto Serif", serif`,
    color: "#1f3f2b",
  },

  /* HEADER */
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: 32,
    fontWeight: 600,
    margin: 0,
  },

  subTitle: {
    fontSize: 16,
    color: "#355f46",
    margin: 0,
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 45,
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
    fontSize: 15,
    fontWeight: 600,
    alignSelf: "center",
    position: "absolute",
    top: -20,
  },

  imagePlaceholder: {
    height: 230,
    borderRadius: 16,
    background: "#d9d9d9",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  list: {
    paddingLeft: 18,
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px 16px",
  },

  /* BOTTOM CARD */
  bottomCard: {
    background: "#fff7dc",
    borderRadius: 24,
    padding: 18,
    paddingTop: 40,
    border: "2px solid #e0c676",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    maxWidth: 1000,
    margin: "auto",
    position: "relative",
    marginTop: 30,
  },

  bottomHeader: {
    background: "#1f3f2b",
    color: "#fff",
    borderRadius: 999,
    padding: "10px 18px",
    fontSize: 16,
    fontWeight: 600,
    alignSelf: "center",
    position: "absolute",
    top: -24,
  },

  bottomContent: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 20,
    alignItems: "center",
  },

  bottomImage: {
    height: 270,
    borderRadius: 16,
    overflow: "hidden",
  },

  bottomList: {
    paddingLeft: 18,
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "6px 14px",
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 500,
  },
};

export default BrochurePage4;
