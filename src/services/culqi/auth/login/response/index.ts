import { User } from "@/models/user";

export interface LoginResponse {
  status: string;
  data: {
    user: User;
    token: string;
  };
}
