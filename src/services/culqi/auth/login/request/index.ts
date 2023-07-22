import { CulqiApi } from "../../../CulqiApi";
import { LoginPayload } from "../payload";
import { LoginResponse } from "../response";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const api = new CulqiApi();
  const response: LoginResponse = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );
  return response;
};
