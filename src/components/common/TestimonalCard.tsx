import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CallToAction } from "../sections/CallToAction";
import { useState } from "react";

export type Testimonial = {
  name: string;
  event: string;
  image: string;
  description: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <article
      className={`mx-4 w-[360px] rounded-lg border border-border bg-white p-6`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="mb-4 flex gap-1 justify-end w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 transition-colors duration-200 ${
              isHover ? "fill-button text-button" : "fill-primary text-primary"
            }`}
          />
        ))}
      </div>

      <div className="min-h-[96px] text-md leading-7 text-black !mt-6">
        <span
          className={`mr-1 font-serif text-3xl font-bold leading-none ${isHover ? "text-button" : "text-primary"} align-[-0.2em] `}
        >
          “
        </span>

        {testimonial.description}

        <span
          className={`mr-1 font-serif text-3xl font-bold leading-none ${isHover ? "text-button" : "text-primary"} align-[-0.2em] ml-1 `}
        >
          ”
        </span>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Avatar className="h-13 w-13">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
        </Avatar>

        <div>
          <h4 className="text-md font-semibold text-black">{testimonial.name}</h4>

          <p className="text-xs font-extrabold text-black">{testimonial.event}</p>
        </div>
      </div>
    </article>
  );
}
