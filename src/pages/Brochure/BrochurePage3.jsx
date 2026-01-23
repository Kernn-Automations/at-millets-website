import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../../i18n/LanguageContext";
import modi from "../../assets/images/modi-holding-millets.png";
import HeaderDivider from "../../components/ui/HeaderDivider";
import footerImg from "../../assets/images/international-year-of-millets.png";

const BrochurePage3 = () => {
  const { t } = useLanguage();

  const cards = t("page3.cards") || [];

  /* ===== RESPONSIVE BREAKPOINTS ===== */
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  return (
    <section
      className="brochure-page"
      style={{
        ...styles.page,
        padding: isMobile ? "16px 12px" : "28px 36px",
      }}
    >
      <div
        style={{
          ...styles.container,
          padding: isMobile ? "8px 12px" : "10px 40px",
        }}
      >
        {/* HEADER */}
        <header style={styles.header}>
          <h1
            style={{
              ...styles.title,
              fontSize: isMobile ? 22 : isTablet ? 28 : 32,
            }}
          >
            {t("page3.title")}
          </h1>
          <HeaderDivider />
        </header>

        {/* HERO */}
        <section
          style={{
            ...styles.hero,
            gridTemplateColumns: "220px 1fr", // 🔒 fixed
            gap: isMobile ? 16 : 24,
            padding: isMobile ? 14 : 20,
          }}
        >
          <img
            src={modi}
            alt="Prime Minister"
            style={{
              ...styles.heroImage,
              width: isMobile ? 180 : "100%",
            }}
          />

          <div
            style={{
              ...styles.heroText,
              fontSize: isMobile ? 16 : 24,
            }}
          >
            <p
              style={{
                ...styles.heroQuote,
                fontSize: isMobile ? 16 : 24,
              }}
            >
              {t("page3.modi1")}
            </p>
            <p
              style={{
                ...styles.heroQuoteBold,
                fontSize: isMobile ? 15 : 22,
              }}
            >
              {'"' + t("page3.modi2") + '"'}
            </p>
          </div>
        </section>

        {/* MAIN PARAGRAPH */}
        <section
          style={{
            ...styles.mainPara,
            fontSize: isMobile ? 15 : isTablet ? 20 : 24,
            padding: isMobile ? 14 : 20,
            marginTop: isMobile ? 12 : 20,
          }}
        >
          {t("page3.mainpara")}
        </section>

        {/* CARDS */}
        <section
          style={{
            ...styles.cardsGrid,
            gridTemplateColumns: "repeat(2, 1fr)", // 🔒 fixed
            gap: isMobile ? 14 : 20,
          }}
        >
          {cards.map((card, idx) => (
            <div key={idx} style={styles.card}>
              <h3
                style={{
                  ...styles.cardTitle,
                  fontSize: isMobile ? 14 : 16,
                }}
              >
                {card.title || t("page3.card3Title")}
              </h3>

              {card.points && (
                <ul style={{ ...styles.list, fontSize: isMobile ? 13 : 15 }}>
                  {card.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              {card.point && (
                <p
                  style={{
                    ...styles.cardText,
                    fontSize: isMobile ? 13 : 15,
                  }}
                >
                  {card.point}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer
          style={{
            ...styles.footer,
            marginTop: isMobile ? 20 : 32,
          }}
        >
          <div
            style={{
              ...styles.footerQuotes,
              fontSize: isMobile ? 16 : 24,
            }}
          >
            <p>{t("page3.quote1")}</p>
            <p>{t("page3.quote2")}</p>
          </div>

          <div
            style={{
              ...styles.footerImg,
              width: isMobile ? 140 : 200,
            }}
          >
            <img src={footerImg} alt="International Year of Millets" />
          </div>
        </footer>
      </div>
    </section>
  );
};

/* ================= BASE STYLES (UNCHANGED DESIGN) ================= */

const styles = {
  page: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gap: 24,
    background: "#faf8f4",
    fontFamily: `"Noto Serif", serif`,
    color: "#1f3f2b",
  },

  container: {},

  header: {
    textAlign: "center",
    paddingBottom: 20,
  },

  title: {
    fontWeight: 600,
    margin: 0,
  },

  hero: {
    display: "grid",
    margin: "auto",
    maxWidth: 1000,
    alignItems: "center",
    background: "linear-gradient(to bottom, #f6f1dc, #dce5f6ff)",
    borderRadius: 16,
  },

  heroImage: {
    borderRadius: 12,
  },

  heroText: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  heroQuote: {
    lineHeight: 1.6,
    margin: 0,
  },

  heroQuoteBold: {
    fontWeight: 600,
    margin: 0,
  },

  mainPara: {
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
    fontWeight: 600,
    margin: 0,
  },

  cardText: {
    lineHeight: 1.6,
  },

  list: {
    paddingLeft: 18,
    margin: 0,
    lineHeight: 1.6,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    margin: "auto",
    maxWidth: 1000,
  },

  footerImg: {},

  footerQuotes: {
    fontWeight: 600,
    paddingTop: 20,
  },
};

export default BrochurePage3;
