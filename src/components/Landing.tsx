import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TimerIcon } from "@/components/icons/TimerIcon";
import { testimonials } from "@/lib/content";
import TestimonialCard from "./Testimonials";
import { features } from "@/lib/content";
import FeatureCard from "./FeatureCard";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="dark text-white min-h-[100dvh] flex flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Taskify - Your Ultimate Task Management App
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 mb-8">
            Stay organized and productive with our powerful task management
            tools.
          </p>
          <Button
            size="lg"
            onClick={() => {
              // todo add the all tasks route, if not signed in take it to sign in
              navigate("/allTasks");
            }}
          >
            Manage Now
          </Button>
        </section>
        <section
          id="features"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>
        <section
          id="testimonials"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        <section
          id="login"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Try Taskify Today!
          </h2>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </Button>
          </div>
        </section>
      </main>
      <footer id="support" className="bg-zinc-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <TimerIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Taskify</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="#" className="text-sm font-medium hover:underline">
              Support
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
