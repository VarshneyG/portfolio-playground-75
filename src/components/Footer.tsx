import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border px-6 py-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">{'<Dev />'}</span> — All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
