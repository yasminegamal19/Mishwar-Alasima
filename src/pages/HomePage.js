import { Link } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import heroBus from "../assets/hero-bus.jpg";
import appScreen1 from "../assets/app-screen-1.png";
import appScreen2 from "../assets/app-screen-2.png";
import appScreen3 from "../assets/app-screen-3.png";
import appScreen4 from "../assets/app-screen-4.png";
import {
  MapPin,
  CalendarRange,
  Wallet,
  Navigation,
  ShieldCheck,
  Users,
  Bus,
  Apple,
  Play,
  CheckCircle2,
  ArrowLeft,
  Repeat,
  Clock,
  UserCheck,
  Smartphone,
  CreditCard,
  Banknote,
  LocateFixed,
} from "lucide-react";

const subscriptionPlans = [
  {
    name: "حجز يومي",
    price: "حسب الرحلة",
    period: "للرحلة الواحدة",
    desc: "ادفع كاش لكل رحلة بدون التزام طويل.",
    features: [
      "مرونة كاملة في الحجز",
      "اختر نقطة التجمع والموعد",
      "دفع كاش عند الركوب",
    ],
    highlight: false,
  },
  {
    name: "اشتراك أسبوعي",
    price: "خصم 10٪",
    period: "على رحلات الأسبوع",
    desc: "احجز كل رحلاتك الأسبوعية مرة واحدة ووفّر وقتك.",
    features: [
      "مقعد ثابت طوال الأسبوع",
      "أولوية في الحجز",
      "تنبيه بمواعيد الرحلات",
    ],
    highlight: true,
  },
  {
    name: "اشتراك شهري",
    price: "خصم 25٪",
    period: "على رحلات الشهر",
    desc: "أوفر اختيار للمستخدم اليومي للعاصمة الإدارية.",
    features: [
      "باقة كاملة لـ 30 يوم",
      "موافقة المشرف خلال 24 ساعة",
      "إدارة الاشتراك من التطبيق",
    ],
    highlight: false,
  },
];

const howItWorks = [
  {
    icon: MapPin,
    step: "01",
    title: "اختر نقطة التجمع",
    desc: "حدد أقرب نقطة تجمع من بيتك على الخريطة داخل التطبيق.",
  },
  {
    icon: CalendarRange,
    step: "02",
    title: "حدد نوع الحجز",
    desc: "اختر بين رحلة فردية، اشتراك أسبوعي، أو اشتراك شهري حسب احتياجك.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "ادفع بسهولة",
    desc: "ادفع كاش عند الركوب أو فعّل اشتراكك بعد موافقة المشرف.",
  },
  {
    icon: Navigation,
    step: "04",
    title: "اركب وتابع رحلتك",
    desc: "يتم تأكيد حضورك تلقائياً عبر الموقع، وتابع وصول الباص لحظياً.",
  },
];

const features = [
  {
    icon: LocateFixed,
    title: "تتبع حضور تلقائي",
    desc: "نظام ذكي يثبت حضورك في الباص تلقائياً عبر الموقع الجغرافي.",
  },
  {
    icon: UserCheck,
    title: "مشرف لكل رحلة",
    desc: "مشرف مسؤول عن كل باص للإجابة على استفساراتك وتنظيم الرحلة.",
  },
  {
    icon: Repeat,
    title: "حجز متكرر",
    desc: "اشتراك أسبوعي أو شهري بدلاً من حجز كل رحلة على حدة.",
  },
  {
    icon: ShieldCheck,
    title: "أمان وموثوقية",
    desc: "حافلات حديثة، سائقون مرخصون، ومواعيد التزام دقيقة.",
  },
  {
    icon: Clock,
    title: "مواعيد ثابتة",
    desc: "جدول رحلات منظم يومياً يناسب مواعيد العمل في العاصمة الإدارية.",
  },
  {
    icon: Users,
    title: "نقاط تجمع متعددة",
    desc: "نقاط تجمع موزعة في كل المناطق لتصل إلى أقرب نقطة منك.",
  },
];

