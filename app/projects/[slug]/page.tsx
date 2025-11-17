import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Mohamed Chakkir`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mohamed Chakkir`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <Container>
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              ← Back to Projects
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
              {project.title}
            </h1>
            <p className="mb-8 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
              {project.description}
            </p>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="mx-auto max-w-3xl space-y-12">
              {/* Problem Statement */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Problem
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {project.problem}
                </p>
              </div>

              {/* What I Built */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  What I Built
                </h2>
                <ul className="space-y-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {project.whatIBuilt.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900 dark:bg-gray-100" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Screenshots
                </h2>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800">
                  <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-600">
                    <span className="text-sm">Screenshot placeholder</span>
                  </div>
                </div>
              </div>

              {/* What Makes It Interesting */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  What Makes It Interesting
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {project.whatMakesItInteresting}
                </p>
              </div>

              {/* What I Learned */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  What I Learned
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {project.whatILearned}
                </p>
              </div>

              {/* Links */}
              {(project.githubUrl || project.demoUrl) && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Links
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                      >
                        View on GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

