const HeaderDivider = ({ color = "#d4a24c" }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        margin: "10px 0",
      }}
    >
      {/* Left Triangle Line (sharp → thick) */}
      <div
        style={{
          flex: 1,
          maxWidth: "300px",
          height: "1.5px",
          backgroundColor: color,
          clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
        }}
      />

      {/* Center Diamond */}
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: color,
          transform: "rotate(45deg)",
        }}
      />

      {/* Right Triangle Line (thick → sharp) */}
      <div
        style={{
          flex: 1,
          maxWidth: "300px",
          height: "1.5px",
          backgroundColor: color,
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      />
    </div>
  );
};

export default HeaderDivider;
