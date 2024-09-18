import { atom, selector } from "recoil";
import axios from "axios";
import { SERVER_URL } from "@/lib/config";

export const userStateAtom = atom({
  key: "userInfo",
  default: selector({
    key: "userInfo/default",
    get: async () => {
      try {
        const response = await axios.get(SERVER_URL + "/users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log("response.data.id: ", response.data);
        return response.data.id;
      } catch (error) {
        console.error("Error occured:", error);
        return null;
      }
    },
  }),
});

export const userIdAtom = atom<string | null>({
  key: "userId",
  default: null,
});
