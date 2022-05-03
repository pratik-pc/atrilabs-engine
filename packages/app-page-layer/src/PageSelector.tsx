import { gray300, gray400, h4Heading } from "@atrilabs/design-system";
import React from "react";
import { ArrowDown } from "./ArrowDown";

interface PageSelectorProps {}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    ...h4Heading,
    display: "flex",
    color: gray400,
    alignItems: "center",
    alignSelf: "center",
  },
  span: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  p: {
    color: gray300,
    display: "inline-block",
    margin: "0 0.3rem",
    width: "8ch",
    maxWidth: "8ch",
    overflow: "hidden",
  },
};
export const PageSelector: React.FC<PageSelectorProps> = () => {
  return (
    <div style={styles.page}>
      <div>Page:</div>
      <div style={styles.p}>Home</div>
      <span style={styles.span}>
        <ArrowDown />
      </span>
    </div>
  );
};