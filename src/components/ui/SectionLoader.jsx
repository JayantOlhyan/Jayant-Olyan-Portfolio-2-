import React, { useState, useEffect } from 'react';
import { useDelayedLoading } from '../../hooks/useDelayedLoading';
import { DashboardSkeleton } from '../skeletons/DashboardSkeleton';
import { ProjectsSkeleton } from '../skeletons/ProjectsSkeleton';
import { AboutSkeleton } from '../skeletons/AboutSkeleton';
import { SkillsSkeleton } from '../skeletons/SkillsSkeleton';
import { GenericSkeleton } from '../skeletons/GenericSkeleton';

const getSkeletonFor = (componentName, currentTheme) => {
  switch (componentName) {
    case 'dashboard':
      return <DashboardSkeleton currentTheme={currentTheme} />;
    case 'work':
      return <ProjectsSkeleton />;
    case 'about':
      return <AboutSkeleton />;
    case 'skills':
      return <SkillsSkeleton />;
    default:
      return <GenericSkeleton />;
  }
};

export const SectionLoader = ({ componentName, renderComponent, currentTheme }) => {
  // Simulate data fetching wait time for this synchronous portfolio
  // so the skeleton spec can be visibly demonstrated.
  const [isLoading, setIsLoading] = useState(true);
  
  // Only show skeleton if loading takes longer than 200ms
  const showSkeleton = useDelayedLoading(isLoading, 200);

  useEffect(() => {
    setIsLoading(true);
    // Simulate a 600ms network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [componentName]);

  if (isLoading) {
    if (showSkeleton) {
      return (
        <div aria-busy="true" aria-live="polite">
          <span className="sr-only">Loading {componentName}...</span>
          {getSkeletonFor(componentName, currentTheme)}
        </div>
      );
    }
    // Render an empty spacer during the 200ms threshold to prevent flash of content
    return <div className="h-4"></div>;
  }

  return (
    <div aria-busy="false">
      {renderComponent(componentName)}
    </div>
  );
};