const screens = [
  {
    src: appScreen1,
    title: "ابدأ رحلتك",
    desc: "واجهة بسيطة تعرّفك بالخدمة في ثوانٍ.",
    accent: "primary",
  },
  {
    src: appScreen2,
    title: "احجز مقعدك",
    desc: "اختر الباص، نقطة التجمع، والموعد بضغطة واحدة.",
    accent: "accent",
  },
  {
    src: appScreen3,
    title: "تابع رحلاتك",
    desc: "سجل كامل بكل رحلاتك السابقة والقادمة.",
    accent: "primary",
  },
  {
    src: appScreen4,
    title: "تتبع لحظي",
    desc: "اعرف موقع الباص بدقة وموعد وصوله إليك.",
    accent: "accent",
  },
];

const stats = [
  { num: "+50", label: "نقطة تجمع" },
  { num: "+30", label: "رحلة يومياً" },
  { num: "+5K", label: "مستخدم نشط" },
  { num: "98٪", label: "رضا العملاء" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBus}
            alt="باص مشوار العاصمة"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, oklch(0.18 0.08 260 / 0.96) 0%, oklch(0.25 0.12 255 / 0.88) 50%, oklch(0.4 0.16 245 / 0.6) 100%)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Bus className="h-4 w-4 text-accent" />
                باصات يومية إلى العاصمة الإدارية الجديدة
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                اشتراكك اليومي
                <span className="block bg-gradient-to-l from-accent to-primary-glow bg-clip-text text-transparent">
                  للعاصمة الإدارية
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed mb-8">
                احجز باصك بنظام أسبوعي أو شهري، اختر نقطة التجمع الأقرب لك،
                وثبّت مقعدك في رحلات منتظمة من وإلى العاصمة الإدارية الجديدة —
                كل ذلك من تطبيق مشوار العاصمة.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-5 py-3 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
                >
                  <Apple className="h-7 w-7" />
                  <div className="text-right leading-tight">
                    <div className="text-[10px] opacity-70">حمّل من</div>
                    <div className="font-extrabold text-sm">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-5 py-3 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
                >
                  <Play className="h-7 w-7" />
                  <div className="text-right leading-tight">
                    <div className="text-[10px] opacity-70">حمّل من</div>
                    <div className="font-extrabold text-sm">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-primary-foreground">
                    <div className="text-2xl md:text-3xl font-extrabold text-accent">
                      {s.num}
                    </div>
                    <div className="text-xs md:text-sm text-primary-foreground/75">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div
                className="absolute inset-0 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--accent)" }}
              />
              <div className="relative bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/20 rounded-[2.5rem] p-3 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  src={appScreen2}
                  alt="شاشة حجز"
                  className="w-72 h-auto rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
            كيف نعمل
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            رحلتك بـ 4 خطوات بسيطة
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            من اختيار نقطة التجمع حتى تأكيد الحضور التلقائي — كل شيء داخل
            التطبيق.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.map((s) => (
            <div
              key={s.step}
              className="group relative bg-card rounded-3xl p-7 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 transition-[var(--transition-smooth)]"
            >
              <div
                className="absolute top-5 left-5 text-5xl font-extrabold opacity-10 text-primary"
                aria-hidden
              >
                {s.step}
              </div>
              <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
              <Smartphone className="inline h-4 w-4 ml-1" />
              تطبيق مشوار العاصمة
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              تجربة سلسة من البداية للنهاية
            </h2>
            <p className="text-muted-foreground text-lg">
              صُمم التطبيق ليعطيك كل ما تحتاجه: حجز سريع، نقاط تجمع واضحة،
              اشتراكات مرنة، وتتبع لحظي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screens.map((s, i) => (
              <div
                key={s.title}
                className={`group ${i % 2 === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity"
                    style={{
                      background:
                        s.accent === "accent"
                          ? "var(--accent)"
                          : "var(--primary-glow)",
                    }}
                  />
                  <div className="relative bg-card rounded-[2rem] p-3 border border-border shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-elegant)] group-hover:-translate-y-3 transition-[var(--transition-smooth)]">
                    <img
                      src={s.src}
                      alt={s.title}
                      className="w-full h-auto rounded-[1.5rem]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-center mt-5 px-2">
                  <h3 className="font-extrabold text-lg text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
            مميزات الخدمة
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            لماذا مشوار العاصمة؟
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-3xl p-7 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:-translate-y-1"
            >
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center mb-4 text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section className="py-20" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
              باقات الاشتراك
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
              اختر الباقة المناسبة لك
            </h2>
            <p className="text-muted-foreground text-lg">
              مرونة كاملة بين الحجز اليومي والاشتراكات الأسبوعية والشهرية.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionPlans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border transition-[var(--transition-smooth)] hover:-translate-y-2 ${p.highlight ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-elegant)] scale-105" : "bg-card border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)]"}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-extrabold px-4 py-1 rounded-full shadow-lg">
                    الأكثر طلباً
                  </div>
                )}
                <h3
                  className={`text-2xl font-extrabold mb-1 ${p.highlight ? "" : "text-foreground"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-sm mb-5 ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {p.desc}
                </p>
                <div className="mb-6">
                  <div
                    className={`text-3xl font-extrabold ${p.highlight ? "text-accent" : "text-primary"}`}
                  >
                    {p.price}
                  </div>
                  <div
                    className={`text-xs ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {p.period}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 ${p.highlight ? "text-accent" : "text-primary"}`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/routes"
                  className={`block text-center font-bold py-3 rounded-2xl transition-transform hover:scale-[1.02] ${p.highlight ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"}`}
                >
                  ابدأ الآن
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-bold text-primary-glow uppercase tracking-widest mb-2">
              طرق الدفع
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
              ادفع بالطريقة
              <span className="block text-primary">الأنسب لك</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              توفر مشوار العاصمة طريقتين مرنتين للدفع تناسبان جميع المستخدمين،
              مع موافقة سريعة من المشرف على الاشتراكات.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-card)]">
                <div
                  className="shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Banknote className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">دفع كاش</h3>
                  <p className="text-muted-foreground text-sm">
                    ادفع مباشرة عند ركوب الباص لكل رحلة على حدة بدون أي التزام.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-card)]">
                <div
                  className="shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">اشتراك شهري</h3>
                  <p className="text-muted-foreground text-sm">
                    فعّل اشتراكك مرة واحدة بعد موافقة المشرف، واستمتع بحجز ثابت
                    طوال الشهر.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -top-10 -right-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--primary-glow)" }}
            />
            <div className="relative bg-card rounded-[2rem] p-3 border border-border shadow-[var(--shadow-elegant)] max-w-sm mx-auto">
              <img
                src={appScreen3}
                alt="شاشة سجل الرحلات"
                className="w-full h-auto rounded-[1.5rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div
          className="rounded-[2.5rem] p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--accent)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--primary-glow)" }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              ابدأ مشوارك للعاصمة الإدارية اليوم
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-xl mx-auto mb-8">
              حمّل التطبيق، اختر نقطة تجمعك، وفعّل أول اشتراك أسبوعي بخصم خاص.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-6 py-3 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
              >
                <Apple className="h-7 w-7" />
                <div className="text-right leading-tight">
                  <div className="text-[10px] opacity-70">حمّل من</div>
                  <div className="font-extrabold text-sm">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-6 py-3 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
              >
                <Play className="h-7 w-7" />
                <div className="text-right leading-tight">
                  <div className="text-[10px] opacity-70">حمّل من</div>
                  <div className="font-extrabold text-sm">Google Play</div>
                </div>
              </a>
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-extrabold px-6 py-3 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
              >
                تصفح الرحلات <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
