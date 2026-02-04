import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, Tractor, Users, BarChart3, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Tractor,
    title: "Gestion des Fermes",
    description: "Suivez vos exploitations, parcelles et équipements en temps réel.",
  },
  {
    icon: Users,
    title: "Équipes & Ouvriers",
    description: "Gérez vos équipes, planifiez les tâches et suivez la productivité.",
  },
  {
    icon: BarChart3,
    title: "Statistiques Avancées",
    description: "Analysez vos performances avec des tableaux de bord interactifs.",
  },
  {
    icon: Shield,
    title: "Sécurité des Données",
    description: "Vos données sont protégées avec un chiffrement de bout en bout.",
  },
];

const benefits = [
  "Réduction des coûts opérationnels",
  "Amélioration de la productivité",
  "Traçabilité complète",
  "Support 24/7",
];

const Accueil = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">AgriHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </Link>
            <Link to="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </Link>
            <Link to="/connexion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Connexion
            </Link>
            <Button asChild>
              <Link to="/inscription">S'inscrire</Link>
            </Button>
          </nav>
          <Button asChild className="md:hidden">
            <Link to="/inscription">S'inscrire</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-agri-harvest/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              🌱 La plateforme agricole nouvelle génération
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Gérez votre exploitation agricole avec{" "}
              <span className="text-primary">simplicité</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              AgriHub centralise la gestion de vos fermes, produits, équipes et statistiques 
              dans une interface intuitive et moderne.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/inscription">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/dashboard">
                  Voir la démo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold">Tout ce dont vous avez besoin</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Des outils puissants pour optimiser chaque aspect de votre activité agricole.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-elevated h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">
                Pourquoi choisir AgriHub ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Rejoignez des centaines d'agriculteurs et entrepreneurs qui font confiance 
                à AgriHub pour gérer leur activité au quotidien.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link to="/inscription">
                  Rejoindre AgriHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-agri-harvest/20 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Démo interactive</p>
                  <p className="text-sm text-muted-foreground">Bientôt disponible</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Prêt à transformer votre exploitation ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous gratuitement et commencez à gérer votre activité agricole 
              de manière plus efficace dès aujourd'hui.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/inscription">
                Créer un compte gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold">AgriHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AgriHub. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Accueil;
