import { Link } from "react-router-dom";
import { Bus, Apple, Play } from "lucide-react";
import appScreen2 from "../../../assets/app-screen-1.png";
import heroBus from "../../../assets/hero-bus.jpg";
import styles from "./Hero.module.css";

const stats = [
  { num: "+50", label: "نقطة تجمع" },
  { num: "+30", label: "رحلة يومياً" },
  { num: "+5K", label: "مستخدم نشط" },
  { num: "98٪", label: "رضا العملاء" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <img src={heroBus} alt="باص مشوار العاصمة" className={styles.image} />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`row align-items-center g-5`}>
          <div className="col-lg-7">
            <div className={styles.badge}>
              <Bus size={16} className={styles.badgeIcon} />
              باصات يومية إلى العاصمة الإدارية الجديدة
            </div>

            <h1 className={styles.heading}>
              اشتراكك اليومي
              <span className={styles.headingSpan}> للعاصمة الإدارية</span>
            </h1>

            <p className={styles.subtext}>
              احجز باصك بنظام أسبوعي أو شهري، اختر نقطة التجمع الأقرب لك، وثبّت
              مقعدك في رحلات منتظمة من وإلى العاصمة الإدارية الجديدة — كل ذلك من
              تطبيق مشوار العاصمة.
            </p>

            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeBtn}>
                <Apple size={28} />
                <div className={styles.storeBtnText}>
                  <span className={styles.storeBtnSub}>حمّل من</span>
                  <span className={styles.storeBtnName}>App Store</span>
                </div>
              </a>
              <a href="#" className={styles.storeBtn}>
                <Play size={28} />
                <div className={styles.storeBtnText}>
                  <span className={styles.storeBtnSub}>حمّل من</span>
                  <span className={styles.storeBtnName}>Google Play</span>
                </div>
              </a>
            </div>

            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`col-xl-4 d-none d-lg-flex justify-content-center`}>
            <div className={styles.phoneGlow} />
            <div className={styles.phoneCard}>
              <img
                src={appScreen2}
                alt="شاشة حجز"
                className={styles.phoneImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
