import { useState, useEffect } from "react";
import { X, ShieldAlert, AlertOctagon, CheckCircle } from "lucide-react";
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
      style={{ backgroundColor: "rgba(8, 15, 30, 0.88)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden" style={{ animation: "fadeInScale 0.25s ease-out" }}>
        <style>{`@keyframes fadeInScale { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }`}</style>

        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-extrabold text-base leading-tight">{t("antiscam_modal.title")}</div>
              <div className="text-red-100 text-xs mt-0.5">{t("antiscam_modal.subtitle")}</div>
            </div>
          </div>
          <button onClick={dismiss} className="text-red-200 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 ml-2 flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-3 max-h-[60vh] overflow-y-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-900 text-sm font-semibold leading-relaxed">
              {t("antiscam_modal.warning")}
            </p>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-red-50 rounded-xl border border-red-100">
            <AlertOctagon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-red-800 text-sm">{t("antiscam_modal.no_telegram")}</div>
              <div className="text-red-600 text-xs mt-1 leading-relaxed">
                {t("antiscam_modal.no_telegram_desc")}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-red-50 rounded-xl border border-red-100">
            <AlertOctagon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-red-800 text-sm">{t("antiscam_modal.no_wire")}</div>
              <div className="text-red-600 text-xs mt-1 leading-relaxed">
                {t("antiscam_modal.no_wire_desc")}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-red-50 rounded-xl border border-red-100">
            <AlertOctagon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-red-800 text-sm">{t("antiscam_modal.no_data")}</div>
              <div className="text-red-600 text-xs mt-1 leading-relaxed">
                {t("antiscam_modal.no_data_desc")}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-green-50 rounded-xl border border-green-100">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-green-800 text-sm">{t("antiscam_modal.official_channels")}</div>
              <div className="text-green-600 text-xs mt-1 leading-relaxed">
                {t("antiscam_modal.official_channels_desc")}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-5 pt-2 border-t border-gray-100">
          <button
            onClick={dismiss}
            className="w-full bg-[#0D1F3C] hover:bg-[#162B52] text-white font-bold py-3.5 rounded-xl transition-colors text-sm tracking-wide"
          >
            {t("antiscam_modal.understood")}
          </button>
          <p className="text-center text-gray-400 text-xs mt-3">
            {t("antiscam_modal.once")}
          </p>
        </div>
      </div>
    </div>
  );
}
