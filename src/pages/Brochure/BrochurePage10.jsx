import HeaderDivider from "../../components/ui/HeaderDivider";
import { useLanguage } from "../../i18n/LanguageContext";

const BrochurePage10 = () => {
  const { t } = useLanguage();

  const places = t("page10.places");

  return (
    <section style={styles.page} className="brochure-page">
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>{t("page10.title")}</h1>
        <p style={styles.subtitle}>{t("page10.para")}</p>
        <HeaderDivider />
      </header>

      {/* ===== CONTACT SECTIONS ===== */}
      <div style={styles.sections}>
        {places.map((place, index) => (
          <div key={index} style={styles.sectionBox}>
            {/* REGION TITLE */}
            <div style={styles.regionBadge}>{place.title}</div>

            {/* CONTACT CARDS */}
            <div
              style={{
                ...styles.contactsGrid,
                gridTemplateColumns: `repeat(${place.contacts.length}, 1fr)`,
              }}
            >
              {place.contacts.map((c, i) => (
                <div key={i} style={styles.contactCard}>
                  <div style={styles.person}>{c.person}</div>
                  <div style={styles.number}>{c.number}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#faf8f3",
    padding: "40px 56px",
    
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
  },

  subtitle: {
    fontSize: 16,
    color: "#3a6b55",
    marginTop: 6,
  },

  /* ===== SECTIONS ===== */
  sections: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
    maxWidth: 1000,
    margin: "0 auto",
  },

  sectionBox: {
    position: "relative",
    border: "2px solid #1f4d3a",
    borderRadius: 24,
    padding: "36px 28px 28px",
    background: "#fbfbf6",
  },

  regionBadge: {
    position: "absolute",
    top: -18,
    left: 28,
    background: "#1f4d3a",
    color: "#fff",
    padding: "6px 18px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 700,
  },

  contactsGrid: {
    display: "grid",
    gap: 22,
    justifyItems: "center",
  },

  contactCard: {
    background: "#f6eed1",
    borderRadius: 26,
    padding: "22px 26px",
    minWidth: 220,
    textAlign: "center",
  },

  person: {
    fontSize: 16,
    fontWeight: 700,
    color: "#000",
    marginBottom: 6,
  },

  number: {
    fontSize: 15,
    fontWeight: 600,
    color: "#000",
  },

  /* ===== FOOTER ===== */
  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 36,
  },
};

export default BrochurePage10;
