import { Api } from "../Api";

let singleton: CulqiApi | null = null;

export class CulqiApi extends Api {
  constructor() {
    if (!singleton) {
      super("https://fepruebatecnicaculqi-backend-production.up.railway.app/");
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      singleton = this;
    }
    return singleton;
  }
}
