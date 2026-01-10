import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #ffffff 0%, #f4faf6 100%)",
        padding: "40px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          maxWidth: 560,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "6rem",
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(135deg, #3c8b65, #78c29a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 12,
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#0d2817",
            marginBottom: 12,
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#3f5f4f",
            marginBottom: 32,
          }}
        >
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #3c8b65 0%, #2d7a54 100%)",
              color: "#fffef9",
              boxShadow: "0 6px 24px rgba(60, 139, 101, 0.25)",
            }}
          >
            Go to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              fontWeight: 600,
              cursor: "pointer",
              background: "transparent",
              color: "#2d7a54",
              border: "2px solid #2d7a54",
            }}
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
