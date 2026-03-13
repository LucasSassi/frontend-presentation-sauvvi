import { runtimeConfig } from "../../../shared/config/runtime";

describe("runtimeConfig", () => {
  it("deve expor dados basicos de runtime", () => {
    expect(runtimeConfig).toBeDefined();
    expect(runtimeConfig.entryUrl).toBeDefined();
  });
});