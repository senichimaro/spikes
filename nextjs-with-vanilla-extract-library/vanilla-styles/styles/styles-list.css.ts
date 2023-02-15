import { style } from '@vanilla-extract/css'

/** client-side
 * Styles for list and list elements
 */
export const styleList = style({
    fontFamily: 'sans-serif',
    listStyle: 'none',
    display: 'flex',
    flexWrap:'wrap',
})

export const styleListElement = style({
    marginRight: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    borderColor: 'blue',
})
