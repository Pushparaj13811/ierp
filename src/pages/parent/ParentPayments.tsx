import { PaymentHistory } from '../../components/payments/PaymentHistory';
import { Card } from '../../components/ui/Card';
import { Payment } from '../../types';

export function ParentPayments() {
  const payments: Payment[] = [
    {
      id: '1',
      amount: 1200,
      date: '2024-03-01',
      description: 'Tuition Fee - March 2024',
      status: 'paid',
    },
    {
      id: '2',
      amount: 1200,
      date: '2024-04-01',
      description: 'Tuition Fee - April 2024',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Payments</h1>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Payment History
          </h2>
          <PaymentHistory payments={payments} />
        </div>
      </Card>
    </div>
  );
}

export default ParentPayments;
