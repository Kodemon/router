import React from "react";
import { router } from "router";

export const Link: React.FC<{ to: string }> = ({ children, to }) => {
  return <a href={to} onClick={(event) => {
    event.preventDefault();
    router.goTo(to);
  }}>{children}</a>
}