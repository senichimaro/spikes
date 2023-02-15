import { styleVariants } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { contractSizing } from "../contracts/contract-sizing.css";
import { contractButton } from "../contracts/contract-button.css";

/** Styling-Variations: client-side
 * API tools: style && styleVariants 
 * contract source: contract-sizing.css.ts && contract-button.css.ts
 */

// style shared by buttons
const baseStyle = style({
  margin: "5px",
  padding: "0px",
  border: 'none',
  background: 'none'
});
// Theme
const baseTheme = style({
  padding: contractSizing.size.small,
  border: '1px solid #bcbcc5',
  background: '#e9e9ed',
  borderRadius:'5px'
});
// Theme specific for buttons margin & padding
const overwriteTheme = style({
  padding: contractButton.space.padding,
});
/** variants of button
 * Each key is an array containing a variant.
 * primary: base style,
 * secondary: overwrites the base style,
 * tertiary: overwrites Theme.
 */
export const buttonStyle = styleVariants({
  primary: [baseStyle],
  secondary: [baseStyle, baseTheme],
  tertiary: [baseStyle, baseTheme, overwriteTheme],
});
