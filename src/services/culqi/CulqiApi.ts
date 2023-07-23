import { Api } from "../Api";

let singleton: CulqiApi | null = null;

export class CulqiApi extends Api {
  constructor() {
    if (!singleton) {
      super("https://fepruebatecnicaculqi-backend-production.up.railway.app/");
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      singleton = this;
    }
    //get culqiToken from localStorage
    const culqiToken = localStorage.getItem("culqiToken");
    if (culqiToken) {
      singleton.setHeader("Authorization", `Bearer ${culqiToken}`);
    }
    return singleton;
  }
}

export const setCulqiToken = (token: string) => {
  const api = new CulqiApi();
  api.setHeader("Authorization", `Bearer ${token}`);
};
