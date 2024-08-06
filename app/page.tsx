import { Section } from "@/components/Sections";
import { Folder } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title={"Projects"} icon={<Folder />} >
        <ItemCard image={"/projects/nextjs.png"} title={"Next.js"} description={"An all in one solution for mental health issues"} tags={["Next.js", "shadcn/ui", "Tailwind", "React"]} href={"https://google.com"} downborder={true} />
        <ItemCard image={"/projects/react.webp"} title={"React"} description={"An all in one solution for mental health issues"} tags={["Next.js", "shadcn/ui", "Tailwind", "React"]} href={"https://google.com"} downborder={true} />
        <ItemCard image={"/projects/solidjs.svg"} title={"solidjs"} description={"An all in one solution for mental health issues"} tags={["Next.js", "shadcn/ui", "Tailwind", "React"]} href={"https://google.com"} downborder={true} />
        <ItemCard image={"/projects/sveltekit.png"} title={"sveltekit"} description={"An all in one solution for mental health issues"} tags={["Next.js", "shadcn/ui", "Tailwind", "React"]} href={"https://google.com"} downborder={false} />
      </Section>
    </main>
  );
}
