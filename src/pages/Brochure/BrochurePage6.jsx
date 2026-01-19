import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

import step1 from "../../assets/images/crop_collection.png";
import step2 from "../../assets/images/crop_cleaning.png";
import step3 from "../../assets/images/food_processing.png";
import step4 from "../../assets/images/store_front.png";

const BrochurePage6 = () => {
  const { t } = useLanguage();

  const process = t("page6.process");
  const images = [step1, step2, step3, step4];

  return (
    <section style={styles.page} className="brochure-page">
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page6.title")}</h1>
        <p style={styles.subtitle}>{t("page6.subtitle")}</p>
        <HeaderDivider />
      </header>

      {/* ===== PROCESS FLOW ===== */}
      <div style={styles.flow}>
        {process.map((step, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              style={{
                ...styles.stepRow,
                gridTemplateColumns: isReverse
                  ? "1fr auto 1fr"
                  : "1fr auto 1fr",
              }}
            >
              {/* IMAGE LEFT */}
              {!isReverse && (
                <div style={styles.imageBox}>
                  <img
                    src={images[index]}
                    alt={step.title}
                    style={styles.image}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div
                style={{
                  ...styles.content,
                  textAlign: isReverse ? "right" : "left",
                }}
              >
                <h3 style={styles.stepTitle}>
                  {index + 1}. {step.title}
                </h3>
                <p style={styles.desc}>{step.desc}</p>
              </div>

              {/* ARROW */}
              <div style={styles.arrowWrap}>
                {index !== process.length - 1 && (
                  <ArrowRight size={28} style={styles.arrow} />
                )}
              </div>

              {/* IMAGE RIGHT */}
              {isReverse && (
                <div style={styles.imageBox}>
                  <img
                    src={images[index]}
                    alt={step.title}
                    style={styles.image}
                  />
                </div>
              )}
            </div>
          );
        })}
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
    display: "flex",
    flexDirection: "column",
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
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: "#3a6b55",
  },

  /* ===== FLOW ===== */
  flow: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    maxWidth: 1100,
    margin: "0 auto",
    marginBottom: 20,
  },

  stepRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 24,
  },

  imageBox: {
    borderRadius: 20,
    overflow: "hidden",
    border: "2px solid #e3b23c",
    width: 500,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  stepTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1f4d3a",
  },

  desc: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#2f2f2f",
  },

  arrowWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    color: "#d6b25e",
    strokeWidth: 2.5,
  },

  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 40,
  },
};

export default BrochurePage6;
