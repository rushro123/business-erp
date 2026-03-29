'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, AlertCircle, TrendingUp, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const invoices = [
  { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
  { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV005', paymentStatus: 'Paid', totalAmount: '$550.00', paymentMethod: 'PayPal' },
  { invoice: 'INV006', paymentStatus: 'Pending', totalAmount: '$200.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV007', paymentStatus: 'Unpaid', totalAmount: '$300.00', paymentMethod: 'Credit Card' },
];

const tabData = ['Ledger', 'Journal Entries', 'Total Balance'];

const getStatusBadgeColor = (status) => {
  switch (status) {
    case 'Paid':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100';
    case 'Pending':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100';
    case 'Unpaid':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  }
};

const SummaryCards = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
    <Card className="border border-border hover:border-primary/50 transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Output GST (Sales)</CardTitle>
        <TrendingUp className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">$2,500.00</div>
        <p className="text-xs text-muted-foreground mt-1">Total GST on sales</p>
      </CardContent>
    </Card>

    <Card className="border border-border hover:border-primary/50 transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Input GST (Purchases)</CardTitle>
        <DollarSign className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">$1,250.00</div>
        <p className="text-xs text-muted-foreground mt-1">Total GST on purchases</p>
      </CardContent>
    </Card>

    <Card className="border border-border hover:border-primary/50 transition-all bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Net GST Payable</CardTitle>
        <AlertCircle className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">$1,250.00</div>
        <p className="text-xs text-muted-foreground mt-1">To be paid to authorities</p>
      </CardContent>
    </Card>
  </div>
);

const MismatchCards = () => (
  <Card className="border border-border">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <CardTitle>GST Mismatch Detection</CardTitle>
        </div>
        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 border-0">All Clear</Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="text-sm text-muted-foreground">
        No discrepancies detected in your GST records
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Invoice GST vs Calculated GST</span>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 border-0">Matched</Badge>
        </div>

        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Sales Register vs GSTR-1</span>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 border-0">Matched</Badge>
        </div>

        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Purchase Register vs GSTR-2</span>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 border-0">Matched</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TableContent = ({ tabName }) => (
  <div className="border border-border rounded-lg overflow-hidden">
    <Table>
      <TableCaption className="text-muted-foreground py-4">
        {tabName === 'Ledger'
          ? 'Account Ledger'
          : tabName === 'Journal Entries'
          ? 'Journal Entries'
          : 'Total Balance'}
      </TableCaption>

      <TableHeader className="bg-muted/50 border-b border-border">
        <TableRow className="border-0">
          <TableHead className="text-foreground font-semibold">Invoice</TableHead>
          <TableHead className="text-foreground font-semibold">Status</TableHead>
          <TableHead className="text-foreground font-semibold">Method</TableHead>
          <TableHead className="text-right text-foreground font-semibold">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-b border-border hover:bg-muted/50 transition-colors">
            <TableCell className="font-medium text-foreground">{invoice.invoice}</TableCell>
            <TableCell>
              <Badge className={getStatusBadgeColor(invoice.paymentStatus)}>
                {invoice.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right font-medium text-foreground">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter className="bg-muted/50 border-t-2 border-border">
        <TableRow>
          <TableCell colSpan={3} className="font-semibold text-foreground">Total</TableCell>
          <TableCell className="text-right font-bold text-foreground">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
);

export default function GSTPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-foreground">GST Dashboard</h1>
              <p className="text-muted-foreground mt-1">Overview of GST-related information and compliance</p>
            </div>
            <Link href="/settings">
              <Button variant="outline" size="sm">Configure</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Summary Cards */}
          <SummaryCards />

          {/* Mismatch Detection */}
          <MismatchCards />

          {/* Tabs Section */}
          <div className="space-y-4">
            <Tabs defaultValue="Ledger" className="w-full">
              <TabsList className="border-b border-border bg-transparent p-0 h-auto">
                {tabData.map((item) => (
                  <TabsTrigger
                    key={item}
                    value={item}
                    className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-4 py-3"
                  >
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabData.map((item) => (
                <TabsContent key={item} value={item} className="mt-6">
                  <TableContent tabName={item} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}