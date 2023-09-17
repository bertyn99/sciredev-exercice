import { describe, expect, test } from "vitest";
import { sum } from "./main";

describe("Sum function", function () {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 0 + 2 to equal 3", () => {
    expect(sum(0, 2)).toBe(4);
  });
});
