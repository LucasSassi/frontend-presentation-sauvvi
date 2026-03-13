import { useUserCycle } from "../../../../features/user-cycle/model/useUserCycle";

describe("useUserCycle", () => {
  it("deve exportar o hook da feature", () => {
    expect(useUserCycle).toBeDefined();
  });
});
