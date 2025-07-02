import { NavLink } from 'react-router-dom';
import { FiHome, FiFileText, FiClock, FiBook, FiHelpCircle } from 'react-icons/fi';

const navItems = [
  { name: 'داشبورد', path: '/', icon: <FiHome /> },
  { name: 'درخواست بازرسی', path: '/request', icon: <FiFileText /> },
  { name: 'وضعیت بازرسی', path: '/status', icon: <FiClock /> },
  { name: 'گواهی‌ها', path: '/certificates', icon: <FiBook /> },
  { name: 'سوابق', path: '/history', icon: <FiBook /> },
  { name: 'پشتیبانی', path: '/support', icon: <FiHelpCircle /> },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">پنل مشتریان</h2>
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md transition-colors ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;