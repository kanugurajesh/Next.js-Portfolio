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
          image={"/projects/sveltekit.png"}
          title={"sveltekit"}
          description={"An all in one solution for mental health issues"}
          tags={["Next.js", "shadcn/ui", "Tailwind", "React"]}
          href={"https://google.com"}
          downborder={false}
        />
      </Section>
    </main>
  );
}
