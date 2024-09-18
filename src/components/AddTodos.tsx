import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import axios from "axios";
import { SERVER_URL } from "@/lib/config";
import { useRecoilValue } from "recoil";
import { userStateAtom } from "@/store/atoms/user";

type FormData = {
  title: string;
  description: string;
  tag: string[];
};

export default function AddTodoPage() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userStateAtom);

  const [customTags, setCustomTags] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  // Handle adding custom tag
  const addCustomTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const tag = event.currentTarget.value.trim();
      if (tag && !customTags.includes(tag)) {
        setCustomTags((prevTags) => [...prevTags, tag]);
        event.currentTarget.value = "";
      }
    }
  };

  // Handle removing a custom tag
  const removeCustomTag = (tagToRemove: string) => {
    const updatedTags = customTags.filter((tag) => tag !== tagToRemove);
    setCustomTags(updatedTags);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/users/addTodo`,
        { ...data, tags: customTags, userId: userId, isComplete: false },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    navigate("/todos");
  };

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <Card className="md:w-full max-w-screen-md bg-zinc-800 text-zinc-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Todo</CardTitle>
          <CardDescription className="text-zinc-400">
            Create a new task for your todo list
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter todo title"
                {...register("title", { required: "Title is required" })}
                className="bg-zinc-700 border-zinc-600 text-zinc-100"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter todo description"
                {...register("description")}
                className="bg-zinc-700 border-zinc-600 text-zinc-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tag">Tags</Label>
              <Controller
                name="tag"
                control={control}
                defaultValue={[]}
                render={() => (
                  <>
                    <Input
                      placeholder="Enter a tag and press Enter"
                      className="bg-zinc-700 border-zinc-600 text-zinc-100"
                      onKeyDown={addCustomTag}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {customTags.map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-2 bg-zinc-600 text-zinc-100 py-1 px-2 rounded"
                        >
                          {tag}
                          <button
                            type="button"
                            className="text-red-400"
                            onClick={() => removeCustomTag(tag)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    {errors.tag && (
                      <p className="text-red-500 text-sm">
                        Please enter at least one tag
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              className="bg-zinc-700 text-zinc-100 hover:bg-zinc-600"
              onClick={() => navigate("/todos")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-zinc-600 text-zinc-100 hover:bg-zinc-500"
            >
              Add Todo
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
