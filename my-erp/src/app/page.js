"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  IndianRupee,
  Users,
  Package,
  TrendingUp,
  TriangleAlert,
  Calendar,
  ShoppingCart,
} from "lucide-react";
import { useDashboardStore } from "@/store/useDashboardStore";

export default function Home({ children }) {
  const { stats } = useDashboardStore();

  const dashboardCards = [
    {
      title: "Total Sales",
      value: `₹${stats.totalSales.toLocaleString("en-IN")}`,
      description: "Current month",
      icon: IndianRupee,
      trend: `${stats.salesTrend}%`,
      trendType: stats.salesTrend >= 0 ? "increase" : "decrease",
    },
    {
      title: "Total Customers",
      value: stats.totalCustomers.toLocaleString("en-IN"),
      description: "Active customers",
      icon: Users,
      trend: `${stats.customersTrend}%`,
      trendType: stats.customersTrend >= 0 ? "increase" : "decrease",
    },
    {
      title: "Inventory Items",
      value: stats.inventoryItems.toLocaleString("en-IN"),
      description: "In stock",
      icon: Package,
      trend: `${stats.inventoryTrend}%`,
      trendType: stats.inventoryTrend >= 0 ? "increase" : "decrease",
    },
    {
      title: "Revenue Growth",
      value: `${stats.revenueGrowth}%`,
      description: "Compared to last month",
      icon: TrendingUp,
      trend: `${stats.revenueTrend}%`,
      trendType: stats.revenueTrend >= 0 ? "increase" : "decrease",
    },
  ];
  const dashboardStats = [
    { title: "Low Stocks", value: `no stock items`, icon: TriangleAlert },
    { title: "Expiring soon", value: "no items expiring soon", icon: Calendar },
    { title: "Account recivable", value: "total outsanding", price: `₹${0}` },
    { title: "Account payable", value: `total outsanding`, price: `₹${0}` },
  ];
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome to My ERP
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          This is the Dashboard page. Use the sidebar to navigate through
          different sections of the ERP system.
        </p>
      </div>
      <div className="flex flex-col gap-10 !p-3 justify-center items-center w-full ">
        <div className="grid gap-6 p-4 w-full [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
          {dashboardCards.map((card, index) => (
            <Card
              key={index}
              className="bg-card !p-4 shadow border border-border transition-all"
            >
              <CardContent className="p-5 flex gap-1 justify-between ">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{card.title}</p>

                  <h3 className="text-2xl font-semibold mt-2">{card.value}</h3>

                  <p className="text-xs text-muted-foreground mt-1">
                    {card.description}
                  </p>
                </div>

                <div className="p-2 rounded-md bg-primary/10 text-primary self-start">
                  <card.icon className="h-4 w-4 " />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-8 p-4 w-full [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))]">
          {dashboardStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card  shadow !p-4 border border-border  transition-all"
            >
              <CardContent className="p-5 flex gap-1 justify-between">
                <div className="flex flex-col gap-4">
                  {stat.icon && (
                    <div className="p-2 rounded-md bg-primary/10 text-primary self-start">
                      <stat.icon className="h-4 w-4" />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-xl font-semibold mt-2">{stat.value}</h3>
                  {stat.price && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.price}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
