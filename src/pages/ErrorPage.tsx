import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-inter">
      <div className="bg-card rounded-2xl shadow-lg border border-border p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-yellow-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground">
          Página Temporariamente Indisponível
        </h1>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            A conta do TikTok de Milena Feffers está fora do ar no momento.
          </p>
          <p>
            Identificamos a remoção da conta por parte da plataforma devido à identificação de conteúdo considerado malicioso pelas diretrizes do TikTok.
          </p>
          <p>
            Estamos trabalhando para resolver o problema o quanto antes.
          </p>
          <p>
            Agradecemos pela compreensão. 💬
          </p>
        </div>
        
        <Button 
          onClick={handleGoHome}
          className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-colors"
        >
          Voltar ao início
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;