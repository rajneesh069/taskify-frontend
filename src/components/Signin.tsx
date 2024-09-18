import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { SERVER_URL } from "@/lib/config";
import { userStateAtom } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";

interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const setUserId = useSetRecoilState(userStateAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${SERVER_URL}/users/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("res.data in signin:", res.data);
      setUserId(res.data.user.id || null);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("Error while signin in:", error);
      setUserId(null);
    }
  };

  return (
    <div className="dark:bg-background dark:text-card-foreground h-[90vh] flex items-center justify-center">
      <Card className="w-[90vw] max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {/* <Link
                  to="#"
                  className="text-white text-sm underline"
                >
                  Forgot password?
                </Link> */}
              </div>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white underline">
                Sign Up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
