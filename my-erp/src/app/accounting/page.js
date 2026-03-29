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
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">$2,500.00</div>
        <p className="text-xs text-muted-foreground mt-2">All invoices combined</p>
      </CardContent>
    </Card>

    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">Paid Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$1,250.00</div>
        <p className="text-xs text-muted-foreground mt-2">3 invoices settled</p>
      </CardContent>
    </Card>

    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">$650.00</div>
        <p className="text-xs text-muted-foreground mt-2">Pending and unpaid</p>
      </CardContent>
    </Card>
  </div>
);

const TableContent = ({ tabName }) => (
  <Card className="border border-border">
    <CardContent className="pt-6">
      <Table>
        <TableCaption>
          {tabName === 'Ledger'
            ? 'Account Ledger Entries'
            : tabName === 'Journal Entries'
            ? 'Journal Entries Record'
            : 'Total Balance Sheet'}
        </TableCaption>

        <TableHeader>
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="text-foreground">Invoice</TableHead>
            <TableHead className="text-foreground">Status</TableHead>
            <TableHead className="text-foreground">Method</TableHead>
            <TableHead className="text-right text-foreground">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="border-b border-border hover:bg-muted/50">
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

        <TableFooter>
          <TableRow className="border-t-2 border-border bg-muted/30 hover:bg-muted/40">
            <TableCell colSpan={3} className="font-semibold text-foreground">Total Revenue</TableCell>
            <TableCell className="text-right font-bold text-foreground">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </CardContent>
  </Card>
);

export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Accounting Management</h1>
          <p className="text-muted-foreground">Monitor ledger entries, journal entries, and account balance</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <SummaryCards />

        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Transaction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="Ledger" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                {tabData.map((item) => (
                  <TabsTrigger key={item} value={item} className="text-foreground">
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabData.map((item) => (
                <TabsContent key={item} value={item}>
                  <TableContent tabName={item} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}