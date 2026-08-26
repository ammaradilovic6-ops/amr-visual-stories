import { Link } from "@tanstack/react-router";
import { EMAIL, INSTAGRAM, INSTAGRAM_URL } from "@/data/projects";

export function Footer() {
  return (
    <footer className="hairline mt-28 md:mt-40">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">.AMR</p>
          <p className="mt-2 text-sm text-muted-foreground">Ammar Adilović</p>
          <p className="eyebrow mt-8">Sarajevo, Bosnia &amp; Herzegovina</p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Menu</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/work", label: "Work" },
              { to: "/about", label: "About" },
              { to: "/experience", label: "Experience" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="link-underline text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline text-muted-foreground transition-colors hover:text-foreground"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-muted-foreground transition-colors hover:text-foreground"
              >
                @{INSTAGRAM}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Ammar Adilović</span>
        <span>Video Editor · Videographer · Motion Designer</span>
      </div>
    </footer>
  );
}
