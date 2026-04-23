import { Banknote, CreditCard } from "lucide-react";
import appScreen3 from "../../../assets/app-screen-1.png";
import styles from "./Payments.module.css";

const paymentMethods = [
  {
    icon: Banknote,
    title: "دفع كاش",
    desc: "ادفع مباشرة عند ركوب الباص لكل رحلة على حدة بدون أي التزام.",
  },
  {
    icon: CreditCard,
    title: "اشتراك شهري",
    desc: "فعّل اشتراكك مرة واحدة بعد موافقة المشرف، واستمتع بحجز ثابت طوال الشهر.",
  },
];

export default function Payment() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left — text */}
          <div className="col-lg-6">
            <p className={styles.label}>طرق الدفع</p>
            <h2 className={styles.title}>
              ادفع بالطريقة
              <span className={styles.titleAccent}> الأنسب لك</span>
            </h2>
            <p className={styles.subtitle}>
              توفر مشوار العاصمة طريقتين مرنتين للدفع تناسبان جميع المستخدمين،
              مع موافقة سريعة من المشرف على الاشتراكات.
            </p>

            <div className={styles.methodsList}>
              {paymentMethods.map((m) => (
                <div key={m.title} className={styles.methodCard}>
                  <div className={styles.methodIcon}>
                    <m.icon size={22} />
                  </div>
                  <div>
                    <h3 className={styles.methodTitle}>{m.title}</h3>
                    <p className={styles.methodDesc}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className={styles.phoneWrapper}>
              <div className={styles.phoneGlow} />
              <div className={styles.phoneFrame}>
                <img
                  src={appScreen3}
                  alt="شاشة سجل الرحلات"
                  className={styles.phoneImg}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
