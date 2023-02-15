import { createThemeContract } from '@vanilla-extract/css'

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const contractDefaultButton = createThemeContract({
    borders: {
        border: null,
        borderRadius: null,
        borderColor: null,
        borderStyle: null,
        borderWidth: null,
    },
    color: {
        primary: null,
        secondary: null,
        default: null
    },
    background: {
        primary: null,
        secondary: null,
        default: null
    },
    size: {
        small: null,
        medium: null,
        large: null,
    },
    margin: {
        small: null,
        medium: null,
        large: null,
        none: null,
    },
    padding: {
        small: null,
        medium: null,
        large: null,
    }
})