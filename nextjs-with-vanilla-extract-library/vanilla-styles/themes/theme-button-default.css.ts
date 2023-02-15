import { contractDefaultButton } from "../contracts/contract-default-button.css";
import { createTheme } from '@vanilla-extract/css'

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 * 
 * implemented: ButtonVariant.js
 */
export const themeDefaultButton = createTheme(contractDefaultButton,{
    borders: {
        border: '1px',
        borderRadius: '10px',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '2px',
    },
    background: {
        primary: 'red',
        secondary: 'yellow',
        default: 'purple'
    },
    color: {
        primary: 'red',
        secondary: 'yellow',
        default: 'purple'
    },
    size: {
        small: '5px',
        medium: '10px',
        large: '20px',
    },
    margin: {
        small: '5px',
        medium: '10px',
        large: '20px',
        none: '0px',
    },
    padding: {
        small: '5px',
        medium: '10px',
        large: '20px',
    }
})