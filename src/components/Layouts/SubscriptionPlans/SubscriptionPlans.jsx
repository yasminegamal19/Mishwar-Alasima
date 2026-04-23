import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import styles from "./SubscriptionPlans.module.css";

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

export default function SubscriptionPlans() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`text-center mx-auto mb-5 ${styles.header}`}>
          <h4 className={styles.label}>باقات الاشتراك</h4>
          <h2 className={styles.title}>اختر الباقة المناسبة لك</h2>
          <p className={styles.subtitle}>
            مرونة كاملة بين الحجز اليومي والاشتراكات الأسبوعية والشهرية.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {subscriptionPlans.map((plan) => (
            <div key={plan.name} className="col-12 col-xl-3">
              <div
                className={`${styles.card} ${plan.highlight ? styles.highlighted : ""}`}
              >
                {plan.highlight && (
                  <div className={styles.badge}>الأكثر طلباً</div>
                )}

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.desc}</p>

                <div className={styles.priceBlock}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>

                <ul className={styles.featureList}>
                  {plan.features.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      <CheckCircle2
                        size={18}
                        className={`${styles.checkIcon} ${plan.highlight ? styles.checkAccent : ""}`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/routes"
                  className={`${styles.cta} ${plan.highlight ? styles.ctaHighlight : styles.ctaDefault}`}
                >
                  ابدأ الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
