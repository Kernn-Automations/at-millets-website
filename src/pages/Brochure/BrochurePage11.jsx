import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

import logo from "../../assets/images/at_logo.png";
import qr1 from "../../assets/images/at_millets_web_qr.png";
import qr2 from "../../assets/images/at_millets_insta_qr.png";
import qr3 from "../../assets/images/at_millets_fb_qr.png";
import qr4 from "../../assets/images/at_millets_yt_qr.png";

const BrochurePage11 = () => {
  const { t } = useLanguage();

  const media = t("page11.media");

  const qrImages = [qr1, qr2, qr3, qr4];

  return (
    <>
      <section style={styles.page} className="brochure-page">
        {/* ===== LOGO & COMPANY ===== */}
        <div style={styles.topSection}>
          <img src={logo} alt="AT Millets Logo" style={styles.logo} />

          <h2 style={styles.company}>{t("page11.company")}</h2>

          <p style={styles.subDetails}>{t("page11.subDetails")}</p>
        </div>

        {/* ===== TITLE ===== */}
        <h1 style={styles.title}>{t("page11.title")}</h1>

        {/* ===== QR SECTION ===== */}
        <div style={styles.qrContainer}>
          <div style={styles.qrTitle}>{media.title}</div>

          <div style={styles.qrGrid}>
            {media.list.map((label, index) => (
              <div key={index} style={styles.qrItem}>
                <div style={styles.scanText}>Scan QR</div>
                <img src={qrImages[index]} alt={label} style={styles.qrImage} />
                <div style={styles.qrLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MESSAGE ===== */}
        <p style={styles.desc}>{t("page11.desc")}</p>

        <p style={styles.quote}>{t("page11.quote")}</p>

        <HeaderDivider />

        {/* ===== FOOTER ===== */}
        <footer style={styles.footer}>© {t("page11.copyright")}</footer>
      </section>
    </>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#faf8f3",
    padding: "48px 56px",
    fontFamily: "serif",
    textAlign: "center",
  },

  /* ===== TOP ===== */
  topSection: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 400,
  },

  company: {
    fontSize: 18,
    fontWeight: 700,
    color: "#b58b2a",
    marginBottom: 6,
  },

  subDetails: {
    fontSize: 15,
    color: "#2f2f2f",
    maxWidth: 520,
    margin: "0 auto",
    lineHeight: 1.6,
  },

  /* ===== TITLE ===== */
  title: {
    fontSize: 36,
    fontWeight: 800,
    color: "#1f4d3a",
    margin: "32px 0 50px",
  },

  /* ===== QR SECTION ===== */
  qrContainer: {
    border: "2px solid #e3b23c",
    borderRadius: 26,
    padding: "26px 28px",
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
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    marginTop: 12,
  },

  qrItem: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  scanText: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 6,
  },

  qrImage: {
    width: 90,
    height: 90,
    marginBottom: 6,
  },

  qrLabel: {
    fontSize: 14,
    fontWeight: 600,
  },

  /* ===== TEXT ===== */
  desc: {
    fontSize: 15,
    lineHeight: 1.7,
    maxWidth: 680,
    margin: "0 auto 12px",
  },

  quote: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 16,
  },

  /* ===== FOOTER ===== */
  footer: {
    fontSize: 13,
    marginTop: 16,
  },
};

export default BrochurePage11;
