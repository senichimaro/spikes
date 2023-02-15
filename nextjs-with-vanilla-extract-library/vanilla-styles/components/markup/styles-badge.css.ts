import { styleVariants } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { contractSizing } from "../../contracts/contract-sizing.css";

// style shared by badges
const baseBadgeStyle = style({
  margin: "5px",
  padding: "0px",
  color: '#69d2e7',
});
// Theme
const baseBadgeTheme = style({
  color: '#79e769',
  padding: contractSizing.size.small,
});
// Theme specific for badge margin & padding
const overwriteBadgeTheme = style({
  padding: '5px',
  color: 'purple',
});
export const badgeStyle = styleVariants({
  primary: [baseBadgeStyle],
  secondary: [baseBadgeTheme],
  tertiary: [overwriteBadgeTheme],
});
