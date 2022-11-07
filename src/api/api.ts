import { login, LoginResponse } from "./login";

export default class api {
  public async login(email: string, password: string) {
    return await login(email, password);
  }
}
