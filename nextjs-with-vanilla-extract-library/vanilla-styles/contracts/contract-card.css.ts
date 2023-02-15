import { createThemeContract } from "@vanilla-extract/css";

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const contractCard = createThemeContract({
  display: {
    display: null,
    alignItems: null,
    justifyContent: null,
  },
  border: {
    border: null,
    borderRadius: null,
  },
  avatar: {
    maxWidth: null,
    maxHeight: null,
  },
  space: {
    margin: null,
    padding: null,
  },
});
