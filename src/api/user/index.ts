import request from "@/utils/request";
import type { LoginRequest, LoginResponse } from "./type";

enum URL {
  LOGIN = "/api/user/login",
  GET_USER_INFO = "/api/user/info",
}

export const sendLoginRequest = (loginRequest: LoginRequest) =>
  request.post<any, LoginResponse>(URL.LOGIN, loginRequest);
