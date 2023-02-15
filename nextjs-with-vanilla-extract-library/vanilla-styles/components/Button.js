import React from "react";

// styles
import { buttonStyle } from "../styles/styles-button.css";
import { themeSizing } from "../themes/theme-sizing.css";
import { themeButton } from "../themes/theme-button.css";
import { badgeStyle } from "./markup/styles-badge.css";

/** ButtonN: client-side
 * theme: theme-sizing.css && theme-button.css.ts
 * style variant: styles-button.css.ts
 */

export function ButtonOne() {
  return (
    <>
    {/* location: Left */}
    <div className={`${themeSizing} ${themeButton}`}>
    <span className={badgeStyle.primary}>Discount</span>
      <button className={buttonStyle.primary}>
      🛒 See More
      </button>
    </div>
    </>
  );
}

export function ButtonTwo() {
  return (
    <>
    {/* location: Center */}
    <div className={`${themeSizing} ${themeButton}`}>
    <span className={badgeStyle.secondary}>Discount</span>
      <button className={buttonStyle.secondary}>
      🛒 See More
      </button>
    </div>
    </>
  );
}


export function ButtonThree() {
  return (
    <>
    {/* location: Right */}
    <div className={`${themeSizing} ${themeButton}`}>
    <span className={badgeStyle.tertiary}>Discount</span>
      <button className={buttonStyle.tertiary}>
      🛒 See More
      </button>
    </div>
    </>
  );
}
