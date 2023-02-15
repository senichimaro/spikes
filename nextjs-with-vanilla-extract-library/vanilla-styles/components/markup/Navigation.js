import React from "react";

// styles
import { 
  NavigationStyles,
  NavigationListStyles,
} from "./recipe-navigation.css";

/** Recipe API: styling oriented
 * Meanwhile Sprinkles is useful to provide specific references
 * for style properties and default conditions,
 * Recipe API is useful to provide base properties to elements,
 * create variants and new variants made by to combine them.
 */
export function Navigation() {
  return (
    <div className={NavigationStyles()}>
        <img src="https://vanilla-extract.style/favicon-32x32.png" />
      <span>
        Proof of Concept: vanilla-extract
      </span>
      <List/>
    </div>
  );
}


function List() {
  const names = [
    {
      api: "Styling API",
      url: "https://vanilla-extract.style/documentation/styling-api/",
    },
    {
      api: "Sprinkles API",
      url: "https://vanilla-extract.style/documentation/sprinkles-api/",
    },
    {
      api: "Recipes API",
      url: "https://vanilla-extract.style/documentation/recipes-api/",
    },
  ];
  return (
    <ol className={NavigationListStyles()}>
      {names.map((item) => (
        <li
          style={{fontSize:'10px'}}
          key={item.api}
        >
          <span>
          </span>
          <a href={item.url} target="_blank" style={{marginLeft:'5px'}}>
            {item.api}
          </a>
        </li>
      ))}
    </ol>
  );
}
