import LeaderCard from "./LeaderCard";

/* =========================================================
   LEADERS SECTION
========================================================= */

const Leaders = ({ leaders }) => {
  if (!leaders || leaders.length === 0) return null;

  return (
    <section style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.eyebrow}>Leadership</span>
        <h2 style={styles.title}>The People Behind AT Millets</h2>
        <p style={styles.subtitle}>
          Meet the leaders driving our mission of sustainable food and tribal
          empowerment.
        </p>
      </div>

      <div style={styles.grid}>
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} />
        ))}
      </div>
    </section>
  );
};

export default Leaders;

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    padding: "140px 20px",
    background: "linear-gradient(180deg,#ffffff 0%,#f7fbf9 100%)",
  },

  header: {
    maxWidth: 720,
    margin: "0 auto 64px",
    textAlign: "center",
  },

  eyebrow: {
    fontSize: "0.75rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "#3c8b65",
  },

  title: {
    fontSize: "clamp(2rem,4vw,2.8rem)",
    fontWeight: 900,
    color: "#0d2817",
    margin: "16px 0",
  },

  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
  },

  grid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gap: 32,
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  },
};
