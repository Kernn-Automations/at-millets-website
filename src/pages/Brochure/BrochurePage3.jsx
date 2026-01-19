import { useLanguage } from "../../i18n/LanguageContext";
import modi from "../../assets/images/modi-holding-millets.png";
import HeaderDivider from "../../components/ui/HeaderDivider";
import footerImg from "../../assets/images/international-year-of-millets.png";

const BrochurePage3 = () => {
  const { t } = useLanguage();

  const cards = t("page3.cards") || [];

  return (
    <section style={styles.page} className="brochure-page">
      <div style={styles.container}>
        {/* HERO SECTION */}
        <header style={styles.header}>
          <h1 style={styles.title}>{t("page3.title")}</h1>
          <HeaderDivider />
        </header>
        <section style={styles.hero}>
          <img src={modi} alt="Prime Minister" style={styles.heroImage} />

          <div style={styles.heroText}>
            <p style={styles.heroQuote}>{t("page3.modi1")}</p>
            <p style={styles.heroQuoteBold}>{'"' + t("page3.modi2") + '"'}</p>
          </div>
        </section>

        {/* MAIN PARAGRAPH */}
        <section style={styles.mainPara}>{t("page3.mainpara")}</section>

        {/* CARDS GRID */}
        <section style={styles.cardsGrid}>
          {/* CARD 1 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>{cards[0]?.title}</h3>
            <ul style={styles.list}>
              {cards[0]?.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* CARD 2 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>{cards[1]?.title}</h3>
            <ul style={styles.list}>
              {cards[1]?.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* CARD 3 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>{cards[2]?.title}</h3>
            <p style={styles.cardText}>{cards[2]?.point}</p>
          </div>

          {/* CARD 4 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>{t("page3.card3Title")}</h3>
            <p style={styles.cardText}>{cards[3]?.title}</p>
            <ul style={styles.list}>
              {cards[3]?.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FOOTER QUOTES */}
        <footer style={styles.footer}>
          <div style={styles.footerQuotes}>
            <p>{t("page3.quote1")}</p>
            <p>{t("page3.quote2")}</p>
          </div>
          <div style={styles.footerImg}>
            <img src={footerImg} alt="International willets day" />
          </div>
        </footer>
      </div>
      {/* <hr /> */}
    </section>
  );
};

/* ================= STYLES (GRID + FLEX) ================= */

const styles = {
  page: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gap: 24,
    padding: "28px 36px",
    background: "#faf8f4",
    fontFamily: `"Noto Serif", serif`,
    color: "#1f3f2b",
  },
  container: {
    padding: "10px 40px",
  },
  header: {
    textAlign: "center",
    paddingBottom: 20,
  },

  logo: { width: 70 },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: 600,
    margin: 0,
  },

  hero: {
    display: "grid",
    margin: "auto",
    maxWidth: 1000,
    gridTemplateColumns: "220px 1fr",
    gap: 24,
    alignItems: "center",
    background: "linear-gradient(to bottom, #f6f1dc, #dce5f6ff)",
    padding: 20,
    borderRadius: 16,
  },

  heroImage: {
    width: "100%",
    borderRadius: 12,
  },

  heroText: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    fontSize: 24,
  },

  heroQuote: {
    fontSize: 24,
    lineHeight: 1.6,
    margin: 0,
  },

  heroQuoteBold: {
    fontSize: 22,
    fontWeight: 600,
    margin: 0,
  },

  mainPara: {
    padding: 20,
    marginTop: 20,
    fontSize: 24,
    lineHeight: 1.8,
    color: "#243f2d",
    textAlign: "center",
    margin: "auto",
    maxWidth: 1000,
  },

  cardsGrid: {
    display: "grid",
    margin: "auto",
    maxWidth: 1000,
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  },

  card: {
    background:
      "linear-gradient(to bottom, #f6f1dc, #f6f1dc, #f6f1dc, #dce5f6ff)",
    borderRadius: 16,
    padding: 18,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    margin: 0,
  },

  cardText: {
    fontSize: 15,
    lineHeight: 1.6,
  },

  list: {
    paddingLeft: 18,
    margin: 0,
    fontSize: 15,
    lineHeight: 1.6,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    margin: "auto",
    maxWidth: 1000,
  },

  footerImg: {
    width: 200,
    
  },
  footerQuotes: {
    fontSize: 24,
    fontWeight: 600,
    paddingTop: 20
  },

  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
  },

  iym: {
    fontStyle: "italic",
  },
};

export default BrochurePage3;
