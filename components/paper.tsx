import React from "react";
import scss from "./paper.module.scss";

export default function Paper({ children }: any) {
  return <div className={scss.paper}>{children}</div>;
}
