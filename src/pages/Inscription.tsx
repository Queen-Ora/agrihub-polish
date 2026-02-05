import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Leaf, User, Mail, Phone, Lock, ArrowRight, Eye, EyeOff, 
  Briefcase, Tractor, Building2, MapPin 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

type UserRole = "ouvrier" | "entrepreneur";

const Inscription = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    // Champs ouvrier
    experience: "",
    competences: "",
    disponibilite: "",
    // Champs entrepreneur
    nomEntreprise: "",
    secteur: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.nom || !formData.prenom || !formData.email || !formData.password || !selectedRole) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const { error } = await signUp({
      email: formData.email,
      password: formData.password,
      firstName: formData.prenom,
      lastName: formData.nom,
      phone: formData.telephone,
      role: selectedRole,
    });

    if (error) {
      toast({
        title: "Erreur d'inscription",
        description: error.message,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: "Inscription réussie !",
      description: "Veuillez vérifier votre email pour confirmer votre compte.",
    });

    navigate("/connexion");
  };

  const roleOptions = [
    {
      value: "ouvrier" as UserRole,
      label: "Ouvrier agricole",
      description: "Recherchez des opportunités de travail dans des fermes",
      icon: Tractor,
      color: "border-primary/50 bg-primary/5 hover:border-primary hover:bg-primary/10",
      activeColor: "border-primary bg-primary/15 ring-2 ring-primary/20",
    },
    {
      value: "entrepreneur" as UserRole,
      label: "Entrepreneur",
      description: "Gérez vos fermes, produits et équipes",
      icon: Building2,
      color: "border-accent/50 bg-accent/5 hover:border-accent hover:bg-accent/10",
      activeColor: "border-accent bg-accent/15 ring-2 ring-accent/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-agri-leaf/5 via-background to-agri-harvest/5 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-agri-harvest/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">AgriHub</span>
          </Link>
        </div>

        <Card className="card-elevated">
          <CardHeader className="text-center pb-2">
            <CardTitle className="font-display text-2xl">Créer un compte</CardTitle>
            <CardDescription>
              Rejoignez AgriHub et développez votre activité agricole
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sélection du rôle */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Type de compte *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {roleOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedRole(option.value)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200",
                        selectedRole === option.value ? option.activeColor : option.color
                      )}
                    >
                      <option.icon className={cn(
                        "h-8 w-8",
                        selectedRole === option.value 
                          ? option.value === "ouvrier" ? "text-primary" : "text-accent"
                          : "text-muted-foreground"
                      )} />
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{option.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {selectedRole && (
                  <motion.div
                    key={selectedRole}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Informations de base */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="prenom"
                            placeholder="Jean"
                            value={formData.prenom}
                            onChange={(e) => handleChange("prenom", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input
                          id="nom"
                          placeholder="Dupont"
                          value={formData.nom}
                          onChange={(e) => handleChange("nom", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean.dupont@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="telephone"
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          value={formData.telephone}
                          onChange={(e) => handleChange("telephone", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Champs conditionnels selon le rôle */}
                    {selectedRole === "ouvrier" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4 p-4 rounded-lg bg-primary/5 border border-primary/20"
                      >
                        <h3 className="font-medium text-sm text-primary flex items-center gap-2">
                          <Tractor className="h-4 w-4" />
                          Informations ouvrier
                        </h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="experience">Années d'expérience</Label>
                          <Input
                            id="experience"
                            placeholder="Ex: 5 ans"
                            value={formData.experience}
                            onChange={(e) => handleChange("experience", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="competences">Compétences</Label>
                          <Textarea
                            id="competences"
                            placeholder="Ex: Conduite d'engins agricoles, récolte, entretien..."
                            value={formData.competences}
                            onChange={(e) => handleChange("competences", e.target.value)}
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="disponibilite">Disponibilité</Label>
                          <Input
                            id="disponibilite"
                            placeholder="Ex: Temps plein, saisonnier..."
                            value={formData.disponibilite}
                            onChange={(e) => handleChange("disponibilite", e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedRole === "entrepreneur" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4 p-4 rounded-lg bg-accent/5 border border-accent/20"
                      >
                        <h3 className="font-medium text-sm text-accent-foreground flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          Informations entreprise
                        </h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="nomEntreprise">Nom de l'entreprise</Label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="nomEntreprise"
                              placeholder="Ferme du Soleil"
                              value={formData.nomEntreprise}
                              onChange={(e) => handleChange("nomEntreprise", e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="secteur">Secteur d'activité</Label>
                          <Input
                            id="secteur"
                            placeholder="Ex: Céréales, Maraîchage, Élevage..."
                            value={formData.secteur}
                            onChange={(e) => handleChange("secteur", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Description de l'activité</Label>
                          <Textarea
                            id="description"
                            placeholder="Décrivez votre activité agricole..."
                            value={formData.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                            rows={3}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Mot de passe */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) => handleChange("password", e.target.value)}
                          className="pl-10 pr-10"
                          required
                          minLength={6}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">Minimum 6 caractères</p>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Inscription en cours...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Créer mon compte
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Login link */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link to="/connexion" className="text-primary font-medium hover:underline">
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          En vous inscrivant, vous acceptez nos{" "}
          <Link to="/conditions" className="text-primary hover:underline">
            Conditions d'utilisation
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Inscription;
