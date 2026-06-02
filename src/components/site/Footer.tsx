import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl container-px py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-gold-foreground font-display font-bold">
              M
            </span>
            <span className="font-display text-base font-bold">MASIT CONSULTING</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Cabinet de conseil, audit, formation et transformation digitale basé à Conakry, Guinée.
            Nous accompagnons les organisations dans leur performance et leur transition vers l'IA.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold">À propos</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Réalisations</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> Conakry, Guinée</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-gold" /> contact@masitconsulting.com</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-gold" /> +224 000 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl container-px py-5 text-xs text-primary-foreground/60 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} MASIT Consulting. Tous droits réservés.</span>
          <span>Conakry · Guinée</span>
        </div>
      </div>
    </footer>
  );
}
