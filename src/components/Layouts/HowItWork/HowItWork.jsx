import { MapPin, CalendarRange, Wallet, Navigation } from "lucide-react";
import styles from "./HowItWork.module.css";

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

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`text-center mx-auto mb-5 ${styles.header}`}>
          <h4 className={styles.label}>كيف نعمل</h4>
          <h2 className={styles.title}>رحلتك بـ 4 خطوات بسيطة</h2>
          <p className={styles.subtitle}>
            من اختيار نقطة التجمع حتى تأكيد الحضور التلقائي — كل شيء داخل
            التطبيق.
          </p>
        </div>

        <div className="row g-4">
          {howItWorks.map((step) => (
            <div key={step.step} className="col-6 col-xl-3">
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <step.icon size={20} />
                  </div>
                  <span className={styles.stepNumber}>{step.step}</span>
                </div>

                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
