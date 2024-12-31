import { Card } from '../../components/ui/Card';

export function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Class Performance
            </h2>
            <div className="space-y-4">
              {/* Add class performance chart here */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Performance Chart Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Student Progress
            </h2>
            <div className="space-y-4">
              {/* Add student progress metrics here */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Progress Metrics Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Assignment Analytics
            </h2>
            <div className="space-y-4">
              {/* Add assignment analytics here */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Assignment Analytics Placeholder
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Attendance Report
            </h2>
            <div className="space-y-4">
              {/* Add attendance report here */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                Attendance Report Placeholder
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Reports;
