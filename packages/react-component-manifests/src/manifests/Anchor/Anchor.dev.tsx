import { forwardRef } from "react";
import Anchor from "./Anchor";
import { gray500 } from "@atrilabs/design-system";

const DevAnchor: typeof Anchor = forwardRef((props, ref) => {
  const overrideStyleProps: React.CSSProperties =
    props.children.length === 0
      ? {
          // do not provide minHeight minWidth if user has provided height width
          minHeight: props.styles.height ? "" : "100px",
          minWidth: props.styles.width ? "" : "100px",
          borderWidth: `2px`,
          borderStyle: `dashed`,
          borderColor: `${gray500}`,
          boxSizing: "border-box",
          display: "inline-block",
          ...props.styles,
        }
      : { ...props.styles };
  return (
    <Anchor
      ref={ref}
      {...props}
      styles={overrideStyleProps}
      custom={{ ...props.custom, disabled: true }}
    />
  );
});

export default DevAnchor;
