import { Section } from "@/components/Sections";
import { Folder, Briefcase, GraduationCap } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";
import AboutMe from "@/components/headers/AboutMe";
import { data } from "@/lib/data";

const currentCompany = {
  name: data.experiences[0].title,
  role: data.role,
  duration: "2",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-10">
      <div className="flex gap-10 flex-col bg-primary-foreground bg-opacity-50 rounded-xl p-3">
        <AboutMe
          name={data.name}
          role={data.role}
          availability={data.availability}
          location={data.location}
          email={data.email}
          image={data.image}
          resume={data.resume}
          currentCompany={currentCompany}
        />
        <Section title={"Projects"} icon={<Folder />}>
          {data.projects.map((data) => (
            <ItemCard
              image={data.image}
              title={data.title}
              description={data.description}
              tags={data.tags}
              href={data.href}
              downborder={data.downborder}
            />
          ))}
        </Section>
        <Section title="Experience" icon={<Briefcase />}>
          {data.experiences.map((data) => (
            <ItemCard
              image={data.image}
              title={data.title}
              description={`I worked at ${data.title} for ${data.duration} years`}
              tags={data.tags}
              href={data.href}
              downborder={data.downborder}
            />
          ))}
        </Section>
        <Section title="Education" icon={<GraduationCap />}>
          {data.education.map((data) => (
            <ItemCard
              image={data.image}
              title={data.title}
              description={data.description}
              tags={data.tags}
              href={data.href}
              downborder={data.downborder}
            />
          ))}
        </Section>
      </div>
    </main>
  );
}
