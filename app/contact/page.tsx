"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Simulate form submission (can be extended to use API route)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
                Let's build something impactful.
              </h1>
              <p className="mb-12 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
                If you want to collaborate, discuss a project, or explore
                opportunities, I'm always open to a conversation.
              </p>
            </motion.div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email
                      </h3>
                      <a
                        href="mailto:medchakkir@gmail.com"
                        className="text-lg text-gray-900 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                      >
                        medchakkir@gmail.com
                      </a>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/medchakkir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-900 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                      >
                        github.com/medchakkir
                      </a>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        LinkedIn
                      </h3>
                      <a
                        href="https://linkedin.com/in/medchakkir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-900 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                      >
                        linkedin.com/in/medchakkir
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-gray-100 dark:focus:ring-gray-100"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-gray-100 dark:focus:ring-gray-100"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-gray-100 dark:focus:ring-gray-100"
                      />
                    </div>
                    {status === "success" && (
                      <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    {status === "error" && (
                      <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
                        Please fill in all fields.
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

