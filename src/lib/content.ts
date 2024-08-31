import { Feature, Testimonial } from "./types";

// Define the array of testimonials
export const testimonials: Testimonial[] = [
  {
    quote: "Taskify has been a game-changer for my productivity. The app's intuitive design and powerful features make task management a breeze.",
    name: "John Doe",
    role: "Product Manager",
    avatar: "/placeholder-user.jpg",
    initials: "JD",
  },
  {
    quote: "I've tried countless task management apps, but Taskify is by far the most intuitive and powerful one I've used. It's a must-have for anyone looking to stay organized.",
    name: "Sarah Anderson",
    role: "Project Manager",
    avatar: "/placeholder-user.jpg",
    initials: "SA",
  },
  {
    quote: "Taskify has transformed the way I manage my tasks and projects. The app's features are incredibly useful, and the team behind it is always responsive and helpful.",
    name: "Michael Johnson",
    role: "Software Engineer",
    avatar: "/placeholder-user.jpg",
    initials: "MJ",
  },
];

// Define the array of features
export const features: Feature[] = [
  {
      title: "Task Management",
      description: "Easily create, organize, and track your tasks with our intuitive interface.",
      icon: "TimerIcon",
  },
  {
      title: "Tagging and Filtering",
      description: "Organize your tasks with custom tags and easily filter by tag or status.",
      icon: "TagIcon",
  },
  {
      title: "Task Editing",
      description: "Effortlessly edit your tasks, update due dates, and make changes as needed.",
      icon: "FilePenIcon"
  },
];
