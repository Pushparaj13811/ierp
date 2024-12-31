import { Card } from '../../components/ui/Card';
import { PaymentHistory } from '../../components/payments/PaymentHistory';
import { Payment } from '../../types';
import { CreditCard, TrendingUp } from 'lucide-react';

export function AdminPayments() {
  const payments: Payment[] = [
    {
      id: '1',
      amount: 1200,
      date: '2024-03-01',
      description: 'Tuition Fee - Student ID: 2024001',
      status: 'paid',
    },
    {
      id: '2',
      amount: 1200,
      date: '2024-03-15',
      description: 'Tuition Fee - Student ID: 2024002',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Record Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Total Revenue
                </p>
                <p className="text-2xl font-semibold text-gray-900">$48,500</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Pending Payments
                </p>
                <p className="text-2xl font-semibold text-gray-900">$12,000</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Transactions
          </h2>
          <PaymentHistory payments={payments} />
        </div>
      </Card>
    </div>
  );
}

export default AdminPayments;
