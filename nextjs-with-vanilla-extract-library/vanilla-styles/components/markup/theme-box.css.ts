import { createTheme } from "@vanilla-extract/css";
import { contractBox } from "./contract-box.css";

export const themeBox = createTheme(contractBox,{
    boxes:{
        display: 'flex',
        justifyContent: 'center',
        flexFlow:'column',
        alignItems: 'center',
    }
})