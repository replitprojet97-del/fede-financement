import { useState, useEffect } from "react";
import { X, ShieldCheck, Ban, Lock, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "caps_antiscam_v1";

export function AntiScamModal() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(8, 15, 30, 0.72)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)     scale(1);    }
        }
      `}</style>

      <div
        className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "slideUpFade 0.3s cubic-bezier(0.16,1,0.3,1)", background: "#0D1F3C" }}
      >
        {/* Gold top accent bar */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #B5872A, #D4A843, #B5872A)" }} />

        {/* Header */}
        <div className="px-6 pt-5 pb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(181,135,42,0.15)", border: "1px solid rgba(181,135,42,0.3)" }}>
              <ShieldCheck className="w-5 h-5" style={{ color: "#B5872A" }} />
            </div>
            <div>
              <div className="font-extrabold text-white text-base leading-tight">{t("antiscam_modal.title")}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{t("antiscam_modal.subtitle")}</div>
            </div>
          </div>
          <button
            onClick={dismiss}
            className="p-1.5 rounded-lg transition-colors flex-shrink-0 ml-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Warning summary */}
        <div className="mx-6 mb-4 px-4 py-3 rounded-xl text-sm leading-relaxed"
          style={{ background: "rgba(181,135,42,0.1)", border: "1px solid rgba(181,135,42,0.2)", color: "rgba(255,255,255,0.75)" }}>
          {t("antiscam_modal.warning")}
        </div>

        {/* Rules */}
        <div className="px-6 space-y-2 pb-4">
          {[
            { icon: Ban,        title: "antiscam_modal.no_telegram",       desc: "antiscam_modal.no_telegram_desc" },
            { icon: Lock,       title: "antiscam_modal.no_wire",           desc: "antiscam_modal.no_wire_desc"     },
            { icon: ShieldCheck,title: "antiscam_modal.no_data",           desc: "antiscam_modal.no_data_desc"     },
            { icon: Globe,      title: "antiscam_modal.official_channels", desc: "antiscam_modal.official_channels_desc", positive: true },
          ].map(({ icon: Icon, title, desc, positive }) => (
            <div
              key={title}
              className="flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{
                background: positive ? "rgba(181,135,42,0.07)" : "rgba(255,255,255,0.04)",
                border: positive ? "1px solid rgba(181,135,42,0.2)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: positive ? "#B5872A" : "rgba(255,255,255,0.4)" }} />
              <div>
                <div className="text-xs font-bold" style={{ color: positive ? "#D4A843" : "rgba(255,255,255,0.85)" }}>
                  {t(title)}
                </div>
                <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {t(desc)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="px-6 pb-5">
          <button
            onClick={dismiss}
            className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #B5872A, #D4A843)", color: "#0D1F3C" }}
          >
            {t("antiscam_modal.understood")}
          </button>
          <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.25)" }}>
            {t("antiscam_modal.once")}
          </p>
        </div>
      </div>
    </div>
  );
}
