import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const transactions = [
  {
    receiver: 'Mattories Market',
    type: 'Shopping',
    date: 'May 22, 2025',
    amount: 300,
    direction: 'out',
  },
  {
    receiver: 'Cold Stone Creamery',
    type: 'Food',
    date: 'Apr 27, 2025',
    amount: 100,
    direction: 'out',
  },
  {
    receiver: 'Jumia Stores',
    type: 'Electronics',
    date: 'Apr 20, 2025',
    amount: 500,
    direction: 'out',
  },
  {
    receiver: 'Jumia Stores',
    type: 'Hotel',
    date: 'Apr 19, 2025',
    amount: 2000,
    direction: 'out',
  },
  {
    receiver: 'Freelance Client',
    type: 'Income',
    date: 'Apr 18, 2025',
    amount: 12000,
    direction: 'in',
  },
];

function Transaction() {
  return (
    <div className="bg-white w-full rounded-3xl shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>

      <table className="table-auto w-full text-sm md:text-base">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Receiver</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50 transition-all"
            >
              <td className="px-4 py-3 flex items-center gap-2 text-left font-medium text-gray-800">
                {tx.direction === 'out' ? (
                  <ArrowUpRight className="w-4 h-4 text-red-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-green-500" />
                )}
                {tx.receiver}
              </td>
              <td className="px-4 py-3 text-left text-gray-600">{tx.type}</td>
              <td className="px-4 py-3 text-left text-gray-600">{tx.date}</td>
              <td className="px-4 py-3 text-right font-semibold">
                {tx.direction === 'out' ? (
                  <span className="text-red-600">– ₹{tx.amount}</span>
                ) : (
                  <span className="text-green-600">+ ₹{tx.amount}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
