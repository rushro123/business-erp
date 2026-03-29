// import React from "react";
// import { FileSpreadsheet } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Download } from "lucide-react";
// const type = [{name:"sales report",description:"Detailed report of sales",reports:["excel","pdf","csv"]},
//      {name:"purchase report",description:"Detailed report of purchase",reports:["excel","pdf","csv"]},
//     {name:"customer report",description:"Detailed report of customer",reports:["excel","pdf","csv"]},
// {name:"GST report",description:"Detailed report of GST",reports:["excel","pdf","csv"]},
// {name:"supplier report",description:"Detailed report of supplier",reports:["excel","pdf","csv"]},
// {name:"sales report",description:"Detailed report of sales",reports:["excel","pdf","csv"]},
// {name:"purchase report",description:"Detailed report of purchase",reports:["excel","pdf","csv"]}];
// const page = () => {
//   return (
//     <div className="flex flex-col gap-6">
//       <h1 className="text-2xl font-bold">GST Dashboard</h1>
//       <p className="text-muted-foreground">
//         Overview of GST-related information and mismatches
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1">
//         {type.map((item,index) => (
//           <Card key={index}>
//             <CardHeader>
//               <CardTitle className={"flex gap-2 items-center text-[1.5rem]"}><FileSpreadsheet /> {item.name}</CardTitle>
//               <CardDescription>{item.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-wrap gap-2">
//                 {item.reports.map((report) => (
//                   <button
//                     key={report}
//                     className="flex items-center gap-2 bg-destructive-foreground text-secondary-foreground hover:bg-secondary-foreground/180 px-4
//                      py-2 rounded-[5px] shadow-sm transition-all duration-200 border border-transparent
//                       hover:border-primary active:scale-[.9]"
//                   >
//                     <Download className="w-4 h-4" />
//                     Export {report.charAt(0).toUpperCase() + report.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, TrendingUp, Filter } from "lucide-react";

const reportTypes = [
  {
    name: "Sales Report",
    description: "Detailed breakdown of all sales transactions",
    icon: TrendingUp,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Purchase Report",
    description: "Comprehensive purchase order and invoice data",
    icon: FileSpreadsheet,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Customer Report",
    description: "Customer-wise sales and payment details",
    icon: FileSpreadsheet,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "GST Report",
    description: "GST collection and payment summary",
    icon: TrendingUp,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Supplier Report",
    description: "Supplier-wise purchase analysis",
    icon: FileSpreadsheet,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Inventory Report",
    description: "Stock levels and inventory movements",
    icon: FileSpreadsheet,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Tax Report",
    description: "Complete tax liability summary",
    icon: TrendingUp,
    reports: ["excel", "pdf", "csv"]
  },
  {
    name: "Reconciliation Report",
    description: "Account reconciliation and matching",
    icon: FileSpreadsheet,
    reports: ["excel", "pdf", "csv"]
  }
];

const ExportButton = ({ format }) => (
  <Button
    variant="outline"
    size="sm"
    className="flex items-center gap-2 bg-destructive-foreground text-secondary-foreground hover:bg-secondary-foreground/180 px-4                    py-2 rounded-[5px] shadow-sm transition-all duration-200 border border-transparent
                    hover:border-primary active:scale-[.9]"
  >
    <Download className="w-4 h-4" />
    {format.charAt(0).toUpperCase() + format.slice(1)}
  </Button>
);

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-border px-6 py-8 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Reports & Exports
          </h1>
          <p className="text-muted-foreground mb-6">
            Export your business data in multiple formats
          </p>

          {/* Filter Bar */}
          
        </div>

        {/* Reports Grid */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => {
              const IconComponent = report.icon;
              return (
                <Card
                  key={index}
                  className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2.5 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{report.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {report.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {report.reports.map((format) => (
                        <ExportButton key={format} format={format} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              📊 <span className="font-medium">Tip:</span> All exports include current filters and date ranges. Downloaded files are encrypted and can only be accessed by authorized users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}