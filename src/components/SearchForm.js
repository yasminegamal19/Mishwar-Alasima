import { useState } from "react";
import { ArrowLeftRight, MapPin, Calendar, Users, Search } from "lucide-react";

const cities = ["العاصمة", "الإسكندرية", "أسوان", "الأقصر", "الغردقة", "شرم الشيخ", "بورسعيد", "طنطا"];

export default function SearchForm() {
  const [from, setFrom] = useState("العاصمة");
  const [to, setTo] = useState("الإسكندرية");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-card rounded-3xl shadow-[var(--shadow-elegant)] p-6 md:p-8 border border-border"
    >
      <div className="grid md:grid-cols-[1fr_auto_1fr_1fr_1fr_auto] gap-3 items-end">
        <Field label="من" icon={<MapPin className="h-4 w-4" />}>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full bg-transparent outline-none font-bold text-foreground"
          >
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <button
          type="button"
          onClick={swap}
          className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-[var(--transition-smooth)] mb-1"
          aria-label="تبديل"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </button>

        <Field label="إلى" icon={<MapPin className="h-4 w-4" />}>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-transparent outline-none font-bold text-foreground"
          >
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="التاريخ" icon={<Calendar className="h-4 w-4" />}>
          <input type="date" className="w-full bg-transparent outline-none font-bold" />
        </Field>

        <Field label="الركاب" icon={<Users className="h-4 w-4" />}>
          <select className="w-full bg-transparent outline-none font-bold">
            {[1, 2, 3, 4, 5].map((n) => <option key={n}>{n} راكب</option>)}
          </select>
        </Field>

        <button
          type="submit"
          className="h-14 px-8 rounded-2xl text-primary-foreground font-bold inline-flex items-center gap-2 shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:scale-[1.03]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Search className="h-5 w-5" />
          ابحث
        </button>
      </div>
    </form>
  );
}

function Field({ label, icon, children }) {
  return (
    <div className="bg-secondary/60 rounded-2xl px-4 py-3 border border-transparent focus-within:border-primary/40 transition-colors">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}
