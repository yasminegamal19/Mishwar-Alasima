import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Award, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500K+", label: "راكب سعيد" },
  { icon: MapPin, value: "40+", label: "وجهة" },
  { icon: Award, value: "10", label: "سنوات خبرة" },
  { icon: TrendingUp, value: "98%", label: "رضا العملاء" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="py-20 text-primary-foreground text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">من نحن</h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto">
            نقل ذكي وآمن يربط بين مدن البلاد منذ أكثر من عشر سنوات.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
            قصتنا
          </div>
          <h2 className="text-4xl font-extrabold mb-6 text-foreground">
            رحلة بدأت بحلم
          </h2>
          <p className="text-muted-foreground text-lg leading-loose mb-4">
            انطلقت <strong className="text-foreground">مشوار العاصمة</strong>{" "}
            بهدف بسيط: جعل السفر بين المدن تجربة سهلة، آمنة، ومريحة لكل راكب.
          </p>
          <p className="text-muted-foreground text-lg leading-loose">
            اليوم، نخدم آلاف الركاب يومياً عبر شبكة من الحافلات الحديثة وفريق
            محترف يضع راحتك أولاً.
          </p>
        </div>
        <div
          className="aspect-square rounded-[2.5rem] relative overflow-hidden flex items-center justify-center text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="text-9xl font-extrabold opacity-20">10+</div>
          <div className="absolute bottom-8 right-8 text-2xl font-bold">
            سنوات من الثقة
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card rounded-3xl p-8 text-center border border-border shadow-[var(--shadow-card)]"
              >
                <div
                  className="h-14 w-14 mx-auto rounded-2xl flex items-center justify-center text-primary-foreground mb-4"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-extrabold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
