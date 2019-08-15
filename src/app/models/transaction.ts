export interface Transaction {
  TransactionID?: number;
  AccountID?: number;
  CategoryID: number;
  CategoryType: string;
  TransactionAmount: number;
  TransactionDate: Date;
}