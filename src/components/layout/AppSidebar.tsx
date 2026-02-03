import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  MapPin,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf,
  TrendingUp,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/hooks/useSidebar";

const mainNavItems = [
  {
    title: "Tableau de bord",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Produits",
    icon: Package,
    href: "/produits",
  },
  {
    title: "Fermes",
    icon: MapPin,
    href: "/fermes",
  },
  {
    title: "Utilisateurs",
    icon: Users,
    href: "/utilisateurs",
  },
  {
    title: "Statistiques",
    icon: TrendingUp,
    href: "/statistiques",
  },
];

const secondaryNavItems = [
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Paramètres",
    icon: Settings,
    href: "/parametres",
  },
];

interface AppSidebarProps {
  className?: string;
}

export function AppSidebar({ className }: AppSidebarProps) {
  const location = useLocation();
  const { isCollapsed, isMobileOpen, toggleCollapse, toggleMobile, closeMobile } = useSidebar();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const sidebarContent = (
    <>
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary">
          <Leaf className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="overflow-hidden"
            >
              <h1 className="font-display text-xl font-bold text-sidebar-foreground">
                AgriHub
              </h1>
              <p className="text-xs text-sidebar-foreground/60">
                Gestion agricole
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <p className={cn(
          "mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50",
          isCollapsed && "sr-only"
        )}>
          Menu principal
        </p>
        {mainNavItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={closeMobile}
            className={cn(
              "nav-link group relative",
              isActive(item.href) && "active"
            )}
          >
            <item.icon className={cn(
              "h-5 w-5 shrink-0 transition-colors",
              isActive(item.href) 
                ? "text-sidebar-primary-foreground" 
                : "text-sidebar-foreground/70 group-hover:text-sidebar-foreground"
            )} />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="truncate"
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
            {isActive(item.href) && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute right-2 h-2 w-2 rounded-full bg-sidebar-primary-foreground"
              />
            )}
          </NavLink>
        ))}

        <Separator className="my-4 bg-sidebar-border" />

        <p className={cn(
          "mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50",
          isCollapsed && "sr-only"
        )}>
          Système
        </p>
        {secondaryNavItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={closeMobile}
            className={cn(
              "nav-link group",
              isActive(item.href) && "active"
            )}
          >
            <item.icon className={cn(
              "h-5 w-5 shrink-0 transition-colors",
              isActive(item.href) 
                ? "text-sidebar-primary-foreground" 
                : "text-sidebar-foreground/70 group-hover:text-sidebar-foreground"
            )} />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="truncate"
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-sidebar-border p-4">
        <div className={cn(
          "flex items-center gap-3",
          isCollapsed && "justify-center"
        )}>
          <Avatar className="h-9 w-9 ring-2 ring-sidebar-primary/30">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex-1 overflow-hidden"
              >
                <p className="truncate text-sm font-medium text-sidebar-foreground">
                  Jean Dupont
                </p>
                <p className="truncate text-xs text-sidebar-foreground/60">
                  Administrateur
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Collapse Toggle (Desktop) */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border bg-card shadow-md transition-colors hover:bg-muted lg:flex"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-sidebar lg:hidden",
              className
            )}
          >
            <button
              onClick={closeMobile}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "relative hidden h-screen flex-col border-r border-sidebar-border bg-sidebar lg:flex",
          className
        )}
      >
        {sidebarContent}
      </motion.aside>
    </>
  );
}

// Mobile Menu Button Component
export function MobileMenuButton() {
  const { toggleMobile } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMobile}
      className="lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </Button>
  );
}
