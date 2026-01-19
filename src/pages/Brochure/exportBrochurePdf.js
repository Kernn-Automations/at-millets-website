import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportBrochurePdf = async (lang) => {
  const pdf = new jsPDF("p", "mm", "a4");

  const pages = document.querySelectorAll(".brochure-page");

  const A4_WIDTH_PX = 1200;
  const A4_HEIGHT_PX = 1700;

  for (let i = 0; i < pages.length; i++) {
    const originalPage = pages[i];

    /* ===== A4 WRAPPER ===== */
    const wrapper = document.createElement("div");
    wrapper.style.width = `${A4_WIDTH_PX}px`;
    wrapper.style.height = `${A4_HEIGHT_PX}px`;
    wrapper.style.position = "fixed";
    wrapper.style.left = "-9999px";
    wrapper.style.top = "0";
    wrapper.style.background = "#ffffff";
    wrapper.style.overflow = "hidden";

    /* ===== CLONE PAGE ===== */
    const clone = originalPage.cloneNode(true);

    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.maxWidth = "none";
    clone.style.margin = "0";
    clone.style.boxSizing = "border-box";

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    /* ===== CAPTURE ===== */
    const canvas = await html2canvas(wrapper, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      width: A4_WIDTH_PX,
      height: A4_HEIGHT_PX,
      windowWidth: A4_WIDTH_PX,
      windowHeight: A4_HEIGHT_PX,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    // ✅ Maintain aspect ratio automatically
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (i > 0) pdf.addPage();

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      imgWidth,
      imgHeight,
      undefined,
      "FAST"
    );

    document.body.removeChild(wrapper);
  }

  pdf.save(`AT_Millets_Brochure_${lang}.pdf`);
};
