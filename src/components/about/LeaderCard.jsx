import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, User } from "lucide-react";

/* ================= FALLBACK IMAGE ================= */
const DEFAULT_PROFILE = "https://placehold.co/400x500?text=Profile";

const LeaderCard = ({ leader = {} }) => {
  const {
    name = "Leader Name",
    designation = "Leadership Team",
    email,
    photo,
    bio,
    linkedin,
  } = leader;

  const [expanded, setExpanded] = useState(false);
  const hasBio = Boolean(bio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(60,139,101,0.15)" }}
      style={styles.card}
    >
      {/* ROUNDED IMAGE */}
      <div style={styles.imageWrapper}>
        <div style={styles.imageCircle}>
          {photo ? (
            <img src={photo} alt={name} style={styles.image} />
          ) : (
            <div style={styles.placeholder}>
              <User size={64} />
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.designation}>{designation}</p>

        {/* SOCIALS */}
        {(email || linkedin) && (
          <div style={styles.socials}>
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.socialBtn, background: "#0A66C2" }}
                aria-label="LinkedIn"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 4px 12px rgba(10,102,194,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} color="#fff" />
              </motion.a>
            )}

            {email && (
              <motion.a
                href={`mailto:${email}`}
                style={{ ...styles.socialBtn, background: "#374151" }}
                aria-label="Email"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 4px 12px rgba(55,65,81,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} color="#fff" />
              </motion.a>
            )}
          </div>
        )}

        {/* BIO */}
        {hasBio && (
          <>
            <p
              style={{
                ...styles.bio,
                ...(expanded ? {} : styles.bioClamped),
              }}
            >
              {bio}
            </p>

            <motion.button
              style={styles.toggleBtn}
              onClick={() => setExpanded((v) => !v)}
              whileHover={{
                background: "#16a34a",
                color: "#fff",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {expanded ? "Show Less" : "Read Full Bio"}
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default LeaderCard;

/* ================= STYLES ================= */

const styles = {
  card: {
    background: "linear-gradient(to bottom, #ffffff 0%, #fafffe 100%)",
    borderRadius: 24,
    border: "1px solid rgba(60,139,101,0.12)",
    boxShadow: "0 12px 30px rgba(60,139,101,0.08), 0 4px 10px rgba(0,0,0,0.04)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
  },

  imageWrapper: {
    padding: "40px 24px 20px",
    background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  imageCircle: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #ffffff",
    boxShadow: "0 8px 24px rgba(60,139,101,0.2), 0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  placeholder: {
    color: "#3c8b65",
    opacity: 0.5,
  },

  content: {
    padding: "28px 24px 24px",
    textAlign: "center",
    background: "#ffffff",
    position: "relative",
  },

  name: {
    fontSize: "1.25rem",
    fontWeight: 800,
    color: "#0a1f12",
    margin: "0 0 6px 0",
    letterSpacing: "-0.02em",
  },

  designation: {
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#16a34a",
    marginBottom: 18,
    opacity: 0.9,
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 18,
  },

  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  bio: {
    fontSize: "0.92rem",
    color: "#4a5d54",
    lineHeight: 1.7,
    marginBottom: 12,
    transition: "all 0.3s ease",
    textAlign: "left",
  },

  bioClamped: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  toggleBtn: {
    border: "2px solid #16a34a",
    background: "transparent",
    color: "#16a34a",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "0.82rem",
    padding: "8px 20px",
    borderRadius: 24,
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
};
