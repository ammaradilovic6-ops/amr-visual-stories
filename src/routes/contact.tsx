import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EMAIL, INSTAGRAM, INSTAGRAM_URL } from "@/data/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — .AMR · Ammar Adilović" },
      {
        name: "description",
        content:
          "Have a project in mind? Contact Ammar Adilović — video editor, videographer and motion designer in Sarajevo.",
      },
      { property: "og:title", content: "Contact — .AMR · Ammar Adilović" },
      { property: "og:description", content: "Have a project in mind? Let's talk." },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const mailto = () => {
    const subject = encodeURIComponent(
      `${form.projectType || "Project"} — ${form.name || "Inquiry"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`,
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="shell pt-16 md:pt-24">
      <Reveal>
        <h1 className="display text-[12vw] leading-[0.9] md:text-[7vw]">
          Let&apos;s make
          <br />
          something good.
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Have a project in mind? Let&apos;s talk.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="border-t border-border pt-5">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline mt-2 inline-block text-sm break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div className="mt-10 border-t border-border pt-5">
            <p className="eyebrow">Instagram</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline mt-2 inline-block text-sm"
            >
              @{INSTAGRAM}
            </a>
          </div>
          <div className="mt-10 border-t border-border pt-5">
            <p className="eyebrow">Based in</p>
            <p className="mt-2 text-sm">Sarajevo, Bosnia &amp; Herzegovina</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-8">
          <form
            className="grid gap-8 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto();
            }}
          >
            <div>
              <label htmlFor="name" className="eyebrow block">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className={`${inputClass} mt-2`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`${inputClass} mt-2`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="projectType" className="eyebrow block">
                Project type
              </label>
              <input
                id="projectType"
                name="projectType"
                placeholder="Long-form editing, short-form, videography, motion…"
                className={`${inputClass} mt-2`}
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClass} mt-2 resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center border border-foreground bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-transparent hover:text-foreground"
              >
                Send message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
