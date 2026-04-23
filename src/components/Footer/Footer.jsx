import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About */}
        <div className={styles.about}>
          <div className={styles.brand}>
            <img src={logo} alt="مشوار العاصمة" className={styles.logo} />
            <div className={styles.title}>مشوار العاصمة</div>
          </div>

          <p className={styles.desc}>
            خدمة نقل عصرية وآمنة بين المدن. حافلات مكيّفة، سائقون محترفون،
            ومواعيد دقيقة لتصلك في الوقت المحدد.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className={styles.heading}>روابط</h4>
          <ul className={styles.list}>
            <li>
              <Link to="/" className={styles.link}>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/routes" className={styles.link}>
                الرحلات
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                اتصل بنا
              </Link>
            </li>

            {/* 👇 الجديد */}
            <li>
              <Link to="/terms" className={styles.link}>
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={styles.link}>
                سياسة الخصوصية
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.heading}>تواصل</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={16} />
              <span>19999</span>
            </li>
            <li>
              <Mail size={16} />
              <span>info@mishwar.com</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>العاصمة الإدارية - المحطة المركزية</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 {new Date().getFullYear()}  برمجة تك. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
