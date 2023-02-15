import { createThemeContract } from "@vanilla-extract/css";

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const contractSizing = createThemeContract({
    size: {
        small: null,
        medium: null,
        large: null,
    }
})