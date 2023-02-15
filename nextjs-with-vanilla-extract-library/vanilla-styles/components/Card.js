import React from "react";

// styles
import { themeCard } from "../themes/theme-card.css";
import { 
  cardClass, 
  cardHeader, 
  cardAvatar,
  cardBody
} from "../styles/styles-card.css";

export default function Card({children}) {
  return (
    <div className={themeCard}>
      <div className={cardClass}>
        <div className={cardHeader}>
          <img className={cardAvatar} src="https://bit.ly/2qGUB4W" />
        </div>
        <div className={cardBody}>
          <h3 style={{marginBottom:'0px'}} className="card-body-title">Card Title</h3>
          <p style={{marginTop:'0px'}} className="card-body-desc">Some description</p>
          <div className="card-body-footer">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
