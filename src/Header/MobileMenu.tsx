import React from "react";
import { Button } from "../Button";

interface NavMenuProps {
  open: boolean;
  onClose(): void;
}

export function MobileMenu(props: NavMenuProps) {
  const menuStyles: React.CSSProperties = {
    opacity: 0,
    transform: "translate(0%, -100%)",
  };
  if (props.open) {
    menuStyles.opacity = 1;
    menuStyles.transform = "translate(0%, 0%)";
  }

  return (
    <div
      style={{ visibility: props.open ? "visible" : "hidden" }}
      className="menuOverlay"
      onClick={() => props.onClose()}
    >
      <div style={menuStyles} className="mobileMenu">
        <div className="mobileMenuNavLinks">
          <a href="/Product">Product</a>
          <a href="/Features">Features</a>
          <a href="/Marketplace">Marketplace</a>
          <a href="/Marketplace">Company</a>
        </div>
        <Button>Start free trial</Button>
        <div className="mobileMenuFooter">
          Existing customer?<a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
