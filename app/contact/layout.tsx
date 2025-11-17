import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohamed Chakkir",
  description: "Get in touch to collaborate, discuss a project, or explore opportunities.",
  openGraph: {
    title: "Contact | Mohamed Chakkir",
    description: "Get in touch to collaborate, discuss a project, or explore opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

