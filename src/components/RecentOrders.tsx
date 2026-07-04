import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const RecentOrders: React.FC = () => {
  const orders = [
    {
      id: '1',
      product: 'Macbook pro 13"',
      variant: '옵션 2개',
      category: '노트북',
      price: '$2399.00',
      status: '배송완료',
      image: '💻'
    },
    {
      id: '2',
      product: 'Apple Watch Ultra',
      variant: '옵션 1개',
      category: '시계',
      price: '$879.00',
      status: '대기중',
      image: '⌚'
    },
    {
      id: '3',
      product: 'iPhone 15 Pro Max',
      variant: '옵션 2개',
      category: '스마트폰',
      price: '$1869.00',
      status: '배송완료',
      image: '📱'
    },
    {
      id: '4',
      product: 'iPad Pro 3rd Gen',
      variant: '옵션 2개',
      category: '전자제품',
      price: '$1699.00',
      status: '취소됨',
      image: 'tablet'
    },
    {
      id: '5',
      product: 'Airpods Pro 2nd Gen',
      variant: '옵션 1개',
      category: '액세서리',
      price: '$240.00',
      status: '배송완료',
      image: '🎧'
    },
  ];

  const statusStyles: { [key: string]: string } = {
    '배송완료': 'text-[#10B981] bg-[#10B981]/10',
    '대기중': 'text-[#FFBA00] bg-[#FFBA00]/10',
    '취소됨': 'text-[#F64E60] bg-[#F64E60]/10',
  };

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">최근 주문</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>필터</span>
          </button>
          <button className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
            전체 보기
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="pb-6 w-[40%]">상품</th>
              <th className="pb-6">카테고리</th>
              <th className="pb-6">가격</th>
              <th className="pb-6">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {orders.map((order) => (
              <tr key={order.id} className="group transition-colors">
                <td className="py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                      {order.image === 'tablet' ? (
                        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
                          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      ) : order.image}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2F3367] dark:text-white leading-tight">{order.product}</p>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{order.variant}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-bold text-[#2F3367] dark:text-white opacity-60">
                  {order.category}
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-bold text-[#2F3367] dark:text-white opacity-60">
                  {order.price}
                </td>
                <td className="py-5 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-tight ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
