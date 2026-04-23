import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/routes", label: "الرحلات" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to, e) => {
    e.preventDefault();
    navigate(to);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
        <div className={styles.container}>
          {/* Brand */}
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div>
              <h1 className={styles.title}>مشوار العاصمة</h1>
              <div className={styles.subtitle}>رحلتك بين المدن</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                  onClick={(e) => handleNavClick(l.to, e)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/routes" className={styles.btn}>
            احجز الآن
          </Link>

          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <Menu size={26} />
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${open ? styles.showMenu : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ""}`
              }
              onClick={(e) => handleNavClick(l.to, e)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
