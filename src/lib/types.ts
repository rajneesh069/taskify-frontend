export interface Todo {
  title: string;
  description: string;
  id: number;
  user_id: number;
}

export interface User {
  id: number;
  email: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: "FilePenIcon"|"TagIcon"|"TimerIcon";
}
