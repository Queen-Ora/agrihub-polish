import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wheat,
  Apple,
  Carrot,
  Milk,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Produits",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Package,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Fermes Actives",
    value: "156",
    change: "+3.2%",
    trend: "up",
    icon: MapPin,
    color: "bg-agri-harvest/20 text-agri-earth",
  },
  {
    title: "Utilisateurs",
    value: "1,234",
    change: "+8.1%",
    trend: "up",
    icon: Users,
    color: "bg-agri-sky-light text-agri-sky",
  },
  {
    title: "Chiffre d'affaires",
    value: "€847,291",
    change: "-2.4%",
    trend: "down",
    icon: TrendingUp,
    color: "bg-destructive/10 text-destructive",
  },
];

const recentProducts = [
  {
    name: "Blé Bio Premium",
    category: "Céréales",
    stock: 2500,
    maxStock: 5000,
    price: "€320/t",
    icon: Wheat,
  },
  {
    name: "Pommes Golden",
    category: "Fruits",
    stock: 850,
    maxStock: 1000,
    price: "€2.50/kg",
    icon: Apple,
  },
  {
    name: "Carottes Bio",
    category: "Légumes",
    stock: 320,
    maxStock: 800,
    price: "€1.80/kg",
    icon: Carrot,
  },
  {
    name: "Lait Frais",
    category: "Produits laitiers",
    stock: 1200,
    maxStock: 2000,
    price: "€0.95/L",
    icon: Milk,
  },
];

const recentActivities = [
  {
    type: "order",
    message: "Nouvelle commande de Ferme du Soleil",
    time: "Il y a 5 min",
    status: "success",
  },
  {
    type: "stock",
    message: "Stock de maïs mis à jour (+500kg)",
    time: "Il y a 32 min",
    status: "info",
  },
  {
    type: "user",
    message: "Nouvel utilisateur inscrit: Marie L.",
    time: "Il y a 1h",
    status: "success",
  },
  {
    type: "alert",
    message: "Stock faible: Pommes de terre (<100kg)",
    time: "Il y a 2h",
    status: "warning",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const Dashboard = () => {
  return (
    <MainLayout title="Tableau de bord" subtitle="Bienvenue sur AgriHub">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <Card className="card-elevated overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-xl p-3 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant={stat.trend === "up" ? "default" : "destructive"}
                      className="flex items-center gap-1"
                    >
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Products Overview */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="card-elevated h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-display text-lg">
                  Aperçu des Produits
                </CardTitle>
                <Button variant="outline" size="sm">
                  Voir tout
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProducts.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-muted/50 p-4 transition-colors hover:bg-muted"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-foreground truncate">
                            {product.name}
                          </h4>
                          <Badge variant="secondary" className="shrink-0">
                            {product.price}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {product.category}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Progress
                            value={(product.stock / product.maxStock) * 100}
                            className="h-2 flex-1"
                          />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {product.stock} / {product.maxStock}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={itemVariants}>
            <Card className="card-elevated h-full">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-lg">
                  Activité Récente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <div
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                          activity.status === "success"
                            ? "bg-primary"
                            : activity.status === "warning"
                            ? "bg-accent"
                            : "bg-agri-sky"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">
                          {activity.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full">
                  Voir toute l'activité
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <Card className="card-elevated overflow-hidden bg-gradient-to-r from-primary to-primary/80">
            <CardContent className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  Prêt à développer votre activité ?
                </h3>
                <p className="mt-1 text-primary-foreground/80">
                  Ajoutez de nouveaux produits ou connectez de nouvelles fermes
                  à votre réseau.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-primary-foreground hover:bg-white/30 border-0"
                >
                  Ajouter un produit
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Nouvelle ferme
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Dashboard;
