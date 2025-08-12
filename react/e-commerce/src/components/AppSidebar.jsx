import { Circle, Home, ShoppingCartIcon } from "lucide-react";
import { NavLink } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useProductContext } from "../context/ProductContext";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: ShoppingCartIcon,
  },
];

export function AppSidebar() {
  const { products } = useProductContext();

  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarGroupLabel>Categories</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/"
                    className="capitalize flex items-center gap-4"
                  >
                    <span>
                      <Circle size={10} />
                    </span>
                    <span>All</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {categories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={{
                        pathname: "/",
                        search: `?category=${category}`,
                      }}
                      className="capitalize flex items-center gap-4"
                    >
                      <span>
                        <Circle size={10} />
                      </span>
                      <span>{category}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
