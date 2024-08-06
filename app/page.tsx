import { Section } from "@/components/Sections";
import { Folder, Briefcase, GraduationCap } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";
import AboutMe from "@/components/headers/AboutMe";

const currentCompany = {
  name: "Google",
  role: "Software Engineer",
  duration: "2",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10 z-10">
      <AboutMe
        name="Kanugu Rajesh"
        role="Software Engineer"
        availability="available"
        location="india"
        email="contact@rajesh.com"
        image="https://ik.imagekit.io/hbzknb1hm/rajesh.jpg?updatedAt=1722953331095"
        resume="data"
        currentCompany={currentCompany}
      />
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
          downborder={true}
        />
        <ItemCard
          image={"/projects/amazon.png"}
          title={"Amazon"}
          description={"I worked at amazon for 2 years"}
          tags={["React", "Spring Boot", "javascript", "java", "aws"]}
          href={"https://google.com"}
          downborder={true}
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
      <Section title="Education" icon={<GraduationCap />}>
        <ItemCard
          image={"/projects/mit.png"}
          title={"MIT"}
          description={"Bachelor's in Computer Science"}
          tags={["Minor in Mathematics", "Minor in Physics", "4yoe"]}
          href={"https://google.com"}
          downborder={false}
        />
      </Section>
    </main>
  );
}
