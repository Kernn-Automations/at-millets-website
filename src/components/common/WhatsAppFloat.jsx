import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BookImage, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const messages = [
  "👋 Need help? Chat with us!",
  "💬 Have a question? We’re on WhatsApp",
  "⚡ Instant support on WhatsApp",
  "🤝 Let’s talk — tap to chat",
  "📲 Chat with our team in seconds",
  "😊 We’re just a message away",
  "🟢 Online now — start chatting",
  "🚀 Quick replies, real people",
  "🤗 We’re happy to help — tap here",
];

const WhatsAppFloat = () => {
  const phoneNumber = "919542565613";
  const message = encodeURIComponent("Hi");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [showPopup, setShowPopup] = useState(true);
  const [popupText, setPopupText] = useState("👋 Hello! Click here to chat");

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    const interval = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setPopupText(random);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {showPopup && <div style={styles.popup}>{popupText}</div>}

      {/* 📘 Brochure Button */}
      <Link
        to="/brochure"
        aria-label="View Brochure"
        style={styles.brochureButton}
      >
        <FileText size={26} />
      </Link>

      {/* 💬 WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={styles.button}
      >
        <FaWhatsapp style={styles.icon} />
      </a>

      <style>
        {`
          @keyframes whatsappPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
            70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }

          @keyframes slideFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    animation: "whatsappPulse 2.5s infinite",
    textDecoration: "none",
  },
  icon: {
    color: "#ffffff",
    fontSize: "32px",
  },
  brochureButton: {
    position: "fixed",
    bottom: "92px", // 👈 sits on top of WhatsApp
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    textDecoration: "none",
  },
  popup: {
    position: "fixed",
    bottom: "38px",
    right: "96px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    zIndex: 9999,
    animation: "slideFade 0.4s ease-out",
    width: "fit-content",
    maxWidth: "280px",
    wordBreak: "break-word",
  },
};

export default WhatsAppFloat;
