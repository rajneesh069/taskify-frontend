import { atom, selector } from "recoil";
import { User } from "../../lib/types";
import axios from "axios";
import { BASE_URL } from "../../config";

export const userState = atom<User>({
  key: "userState",
  default: selector({
    key: "user/default",
    get: async () => {
      const res = await axios.post(
        `${BASE_URL}/users/signin`,
        {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
  }),
});

export const emailState = atom<string>({
  key: "email",
  default: "",
});

export const userIdState = atom<number>({
  key: "user_id",
  default: 1,
});
