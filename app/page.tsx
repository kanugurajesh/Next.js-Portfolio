import { Section } from "@/components/Sections";
import { Folder } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title={"Projects"} icon={<Folder />} >
        <ItemCard image={"/projects/card.svg"} title={"company"} description={"I worked as a software engineer I worked as a software engineer"} tags={["Next.js", "shadcn/ui", "Tailwind", "React"]} href={"https://google.com"}  />
      </Section>
    </main>
  );
}
