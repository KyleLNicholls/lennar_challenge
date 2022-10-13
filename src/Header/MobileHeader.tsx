import React from "react";
import menuIcon from "./hamburger.svg";
import closeIcon from "./close.svg";
import "./MobileHeader.css";
import { MobileMenu } from "./MobileMenu";

export function MobileHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="mobileHeader">
      <img className="logo mobileLogo" src={"logo.png"} alt="logo" />
      <button
        className="mobileMenuButton"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <img src={closeIcon} title="Menu" alt="menu" />
        ) : (
          <img src={menuIcon} title="Menu" alt="menu" />
        )}
      </button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
