import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Wheat,
  Apple,
  Carrot,
  Milk,
  Package,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Progress } from "@/components/ui/progress";

const categories = [
  { value: "all", label: "Toutes catégories" },
  { value: "cereales", label: "Céréales" },
  { value: "fruits", label: "Fruits" },
  { value: "legumes", label: "Légumes" },
  { value: "laitiers", label: "Produits laitiers" },
  { value: "viandes", label: "Viandes" },
];

const products = [
  {
    id: 1,
    name: "Blé Bio Premium",
    category: "Céréales",
    stock: 2500,
    maxStock: 5000,
    price: 320,
    unit: "tonne",
    status: "En stock",
    icon: Wheat,
    farm: "Ferme du Soleil",
  },
  {
    id: 2,
    name: "Pommes Golden",
    category: "Fruits",
    stock: 850,
    maxStock: 1000,
    price: 2.5,
    unit: "kg",
    status: "En stock",
    icon: Apple,
    farm: "Verger des Collines",
  },
  {
    id: 3,
    name: "Carottes Bio",
    category: "Légumes",
    stock: 320,
    maxStock: 800,
    price: 1.8,
    unit: "kg",
    status: "Stock faible",
    icon: Carrot,
    farm: "Les Jardins Verts",
  },
  {
    id: 4,
    name: "Lait Frais Entier",
    category: "Produits laitiers",
    stock: 1200,
    maxStock: 2000,
    price: 0.95,
    unit: "litre",
    status: "En stock",
    icon: Milk,
    farm: "Ferme Laitière du Val",
  },
  {
    id: 5,
    name: "Maïs Grain",
    category: "Céréales",
    stock: 50,
    maxStock: 3000,
    price: 280,
    unit: "tonne",
    status: "Rupture",
    icon: Package,
    farm: "Exploitation Martin",
  },
  {
    id: 6,
    name: "Poires Williams",
    category: "Fruits",
    stock: 420,
    maxStock: 600,
    price: 3.2,
    unit: "kg",
    status: "En stock",
    icon: Apple,
    farm: "Verger des Collines",
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

const Produits = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" ||
      product.category.toLowerCase().includes(categoryFilter);
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En stock":
        return "bg-primary/15 text-primary border-primary/20";
      case "Stock faible":
        return "bg-accent/20 text-accent-foreground border-accent/30";
      case "Rupture":
        return "bg-destructive/15 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <MainLayout title="Produits" subtitle="Gérez votre catalogue de produits">
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
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className="btn-primary gap-2">
            <Plus className="h-4 w-4" />
            Nouveau produit
          </Button>
        </motion.div>

        {/* Products Table */}
        <motion.div variants={itemVariants}>
          <Card className="card-elevated overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-semibold">Produit</TableHead>
                    <TableHead className="font-semibold">Catégorie</TableHead>
                    <TableHead className="font-semibold">Ferme</TableHead>
                    <TableHead className="font-semibold">Stock</TableHead>
                    <TableHead className="font-semibold">Prix</TableHead>
                    <TableHead className="font-semibold">Statut</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group transition-colors hover:bg-muted/30"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <product.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {product.farm}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3 min-w-[150px]">
                          <Progress
                            value={(product.stock / product.maxStock) * 100}
                            className="h-2 flex-1"
                          />
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {product.stock}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        €{product.price}/{product.unit}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(product.status)}
                        >
                          {product.status}
                        </Badge>
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
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Total produits", value: products.length, color: "text-primary" },
            {
              label: "Stock faible",
              value: products.filter((p) => p.status === "Stock faible").length,
              color: "text-accent-foreground",
            },
            {
              label: "En rupture",
              value: products.filter((p) => p.status === "Rupture").length,
              color: "text-destructive",
            },
          ].map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="card-elevated">
                <CardContent className="flex items-center justify-between p-4">
                  <span className="text-muted-foreground">{stat.label}</span>
                  <span className={`font-display text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Produits;
