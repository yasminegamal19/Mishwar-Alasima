import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm";
import { Bus, Clock, Star } from "lucide-react";

const trips = [
  {
    from: "العاصمة",
    to: "الإسكندرية",
    time: "06:00",
    arrive: "09:00",
    price: 120,
    type: "VIP",
  },
  {
    from: "العاصمة",
    to: "الإسكندرية",
    time: "09:30",
    arrive: "12:30",
    price: 100,
    type: "عادي",
  },
  {
    from: "العاصمة",
    to: "الغردقة",
    time: "07:00",
    arrive: "13:00",
    price: 250,
    type: "VIP",
  },
  {
    from: "العاصمة",
    to: "الأقصر",
    time: "20:00",
    arrive: "05:00",
    price: 320,
    type: "نوم",
  },
  {
    from: "العاصمة",
    to: "شرم الشيخ",
    time: "08:00",
    arrive: "15:00",
    price: 280,
    type: "VIP",
  },
  {
    from: "العاصمة",
    to: "أسوان",
    time: "19:00",
    arrive: "06:00",
    price: 380,
    type: "نوم",
  },
  {
    from: "الإسكندرية",
    to: "العاصمة",
    time: "10:00",
    arrive: "13:00",
    price: 120,
    type: "VIP",
  },
  {
    from: "العاصمة",
    to: "بورسعيد",
    time: "11:00",
    arrive: "14:00",
    price: 95,
    type: "عادي",
  },
];

export default function RoutesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="py-16 text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            الرحلات المتاحة
          </h1>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            اختر الرحلة المناسبة واحجز مقعدك في ثوانٍ.
          </p>
          <SearchForm />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 flex-1">
        <div className="grid gap-4">
          {trips.map((t, i) => (
            <article
              key={i}
              className="bg-card rounded-3xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] grid md:grid-cols-[auto_1fr_auto_auto] gap-6 items-center"
            >
              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Bus className="h-6 w-6" />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">القيام</div>
                  <div className="text-2xl font-extrabold text-foreground">
                    {t.time}
                  </div>
                  <div className="text-sm font-medium">{t.from}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3" />
                    مدة الرحلة
                  </div>
                  <div className="border-t-2 border-dashed border-primary/30 my-2 relative">
                    <Bus className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 text-primary bg-card" />
                  </div>
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {t.type}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">الوصول</div>
                  <div className="text-2xl font-extrabold text-foreground">
                    {t.arrive}
                  </div>
                  <div className="text-sm font-medium">{t.to}</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">
                  {t.price}{" "}
                  <span className="text-sm font-medium text-muted-foreground">
                    ج.م
                  </span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 justify-center mt-1">
                  <Star className="h-3 w-3 fill-accent text-accent" /> 4.8
                </div>
              </div>

              <button
                className="px-6 py-3 rounded-2xl font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:scale-105"
                style={{ background: "var(--gradient-brand)" }}
              >
                احجز الآن
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
