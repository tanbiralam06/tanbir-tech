import { cn } from "@/lib/utils";
import Container from "./Container";

export default function Section({ children, className, id, ...props }) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-24", className)}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}
