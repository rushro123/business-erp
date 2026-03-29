'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, Zap, Database, BarChart3 } from "lucide-react";

const automationSettings = [
  {
    title: "Auto GST Calculation",
    description: "Automatically calculate GST for all transactions",
    icon: BarChart3,
    enabled: true,
  },
  {
    title: "Auto Journal Entries",
    description: "Automatically create journal entries for transactions",
    icon: Database,
    enabled: true,
  },
  {
    title: "Auto Stock Updates",
    description: "Automatically update stock levels for transactions",
    icon: Zap,
    enabled: false,
  }
];

const notificationSettings = [
  {
    title: "Email Notifications",
    description: "Receive email alerts for important updates",
    enabled: true,
  },
  {
    title: "Transaction Alerts",
    description: "Get notified when large transactions occur",
    enabled: true,
  },
  {
    title: "System Maintenance",
    description: "Be notified about scheduled maintenance",
    enabled: false,
  }
];

const SettingElement = ({ title, description, icon: Icon, enabled = false }) => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-start gap-3">
          {Icon && <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />}
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        <Switch defaultChecked={enabled} />
      </div>
      <Separator />
    </>
  );
};

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-border px-6 py-8 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account preferences and automations
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 md:p-8">

          {/* Automation Features */}
          <Card className="border border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">
                  Automation Features
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Configure which tasks should run automatically
              </CardDescription>
            </CardHeader>

            <CardContent className="divide-y divide-border">
              {automationSettings.map((item, index) => (
                <SettingElement
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  enabled={item.enabled}
                />
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">
                  Notification Settings
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Control how and when you receive notifications
              </CardDescription>
            </CardHeader>

            <CardContent className="divide-y divide-border">
              {notificationSettings.map((item, index) => (
                <SettingElement
                  key={index}
                  title={item.title}
                  description={item.description}
                  enabled={item.enabled}
                />
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}