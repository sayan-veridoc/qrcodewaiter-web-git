import {
  LayoutDashboard,
  UsersRound,
  ShoppingCart,
  Settings,
  LucideIcon,
  Settings2,
  LayoutTemplate,
  AlignJustify,
} from "lucide-react";

export type MENUTYPE = {
  title: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  label?: string;
};
export const menu1: MENUTYPE[] = [
  {
    title: "Select Template",
    href: "/selectwebsitetemplate",
    icon: LayoutTemplate,
    variant: "default",
    label: "Templates",
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
        href: "/dashboard/category",
        variant: "default",
        label: "Categories",
        icon: Settings2,
      },
      {
        id: 2.2,
        title: "Items",
        href: "/dashboard/items",
        variant: "default",
        label: "Items",
        icon: Settings2,
      },
      {
        id: 2.3,
        title: "Stoks",
        href: "/dashboard/stoks",
        variant: "default",
        label: "Stocks",
        icon: Settings2,
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
