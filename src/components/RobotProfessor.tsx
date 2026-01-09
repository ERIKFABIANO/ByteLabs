import Spline from '@splinetool/react-spline';

interface RobotProfessorProps {
  message?: string;
  variant?: "default" | "thinking" | "excited";
  size?: "sm" | "md" | "lg";
}

const RobotProfessor = ({ 
  message = "Olá! Eu sou o Prof. Appe, seu guia nessa jornada!", 
  variant = "default",
  size = "md" 
}: RobotProfessorProps) => {
  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-64 h-64",
    lg: "w-80 h-80",
  };

  return (
    <div className="flex items-start gap-4">
      {/* Spline 3D Robot */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <Spline 
          scene="https://prod.spline.design/zRCUE-No53rlJujH/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Speech bubble */}
      <div className="relative bg-card border border-primary/30 rounded-xl p-4 max-w-sm self-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-primary/30" />
        <p className="text-sm text-foreground/90 leading-relaxed">{message}</p>
        {variant === "excited" && (
          <span className="absolute -top-2 -right-2 text-xl">⚡</span>
        )}
      </div>
    </div>
  );
};

export default RobotProfessor;
