import React from 'react';
import { Payment } from '../../types';
import { formatDate } from '../../utils/dateUtils';

interface PaymentHistoryProps {
  payments: Payment[];
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div
          key={payment.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
        >
          <div>
            <p className="font-medium text-gray-900">{payment.description}</p>
            <p className="text-sm text-gray-500">{formatDate(new Date(payment.date))}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">${payment.amount}</p>
            <p className={`text-sm ${
              payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'
            }`}>
              {payment.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}