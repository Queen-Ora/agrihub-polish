import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  ArrowUpRight,
  Tractor,
  ClipboardCheck,
  Star,
  Building2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const ouvrierStats = [
  {
    title: "Candidatures",
    value: "5",
    change: "2 en attente",
    icon: ClipboardCheck,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Fermes consultées",
    value: "12",
    change: "+3 cette semaine",
    icon: MapPin,
    color: "bg-agri-harvest/20 text-agri-earth",
  },
  {
    title: "Missions terminées",
    value: "8",
    change: "Ce mois",
    icon: Star,
    color: "bg-accent/20 text-accent-foreground",
  },
];

const availableFarms = [
  {
    name: "Ferme du Soleil",
    location: "Provence, France",
    type: "Maraîchage",
    openPositions: 3,
  },
  {
    name: "Domaine des Vignes",
    location: "Bordeaux, France",
    type: "Viticulture",
    openPositions: 5,
  },
  {
    name: "Les Champs d'Or",
    location: "Beauce, France",
    type: "Céréales",
    openPositions: 2,
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

export function OuvrierDashboard() {
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
        <Card className="card-elevated overflow-hidden bg-gradient-to-r from-agri-sky to-agri-sky/80">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Bonjour, {profile?.first_name} ! 👋
                </h2>
                <p className="text-white/80 mt-1">
                  Découvrez les opportunités de travail dans les fermes près de chez vous
                </p>
              </div>
              <Badge className="bg-white/20 text-white border-0">
                <Tractor className="h-3 w-3 mr-1" />
                Ouvrier agricole
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        className="grid gap-4 sm:grid-cols-3"
      >
        {ouvrierStats.map((stat) => (
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

      {/* Available Farms */}
      <motion.div variants={itemVariants}>
        <Card className="card-elevated">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Fermes qui recrutent
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/fermes">
                <Search className="h-4 w-4 mr-2" />
                Voir tout
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableFarms.map((farm, index) => (
                <motion.div
                  key={farm.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{farm.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {farm.location} • {farm.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                      {farm.openPositions} postes
                    </Badge>
                    <Button size="sm">Postuler</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              Mes Candidatures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Suivez l'état de vos candidatures et les réponses des fermes
            </p>
            <Button asChild className="w-full">
              <Link to="/fermes">Voir mes candidatures</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Search className="h-5 w-5 text-agri-harvest" />
              Explorer les fermes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Découvrez de nouvelles opportunités de travail
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/fermes">Rechercher</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
