import { api } from "../../../shared/api/client";

describe("api client", () => {
  it("deve criar uma instância do axios", () => {
    expect(api).toBeDefined();
  });
});
