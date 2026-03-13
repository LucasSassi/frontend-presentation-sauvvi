import { getUser } from "../../../../entities/user/api/getUser";

describe("getUser", () => {
  it("deve exportar a função", () => {
    expect(getUser).toBeDefined();
  });
});
