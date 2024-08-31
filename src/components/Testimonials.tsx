import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 flex flex-col">
      <blockquote className="mb-4">
        <p className="text-zinc-400 italic">{testimonial.quote}</p>
      </blockquote>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src={testimonial.avatar} alt="User Avatar" />
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-zinc-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
