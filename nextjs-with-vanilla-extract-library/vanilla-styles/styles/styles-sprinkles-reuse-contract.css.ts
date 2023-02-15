import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { contractColors } from "../contracts/contract-colors.css";
import { contractDefaultButton } from "../contracts/contract-default-button.css";
import { contractBox } from "../components/markup/contract-box.css";
/** server-side
 * This sprinkles reuse a previously defined contract
 * to provide types for styling,
 * includes values crated on the fly, 
 * includes conditional rendering based in @media query.
 * 
 * 
 * implemented: index.js
 * components:
 *  - Header
 *  - List
 */

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: '#79e769', // <-- created on the fly
    },
    background: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: "#e0e4cc", // <-- created on the fly
    },
    borders:{
      // provide all the border styles
      primary: contractDefaultButton.borders,
      // provide one style property
      secondary: contractDefaultButton.borders.borderColor,
    },
    box:{
      centered: contractBox.boxes,
      justify: contractBox.boxes.justifyContent
    }
  },
});

export const sprinkles = createSprinkles(colorProperties);

// It's a good idea to export the Sprinkles type too
// export type Sprinkles = Parameters<typeof colorProperties>[0];
