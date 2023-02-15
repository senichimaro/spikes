import { createTheme } from "@vanilla-extract/css";
import { contractSizing } from "../contracts/contract-sizing.css";

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const themeSizing = createTheme(contractSizing, {
  size: {
    small: "5px",
    medium: "15px",
    large: "30px",
  }
});
