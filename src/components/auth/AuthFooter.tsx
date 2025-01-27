export function AuthFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          © {currentYear} SchoolIERP. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}