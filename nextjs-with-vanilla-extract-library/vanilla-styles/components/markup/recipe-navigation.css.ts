import { recipe } from "@vanilla-extract/recipes";

export const NavigationStyles = recipe({
  base: {
    fontFamily: "sans-serif",
    display:'flex',
    alignItems:'center',
  },
});

export const NavigationListStyles = recipe({
  base: {
    fontFamily: "sans-serif",
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin:'0px',
    padding:'0px',
    marginLeft:'20px',
  },
});
