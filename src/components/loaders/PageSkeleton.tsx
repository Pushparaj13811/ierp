import { Card } from '../ui/Card';

export function PageSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-64 bg-gray-200 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="h-32" />
        ))}
      </div>
      <Card className="h-96" />
    </div>
  );
}