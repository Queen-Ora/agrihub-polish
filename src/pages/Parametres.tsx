import { motion } from "framer-motion";
import {
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Globe,
  Mail,
  Smartphone,
  Save,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Parametres = () => {
  return (
    <MainLayout title="Paramètres" subtitle="Configurez votre compte et l'application">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-6"
      >
        <Tabs defaultValue="profile" className="space-y-6">
          <motion.div variants={itemVariants}>
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profil</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Sécurité</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Préférences</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="font-display">
                      Informations personnelles
                    </CardTitle>
                    <CardDescription>
                      Mettez à jour vos informations de profil
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Avatar */}
                    <div className="flex items-center gap-6">
                      <Avatar className="h-20 w-20 ring-4 ring-primary/20">
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button variant="outline">Changer la photo</Button>
                        <p className="text-sm text-muted-foreground">
                          JPG, PNG ou GIF. Max 2MB.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    {/* Form Fields */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" defaultValue="Jean" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" defaultValue="Dupont" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="jean.dupont@agrihub.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue="+33 6 12 34 56 78"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Rôle</Label>
                        <Select defaultValue="admin">
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Administrateur</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="farmer">Agriculteur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="btn-primary gap-2">
                        <Save className="h-4 w-4" />
                        Sauvegarder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="font-display">
                      Préférences de notification
                    </CardTitle>
                    <CardDescription>
                      Choisissez comment vous souhaitez être notifié
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Notifications par email",
                        description: "Recevez les mises à jour par email",
                        defaultChecked: true,
                      },
                      {
                        icon: Smartphone,
                        title: "Notifications push",
                        description: "Notifications sur votre appareil mobile",
                        defaultChecked: true,
                      },
                      {
                        icon: Bell,
                        title: "Alertes de stock",
                        description: "Soyez alerté quand le stock est faible",
                        defaultChecked: true,
                      },
                      {
                        icon: Database,
                        title: "Rapports hebdomadaires",
                        description: "Résumé de l'activité chaque semaine",
                        defaultChecked: false,
                      },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-lg bg-muted p-2">
                            <item.icon className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <Switch defaultChecked={item.defaultChecked} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="font-display">
                      Sécurité du compte
                    </CardTitle>
                    <CardDescription>
                      Gérez la sécurité de votre compte
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">
                          Mot de passe actuel
                        </Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirmer le mot de passe
                        </Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-muted p-2">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Authentification à deux facteurs
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Ajoutez une couche de sécurité supplémentaire
                          </p>
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex justify-end">
                      <Button className="btn-primary gap-2">
                        <Save className="h-4 w-4" />
                        Mettre à jour
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="font-display">
                      Préférences d'affichage
                    </CardTitle>
                    <CardDescription>
                      Personnalisez l'interface de l'application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="language">Langue</Label>
                      <Select defaultValue="fr">
                        <SelectTrigger className="w-full sm:w-[200px]">
                          <Globe className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuseau horaire</Label>
                      <Select defaultValue="paris">
                        <SelectTrigger className="w-full sm:w-[280px]">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paris">
                            Europe/Paris (UTC+1)
                          </SelectItem>
                          <SelectItem value="london">
                            Europe/London (UTC+0)
                          </SelectItem>
                          <SelectItem value="newyork">
                            America/New_York (UTC-5)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currency">Devise</Label>
                      <Select defaultValue="eur">
                        <SelectTrigger className="w-full sm:w-[200px]">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-end">
                      <Button className="btn-primary gap-2">
                        <Save className="h-4 w-4" />
                        Sauvegarder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </MainLayout>
  );
};

export default Parametres;
