export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">AMR</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">
            AMMAR ADILOVIĆ
          </p>
        </div>
        <p className="text-xs tracking-[0.2em] text-muted-foreground">
          SARAJEVO, BOSNIA &amp; HERZEGOVINA
        </p>
        <p className="text-xs tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}
