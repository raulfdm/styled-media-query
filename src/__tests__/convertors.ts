import { pxToEm, pxToRem } from "../convertors";

describe("pxToEm", () => {
  it("convert from px to em", () => {
    expect(pxToEm({ medium: "300px" })).toMatchInlineSnapshot(`
      Object {
        "medium": "18.75em",
      }
    `);
  });

  it("convert from px to em (case 2)", () => {
    expect(pxToEm({ medium: "300px", large: "444px", huge: "2054px" }))
      .toMatchInlineSnapshot(`
      Object {
        "huge": "128.375em",
        "large": "27.75em",
        "medium": "18.75em",
      }
    `);
  });

  it("keep the same value if is not px", () => {
    const breakPoints = { medium: "300vw", large: "444vw", huge: "2054rem" };

    expect(pxToEm(breakPoints)).toEqual(breakPoints);
  });
});

describe("pxToRem", () => {
  it("convert from px to rem", () => {
    expect(pxToRem({ medium: "300px" })).toMatchInlineSnapshot(`
      Object {
        "medium": "18.75rem",
      }
    `);
  });

  it("convert from px to rem (case 2)", () => {
    expect(pxToRem({ medium: "300px", large: "444px", huge: "2054px" }))
      .toMatchInlineSnapshot(`
      Object {
        "huge": "128.375rem",
        "large": "27.75rem",
        "medium": "18.75rem",
      }
    `);
  });

  it("keep the same value is not px", () => {
    const breakPoints = { medium: "300vw", large: "444vw", huge: "2054em" };

    expect(pxToEm(breakPoints)).toEqual(breakPoints);
  });
});
