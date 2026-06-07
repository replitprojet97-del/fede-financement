import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  BookOpen, LayoutDashboard, FolderOpen, CreditCard, Banknote, Users, Star,
  ChevronRight, Shield, LogIn, Smartphone, CheckCircle, AlertCircle, Info,
} from "lucide-react";

interface Step {
  num: number;
  title: string;
  desc: string;
}

interface Section {
  id: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  subtitle: string;
  steps: Step[];
  tips?: string[];
}

const SECTIONS: Section[] = [
  {
    id: "connexion",
    icon: LogIn,
    color: "#0D1F3C",
    bg: "#EEF1F8",
    title: "Connexion sécurisée",
    subtitle: "Accéder à l'espace conseillers",
    steps: [
      { num: 1, title: "Ouvrir la page de connexion", desc: "Rendez-vous sur l'URL de l'espace conseillers FEDE et cliquez sur « Connexion »." },
      { num: 2, title: "Saisir vos identifiants", desc: "Entrez votre adresse e-mail admin (support@fede-financement.com) et votre mot de passe." },
      { num: 3, title: "Vérification TOTP", desc: "Ouvrez votre application d'authentification (Google Authenticator ou Authy), et saisissez le code à 6 chiffres affiché. Le code change toutes les 30 secondes — utilisez-le immédiatement." },
      { num: 4, title: "Session active", desc: "La session admin est valable 8 heures. Au-delà, une nouvelle vérification TOTP est requise automatiquement." },
    ],
    tips: [
      "Ne partagez jamais votre code TOTP.",
      "Si le code est refusé, vérifiez que l'heure de votre téléphone est bien synchronisée (paramètres > date et heure > automatique).",
    ],
  },
  {
    id: "tableau-de-bord",
    icon: LayoutDashboard,
    color: "#2563EB",
    bg: "#EFF6FF",
    title: "Tableau de bord",
    subtitle: "Vue d'ensemble de l'activité",
    steps: [
      { num: 1, title: "Consulter les statistiques", desc: "La page d'accueil affiche le nombre total de dossiers, les dossiers en instruction, les frais perçus ce mois et les validations récentes." },
      { num: 2, title: "Dossiers récents", desc: "La liste des derniers dossiers soumis est visible directement sur le tableau de bord. Cliquez sur un dossier pour y accéder directement." },
      { num: 3, title: "Indicateurs par territoire", desc: "Le graphique de répartition par territoire montre l'origine géographique des demandes (Martinique, Guadeloupe, Réunion…)." },
    ],
  },
  {
    id: "dossiers",
    icon: FolderOpen,
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Dossiers & Messagerie",
    subtitle: "Gérer les demandes de financement",
    steps: [
      { num: 1, title: "Lister les dossiers", desc: "La page affiche tous les dossiers avec leur statut, territoire, montant demandé et date de dépôt. Utilisez les filtres pour trier par statut." },
      { num: 2, title: "Ouvrir un dossier", desc: "Cliquez sur « Voir » pour accéder au détail complet : informations du porteur, description du projet, documents déposés, historique des événements." },
      { num: 3, title: "Changer le statut", desc: "Dans le panneau de droite, utilisez les boutons d'action pour faire avancer le dossier : Accuser réception → Envoyer l'éligibilité → Envoyer le contrat → Marquer signé → Favorable → Confirmer paiement." },
      { num: 4, title: "Messagerie intégrée", desc: "Chaque dossier dispose d'un fil de messages avec le porteur. Rédigez votre message dans la zone de texte et envoyez. Le porteur est notifié dans son espace client." },
      { num: 5, title: "Émettre une note de frais", desc: "Depuis le détail d'un dossier, cliquez sur « Émettre des frais » pour créer une ligne de facturation (honoraires, frais de dossier…)." },
    ],
    tips: [
      "Les statuts suivent un ordre logique. Vous pouvez revenir en arrière si nécessaire via le menu déroulant.",
      "Les documents déposés par le porteur sont consultables directement dans l'onglet Documents du dossier.",
    ],
  },
  {
    id: "frais",
    icon: CreditCard,
    color: "#D97706",
    bg: "#FFFBEB",
    title: "Frais d'instruction",
    subtitle: "Suivi des paiements porteurs",
    steps: [
      { num: 1, title: "Consulter les frais", desc: "La page liste toutes les lignes de frais créées, avec le statut de paiement (en attente, payé) et le montant." },
      { num: 2, title: "Filtrer par statut", desc: "Utilisez les onglets « En attente » et « Payés » pour trier rapidement les frais à traiter." },
      { num: 3, title: "Valider un paiement", desc: "Lorsqu'un porteur signale avoir effectué son paiement, cliquez sur « Marquer payé » sur la ligne concernée pour mettre à jour le statut." },
    ],
    tips: [
      "Les frais d'instruction standard FEDE sont de 456 € TTC.",
      "Un frais ne peut être supprimé qu'avant d'être marqué payé.",
    ],
  },
  {
    id: "virements",
    icon: Banknote,
    color: "#059669",
    bg: "#ECFDF5",
    title: "Virements des fonds",
    subtitle: "Suivi des versements aux porteurs",
    steps: [
      { num: 1, title: "Consulter les virements", desc: "Cette section liste les ordres de virement associés aux dossiers dont le financement a été accordé." },
      { num: 2, title: "Créer un virement", desc: "Depuis un dossier au statut « Favorable », cliquez sur « Créer un virement » et renseignez le montant et les coordonnées bancaires." },
      { num: 3, title: "Suivre les étapes", desc: "Chaque virement passe par plusieurs étapes : Initié → En cours → Versé. Mettez à jour l'étape au fil de l'exécution bancaire." },
    ],
  },
  {
    id: "utilisateurs",
    icon: Users,
    color: "#0891B2",
    bg: "#ECFEFF",
    title: "Utilisateurs",
    subtitle: "Consulter les comptes porteurs",
    steps: [
      { num: 1, title: "Liste des comptes", desc: "La page affiche tous les comptes inscrits avec leur nom, e-mail, territoire et statut de vérification." },
      { num: 2, title: "Informations de sécurité", desc: "Pour chaque utilisateur, vous pouvez voir sa dernière adresse IP de connexion, le nombre de tentatives de connexion échouées, et si son compte est temporairement bloqué." },
      { num: 3, title: "Identifier les comptes suspects", desc: "Un badge rouge « Bloqué » signale un compte qui a dépassé les tentatives de connexion autorisées. Cela peut indiquer une tentative de piratage." },
    ],
    tips: [
      "Les conseillers sont identifiés par un badge violet « Conseiller ».",
      "La modification des rôles et la vérification manuelle des e-mails se font directement en base de données pour des raisons de sécurité.",
    ],
  },
  {
    id: "avis",
    icon: Star,
    color: "#FFD500",
    bg: "#FFFBEB",
    title: "Modération des avis",
    subtitle: "Gérer les témoignages affichés sur le site",
    steps: [
      { num: 1, title: "Consulter les avis", desc: "La page liste tous les avis déposés par les porteurs depuis l'application mobile. Chaque avis est « En attente » par défaut jusqu'à modération." },
      { num: 2, title: "Approuver un avis", desc: "Cliquez sur « Approuver » pour qu'un avis soit visible sur la page publique du site FEDE." },
      { num: 3, title: "Rejeter un avis", desc: "Cliquez sur « Rejeter » pour masquer un avis inapproprié ou non conforme. L'avis reste en base mais n'est plus affiché." },
      { num: 4, title: "Ajouter un avis manuellement", desc: "Cliquez sur « + Ajouter un avis » pour saisir directement un témoignage (utile pour les retours recueillis par téléphone ou e-mail). Les avis créés manuellement sont approuvés automatiquement." },
      { num: 5, title: "Supprimer un avis", desc: "Cliquez sur l'icône poubelle pour supprimer définitivement un avis. Cette action est irréversible." },
    ],
    tips: [
      "Seuls les avis avec le statut « Approuvé » apparaissent sur la page publique.",
      "Un avis avec note 5 étoiles et montant affiché a plus d'impact sur la conversion.",
    ],
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0D1F3C] text-white text-xs font-bold flex items-center justify-center mt-0.5">
        {step.num}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800 mb-0.5">{step.title}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

export default function AdminGuide() {
  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#0D1F3C] rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #FFD500 0%, transparent 60%)" }} />
          <div className="flex items-center gap-4 mb-4 relative">
            <div className="w-12 h-12 rounded-xl bg-[#FFD500]/20 border border-[#FFD500]/30 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#FFD500]" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Guide d'utilisation</h1>
              <p className="text-white/50 text-sm">Espace Conseillers FEDE</p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed relative max-w-2xl">
            Ce guide décrit chaque section de l'espace conseillers, étape par étape.
            Suivez les instructions pour traiter les dossiers, valider les paiements et modérer les avis en toute sécurité.
          </p>
        </div>

        {/* Table des matières */}
        <div className="bg-white border border-[#DDE2EC] rounded-2xl p-6 mb-8">
          <h2 className="text-xs font-bold text-[#FFD500] uppercase tracking-widest mb-4">Table des matières</h2>
          <div className="grid grid-cols-2 gap-2">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.id} href={`#${s.id}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: s.bg }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                  </div>
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">{s.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 ml-auto group-hover:text-[#FFD500] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id}
                className="bg-white border border-[#DDE2EC] rounded-2xl overflow-hidden scroll-mt-8">
                {/* Section header */}
                <div className="flex items-center gap-4 p-6 border-b border-[#DDE2EC]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: section.bg }}>
                    <Icon className="w-5 h-5" style={{ color: section.color }} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#0D1F3C]">{section.title}</h2>
                    <p className="text-xs text-slate-400">{section.subtitle}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="p-6 space-y-5">
                  {section.steps.map((step) => (
                    <StepCard key={step.num} step={step} />
                  ))}

                  {/* Tips */}
                  {section.tips && section.tips.length > 0 && (
                    <div className="mt-4 bg-[#FFFBEB] border border-[#F0D98C] rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD500] text-xs font-bold uppercase tracking-wide mb-1">
                        <Info className="w-3.5 h-3.5" /> Bon à savoir
                      </div>
                      {section.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FFD500] mt-0.5 shrink-0" />
                          <p className="text-xs text-[#92650A] leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer sécurité */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-700 mb-1">Rappels de sécurité</p>
              <ul className="text-xs text-red-600 space-y-1.5">
                <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 shrink-0" /> Ne transmettez jamais votre mot de passe ou votre code TOTP à un tiers.</li>
                <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 shrink-0" /> Déconnectez-vous toujours après votre session, surtout sur un ordinateur partagé.</li>
                <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 shrink-0" /> En cas de suspicion de compromission, changez votre mot de passe immédiatement et contactez l'équipe technique.</li>
                <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 shrink-0" /> L'accès à cet espace est réservé aux conseillers habilités FEDE.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
