import { Plus, User, Filter, X } from "lucide-react";

const Sidebar = ({ columns, sidebarOpen, setSidebarOpen }) => (
  <>
    {/* Mobile overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    {/* Sidebar */}
    <div
      className={`fixed left-0 top-0 h-full min-h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:relative lg:w-64`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-gray-900">Job Tracker</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium"
          >
            <Filter className="w-4 h-4 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
          >
            <Plus className="w-4 h-4 mr-3" />
            Add Application
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </a>
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Quick Stats
          </h3>
          <div className="space-y-2">
            {columns.map((column) => (
              <div
                key={column.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${column.color} mr-2`}
                  ></div>
                  <span className="text-sm text-gray-600">{column.title}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {column.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
