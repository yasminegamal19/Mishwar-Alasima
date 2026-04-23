import { Smartphone } from "lucide-react";
import appScreen1 from "../../../assets/app-screen-1.png";
import appScreen2 from "../../../assets/app-screen-2.png";
import appScreen3 from "../../../assets/app-screen-3.png";
import appScreen4 from "../../../assets/app-screen-4.png";
import styles from "./AppShowCase.module.css";

const screens = [
  {
    src: appScreen1,
    title: "ابدأ رحلتك",
    desc: "واجهة بسيطة تعرّفك بالخدمة في ثوانٍ.",
    offset: false,
  },
  {
    src: appScreen2,
    title: "احجز مقعدك",
    desc: "اختر الباص، نقطة التجمع، والموعد بضغطة واحدة.",
    offset: true,
  },
  {
    src: appScreen3,
    title: "تابع رحلاتك",
    desc: "سجل كامل بكل رحلاتك السابقة والقادمة.",
    offset: false,
  },
  {
    src: appScreen4,
    title: "تتبع لحظي",
    desc: "اعرف موقع الباص بدقة وموعد وصوله إليك.",
    offset: true,
  },
];

export default function AppShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`text-center mx-auto mb-5 ${styles.header}`}>
          <h4 className={styles.label}>تطبيق مشوار العاصمة</h4>
          <h2 className={styles.title}>تجربة سلسة من البداية للنهاية</h2>
          <p className={styles.subtitle}>
            صُمم التطبيق ليعطيك كل ما تحتاجه: حجز سريع، نقاط تجمع واضحة،
            اشتراكات مرنة، وتتبع لحظي.
          </p>
        </div>

        <div className="row g-4">
          {screens.map((s) => (
            <div key={s.title} className="col-6 col-xl-3">
              <div
                className={`${styles.screenItem} ${s.offset ? styles.offset : ""}`}
              >
                <div className={styles.screenInfo}>
                  <h3 className={styles.screenTitle}>{s.title}</h3>
                  <p className={styles.screenDesc}>{s.desc}</p>
                </div>
                <div className={styles.phoneFrame}>
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className={styles.phoneImg}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
