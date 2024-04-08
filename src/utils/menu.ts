import {
  LayoutDashboard,
  UsersRound,
  ShoppingCart,
  Settings,
  LucideIcon,
  Settings2,
  LayoutTemplate,
  AlignJustify,
  PackagePlus,
  ListCollapse,
  Container,
} from "lucide-react";

export type MENUTYPE = {
  title: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  label?: string;
};
export const menu1: SideNavItem[] = [
  {
    id: 1,
    title: "Select Template",
    href: "/selectwebsitetemplate",
    icon: LayoutTemplate,
    variant: "default",
  },
];
export const menu2: MENUTYPE[] = [
  {
    title: "Dashboard",
    href: "/dashboard/home",
    icon: LayoutDashboard,
    variant: "default",
    label: "Dashboard",
  },
  {
    title: "Manage Website",
    href: "/dashboard/manage",
    icon: Settings2,
    variant: "default",
    label: "Manage Website",
  },
  {
    title: "Manage Menu",
    href: "#",
    icon: AlignJustify,
    variant: "default",
    label: "Manage Menu",
  },
  {
    title: "Sales Report",
    href: "/dashboard/salesreport",
    icon: Settings2,
    variant: "default",
    label: "Sales Report",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    variant: "default",
    label: "Manage Website",
  },
  {
    title: "Select Template",
    href: "/selectwebsitetemplate",
    icon: LayoutTemplate,
    variant: "default",
  },
];

export type SideNavItem = {
  id: number;
  title: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  label?: string;
  subMenu?: boolean;
  subMenuItems?: SideNavItem[];
};
export const sideNavItems: SideNavItem[] = [
  {
    id: 0,
    title: "Dashboard",
    href: "/dashboard/home",
    icon: LayoutDashboard,
    variant: "default",
    label: "Dashboard",
  },
  {
    id: 1,
    title: "Manage Website",
    href: "/dashboard/manage",
    icon: Settings2,
    variant: "default",
    label: "Manage Website",
  },
  {
    id: 2,
    title: "Manage Menu",
    href: "#",
    icon: AlignJustify,
    variant: "default",
    label: "Manage Menu",
    subMenu: true,
    subMenuItems: [
      {
        id: 2.1,
        title: "Categories",
        href: "/dashboard/products/category",
        variant: "default",
        label: "Categories",
        icon: PackagePlus,
      },
      {
        id: 2.2,
        title: "Items",
        href: "/dashboard/products/items",
        variant: "default",
        label: "Items",
        icon: ListCollapse,
      },
      {
        id: 2.3,
        title: "Stocks",
        href: "/dashboard/products/stocks",
        variant: "default",
        label: "Stocks",
        icon: Container,
      },
    ],
  },
  {
    id: 3,
    title: "Sales Report",
    href: "/dashboard/salesreport",
    icon: Settings2,
    variant: "default",
    label: "Sales Report",
  },
  {
    id: 4,
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    variant: "default",
    label: "Manage Website",
  },
  {
    id: 5,
    title: "Select Template",
    href: "/selectwebsitetemplate",
    icon: LayoutTemplate,
    variant: "default",
  },
];
