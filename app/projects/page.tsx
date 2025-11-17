import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Mohamed Chakkir",
  description: "Explore my portfolio of full-stack web applications, AI projects, and developer tools.",
  openGraph: {
    title: "Projects | Mohamed Chakkir",
    description: "Explore my portfolio of full-stack web applications, AI projects, and developer tools.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
                My Projects
              </h1>
              <p className="text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
                A collection of projects showcasing my skills in full-stack
                development, AI, and modern web technologies.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  slug={project.slug}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

