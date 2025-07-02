const mockCertificates = [
  {
    id: 1,
    shipName: 'Darya-101',
    type: 'Safety Certificate',
    issued: '2024-07-01',
    expires: '2025-07-01',
    file: '/sample-cert-1.pdf',
  },
  {
    id: 2,
    shipName: 'Ocean Way',
    type: 'Environmental Approval',
    issued: '2023-06-20',
    expires: '2024-06-20',
    file: '/sample-cert-2.pdf',
  },
];


const Certificates = () => {
  const today = new Date();

  const isExpired = (dateStr) => new Date(dateStr) < today;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">گواهی‌های صادر شده</h2>

      <div className="space-y-4">
        {mockCertificates.map((cert) => (
          <div
            key={cert.id}
            className="border border-gray-200 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{cert.shipName}</h3>
              <p className="text-sm text-gray-500">
                {cert.type} | صدور: {cert.issued} | انقضا: {cert.expires}
              </p>
              <p
                className={`text-sm mt-1 font-medium ${
                  isExpired(cert.expires) ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {isExpired(cert.expires) ? 'منقضی شده ❌' : 'معتبر ✅'}
              </p>
            </div>
            <a
              href={cert.file}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              دانلود PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
