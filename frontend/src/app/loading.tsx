export default function Loading() {
  return (
    <div className="animate-pulse" aria-hidden>
      <div className="border-b border-border bg-gradient-to-b from-brand-50 to-background pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="container-page space-y-4">
          <div className="h-3 w-28 rounded-full bg-brand-100" />
          <div className="h-10 max-w-xl rounded-2xl bg-brand-100/80 md:h-14" />
          <div className="h-4 max-w-lg rounded-full bg-muted" />
          <div className="h-4 max-w-md rounded-full bg-muted" />
        </div>
      </div>
      <div className="container-page space-y-4 py-14">
        <div className="h-4 max-w-2xl rounded-full bg-muted" />
        <div className="h-4 max-w-xl rounded-full bg-muted" />
        <div className="h-4 max-w-lg rounded-full bg-muted" />
      </div>
    </div>
  );
}
