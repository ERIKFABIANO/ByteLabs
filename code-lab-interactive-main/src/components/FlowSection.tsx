import DataFlowDiagram from "./DataFlowDiagram";
import RobotProfessor from "./RobotProfessor";

const FlowSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visualize o <span className="text-gradient">Fluxo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entenda como dados viajam através de um sistema moderno. 
            Interaja com o diagrama para mais detalhes.
          </p>
        </div>

        {/* Diagram card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <DataFlowDiagram />
          </div>
        </div>

        {/* Robot explanation */}
        <div className="max-w-2xl mx-auto mt-12">
          <RobotProfessor 
            message="Esse é o ponto onde o código vira eletricidade ⚡ Cada camada tem sua responsabilidade. O front-end mostra, a API conecta, o back-end processa, e o banco armazena!"
            variant="thinking"
          />
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
