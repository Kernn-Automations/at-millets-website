import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

/* =========================================================
   MINIMAL PREMIUM FOOTER – WHITE & GREEN THEME
========================================================= */

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer style={styles.footer}>
      {/* Animated background pattern */}
      <div style={styles.bgPattern} />
      <div style={styles.bgOverlay} />

      <div style={styles.container}>
        {/* BRAND & TAGLINE */}
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
            Premium millets and natural foods from Araku Valley's tribal farmers
          </p>
          <div style={styles.badge}>
            <span style={styles.badgeText}>
              Rooted in Nature • Built on Trust
            </span>
          </div>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={styles.contactGrid}
        >
          <div style={styles.contactItem}>
            <MapPin size={20} style={styles.contactIcon} />
            <span style={styles.contactText}>Araku Valley, Andhra Pradesh</span>
          </div>
          <div style={styles.contactItem}>
            <Phone size={20} style={styles.contactIcon} />
            <span style={styles.contactText}>+91 XXXXX XXXXX</span>
          </div>
          <div style={styles.contactItem}>
            <Mail size={20} style={styles.contactIcon} />
            <span style={styles.contactText}>info@atmillets.com</span>
          </div>
        </motion.div>

        {/* SOCIAL MEDIA */}
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
        <div style={styles.madeWith}>
          <span style={styles.madeWithText}>Made with</span>
          <Heart size={14} style={styles.heartIcon} fill="#ef4444" />
          <span style={styles.madeWithText}>by</span>
          <a
            href="https://kernn.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.kernLink}
            onMouseEnter={(e) => (e.target.style.color = "#3c8b65")}
            onMouseLeave={(e) => (e.target.style.color = "#0d2817")}
          >
            Kernn Automations
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- SOCIAL LINK COMPONENT ---------------- */

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.socialButton}
    whileHover={{ scale: 1.1, y: -4 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

/* =========================================================
   STYLES – MINIMAL PREMIUM WHITE & GREEN
========================================================= */

const styles = {
  footer: {
    position: "relative",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fcfa 50%, #f0faf5 100%)",
    borderTop: "2px solid rgba(60,139,101,0.12)",
    overflow: "hidden",
  },

  bgPattern: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 25%, rgba(120,194,154,0.15), transparent 50%), radial-gradient(circle at 85% 75%, rgba(60,139,101,0.12), transparent 50%)",
    pointerEvents: "none",
  },

  bgOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(60,139,101,0.02) 2px, rgba(60,139,101,0.02) 4px)",
    pointerEvents: "none",
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

  /* BRAND SECTION */
  brandSection: {
    maxWidth: 640,
  },

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
    background: "linear-gradient(135deg, #3c8b65, #2d7a54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 12px 40px rgba(60,139,101,0.3), 0 4px 12px rgba(60,139,101,0.2)",
  },

  leafIcon: {
    color: "#ffffff",
  },

  brandName: {
    fontSize: "2.5rem",
    fontWeight: 900,
    margin: 0,
    background: "linear-gradient(135deg, #2d7a54, #3c8b65, #78c29a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
  },

  tagline: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#3f5f4f",
    marginBottom: 24,
    fontWeight: 400,
  },

  badge: {
    display: "inline-block",
    padding: "12px 28px",
    background:
      "linear-gradient(135deg, rgba(60,139,101,0.08), rgba(120,194,154,0.12))",
    borderRadius: 50,
    border: "1.5px solid rgba(60,139,101,0.2)",
  },

  badgeText: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#3c8b65",
  },

  /* CONTACT SECTION */
  contactGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 32,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 24px",
    background: "rgba(255,255,255,0.6)",
    borderRadius: 16,
    border: "1px solid rgba(60,139,101,0.15)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },

  contactIcon: {
    color: "#3c8b65",
    strokeWidth: 2,
    flexShrink: 0,
  },

  contactText: {
    fontSize: "0.95rem",
    color: "#2d4a3d",
    fontWeight: 500,
  },

  /* SOCIAL SECTION */
  socialSection: {
    width: "100%",
    maxWidth: 500,
  },

  socialTitle: {
    fontSize: "1rem",
    fontWeight: 800,
    color: "#0d2817",
    marginBottom: 24,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  socialLinks: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
  },

  socialButton: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3c8b65, #2d7a54)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    textDecoration: "none",
    boxShadow:
      "0 8px 24px rgba(60,139,101,0.3), 0 2px 8px rgba(60,139,101,0.2)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  /* BOTTOM BAR */
  bottomBar: {
    borderTop: "1px solid rgba(60,139,101,0.15)",
    padding: "24px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },

  copyright: {
    fontSize: "0.85rem",
    color: "#5f8f75",
    margin: 0,
    fontWeight: 500,
  },

  madeWith: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.85rem",
  },

  madeWithText: {
    color: "#5f8f75",
  },

  heartIcon: {
    color: "#ef4444",
    strokeWidth: 0,
  },

  kernLink: {
    color: "#0d2817",
    fontWeight: 700,
    textDecoration: "none",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },
};
