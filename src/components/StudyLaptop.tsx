const StudyLaptop = () => (
  <div className="perspective-1000 w-full max-w-lg mx-auto lg:mx-0">
    <div
      className="relative will-change-transform"
      style={{
        transform: "rotateX(10deg) rotateY(-18deg) rotateZ(5deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute -inset-8 bg-primary/20 dark:bg-primary/25 blur-3xl rounded-full -z-10" />

      <div className="rounded-t-2xl bg-zinc-800 dark:bg-zinc-900 p-2.5 pb-0 shadow-2xl shadow-primary/20 ring-1 ring-white/10">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex-1 h-5 rounded-md bg-zinc-700/80 text-[9px] text-zinc-400 flex items-center justify-center font-medium tracking-wide">
            aceap.app
          </span>
        </div>
        <div className="rounded-t-lg overflow-hidden bg-background aspect-[16/10] text-left">
          <div className="h-8 px-3 flex items-center gap-2 border-b border-border bg-card">
            <div className="h-4 w-4 rounded-md bg-primary" />
            <span className="text-[10px] font-bold tracking-tight text-foreground">AceAP</span>
            <span className="ml-auto text-[9px] font-semibold text-muted-foreground">Unit 3</span>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[62%] rounded-full bg-primary" />
            </div>
            <div className="rounded-xl border border-border bg-card p-3 sm:p-4 shadow-sm space-y-2">
              <p className="text-[9px] font-bold uppercase tracking-widest text-primary">Definition</p>
              <p className="text-[11px] sm:text-xs font-medium leading-snug text-foreground">
                Elite Ottoman infantry recruited through the devshirme system.
              </p>
              <div className="mt-2 h-8 rounded-lg border border-dashed border-primary/40 bg-primary/5 flex items-center px-2.5 text-[10px] text-muted-foreground">
                Type the term…
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-7 flex-1 rounded-lg bg-muted text-muted-foreground text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                Back
              </div>
              <div className="h-7 flex-[2] rounded-lg bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                Check Answer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-zinc-700 dark:bg-zinc-800 rounded-b-xl mx-[-4px]" />
      <div className="h-1.5 w-28 mx-auto bg-zinc-600 dark:bg-zinc-700 rounded-b-md" />
    </div>
  </div>
);

export default StudyLaptop;
