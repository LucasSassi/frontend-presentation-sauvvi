import { useAppReady } from "../../../process/model/useAppReady";

describe("useAppReady", () => {
  it("deve exportar o hook de inicializacao", () => {
    expect(useAppReady).toBeDefined();
  });
});