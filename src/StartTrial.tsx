import "./StartTrial.css";
import React from "react";
import { Button } from "./Button";

export function StartTrial() {
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <div className="title1">A better way to</div>
      <div className="title2">ship web apps</div>
      <div className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="trialInfo">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="trialForm">
            <input
              className="emailInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Enter your email"
            />
            <Button>Start free trial</Button>
          </div>
        </form>
        <div>
          Start your free 14-day trial, no credi card necessary. By providing
          your email, you agree to our <a href="/terms">terms of service</a>.
        </div>
      </div>
    </div>
  );
}
