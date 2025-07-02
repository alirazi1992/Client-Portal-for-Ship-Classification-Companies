const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4 mb-6 rounded">
      <h1 className="text-xl font-semibold text-gray-700">خوش آمدید 👋</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">امیررضا</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
