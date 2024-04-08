export type CardType = {
  src: string;
  key: number;
};
export const cards: CardType[] = [
  {
    key: 1,
    src: "/img/layout01.jpeg",
  },
  {
    key: 2,
    src: "/img/layout02.png",
  },
  {
    key: 3,
    src: "/img/layout03.png",
  },
];

// table
export interface Invoices {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}
export const invoices: Invoices[] = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];
export const dat: Invoices[] = [];
