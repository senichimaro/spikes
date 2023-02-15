import { style } from "@vanilla-extract/css";
import { contractCard } from "../contracts/contract-card.css";

/** client-side
 * Styles for card component
 */
export const cardClass = style({
  border: contractCard.border.border,
  borderRadius: contractCard.border.borderRadius,
  margin: contractCard.space.margin,
  padding: contractCard.space.padding,
  width:'400px',
  "@media": {
    "screen and (min-width: 1024px)": {
      display: contractCard.display.display,
      alignItems: contractCard.display.alignItems,
    },
    "screen and (max-width: 1024px)": {
      width:'200px',
    },
  },
});

export const cardHeader = style({
  display: contractCard.display.display,
  justifyContent: contractCard.display.justifyContent,
  alignItems: contractCard.display.alignItems,
});

export const cardAvatar = style({
  maxWidth: contractCard.avatar.maxWidth,
  maxHeight: contractCard.avatar.maxHeight,
  margin: contractCard.space.margin,
});

export const cardBody = style({
  "@media": {
    "screen and (max-width: 1024px)": {
      display: contractCard.display.display,
      flexFlow:'column',
      alignItems: contractCard.display.alignItems,
      margin: contractCard.space.margin,
    },
    "screen and (min-width: 1024px)": {
      margin: contractCard.space.margin,
    },
  },
});