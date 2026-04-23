import { Apple, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <h2>ابدأ الآن</h2>

      <div className="flex justify-center gap-3">
        <button>
          <Apple /> App Store
        </button>
        <button>
          <Play /> Google Play
        </button>
        <Link to="/routes">
          تصفح الرحلات <ArrowLeft />
        </Link>
      </div>
    </section>
  );
}
