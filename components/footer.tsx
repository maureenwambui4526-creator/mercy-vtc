import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#admissions", label: "Admissions" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

const programs = [
  "Food & Beverage",
  "Dressmaking",
  "Hairdressing",
  "ICT",
  "Electrical",
  "Short Courses",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground dark:bg-background text-background dark:text-foreground border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center bg-primary">
                 <Image
                src="/logo.png"
                alt="Our Lady of Mercy Vocational Training Centre"
                width={1200}
                height={1000}
                className="h-12 w-auto"
                priority
              />
              </div>
              <div>
                <p className="font-bold text-background dark:text-foreground leading-tight">
                  Our Lady of Mercy
                </p>
                <p className="text-xs text-background/70 dark:text-foreground/70">
                  Vocational Training Centre
                </p>
              </div>
            </Link>
            <p className="text-sm text-background/70 dark:text-foreground/70 mb-4">
              Empowering skills for a better future. A Christian faith-based
              institution managed by the Sisters of Mercy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 dark:bg-foreground/10 hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground transition-colors ring-1 ring-border/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background dark:text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-background dark:text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href="#programs"
                    className="text-sm text-background/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background dark:text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-background/70 dark:text-foreground/70">
              <li>Chepareria, West Pokot County</li>
              <li>P.O Box 318-30600, Kitale</li>
              <li>ourladyofmercycollege@gmail.com</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 dark:border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70 dark:text-foreground/70">
              © {new Date().getFullYear()} Our Lady of Mercy College. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-background/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-background/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
