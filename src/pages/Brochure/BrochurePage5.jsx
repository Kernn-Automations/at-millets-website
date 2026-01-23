import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

import recipe1 from "../../assets/images/ragi_sangati.png";
import recipe2 from "../../assets/images/millet_dosa.png";

const BrochurePage5 = () => {
  const { t } = useLanguage();

  const recipes = t("page5.reciepes") || [];
  const recipeImages = [recipe1, recipe2];

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
          {t("page5.title")}
        </h1>
        <p
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? 14 : 16,
          }}
        >
          {t("page5.subtitle")}
        </p>
        <HeaderDivider />
      </header>

      {/* ===== RECIPES GRID ===== */}
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 24 : 40,
        }}
      >
        {recipes.map((recipe, index) => (
          <div key={index} style={styles.card}>
            {/* IMAGE */}
            <div style={styles.imageWrapper}>
              <img
                src={recipeImages[index]}
                alt={recipe.title}
                style={styles.image}
              />
            </div>

            {/* CONTENT */}
            <div
              style={{
                ...styles.content,
                padding: isMobile ? "18px 20px 22px" : "22px 26px 28px",
              }}
            >
              <h2
                style={{
                  ...styles.recipeTitle,
                  fontSize: isMobile ? 18 : 22,
                }}
              >
                {recipe.title}
              </h2>

              {recipe.subtitle && (
                <p
                  style={{
                    ...styles.recipeSubtitle,
                    fontSize: isMobile ? 13 : 14,
                  }}
                >
                  {recipe.subtitle}
                </p>
              )}

              <ul style={styles.steps}>
                {recipe.steps.map((step, i) => (
                  <li
                    key={i}
                    style={{
                      ...styles.step,
                      fontSize: isMobile ? 13 : 14,
                    }}
                  >
                    <ArrowRight size={16} style={styles.stepIcon} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
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
    display: "flex",
    flexDirection: "column",
    fontFamily: "serif",
  },

  /* ===== HEADER ===== */
  header: {
    textAlign: "center",
    marginBottom: 32,
  },

  title: {
    fontWeight: 700,
    color: "#1f4d3a",
    marginBottom: 6,
  },

  subtitle: {
    color: "#3a6b55",
  },

  /* ===== GRID ===== */
  grid: {
    display: "grid",
    maxWidth: 1000,
    margin: "0 auto",
    marginBottom: 20,
  },

  /* ===== CARD ===== */
  card: {
    background: "#ffffff",
    borderRadius: 28,
    border: "2px solid #e3b23c",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  imageWrapper: {
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  recipeTitle: {
    fontWeight: 700,
    color: "#1f4d3a",
    textAlign: "center",
  },

  recipeSubtitle: {
    color: "#4a6f5a",
    textAlign: "center",
  },

  /* ===== STEPS ===== */
  steps: {
    marginTop: 10,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  step: {
    display: "grid",
    gridTemplateColumns: "18px 1fr",
    alignItems: "start",
    gap: 8,
    lineHeight: 1.6,
    color: "#2f2f2f",
  },

  stepIcon: {
    color: "#1f4d3a",
    marginTop: 2,
    flexShrink: 0,
  },
};

export default BrochurePage5;
