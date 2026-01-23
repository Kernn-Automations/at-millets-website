import { useMediaQuery } from "react-responsive";
import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

import logo from "../../assets/images/at_logo.png";
import qr1 from "../../assets/images/at_millets_web_qr.png";
import qr2 from "../../assets/images/at_millets_insta_qr.png";
import qr3 from "../../assets/images/at_millets_fb_qr.png";
import qr4 from "../../assets/images/at_millets_yt_qr.png";

const BrochurePage11 = () => {
  const { t } = useLanguage();

  const media = t("page11.media") || {};
  const qrImages = [qr1, qr2, qr3, qr4];

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  return (
    <section
      className="brochure-page"
      style={{
        ...styles.page,
        padding: isMobile ? "28px 16px" : "48px 56px",
      }}
    >
      {/* ===== LOGO & COMPANY ===== */}
      <div style={styles.topSection}>
        <img
          src={logo}
          alt="AT Millets Logo"
          style={{
            ...styles.logo,
            width: isMobile ? 220 : isTablet ? 300 : 400,
          }}
        />

        <h2
          style={{
            ...styles.company,
            fontSize: isMobile ? 16 : 18,
          }}
        >
          {t("page11.company")}
        </h2>

        <p
          style={{
            ...styles.subDetails,
            fontSize: isMobile ? 14 : 15,
          }}
        >
          {t("page11.subDetails")}
        </p>
      </div>

      {/* ===== TITLE ===== */}
      <h1
        style={{
          ...styles.title,
          fontSize: isMobile ? 26 : 36,
          margin: isMobile ? "24px 0 32px" : "32px 0 50px",
        }}
      >
        {t("page11.title")}
      </h1>

      {/* ===== QR SECTION ===== */}
      <div style={styles.qrContainer}>
        <div style={styles.qrTitle}>{media.title}</div>

        <div
          style={{
            ...styles.qrGrid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr 1fr"
                : "repeat(4, 1fr)",
          }}
        >
          {media.list?.map((label, index) => (
            <div key={index} style={styles.qrItem}>
              <div style={styles.scanText}>Scan QR</div>
              <img
                src={qrImages[index]}
                alt={label}
                style={{
                  ...styles.qrImage,
                  width: isMobile ? 110 : 90,
                  height: isMobile ? 110 : 90,
                }}
              />
              <div style={styles.qrLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MESSAGE ===== */}
      <p
        style={{
          ...styles.desc,
          fontSize: isMobile ? 14 : 15,
        }}
      >
        {t("page11.desc")}
      </p>

      <p
        style={{
          ...styles.quote,
          fontSize: isMobile ? 14 : 15,
        }}
      >
        {t("page11.quote")}
      </p>

      <HeaderDivider />

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>© {t("page11.copyright")}</footer>
    </section>
  );
};

const styles = {
  page: {
    background: "#faf8f3",
    fontFamily: "serif",
    textAlign: "center",
  },

  /* TOP */
  topSection: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  logo: {},

  company: {
    fontWeight: 700,
    color: "#b58b2a",
    marginBottom: 6,
  },

  subDetails: {
    color: "#2f2f2f",
    maxWidth: 520,
    margin: "0 auto",
    lineHeight: 1.6,
  },

  /* TITLE */
  title: {
    fontWeight: 800,
    color: "#1f4d3a",
  },

  /* QR SECTION */
  qrContainer: {
    border: "2px solid #e3b23c",
    borderRadius: 26,
    padding: "26px 20px",
    maxWidth: 920,
    margin: "0 auto 28px",
    background: "#fffdf6",
    position: "relative",
  },

  qrTitle: {
    position: "absolute",
    top: -16,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#1f4d3a",
    color: "#fff",
    padding: "6px 18px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 700,
  },

  qrGrid: {
    display: "grid",
    gap: 24,
    marginTop: 12,
  },

  qrItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },

  scanText: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 6,
  },

  qrImage: {
    marginBottom: 6,
  },

  qrLabel: {
    fontSize: 14,
    fontWeight: 600,
  },

  /* TEXT */
  desc: {
    lineHeight: 1.7,
    maxWidth: 680,
    margin: "0 auto 12px",
  },

  quote: {
    fontWeight: 700,
    marginBottom: 16,
  },

  footer: {
    fontSize: 13,
    marginTop: 16,
  },
};

export default BrochurePage11;
