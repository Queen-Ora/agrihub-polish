import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Shield,
  ShieldCheck,
  ShieldAlert,
  UserCheck,
  UserX,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const roles = [
  { value: "all", label: "Tous les rôles" },
  { value: "admin", label: "Administrateur" },
  { value: "manager", label: "Manager" },
  { value: "farmer", label: "Agriculteur" },
  { value: "viewer", label: "Observateur" },
];

const users = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@agrihub.com",
    role: "Administrateur",
    farm: "Système",
    status: "Actif",
    lastLogin: "Il y a 2 heures",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Marie Bernard",
    email: "marie.bernard@fermedusoleil.fr",
    role: "Manager",
    farm: "Ferme du Soleil",
    status: "Actif",
    lastLogin: "Il y a 1 jour",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Pierre Martin",
    email: "pierre.martin@vergercollines.fr",
    role: "Agriculteur",
    farm: "Verger des Collines",
    status: "Actif",
    lastLogin: "Il y a 3 heures",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Sophie Laurent",
    email: "sophie.laurent@jardinsverts.fr",
    role: "Manager",
    farm: "Les Jardins Verts",
    status: "Inactif",
    lastLogin: "Il y a 2 semaines",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "François Moreau",
    email: "francois.moreau@laitiereval.fr",
    role: "Agriculteur",
    farm: "Ferme Laitière du Val",
    status: "Actif",
    lastLogin: "Il y a 5 heures",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Claire Petit",
    email: "claire.petit@agrihub.com",
    role: "Observateur",
    farm: "Système",
    status: "En attente",
    lastLogin: "Jamais",
    avatar: "/placeholder.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Utilisateurs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole =
      roleFilter === "all" ||
      user.role.toLowerCase().includes(roleFilter.toLowerCase());
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Administrateur":
        return ShieldCheck;
      case "Manager":
        return Shield;
      case "Agriculteur":
        return UserCheck;
      default:
        return ShieldAlert;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Administrateur":
        return "bg-primary/15 text-primary border-primary/20";
      case "Manager":
        return "bg-agri-harvest/20 text-agri-earth border-agri-harvest/30";
      case "Agriculteur":
        return "bg-agri-sky-light text-agri-sky border-agri-sky/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-primary/15 text-primary";
      case "Inactif":
        return "bg-muted text-muted-foreground";
      case "En attente":
        return "bg-accent/20 text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <MainLayout title="Utilisateurs" subtitle="Gérez les utilisateurs et leurs accès">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-4"
        >
          {[
            {
              label: "Total utilisateurs",
              value: users.length,
              icon: UserCheck,
              color: "text-primary",
            },
            {
              label: "Actifs",
              value: users.filter((u) => u.status === "Actif").length,
              icon: UserCheck,
              color: "text-primary",
            },
            {
              label: "Inactifs",
              value: users.filter((u) => u.status === "Inactif").length,
              icon: UserX,
              color: "text-muted-foreground",
            },
            {
              label: "En attente",
              value: users.filter((u) => u.status === "En attente").length,
              icon: ShieldAlert,
              color: "text-accent-foreground",
            },
          ].map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="card-elevated">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-muted p-2">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className={`font-display text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Header Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher un utilisateur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <Shield className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Rôle" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="btn-primary gap-2">
            <Plus className="h-4 w-4" />
            Inviter un utilisateur
          </Button>
        </motion.div>

        {/* Users Table */}
        <motion.div variants={itemVariants}>
          <Card className="card-elevated overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-semibold">Utilisateur</TableHead>
                    <TableHead className="font-semibold">Rôle</TableHead>
                    <TableHead className="font-semibold">Ferme</TableHead>
                    <TableHead className="font-semibold">Statut</TableHead>
                    <TableHead className="font-semibold">
                      Dernière connexion
                    </TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user, index) => {
                    const RoleIcon = getRoleIcon(user.role);
                    return (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group transition-colors hover:bg-muted/30"
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 ring-2 ring-border">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`gap-1 ${getRoleColor(user.role)}`}
                          >
                            <RoleIcon className="h-3 w-3" />
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {user.farm}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {user.lastLogin}
                        </TableCell>
                        <TableCell>
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
                                <Mail className="mr-2 h-4 w-4" />
                                Envoyer un email
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
                        </TableCell>
                      </motion.tr>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Utilisateurs;
