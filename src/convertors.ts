import { HashBreakPoint } from "./types";

const DEFAULT_RATIO = 16;

function pxToEmOrRem<T extends HashBreakPoint>(
  breakpoints: T,
  ratio = DEFAULT_RATIO,
  unit: "rem" | "em"
): T {
  return Object.entries(breakpoints).reduce((acc, [name, value]) => {
    if (value.includes("px")) {
      // @ts-ignore
      acc[name] = parseInt(value) / ratio + unit;
    } else {
      // @ts-ignore
      acc[name] = value;
    }

    return acc;
  }, {} as T);
}

export function pxToEm<T extends HashBreakPoint>(
  breakpoints: T,
  ratio = DEFAULT_RATIO
) {
  return pxToEmOrRem(breakpoints, ratio, "em");
}

export function pxToRem<T extends HashBreakPoint>(
  breakpoints: T,
  ratio = DEFAULT_RATIO
) {
  return pxToEmOrRem(breakpoints, ratio, "rem");
}
