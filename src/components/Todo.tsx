// Todo.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface FormData {
  title: string;
  description: string;
  completed: boolean;
}

interface TodoProps {
  todo: TodoItem;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTodo: TodoItem) => void;
}

export default function Todo({ todo, isOpen, onClose, onSave }: TodoProps) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onSave({ ...todo, ...data });
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} className="w-full" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              className="w-full min-h-[100px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="completed" {...register("completed")} />
            <Label htmlFor="completed">Mark as completed</Label>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
