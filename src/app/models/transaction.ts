export interface Transaction {
  TransactionID?: number;
  AccountID?: number;
  CategoryID: number;
  Category: string;
  TransactionAmount: number;
  TransactionDate: Date;
}