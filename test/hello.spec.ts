import { helloWorld } from "../src/hello";
describe("hello test", () => {
  it("hellow word", () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});
