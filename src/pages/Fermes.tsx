import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  MapPin,
  Phone,
  Mail,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const farms = [
  {
    id: 1,
    name: "Ferme du Soleil",
    location: "Provence-Alpes-Côte d'Azur",
    address: "123 Route des Vignes, 13100 Aix-en-Provence",
    phone: "+33 4 42 00 00 00",
    email: "contact@fermedusoleil.fr",
    owner: "Pierre Martin",
    products: 24,
    employees: 8,
    revenue: "€245,000",
    status: "Active",
    image: "/placeholder.svg",
    specialty: "Céréales Bio",
  },
  {
    id: 2,
    name: "Verger des Collines",
    location: "Nouvelle-Aquitaine",
    address: "45 Chemin du Verger, 24000 Périgueux",
    phone: "+33 5 53 00 00 00",
    email: "info@vergercollines.fr",
    owner: "Marie Dubois",
    products: 18,
    employees: 5,
    revenue: "€180,000",
    status: "Active",
    image: "/placeholder.svg",
    specialty: "Fruits",
  },
  {
    id: 3,
    name: "Les Jardins Verts",
    location: "Bretagne",
    address: "78 Rue des Maraîchers, 35000 Rennes",
    phone: "+33 2 99 00 00 00",
    email: "contact@jardinsverts.fr",
    owner: "Jean-Luc Moreau",
    products: 32,
    employees: 12,
    revenue: "€320,000",
    status: "Active",
    image: "/placeholder.svg",
    specialty: "Légumes Bio",
  },
  {
    id: 4,
    name: "Ferme Laitière du Val",
    location: "Normandie",
    address: "12 Route du Lait, 14000 Caen",
    phone: "+33 2 31 00 00 00",
    email: "ferme@laitiereval.fr",
    owner: "Sophie Bernard",
    products: 8,
    employees: 6,
    revenue: "€195,000",
    status: "Active",
    image: "/placeholder.svg",
    specialty: "Produits Laitiers",
  },
  {
    id: 5,
    name: "Exploitation Martin",
    location: "Grand Est",
    address: "56 Allée des Champs, 51000 Reims",
    phone: "+33 3 26 00 00 00",
    email: "exploitation.martin@email.fr",
    owner: "François Martin",
    products: 15,
    employees: 4,
    revenue: "€145,000",
    status: "En pause",
    image: "/placeholder.svg",
    specialty: "Céréales",
  },
  {
    id: 6,
    name: "Domaine des Oliviers",
    location: "Occitanie",
    address: "89 Chemin des Oliviers, 34000 Montpellier",
    phone: "+33 4 67 00 00 00",
    email: "contact@domaineoliviers.fr",
    owner: "Laurent Roche",
    products: 12,
    employees: 7,
    revenue: "€275,000",
    status: "Active",
    image: "/placeholder.svg",
    specialty: "Huile d'olive",
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
  visible: { opacity: 1, y: 0 },
};

const Fermes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFarms = farms.filter(
    (farm) =>
      farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout title="Fermes" subtitle="Gérez votre réseau de fermes partenaires">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher une ferme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="btn-primary gap-2">
            <Plus className="h-4 w-4" />
            Ajouter une ferme
          </Button>
        </motion.div>

        {/* Farms Grid */}
        <motion.div
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredFarms.map((farm, index) => (
            <motion.div
              key={farm.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="card-elevated group h-full overflow-hidden">
                <CardHeader className="relative pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarImage src={farm.image} alt={farm.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {farm.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">
                          {farm.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {farm.location}
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Voir détails
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Badge
                    variant={farm.status === "Active" ? "default" : "secondary"}
                    className="absolute right-4 top-4"
                  >
                    {farm.status}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Badge variant="outline" className="bg-primary/5">
                    {farm.specialty}
                  </Badge>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-muted/50 p-3 text-center">
                      <Package className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                      <p className="font-display font-bold text-foreground">
                        {farm.products}
                      </p>
                      <p className="text-xs text-muted-foreground">Produits</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 text-center">
                      <Users className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                      <p className="font-display font-bold text-foreground">
                        {farm.employees}
                      </p>
                      <p className="text-xs text-muted-foreground">Employés</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 text-center">
                      <TrendingUp className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                      <p className="font-display font-bold text-foreground text-sm">
                        {farm.revenue}
                      </p>
                      <p className="text-xs text-muted-foreground">CA</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{farm.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{farm.phone}</span>
                    </div>
                  </div>

                  {/* Owner */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-secondary">
                          {farm.owner.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {farm.owner}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Contacter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Fermes;
