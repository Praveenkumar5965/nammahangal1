
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { shoppingCategories, featuredProducts } from "@/data/homeData";
import MobileLayout from "@/components/layout/MobileLayout";
import { ShoppingBag } from "lucide-react";

const getAllProductsByCategory = (categoryId: string) => {
  if (categoryId === "all") return featuredProducts;
  // Filter products by 'categoryId' when available (here just mock filtering)
  // Assume each product has categoryId === the category id (can be adjusted)
  return featuredProducts.filter((p) => p.categoryId === categoryId);
};

const Shopping: React.FC = () => {
  // 'all' = show all products by default
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  // Add "All" as default
  const categoriesWithAll = [
    { id: "all", name: "All", icon: "🛒" },
    ...shoppingCategories,
  ];
  const productsToShow = getAllProductsByCategory(selectedCategory);

  return (
    <SidebarProvider>
      <MobileLayout>
        <div className="flex w-full h-full min-h-screen">
          <Sidebar className="hidden md:block">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {categoriesWithAll.map((cat) => (
                      <SidebarMenuItem key={cat.id}>
                        <SidebarMenuButton
                          isActive={selectedCategory === cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                        >
                          <span className="text-xl">{cat.icon}</span>
                          <span className="ml-2">{cat.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          {/* Sidebar trigger for mobile */}
          <div className="md:hidden absolute left-4 top-4 z-10">
            <SidebarTrigger />
          </div>
          {/* Main content */}
          <main className="flex-1 p-4">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="text-primary" size={26} />
              <h1 className="font-bold text-2xl">Shopping</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {productsToShow.length ? (
                productsToShow.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow border border-border cursor-pointer hover:shadow-lg transition"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="h-32 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm truncate">{product.name}</h3>
                      <div className="text-primary font-bold mt-1">
                        ₹{product.price}/{product.unit}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-muted-foreground">
                  No products found.
                </div>
              )}
            </div>
          </main>
        </div>
      </MobileLayout>
    </SidebarProvider>
  );
};

export default Shopping;
