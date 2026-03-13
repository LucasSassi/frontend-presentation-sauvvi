import { AppProviders } from "../../../process/providers/AppProviders";

describe("AppProviders", () => {
  it("deve exportar o provider raiz", () => {
    expect(AppProviders).toBeDefined();
  });
});