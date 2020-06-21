import { getSizeFromBreakpoint } from "../index";

describe("fn: getSizeFromBreakpoint", () => {
  it("returns breakpoint size", () => {
    expect(getSizeFromBreakpoint("medium", { medium: "300px" })).toBe("300px");
  });

  it("returns the value itself when does not match breakpoints", () => {
    expect(getSizeFromBreakpoint("222px", { medium: "300px" })).toBe("222px");
  });

  it('returns "0" and call log error when isnt int parsable or does not match breakpoints', () => {
    const mockErrorConsole = jest.fn();
    global.console.error = mockErrorConsole;

    expect(getSizeFromBreakpoint("foobar", { medium: "222px" })).toBe("0");
    expect(mockErrorConsole).toHaveBeenCalledTimes(1);
    expect(mockErrorConsole.mock.calls[0][0]).toMatchInlineSnapshot(
      `"styled-media-query: No valid breakpoint or size specified for media."`
    );
  });
});
