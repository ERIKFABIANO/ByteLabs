import { Binary, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Binary className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg">ByteLab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Laboratório interativo para entender como computadores realmente funcionam.
            </p>
          </div>

          {/* Módulos */}
          <div>
            <h4 className="font-semibold mb-4">Módulos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Fundamentos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servidores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IA & Automação</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">eBook Completo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diagramas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exercícios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Glossário</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a href="https://github.com/ERIKFABIANO?tab=repositories" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/erik-appe/" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ByteLab. Conhecimento é poder.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Sistema operacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
