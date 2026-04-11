"use client"

import Link from "next/link";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from "lucide-react";
import { Separator } from "@components/ui/separator";

interface PortfolioFooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
  quickLinks?: {
    label: string;
    href: string;
  }[];
  services?: string[];
  showNewsletter?: boolean;
  showContactForm?: boolean;
  copyrightText?: string;
}

export default function PortfolioFooter({
  companyName = "Mon Portfolio",
  tagline = "Créons ensemble quelque chose d'extraordinaire",
  email = "a.chaibousaidou@edu.umi.ac.ma",
  phone = "+212 786 220 346",
  location = "Meknès, Maroc",
  socialLinks = [
    { platform: "GitHub", url: "https://github.com", icon: <Github className="h-5 w-5" /> },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
    { platform: "Twitter", url: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
    { platform: "Instagram", url: "https://instagram.com", icon: <Instagram className="h-5 w-5" /> },
  ],
  quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services = [
    'Consulting Tech',
    'Applications Mobile',
    'Design UI/UX',
    'SEO & Performance',
    'Développement Web'
  ],
  showNewsletter = true,
  showContactForm = false,
  copyrightText = `© ${new Date().getFullYear()} Mon Portfolio. Tous droits réservés.`,
}: PortfolioFooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t mt-auto">
      {/* Newsletter Section */}
      {showNewsletter && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Restez informé
            </h3>
            <p className="text-muted-foreground mb-6">
              Abonnez-vous à ma newsletter pour recevoir les dernières actualités et projets.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                className="flex-1"
                required
              />
              <Button type="submit" className="sm:w-auto">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      {showContactForm && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Contact rapide
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Votre nom" required />
                <Input type="email" placeholder="Votre email" required />
              </div>
              <Input placeholder="Sujet" required />
              <Textarea placeholder="Votre message" rows={4} required />
              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div>
                <span className="text-xl font-bold">{companyName}</span>
                <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
              </div>
            </Link>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`mailto:${email}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href={`tel:${phone}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {
                services.map((s, key) => (
                  <li key={key}>
                    <a href="/services/web" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {s}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Social & Legal Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Conditions d'utilisation
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Plan du site
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {copyrightText} 
            <span className="inline-flex items-center mx-1">
              Abdoulaye
            </span>
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Haut de page
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}