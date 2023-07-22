import { CulqiApi } from "../../CulqiApi";
import { EmployeePayload } from "../payload";
import { EmpleadosResponse } from "../response";

export const getEmployees = async (
  payload: EmployeePayload
): Promise<EmpleadosResponse> => {
  const api = new CulqiApi();
  const response: EmpleadosResponse = await api.get<EmpleadosResponse>(
    "/empleados",
    payload
  );
  return response;
};
