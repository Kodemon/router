import { router, Route } from "../index";

describe("index", () => {
  it("should export router", () => {
    expect(router).toBeDefined();
  });

  it("should export Route", () => {
    expect(Route).toBeDefined();
  });
});
