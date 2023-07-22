import { Payload } from "@/services/Payload";
export interface EmployeePayload extends Payload {
  limit: number;
  page: number;
}
