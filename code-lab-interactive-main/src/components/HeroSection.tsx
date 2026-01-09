import RobotProfessor from "./RobotProfessor";
import TerminalDemo from "./TerminalDemo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Laboratório Interativo</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Entenda como
              <br />
              <span className="text-gradient">computadores</span>
              <br />
              realmente funcionam
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md">
              Do código binário à inteligência artificial. Uma jornada interativa pelos fundamentos que todo desenvolvedor deveria conhecer.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:glow-primary hover:scale-105">
                Começar Jornada
              </button>
              <button className="px-8 py-4 rounded-xl border border-border bg-card/50 text-foreground font-semibold transition-all duration-300 hover:border-primary hover:text-primary">
                Ver Conteúdo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">22</div>
                <div className="text-sm text-muted-foreground">Capítulos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Níveis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground">Conhecimento</div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6">
            {/* Robot */}
            <RobotProfessor 
              message="Olá! Eu sou o Prof. Appe! 🤖 Vou te guiar desde o código binário até arquiteturas complexas. Pronto para entender o que acontece por baixo do capô?"
              variant="excited"
              size="lg"
            />

            {/* Terminal */}
            <TerminalDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
