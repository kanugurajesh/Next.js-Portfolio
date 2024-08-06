import { Section } from "@/components/Sections";
import { Folder, Briefcase } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10 z-10">
      <Section title={"Projects"} icon={<Folder />}>
        <ItemCard
          image={"/projects/nextjs.png"}
          title={"Next.js"}
          description={"An all in one solution for mental health issues"}
          tags={["Next.js", "shadcn/ui", "Tailwind", "React"]}
          href={"https://google.com"}
          downborder={true}
        />
        <ItemCard
          image={"/projects/react.webp"}
          title={"React"}
          description={"An all in one solution for mental health issues"}
          tags={["Next.js", "shadcn/ui", "Tailwind", "React"]}
          href={"https://google.com"}
          downborder={true}
        />
        <ItemCard
          image={"/projects/solidjs.svg"}
          title={"solidjs"}
          description={"An all in one solution for mental health issues"}
          tags={["Next.js", "shadcn/ui", "Tailwind", "React"]}
          href={"https://google.com"}
          downborder={true}
        />
        <ItemCard
          image={"/projects/sveltekit.png"}
          title={"sveltekit"}
          description={"An all in one solution for mental health issues"}
          tags={["Next.js", "shadcn/ui", "Tailwind", "React"]}
          href={"https://google.com"}
          downborder={false}
        />
      </Section>
      <Section title="Experience" icon={<Briefcase />}>
        <ItemCard
          image={"/projects/google.webp"}
          title={"Google"}
          description={"I worked at google for 2 years"}
          tags={["Angular", "Spring Boot", "javascript", "java", "gcp"]}
          href={"https://google.com"}
          downborder={false}
        />
        <ItemCard
          image={"/projects/amazon.png"}
          title={"Amazon"}
          description={"I worked at amazon for 2 years"}
          tags={["React", "Spring Boot", "javascript", "java", "aws"]}
          href={"https://google.com"}
          downborder={false}
        />
        <ItemCard
          image={"/projects/mercari.svg"}
          title={"Mercari"}
          description={"I worked at mercari for 1 year"}
          tags={["React", "Go", "javascript", "aws"]}
          href={"https://google.com"}
          downborder={false}
        />
      </Section>
    </main>
  );
}
