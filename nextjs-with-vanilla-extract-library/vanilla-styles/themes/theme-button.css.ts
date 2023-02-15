import { createTheme } from "@vanilla-extract/css";
import { contractButton } from "../contracts/contract-button.css";

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const themeButton = createTheme(contractButton, {
  space: {
    margin: "15px",
    padding: "15px",
  },
});
