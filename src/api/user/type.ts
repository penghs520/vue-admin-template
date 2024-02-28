export type LoginRequest = {
  username: String; // 什么时候用String ，什么时候用string
  password: string;
};

export interface LoginResponse {
  code: number;
  data: Data;
}

interface Data {
  token: string;
}