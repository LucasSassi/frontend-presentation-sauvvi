import { api } from "../../../shared/api/client";
import type { User } from "../model/types";

interface UserResponse {
  id: number;
  name: string;
  email: string;
  company?: {
    name?: string;
  };
}

export const getUser = async (id: string) => {
  const { data } = await api.get<UserResponse>(`/users/${id}`);

  return {
    id: String(data.id),
    name: data.name,
    email: data.email,
    company: data.company?.name ?? "Sem empresa informada"
  } satisfies User;
};
