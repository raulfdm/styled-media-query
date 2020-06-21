export interface DefaultBreakpoints {
  huge: string;
  large: string;
  medium: string;
  small: string;
}

// export type HashBreakPoint = Record<string, string>;

export type HashBreakPoint<T> = {
  readonly [P in keyof T]: T[P];
};
