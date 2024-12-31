import { Suspense, ComponentType } from 'react';
import { PageSkeleton } from './PageSkeleton';
import { ErrorBoundary } from '../ErrorBoundary';

interface PageLoaderProps {
  component: ComponentType;
}

export function PageLoader({ component: Component }: PageLoaderProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageSkeleton />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}