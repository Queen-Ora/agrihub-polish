import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";
import { EntrepreneurDashboard } from "@/components/dashboard/EntrepreneurDashboard";
import { OuvrierDashboard } from "@/components/dashboard/OuvrierDashboard";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { user, profile, isLoading, isEntrepreneur, isOuvrier } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/connexion");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <MainLayout title="Tableau de bord" subtitle="Chargement...">
        <div className="space-y-6">
          <Skeleton className="h-32 w-full rounded-xl" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
      </MainLayout>
    );
  }

  if (!user) {
    return null;
  }

  const subtitle = isEntrepreneur 
    ? "Gérez vos fermes et produits" 
    : "Trouvez des opportunités de travail";

  return (
    <MainLayout 
      title="Tableau de bord" 
      subtitle={`Bienvenue, ${profile?.first_name || "Utilisateur"} - ${subtitle}`}
    >
      {isEntrepreneur && <EntrepreneurDashboard />}
      {isOuvrier && <OuvrierDashboard />}
      {!isEntrepreneur && !isOuvrier && (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">
            Chargement de votre profil...
          </p>
        </div>
      )}
    </MainLayout>
  );
};

export default Dashboard;
