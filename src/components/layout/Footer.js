import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Tanbir Alam</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building scalable web apps and intuitive user interfaces.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/tanbiralam06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanbir06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/Tanbir_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:social.tanbir@gmail.com"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Tanbir Alam. Built with ❤️</p>
        </div>
      </Container>
    </footer>
  );
}
