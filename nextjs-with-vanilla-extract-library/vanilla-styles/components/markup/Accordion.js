import React from "react";
import { accordionStyles, panelStyles } from "./recipe-accordion.css";

export function MultiAccordion({ items }) {
  const togglePanel = (e) => {
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return items.map((item, index) => (
    <div key={index}>
      <button onClick={togglePanel} className={`${accordionStyles()}`}>
        + {item.title}
      </button>
      <div className={`${panelStyles()}`}>
        <p>{item.para}</p>
      </div>
    </div>
  ));
}
