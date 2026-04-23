import {
  LocateFixed,
  UserCheck,
  Repeat,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: LocateFixed,
    title: "حجز متكرر",
    desc: "اشتراك أسبوعي أو شهري بدلاً من حجز كل رحلة على حدة.",
  },
  {
    icon: UserCheck,
    title: "مشرف لكل رحلة",
    desc: "مشرف مسؤول عن كل باص للإجابة على استفساراتك وتنظيم الرحلة.",
  },
  {
    icon: LocateFixed,
    title: "تتبع حضور تلقائي",
    desc: "نظام ذكي يثبت حضورك في الباص تلقائياً عبر الموقع الجغرافي.",
  },
  {
    icon: Users,
    title: "نقاط تجمع متعددة",
    desc: "نقاط تجمع موزعة في كل المناطق لتصل إلى أقرب نقطة منك.",
  },
  {
    icon: Clock,
    title: "مواعيد ثابتة",
    desc: "جدول رحلات منظم يومياً يناسب مواعيد العمل في العاصمة الإدارية.",
  },
  {
    icon: ShieldCheck,
    title: "أمان وموثوقية",
    desc: "حافلات حديثة، سائقون مرخصون، ومواعيد التزام دقيقة.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} dir="rtl">
      <div className="container">
        <div className={styles.header}>
          <h4 className={styles.label}>مميزات الخدمة</h4>
          <h2 className={styles.title}>لماذا مشوار العاصمة؟</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>
                <f.icon size={22} />
              </div>

              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
