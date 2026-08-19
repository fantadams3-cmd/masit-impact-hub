import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DEVIS_EMAIL, DEVIS_WHATSAPP } from "./catalogue";

const schema = z.object({
  fullName: z.string().trim().min(3, "Prénom et nom requis").max(120),
  phone: z
    .string()
    .trim()
    .min(8, "Numéro WhatsApp requis")
    .max(25)
    .regex(/^[0-9+\s().-]+$/, "Numéro invalide"),
  diploma: z.string().trim().min(2, "Diplôme requis").max(150),
  job: z.string().trim().min(2, "Fonction / profession requise").max(150),
  motivation: z.string().trim().min(10, "Précisez votre motivation").max(1000),
});

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formationTitle: string;
  domaine: string;
};

export function DevisDialog({ open, onOpenChange, formationTitle, domaine }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<"wa" | "mail" | null>(null);

  function buildMessage(data: z.infer<typeof schema>) {
    return [
      "Demande de devis — Formation MASIT Consulting",
      "",
      `Domaine : ${domaine}`,
      `Formation : ${formationTitle}`,
      "",
      `Prénom et nom : ${data.fullName}`,
      `Numéro WhatsApp : ${data.phone}`,
      `Diplômé(e) en : ${data.diploma}`,
      `Fonction / profession actuelle : ${data.job}`,
      "",
      `Motivation : ${data.motivation}`,
    ].join("\n");
  }

  function handle(e: React.FormEvent<HTMLFormElement>, channel: "wa" | "mail") {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const message = buildMessage(result.data);
    if (channel === "wa") {
      window.open(
        `https://wa.me/${DEVIS_WHATSAPP}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `mailto:${DEVIS_EMAIL}?subject=${encodeURIComponent(
        `Demande de devis — ${formationTitle}`,
      )}&body=${encodeURIComponent(message)}`;
    }
    setSent(channel);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) {
          setErrors({});
          setSent(null);
        }
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl leading-tight">
            Demande de tarif / devis
          </DialogTitle>
          <DialogDescription className="text-sm">
            {formationTitle} — {domaine}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={(e) => handle(e, "wa")}>
          <DevisField label="Prénom et nom" name="fullName" error={errors.fullName} />
          <DevisField
            label="Numéro WhatsApp"
            name="phone"
            type="tel"
            placeholder="+224 6.. .. .. .."
            error={errors.phone}
          />
          <DevisField
            label="Diplômé(e) en"
            name="diploma"
            placeholder="Ex : Licence en comptabilité"
            error={errors.diploma}
          />
          <DevisField
            label="Fonction / poste ou profession actuelle"
            name="job"
            placeholder="Ex : Assistant comptable"
            error={errors.job}
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Qu'est-ce qui vous motive pour cette formation&nbsp;?
            </label>
            <textarea
              name="motivation"
              rows={4}
              maxLength={1000}
              className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
            />
            {errors.motivation && (
              <p className="mt-1 text-sm text-destructive">{errors.motivation}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-base font-semibold text-white hover:opacity-95"
            >
              <MessageCircle size={18} /> Envoyer sur WhatsApp
            </button>
            <button
              type="button"
              onClick={(e) =>
                handle(
                  {
                    preventDefault: () => {},
                    currentTarget: e.currentTarget.closest("form") as HTMLFormElement,
                  } as unknown as React.FormEvent<HTMLFormElement>,
                  "mail",
                )
              }
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-base font-semibold hover:bg-muted"
            >
              <Mail size={18} /> Par email
            </button>
          </div>

          {sent && (
            <p className="flex items-center gap-2 text-sm text-gold">
              <Send size={14} /> Votre demande est prête à être envoyée
              {sent === "wa" ? " via WhatsApp (662 40 05 32)." : ` à ${DEVIS_EMAIL}.`}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Vos informations sont transmises directement à MASIT Consulting — WhatsApp
            662&nbsp;40&nbsp;05&nbsp;32 ou {DEVIS_EMAIL}.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DevisField({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="h-12 w-full rounded-md border border-input bg-background px-4 text-base outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
