import { UserCard } from "../../../../entities/user/ui/UserCard";

describe("UserCard", () => {
  it("deve exportar o card da entidade user", () => {
    expect(UserCard).toBeDefined();
  });
});