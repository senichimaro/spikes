import { recipe } from "@vanilla-extract/recipes";

export const accordionStyles = recipe({
  base: {
    backgroundColor: "#eee",
    color: "#444",
    cursor: "pointer",
    padding: "18px",
    width: "100%",
    border: "none",
    textAlign: "left",
    outline: "none",
    fontSize: "15px",
    transition: "0.4s",
  },
});

export const panelStyles = recipe({
  base: {
    padding: "0 18px",
    backgroundColor: "white",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease-out",
  },
});

export const gridBox = recipe({
  base: {
    display: "flex",
    margin:'0px auto',
    maxWidth:'1200px',
    flexWrap:'wrap',
  },
});

export const accordionContainer = recipe({
  base: {
    padding: "0 18px",
    backgroundColor: "white",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease-out",
  },
});

