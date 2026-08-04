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
  const [isLoading, setIsLoading] = useState(true);
  const showSkeleton = useDelayedLoading(isLoading, 200);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) setIsLoading(false);
    }, 600);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
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
    return <div className="h-4"></div>;
  }

  return (
    <div aria-busy="false">
      {renderComponent(componentName)}
    </div>
  );
};
