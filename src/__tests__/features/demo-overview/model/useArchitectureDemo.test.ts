import {
  architectureLayers,
  useArchitectureDemo
} from "../../../../features/demo-overview/model/useArchitectureDemo";

describe("useArchitectureDemo", () => {
  it("deve exportar o hook da feature", () => {
    expect(useArchitectureDemo).toBeDefined();
  });

  it("deve listar todas as camadas principais da arquitetura", () => {
    expect(architectureLayers).toHaveLength(7);
  });
});