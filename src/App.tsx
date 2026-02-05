import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Accueil from "./pages/Accueil";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Dashboard from "./pages/Dashboard";
import Produits from "./pages/Produits";
import Fermes from "./pages/Fermes";
import Utilisateurs from "./pages/Utilisateurs";
import Statistiques from "./pages/Statistiques";
import Parametres from "./pages/Parametres";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Pages publiques */}
            <Route path="/" element={<Accueil />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            
            {/* Pages du dashboard (après connexion) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/fermes" element={<Fermes />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/statistiques" element={<Statistiques />} />
            <Route path="/parametres" element={<Parametres />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
