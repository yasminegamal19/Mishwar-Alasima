import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const items = [
  { icon: Phone, title: "اتصل بنا", value: "19999", sub: "خدمة 24/7" },
  {
    icon: Mail,
    title: "راسلنا",
    value: "info@mishwar.com",
    sub: "نرد خلال ساعة",
  },
  {
    icon: MapPin,
    title: "زرنا",
    value: "المحطة المركزية - العاصمة",
    sub: "كل أيام الأسبوع",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "24 ساعة",
    sub: "كل أيام الأسبوع",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="py-20 text-primary-foreground text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">اتصل بنا</h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك في أي وقت — نحن هنا لخدمتك.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-card rounded-3xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
            >
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center text-primary-foreground mb-4"
                style={{ background: "var(--gradient-brand)" }}
              >
                <it.icon className="h-5 w-5" />
              </div>
              <div className="text-xs text-muted-foreground mb-1">
                {it.title}
              </div>
              <div className="font-bold text-lg text-foreground mb-1">
                {it.value}
              </div>
              <div className="text-sm text-muted-foreground">{it.sub}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-elegant)]"
        >
          <h2 className="text-3xl font-extrabold mb-2 text-foreground">
            أرسل رسالة
          </h2>
          <p className="text-muted-foreground mb-8">
            سنرد عليك في أقرب وقت ممكن.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <Input label="الاسم" placeholder="اسمك الكامل" />
            <Input label="رقم الجوال" placeholder="01xxxxxxxxx" type="tel" />
          </div>
          <Input
            label="البريد الإلكتروني"
            placeholder="email@example.com"
            type="email"
          />
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2 text-foreground">
              رسالتك
            </label>
            <textarea
              rows={5}
              placeholder="كيف يمكننا مساعدتك؟"
              className="w-full bg-secondary/60 rounded-2xl px-4 py-3 outline-none border border-transparent focus:border-primary/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-14 rounded-2xl text-primary-foreground font-bold shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hover:scale-[1.02]"
            style={{ background: "var(--gradient-brand)" }}
          >
            إرسال الرسالة
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2 text-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-secondary/60 rounded-2xl px-4 py-3 outline-none border border-transparent focus:border-primary/40 transition-colors"
      />
    </div>
  );
}
