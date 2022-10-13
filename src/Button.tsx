import React from "react";
import "./Button.css";

export function Button({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={className ? `customButton ${className}` : "customButton"}
      {...props}
    />
  );
}
