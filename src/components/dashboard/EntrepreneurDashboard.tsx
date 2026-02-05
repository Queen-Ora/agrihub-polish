import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  TrendingUp,
  ArrowUpRight,
  Briefcase,
  ClipboardList,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const entrepreneurStats = [
  {
    title: "Mes Fermes",
    value: "3",
    change: "+1 ce mois",
    icon: MapPin,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Mes Produits",
    value: "24",
    change: "+5 cette semaine",
    icon: Package,
    color: "bg-agri-harvest/20 text-agri-earth",
  },
  {
    title: "Commandes",
    value: "18",
    change: "+3 aujourd'hui",
    icon: ClipboardList,
    color: "bg-agri-sky-light text-agri-sky",
  },
  {
    title: "Chiffre d'affaires",
    value: "€12,450",
    change: "+15% ce mois",
    icon: TrendingUp,
    color: "bg-accent/20 text-accent-foreground",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export function EntrepreneurDashboard() {
  const { profile } = useAuth();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Welcome Banner */}
      <motion.div variants={itemVariants}>
        <Card className="card-elevated overflow-hidden bg-gradient-to-r from-primary to-primary/80">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground">
                  Bonjour, {profile?.first_name} ! 👋
                </h2>
                <p className="text-primary-foreground/80 mt-1">
                  Gérez vos fermes, produits et commandes depuis votre tableau de bord
                </p>
              </div>
              <Badge className="bg-white/20 text-primary-foreground border-0">
                <Briefcase className="h-3 w-3 mr-1" />
                Entrepreneur
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {entrepreneurStats.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="card-elevated overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-3">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Mes Fermes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gérez vos exploitations agricoles et leurs informations
            </p>
            <Button asChild className="w-full">
              <Link to="/fermes">Gérer mes fermes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Package className="h-5 w-5 text-agri-harvest" />
              Mes Produits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ajoutez et gérez vos produits agricoles
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/produits">Gérer mes produits</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-agri-sky" />
              Commandes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Suivez vos commandes et livraisons
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/statistiques">Voir les commandes</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
