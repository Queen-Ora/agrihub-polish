import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Package,
  MapPin,
  Users,
  DollarSign,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 120 },
  { month: "Fév", revenue: 52000, orders: 145 },
  { month: "Mar", revenue: 48000, orders: 132 },
  { month: "Avr", revenue: 61000, orders: 168 },
  { month: "Mai", revenue: 55000, orders: 155 },
  { month: "Juin", revenue: 67000, orders: 189 },
  { month: "Juil", revenue: 72000, orders: 201 },
  { month: "Août", revenue: 69000, orders: 195 },
  { month: "Sep", revenue: 78000, orders: 220 },
  { month: "Oct", revenue: 85000, orders: 245 },
  { month: "Nov", revenue: 82000, orders: 238 },
  { month: "Déc", revenue: 91000, orders: 267 },
];

const categoryData = [
  { name: "Céréales", value: 35, color: "hsl(145, 63%, 32%)" },
  { name: "Fruits", value: 25, color: "hsl(42, 85%, 55%)" },
  { name: "Légumes", value: 22, color: "hsl(200, 70%, 50%)" },
  { name: "Laitiers", value: 12, color: "hsl(35, 45%, 35%)" },
  { name: "Autres", value: 6, color: "hsl(120, 15%, 70%)" },
];

const farmPerformance = [
  { farm: "Ferme du Soleil", sales: 245000 },
  { farm: "Les Jardins Verts", sales: 198000 },
  { farm: "Verger des Collines", sales: 167000 },
  { farm: "Laitière du Val", sales: 145000 },
  { farm: "Domaine Oliviers", sales: 132000 },
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

const Statistiques = () => {
  return (
    <MainLayout
      title="Statistiques"
      subtitle="Analysez les performances de votre réseau"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Period Selector */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">Période :</span>
            <Select defaultValue="year">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="quarter">Ce trimestre</SelectItem>
                <SelectItem value="year">Cette année</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" className="gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Exporter
          </Button>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              title: "Chiffre d'affaires",
              value: "€847,291",
              change: "+12.5%",
              trend: "up",
              icon: DollarSign,
            },
            {
              title: "Commandes",
              value: "2,175",
              change: "+8.2%",
              trend: "up",
              icon: Package,
            },
            {
              title: "Fermes actives",
              value: "156",
              change: "+3.1%",
              trend: "up",
              icon: MapPin,
            },
            {
              title: "Nouveaux clients",
              value: "342",
              change: "-2.4%",
              trend: "down",
              icon: Users,
            },
          ].map((kpi, index) => (
            <motion.div key={kpi.title} variants={itemVariants}>
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <kpi.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge
                      variant={kpi.trend === "up" ? "default" : "destructive"}
                      className="flex items-center gap-1"
                    >
                      {kpi.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {kpi.change}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">{kpi.title}</p>
                    <p className="font-display text-2xl font-bold">{kpi.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Row 1 */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Revenue Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-display">
                  Évolution du chiffre d'affaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient
                          id="colorRevenue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="hsl(145, 63%, 32%)"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="hsl(145, 63%, 32%)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(120, 15%, 85%)"
                      />
                      <XAxis
                        dataKey="month"
                        stroke="hsl(150, 15%, 40%)"
                        fontSize={12}
                      />
                      <YAxis
                        stroke="hsl(150, 15%, 40%)"
                        fontSize={12}
                        tickFormatter={(value) => `€${value / 1000}k`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0, 0%, 100%)",
                          border: "1px solid hsl(120, 15%, 85%)",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [
                          `€${value.toLocaleString()}`,
                          "CA",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(145, 63%, 32%)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Distribution */}
          <motion.div variants={itemVariants}>
            <Card className="card-elevated h-full">
              <CardHeader>
                <CardTitle className="font-display">
                  Répartition par catégorie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Part"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {categoryData.map((cat) => (
                    <div
                      key={cat.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-muted-foreground">{cat.name}</span>
                      </div>
                      <span className="font-medium">{cat.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Orders Chart */}
          <motion.div variants={itemVariants}>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-display">
                  Nombre de commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(120, 15%, 85%)"
                      />
                      <XAxis
                        dataKey="month"
                        stroke="hsl(150, 15%, 40%)"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(150, 15%, 40%)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0, 0%, 100%)",
                          border: "1px solid hsl(120, 15%, 85%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="orders"
                        stroke="hsl(42, 85%, 55%)"
                        strokeWidth={3}
                        dot={{ fill: "hsl(42, 85%, 55%)", strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, fill: "hsl(42, 85%, 45%)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Farm Performance */}
          <motion.div variants={itemVariants}>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-display">
                  Top 5 Fermes par ventes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={farmPerformance} layout="vertical">
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(120, 15%, 85%)"
                        horizontal={false}
                      />
                      <XAxis
                        type="number"
                        stroke="hsl(150, 15%, 40%)"
                        fontSize={12}
                        tickFormatter={(value) => `€${value / 1000}k`}
                      />
                      <YAxis
                        type="category"
                        dataKey="farm"
                        stroke="hsl(150, 15%, 40%)"
                        fontSize={11}
                        width={120}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0, 0%, 100%)",
                          border: "1px solid hsl(120, 15%, 85%)",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [
                          `€${value.toLocaleString()}`,
                          "Ventes",
                        ]}
                      />
                      <Bar
                        dataKey="sales"
                        fill="hsl(145, 63%, 32%)"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Statistiques;
