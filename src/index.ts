import {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  InterpolationValue,
  InterpolationFunction,
} from "styled-components";
import { HashBreakPoint } from "./types";

export const defaultBreakpoints = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

type DefaultBreakpoints = typeof defaultBreakpoints;

interface Hash {
  [name: string]: string;
}

type StyledComponentsCSSType = Parameters<typeof css>;

export function getSizeFromBreakpoint(
  breakpointValue: string,
  breakpoints = {} as Hash
): string {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }

  if (parseInt(breakpointValue)) {
    return breakpointValue;
  }

  console.error(
    "styled-media-query: No valid breakpoint or size specified for media."
  );

  return "0";
}

export function generateMedia(breakpoints = defaultBreakpoints) {
  function lessThan(
    breakpoint: keyof typeof breakpoints | string
  ): (...args: TemplateStringsArray[]) => string;
  function lessThan(breakpoint: string) {
    return (...args: TemplateStringsArray[]) => {
      return `
      @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
        ${args}
      }
      `;
    };
  }

  // const greaterThan = (breakpoint) => (...args) => css`
  //   @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
  //     ${css(...args)}
  //   }
  // `;

  // const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
  //   @media (min-width: ${getSizeFromBreakpoint(
  //       firstBreakpoint,
  //       breakpoints
  //     )}) and (max-width: ${getSizeFromBreakpoint(
  //       secondBreakpoint,
  //       breakpoints
  //     )}) {
  //     ${css(...args)}
  //   }
  // `;

  // const oldStyle = Object.keys(breakpoints).reduce(
  //   (acc, label) => {
  //     const size = breakpoints[label];

  //     acc.to[label] = (...args) => {
  //       console.warn(
  //         `styled-media-query: Use media.lessThan('${label}') instead of old media.to.${label} (Probably we'll deprecate it)`
  //       );
  //       return css`
  //         @media (max-width: ${size}) {
  //           ${css(...args)}
  //         }
  //       `;
  //     };

  //     acc.from[label] = (...args) => {
  //       console.warn(
  //         `styled-media-query: Use media.greaterThan('${label}') instead of old media.from.${label} (Probably we'll deprecate it)`
  //       );
  //       return css`
  //         @media (min-width: ${size}) {
  //           ${css(...args)}
  //         }
  //       `;
  //     };

  //     return acc;
  //   },
  //   { to: {}, from: {} }
  // );

  return {
    lessThan,
    // greaterThan,
    // between,
  };
  // oldStyle
}

const abnc = generateMedia();

abnc.lessThan("huge");
abnc.lessThan("100px");
// export default generateMedia();

function lessThan() {
  retur;
}
