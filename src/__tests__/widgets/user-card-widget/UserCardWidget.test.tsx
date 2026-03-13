import { UserCardWidget } from "../../../widgets/user-card-widget/UserCardWidget";

describe("UserCardWidget", () => {
  it("deve exportar o widget que agrupa feature e entity", () => {
    expect(UserCardWidget).toBeDefined();
  });
});
