import React from "react";
import Header from "../../components/common/Header";
import BrochureFloat from "./BrochureFloat";
import Brochure from "./Brochure";

import { createPortal } from "react-dom";

const HeaderProtal = () => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <Header />,
    document.body // 🔑 escape brochure layout
  );
};

function BrochurePage() {
  return (
    <>
      <HeaderProtal />
      <BrochureFloat />
      <Brochure />
    </>
  );
}

export default BrochurePage;
