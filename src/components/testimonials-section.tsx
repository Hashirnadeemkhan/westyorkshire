import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Review = {
  name: string;
  when: string;
  text: string;
  color: string;
};

const reviews: Review[] = [
  {
    name: "Sarah Thompson",
    when: "2 weeks ago",
    color: "#1f7ae0",
    text: "Came out the same day and fixed my brakes right on the driveway. Cheaper than the garage quote and so much easier. Highly recommend!",
  },
  {
    name: "James Robinson",
    when: "1 month ago",
    color: "#e5533c",
    text: "Car wouldn't start before work. Diagnosed the battery and alternator within the hour and had me sorted. Professional and honest throughout.",
  },
  {
    name: "Priya Kaur",
    when: "3 weeks ago",
    color: "#2e9e6b",
    text: "Full service done at my house while I worked from home. Talked me through everything and the pricing was spot on. Couldn't be happier.",
  },
  {
    name: "Daniel Wright",
    when: "2 months ago",
    color: "#c98a00",
    text: "Clutch replaced without ever leaving home. Tidy, friendly and clearly knows his stuff. My go-to mechanic from now on.",
  },
  {
    name: "Emma Lawson",
    when: "1 week ago",
    color: "#7c4dff",
    text: "Sorted my advisories before the MOT and it passed first time. Punctual, fair and reliable — exactly what you want. Thank you!",
  },
  {
    name: "Mohammed Ali",
    when: "1 month ago",
    color: "#0f766e",
    text: "Great communication from start to finish. Turned up on time and got the job done properly. Would use again without hesitation.",
  },
];

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#fbbc05]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container-pad relative">
        {/* Header + rating summary */}
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brand-gold">Reviews</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              What Local Drivers <span className="text-gold">Say</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <GoogleG className="h-10 w-10 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl leading-none">4.9</span>
                <Stars />
              </div>
              <p className="mt-1 text-xs text-brand-steel">
                Based on 120+ Google reviews
              </p>
            </div>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.07}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 text-brand-ink shadow-[0_18px_45px_-25px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1">
                <header className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-bold text-white"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.name.charAt(0)}
                    </span>
                    <div className="leading-tight">
                      <p className="font-semibold text-brand-ink">{r.name}</p>
                      <p className="text-xs text-brand-ink/50">{r.when}</p>
                    </div>
                  </div>
                  <GoogleG className="h-5 w-5 shrink-0" />
                </header>

                <div className="mt-4">
                  <Stars />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">
                  {r.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
