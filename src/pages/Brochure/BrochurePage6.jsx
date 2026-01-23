import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

import step1 from "../../assets/images/crop_collection.png";
import step2 from "../../assets/images/crop_cleaning.png";
import step3 from "../../assets/images/food_processing.png";
import step4 from "../../assets/images/store_front.png";

const BrochurePage6 = () => {
  const { t } = useLanguage();

  const process = t("page6.process") || [];
  const images = [step1, step2, step3, step4];

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
          {t("page6.title")}
        </h1>
        <p
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? 14 : 16,
          }}
        >
          {t("page6.subtitle")}
        </p>
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
                gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* IMAGE */}
              <div style={styles.imageBox}>
                <img
                  src={images[index]}
                  alt={step.title}
                  style={styles.image}
                />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  ...styles.content,
                  textAlign: isMobile ? "center" : isReverse ? "right" : "left",
                }}
              >
                <h3
                  style={{
                    ...styles.stepTitle,
                    fontSize: isMobile ? 18 : 20,
                  }}
                >
                  {index + 1}. {step.title}
                </h3>
                <p
                  style={{
                    ...styles.desc,
                    fontSize: isMobile ? 14 : 15,
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* ARROW */}
              {index !== process.length - 1 && (
                <div style={styles.arrowWrap}>
                  <ArrowRight
                    size={28}
                    style={{
                      ...styles.arrow,
                      transform: isMobile ? "rotate(90deg)" : "none",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ================= STYLES ================= */

const styles = {
  page: {
    background: "#faf8f3",
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
    fontWeight: 700,
    color: "#1f4d3a",
    marginBottom: 6,
  },

  subtitle: {
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
    alignItems: "center",
    gap: 24,
  },

  imageBox: {
    borderRadius: 20,
    overflow: "hidden",
    border: "2px solid #e3b23c",
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",
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
    fontWeight: 700,
    color: "#1f4d3a",
  },

  desc: {
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
};

export default BrochurePage6;
