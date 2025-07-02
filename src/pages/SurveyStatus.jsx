import { useState } from 'react';

const mockSurveys = [
  {
    id: 1,
    shipName: 'Darya-101',
    inspectionType: 'Annual',
    date: '2025-06-12',
    status: 'pending',
  },
  {
    id: 2,
    shipName: 'Persian Star',
    inspectionType: 'Renewal',
    date: '2025-05-22',
    status: 'approved',
  },
  {
    id: 3,
    shipName: 'Ocean Way',
    inspectionType: 'Occasional',
    date: '2025-05-01',
    status: 'rejected',
  },
];


const SurveyStatus = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredSurveys =
    statusFilter === 'all'
      ? mockSurveys
      : mockSurveys.filter((s) => s.status === statusFilter);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">وضعیت بازرسی‌ها</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">همه</option>
          <option value="pending">در حال بررسی</option>
          <option value="approved">تأیید شده</option>
          <option value="rejected">رد شده</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredSurveys.map((survey) => (
          <div
            key={survey.id}
            className="p-4 border border-gray-200 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{survey.shipName}</h3>
              <p className="text-sm text-gray-500">
                نوع بازرسی: {survey.inspectionType} | تاریخ: {survey.date}
              </p>
            </div>
            <span
              className={`text-sm px-3 py-1 rounded-full font-medium ${
                statusColors[survey.status]
              }`}
            >
              {survey.status === 'pending'
                ? 'در حال بررسی'
                : survey.status === 'approved'
                ? 'تأیید شده'
                : 'رد شده'}
            </span>
          </div>
        ))}

        {filteredSurveys.length === 0 && (
          <p className="text-gray-400 text-center mt-8">هیچ بازرسی‌ای یافت نشد.</p>
        )}
      </div>
    </div>
  );
};

export default SurveyStatus;
 