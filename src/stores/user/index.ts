import { defineStore } from "pinia";
import type { UserState } from "./type";
import type { LoginRequest } from "@/api/user/type";
import { sendLoginRequest } from "@/api/user";
import router from "@/router";

const userStore = defineStore("userStore", {
  state: (): UserState => {
    return {
      token: "",
      userId: "",
      username: "",
      nickname: "",
      avatar: "",
    };
  },
  actions: {
    async doLogin(loginRequest: LoginRequest) {
      const result = await sendLoginRequest(loginRequest);
      //如果登录成功，记录token、用户名等信息到store
      console.log(result);
      if (result.code === 200) {
        router.push("/");
      }
    },
  },
});

export default userStore;