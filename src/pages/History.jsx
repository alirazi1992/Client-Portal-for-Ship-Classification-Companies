const mockHistory = [
  {
    id: 1,
    shipName: 'Darya-101',
    inspectionType: 'Annual',
    date: '2024-06-01',
    result: 'Passed',
  },
  {
    id: 2,
    shipName: 'Ocean Way',
    inspectionType: 'Renewal',
    date: '2023-10-15',
    result: 'Failed',
  },
];

const History = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">سوابق بازرسی</h2>

      <table className="w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">نام کشتی</th>
            <th className="p-3 border">نوع بازرسی</th>
            <th className="p-3 border">تاریخ</th>
            <th className="p-3 border">نتیجه</th>
          </tr>
        </thead>
        <tbody>
          {mockHistory.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="p-2 border">{item.shipName}</td>
              <td className="p-2 border">{item.inspectionType}</td>
              <td className="p-2 border">{item.date}</td>
              <td
                className={`p-2 border font-medium ${
                  item.result === 'Passed' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.result === 'Passed' ? 'موفق ✅' : 'ناموفق ❌'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
