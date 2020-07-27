import React, { useState } from "react";
import "./MobileToggler.css";

const MobileToggler = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`mobile-toggler ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <div className="mobile-toggler__icon"></div>
    </div>
  );
};

export default MobileToggler;
