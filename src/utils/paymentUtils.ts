export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateDueAmount = (payments: { amount: number; status: string }[]): number => {
  return payments
    .filter(payment => payment.status === 'pending')
    .reduce((total, payment) => total + payment.amount, 0);
};