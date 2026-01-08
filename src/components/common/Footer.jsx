import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  Leaf,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

/* =========================================================
   PREMIUM FOOTER WITH REGIONAL CONTACTS
========================================================= */

const Footer = () => {
  const { t } = useLanguage();

  const contacts = t("business.contacts", { returnObjects: true }) || {};
  const regions = contacts.regions ? Object.values(contacts.regions) : [];

  return (
    <footer style={styles.footer}>
      {/* Background */}
      <div style={styles.bgPattern} />
      <div style={styles.bgOverlay} />

      <div style={styles.container}>
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={styles.brandSection}
        >
          <div style={styles.brandHeader}>
            <div style={styles.iconWrapper}>
              <Leaf size={32} strokeWidth={2.5} style={styles.leafIcon} />
            </div>
            <h2 style={styles.brandName}>AT Millets</h2>
          </div>

          <p style={styles.tagline}>
            Premium millets and natural foods from Araku Valley’s tribal farmers
          </p>

          <div style={styles.badge}>
            <span style={styles.badgeText}>
              Rooted in Nature • Built on Trust
            </span>
          </div>
        </motion.div>

        {/* REGIONAL CONTACTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={styles.contactGrid}
        >
          {regions.map((region, i) => (
            <div key={i} style={styles.regionBlock}>
              <div style={styles.regionHeader}>
                <MapPin size={16} style={styles.regionIcon} />
                <span style={styles.regionLabel}>{region.title}</span>
              </div>

              <div style={styles.regionPeople}>
                {region.people.map((entry, idx) => {
                  const [name, phone] = entry.split("–").map((s) => s.trim());

                  return (
                    <div key={idx} style={styles.contactItem}>
                      <span style={styles.contactText}>{name}</span>
                      <a
                        href={`tel:${phone}`}
                        style={styles.contactPhone}
                        aria-label={`Call ${name}`}
                      >
                        <Phone size={14} />
                        {phone}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={styles.socialSection}
        >
          <h3 style={styles.socialTitle}>Connect With Us</h3>

          <div style={styles.socialLinks}>
            <SocialLink
              href="https://www.facebook.com/people/AT-Millets-Araku-Naturals/61585507244152/"
              icon={<Facebook size={22} />}
              label="Facebook"
            />
            <SocialLink
              href="https://instagram.com/atmillets"
              icon={<Instagram size={22} />}
              label="Instagram"
            />
            <SocialLink
              href="https://www.youtube.com/@ATMilletsArakuNaturals"
              icon={<Youtube size={22} />}
              label="YouTube"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} AT Millets Araku Naturals Pvt. Ltd. All
          rights reserved.
        </p>

        {/*<div style={styles.madeWith}>
          <span style={styles.madeWithText}>Made with</span>
          <Heart size={14} fill="#ef4444" />
          <span style={styles.madeWithText}>by</span>
          <a
            href="https://kernn.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.kernLink}
          >
            Kernn Automations
          </a>
        </div>*/}
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- SOCIAL BUTTON ---------------- */

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.socialButton}
    whileHover={{ scale: 1.1, y: -4 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

/* =========================================================
   STYLES
========================================================= */

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(180deg,#ffffff 0%,#f8fcfa 50%,#f0faf5 100%)",
    borderTop: "2px solid rgba(60,139,101,0.12)",
    overflow: "hidden",
  },

  bgPattern: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.15), transparent 50%), radial-gradient(circle at 85% 75%, rgba(60,139,101,0.12), transparent 50%)",
  },

  bgOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(60,139,101,0.02) 2px, rgba(60,139,101,0.02) 4px)",
  },

  container: {
    position: "relative",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "80px 32px 48px",
    display: "flex",
    flexDirection: "column",
    gap: 56,
    alignItems: "center",
    textAlign: "center",
    zIndex: 1,
  },

  /* BRAND */
  brandSection: { maxWidth: 640 },

  brandHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
  },

  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3c8b65,#2d7a54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 12px 40px rgba(60,139,101,0.3)",
  },

  leafIcon: { color: "#fff" },

  brandName: {
    fontSize: "2.5rem",
    fontWeight: 900,
    background: "linear-gradient(135deg,#2d7a54,#3c8b65,#78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  tagline: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
    marginBottom: 24,
  },

  badge: {
    padding: "12px 28px",
    borderRadius: 50,
    background:
      "linear-gradient(135deg, rgba(60,139,101,0.08), rgba(120,194,154,0.12))",
    border: "1.5px solid rgba(60,139,101,0.2)",
    display: "inline-block",
  },

  badgeText: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#3c8b65",
  },

  /* CONTACTS */
  contactGrid: {
    display: "grid",
    gap: 24,
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    width: "100%",
  },

  regionBlock: {
    padding: 20,
    borderRadius: 18,
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(60,139,101,0.15)",
    backdropFilter: "blur(10px)",
  },

  regionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
    justifyContent: "center",
  },

  regionIcon: { color: "#3c8b65" },

  regionLabel: {
    fontSize: "0.8rem",
    fontWeight: 800,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#166534",
  },

  regionPeople: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  contactItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  contactText: {
    fontSize: "0.95rem",
    color: "#1f3d2b",
    fontWeight: 500,
  },

  contactPhone: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#15803d",
    textDecoration: "none",
  },

  /* SOCIAL */
  socialSection: { maxWidth: 500, width: "100%" },

  socialTitle: {
    fontSize: "1rem",
    fontWeight: 800,
    marginBottom: 24,
    textTransform: "uppercase",
  },

  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },

  socialButton: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3c8b65,#2d7a54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(60,139,101,0.3)",
  },

  /* BOTTOM */
  bottomBar: {
    borderTop: "1px solid rgba(60,139,101,0.15)",
    padding: "24px 32px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
  },

  copyright: {
    fontSize: "0.85rem",
    color: "#5f8f75",
  },

  madeWith: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.85rem",
  },

  madeWithText: { color: "#5f8f75" },

  kernLink: {
    fontWeight: 700,
    color: "#0d2817",
    textDecoration: "none",
  },
};
