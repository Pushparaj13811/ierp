import { Card } from '../../components/ui/Card';

export function AdminReports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <div className="flex space-x-4">
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">
            Export
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Academic Performance
            </h2>
            <div className="space-y-4">
              {/* Academic performance chart */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Performance Chart Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Enrollment Statistics
            </h2>
            <div className="space-y-4">
              {/* Enrollment statistics */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Enrollment Stats Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Financial Overview
            </h2>
            <div className="space-y-4">
              {/* Financial charts */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Financial Overview Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Staff Performance
            </h2>
            <div className="space-y-4">
              {/* Staff performance metrics */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Staff Performance Placeholder
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AdminReports;
