import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const InspectionRequest = () => {
  const [formData, setFormData] = useState({
    shipName: '',
    inspectionType: '',
    requestDate: '',
    port: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی API یا ذخیره محلی بزنی
    console.log(formData);
    toast.success('درخواست بازرسی با موفقیت ثبت شد ✅');
    setFormData({
      shipName: '',
      inspectionType: '',
      requestDate: '',
      port: '',
      notes: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">ثبت درخواست بازرسی</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">نام کشتی</label>
          <input
            type="text"
            name="shipName"
            value={formData.shipName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">نوع بازرسی</label>
          <select
            name="inspectionType"
            value={formData.inspectionType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">انتخاب کنید</option>
            <option value="Annual">سالیانه</option>
            <option value="Intermediate">میان‌دوره‌ای</option>
            <option value="Renewal">تمدید</option>
            <option value="Occasional">موردی</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">تاریخ درخواستی</label>
          <input
            type="date"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">بندر</label>
          <input
            type="text"
            name="port"
            value={formData.port}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">توضیحات</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows={3}
          />
        </div>

        <div className="md:col-span-2 text-left">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ارسال درخواست
          </button>
        </div>
      </form>
    </div>
  );
};

export default InspectionRequest;
 