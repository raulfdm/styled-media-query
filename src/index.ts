import { css } from "styled-components";
import { HashBreakPoint } from "./types";

export const defaultBreakpoints = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

export function getSizeFromBreakpoint(
  breakpointValue: string,
  breakpoints: HashBreakPoint = {}
) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.error(
      "styled-media-query: No valid breakpoint or size specified for media."
    );
    return "0";
  }
}

// export function generateMedia(breakpoints = defaultBreakpoints) {
//   const lessThan = (breakpoint) => (...args) => css`
//     @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
//       ${css(...args)}
//     }
//   `;

//   const greaterThan = (breakpoint) => (...args) => css`
//     @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
//       ${css(...args)}
//     }
//   `;

//   const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
//     @media (min-width: ${getSizeFromBreakpoint(
//         firstBreakpoint,
//         breakpoints
//       )}) and (max-width: ${getSizeFromBreakpoint(
//         secondBreakpoint,
//         breakpoints
//       )}) {
//       ${css(...args)}
//     }
//   `;

//   const oldStyle = Object.keys(breakpoints).reduce(
//     (acc, label) => {
//       const size = breakpoints[label];

//       acc.to[label] = (...args) => {
//         console.warn(
//           `styled-media-query: Use media.lessThan('${label}') instead of old media.to.${label} (Probably we'll deprecate it)`
//         );
//         return css`
//           @media (max-width: ${size}) {
//             ${css(...args)}
//           }
//         `;
//       };

//       acc.from[label] = (...args) => {
//         console.warn(
//           `styled-media-query: Use media.greaterThan('${label}') instead of old media.from.${label} (Probably we'll deprecate it)`
//         );
//         return css`
//           @media (min-width: ${size}) {
//             ${css(...args)}
//           }
//         `;
//       };

//       return acc;
//     },
//     { to: {}, from: {} }
//   );

//   return Object.assign(
//     {
//       lessThan,
//       greaterThan,
//       between,
//     },
//     oldStyle
//   );
// }

// export default generateMedia();
