import React from "react";

// Elements
import Card from "../vanilla-styles/components/Card";
import {
  ButtonOne,
  ButtonTwo,
  ButtonThree,
} from "../vanilla-styles/components/Button";
import {
  ButtonOneVariant,
  ButtonTwoVariant,
  ButtonThreeVariant,
} from "../vanilla-styles/components/ButtonStyleVariant";

// Styles
import { container, containerGrid } from "../vanilla-styles/index.css";
import { sprinkles } from "../vanilla-styles/styles/styles-sprinkles-reuse-contract.css";
import { themeBox } from "../vanilla-styles/components/markup/theme-box.css";
import { themeColors } from "../vanilla-styles/themes/theme-colors.css";
import { themeDefaultButton } from "../vanilla-styles/themes/theme-button-default.css";
import { gridBox } from "../vanilla-styles/components/markup/recipe-accordion.css";
// components
import { Navigation } from "../vanilla-styles/components/markup/Navigation";
import { MultiAccordion } from "../vanilla-styles/components/markup/Accordion";

export default function HomePage() {
  const firstCard = [
    {
      title: 'Client-Side "See More"',
      para: 'This card implements "🛒  See More" button as the base style and produce two variants from styleVariant() which are implemented in the following cards.',
    },
    {
      title: 'Server-Side "Add to Cart"',
      para: "This card implements SSR button \"Add to Cart\", It's based in a contract/theme create with client side API but I's implemented using Sprinkles to provide it from SSR. Which will be taken as a base to following variants with recipes API.",
    },
    {
      title: "Client-Side Badge",
      para: 'The badge as "Discount" reproduce client side rendering simple and slim as a synthesis of the styles and variants produced for client side buttons, where to be explicit, differents contracts and values were usually mixed to explore the very edges of the differents APIs that vanilla-extract offers.',
    },
  ];

  const secondCard = [
    {
      title: '"See More" variant (client side)',
      para: "This button has base styles that are replaced by the implementation of a contract that is reused to extract values and to combine them with new ones provided. It reuses styles as margin, from the base style, introduce a reused padding and replace values as border-radius. The final result is an element that recycles a contract and a theme previously built over which extend the element styles with own values.",
    },
    {
      title: '"Add to Cart" as recycling',
      para: "The base style were setup to be share by this and next variant, reuses two contracts/themes from client side which implements in server side and shares a Sprinkles which even reuse a client side contract that implements at the same time with new values though the server side too.",
    },
    {
      title: '"Add to Cart" as variant',
      para: "As a variant, this element uses Recipe API which reuses three contracts and combine this with Sprinkles. It produces a variant based in combined properties.",
    },
    {
      title: "Client-Side Badge",
      para: "Simple and slim, this badge is a client side badge variant that reuses a contract/theme, uses base style for the element and introduce its own values.",
    },
  ];

  const thirdCard = [
    {
      title: '"See More" variant (client side)',
      para: "This variant of the element uses the base styles, the base theme styles and introduce its own values. The final result is an element that reuses styles created on the fly, contract and themes previously defined and carring with all those rules add their own specific ones.",
    },
    {
      title: '"Add to Cart" as variant "on the fly"',
      para: "Through Recipe API were defined standard variants, then it was compound a combination of values which result in a new variant defined on the fly that includes the reuse of a contract/theme.",
    },
    {
      title: "Client-Side Badge",
      para: "This variant implements isolated styles without use or reuse contracts, themes or base element styles, introduce its own values providing them as an alternative.",
    },
  ];

  return (
    <>
      <Navigation />
      <Header />

      <br />
      <br />
      <br />
      <div className={container}>
        <div className={gridBox()}>
          <Card>
            <ButtonOne />
            <ButtonOneVariant />
          </Card>

          <div style={{ maxWidth: "500px", minWidth: "80px" }}>
            <MultiAccordion items={firstCard} />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className={container}>
        <div className={gridBox()}>
          <Card>
            <ButtonTwo />
            <ButtonTwoVariant />
          </Card>

          <div style={{ maxWidth: "500px", minWidth: "80px" }}>
            <MultiAccordion items={secondCard} />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className={container}>
        <div className={gridBox()}>
          <Card>
            <ButtonThree />
            <ButtonThreeVariant />
          </Card>

          <div style={{ maxWidth: "500px", minWidth: "80px" }}>
            <MultiAccordion items={thirdCard} />
          </div>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <div className={`${themeBox} ${themeDefaultButton} ${themeColors}`}>
      <div
        className={sprinkles({
          box: "centered",
        })}
      >
        <h1
          className={sprinkles({
            color: "primary",
          })}
        >
          Extract
        </h1>
        <div
          className={sprinkles({
            box: "centered",
          })}
        >
          <p style={{ margin: "0px" }}>
            An improvement related to contract/themes and how they are
            implemented is possible.
          </p>
          <p style={{ margin: "0px" }}>
            To build more efficient methods to delivery stlyes, to create
            specific contracts and themes, which allows DS to take advantage of
            it.
          </p>
          <p style={{ margin: "0px" }}>
            Every file in this proyect has comments and its commented for
            learning purposes.
          </p>
          <p style={{ margin: "0px", fontStyle: "italic" }}>
            <u>Click in the boxes to know more (+ 'item title')</u>
          </p>
        </div>
      </div>
    </div>
  );
}

// import { styleList } from "../vanilla-styles/styles/styles-list.css";
// import { styleListElement } from "../vanilla-styles/styles/styles-list.css";
// function List() {
//   const names = [
//     {
//       api: "Styling API",
//       url: "https://vanilla-extract.style/documentation/styling-api/",
//     },
//     {
//       api: "Sprinkles API",
//       url: "https://vanilla-extract.style/documentation/sprinkles-api/",
//     },
//     {
//       api: "Recipes API",
//       url: "https://vanilla-extract.style/documentation/recipes-api/",
//     },
//   ];
//   const spkls = sprinkles({
//     color: "secondary",
//   });
//   return (
//     <ol className={`${styleList} ${themeColors}`}>
//       {names.map((item) => (
//         <li
//           className={`${styleListElement} ${spkls}`}
//           key={item.api}
//         >
//           {/*
//             If the theme is not provided
//             the value comes from the most near definde value.
//             e.g: if themeColors variable is comented into the className
//             the value of default comes from styles-sprinkles-reuse-contract.css.ts
//             because it's defined there but if themeColors is provided as a variable
//             the value of default comes from the theme.
//             Same for primary/secondary but in those cases any value is provided
//             for color so it displays on black.

//             Any place which links a contract to provide styling for an element
//             Any element which is provided of styling by a methed that links a contract
//             it should carries the theme which provides values for that contract.
//             e.g: `color:{secondary: contractColors.colors.secondary}`
//             this element should carries className={themeColors}
//           */}
//           <span>
//           </span>
//           <a href={item.url} target="_blank" style={{marginLeft:'2px',textDecoration:'none'}}>
//             {item.api}
//           </a>
//         </li>
//       ))}
//     </ol>
//   );
// }
