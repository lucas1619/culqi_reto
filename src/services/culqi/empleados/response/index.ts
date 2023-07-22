import { User } from "@/models/user";

export interface EmpleadosResponse {
  status: string;
  total: number;
  data: User[];
}
