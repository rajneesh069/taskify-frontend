import { useForm } from "react-hook-form";
import { SigninFormData } from "./Signin";
import axios from "axios";
import { BASE_URL } from "../config";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emailState, userIdState } from "../store/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import { userIdSelector } from "../store/selectors/userSelector";

export default function Signup() {
  const { register, handleSubmit } = useForm<SigninFormData>();
  const setUserId = useSetRecoilState(userIdState);
  const setEmail = useSetRecoilState(emailState);
  const userId = useRecoilValue(userIdSelector);
  const navigate = useNavigate();
  const onSubmit = async (data: SigninFormData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUserId(Number(response.data.user.id));
      setEmail(response.data.user.email);
      navigate(`/users/${userId}`);
    } catch (error) {
      console.error(error);
      setUserId(-1);
      setEmail("");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="Logo.png" alt="Logo" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: true,
                  })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center">
              Already have an account?&nbsp;{" "}
              <button
                className="underline"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
