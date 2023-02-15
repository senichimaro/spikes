import React from "react";

// styles
import { button } from '../recipes/recipe-button.css'
import { themeSizing } from "../themes/theme-sizing.css";
import { themeColors } from "../themes/theme-colors.css";
import { themeDefaultButton } from '../themes/theme-button-default.css'
import { buttonDefaultSprinkles } from "../styles/styles-sprinkles.css";

/** ButtonOneVariant: server-side
 * theme: theme-button-default.css.ts
 * sprinkles: styles/styles-sprinkles.css.ts
 * contract source: contract-default-button.css
 */
export function ButtonOneVariant() {
  return (
    <>
    {/* location: Left */}
    <div className={themeDefaultButton}>
      <button className={buttonDefaultSprinkles({
        color: "primary",
        margin: "small",
        padding: "small",
      })}>
        Add to Cart
      </button>
    </div>
    </>
  );
}

/** Recipe API: ButtonTwoVariant && ButtonThreeVariant
 * Base style was setup which would share all elements
 * that implements the button({}) exported function.
 * 
 * theme source: 
 *  - theme-sizing.css.ts
 *  - theme-colors.css.ts
 *  - theme-button-default.css.ts
 * contract source: 
 *  - contract-colors.css.ts
 *  - contract-sizing.css.ts
 *  - contract-default-button.css.ts
 */

export function ButtonTwoVariant() {
  return (
    <>
    {/* location: Center */}
    <div className={`${buttonDefaultSprinkles} ${themeSizing} ${themeColors} ${themeDefaultButton}`}>
    {/* using recipe API:
        - taking values from themeSizing && themeColors
        - buttonDefaultSprinkles (server-side) && themeDefaultButton (client-side)
    */}
      <button className={button({
        color: "primary",
        space: "small",
      })}>
        Add to Cart
      </button>
    </div>
    </>
  );
}

export function ButtonThreeVariant() {
  return (
    <>
    {/* location: Right */}
    <div className={`${buttonDefaultSprinkles} ${themeSizing} ${themeColors} ${themeDefaultButton}`}>
    {/* using recipe API: 
        - taking values from themeSizing && themeColors
        - combine options to get a newly variant
    */}
      <button className={button({
        color: "default",
        size: "large",
      })}>
        Add to Cart
      </button>
    </div>
    </>
  );
}
