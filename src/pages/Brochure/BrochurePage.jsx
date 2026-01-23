import React from "react";
import { createPortal } from "react-dom";

import Header from "../../components/common/Header";
import BrochureFloat from "./BrochureFloat";
import Brochure from "./Brochure";

/* ================= HEADER PORTAL ================= */
const HeaderPortal = () => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <Header />,
    document.body, // 🔥 escapes brochure layout
  );
};

function BrochurePage() {
  return (
    <>
      {/* FLOATING HEADER (same as other pages) */}
      <Header />

      {/* OPTIONAL FLOAT ELEMENTS */}
      <BrochureFloat />

      {/* BROCHURE CONTENT */}
      <Brochure />
    </>
  );
}

export default BrochurePage;
