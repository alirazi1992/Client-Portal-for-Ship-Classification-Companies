import { useEffect } from 'react';
import { toast } from 'react-toastify';

const certs = [
  {
    id: 1,
    shipName: 'Darya-101',
    type: 'Safety',
    expires: '2025-07-25',
  },
  {
    id: 2,
    shipName: 'Ocean Way',
    type: 'Environment',
    expires: '2025-07-03', // expire in 1 day
  },
];

const Dashboard = () => {
  useEffect(() => {
    const today = new Date();
    const threshold = new Date();
    threshold.setDate(today.getDate() + 30); // 30 days ahead

    certs.forEach((cert) => {
      const expDate = new Date(cert.expires);
      if (expDate <= threshold) {
        toast.warn(
          `⏰ گواهی ${cert.type} برای کشتی ${cert.shipName} در تاریخ ${cert.expires} منقضی می‌شود!`,
          { autoClose: false }
        );
      }
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">خوش آمدید به پنل مشتریان</h2>
      <p className="text-gray-600">از منوی کناری برای دسترسی به خدمات استفاده کنید.</p>
    </div>
  );
};

export default Dashboard;
