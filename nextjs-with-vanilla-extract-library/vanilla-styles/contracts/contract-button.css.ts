import { createThemeContract } from "@vanilla-extract/css";

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const contractButton = createThemeContract({
  space: {
    margin: null,
    padding: null,
  },
});
