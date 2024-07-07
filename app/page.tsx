import { Section } from "@/components/Sections";
import { Folder } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title={"Projects"} icon={<Folder />} >
        <div>Hi!</div>
      </Section>
    </main>
  );
}
