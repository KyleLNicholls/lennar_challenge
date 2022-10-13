import { MobileHeader } from "./MobileHeader";
import "./Header.css";
import { Button } from "../Button";

export function Header() {
  return (
    <header>
      <MobileHeader />
      <div className="headerFlex">
        <div className="headerFlex">
          <img className="logo" src={"logo.png"} alt="logo" />
          <a href="/Product">Product</a>
          <a href="/Features">Features</a>
          <a href="/Marketplace">Marketplace</a>
          <a href="/Marketplace">Company</a>
        </div>
        <div className="headerFlex">
          <a href="/login">Login</a>
          <Button className="headerButton">Start free trial</Button>
        </div>
      </div>
    </header>
  );
}
