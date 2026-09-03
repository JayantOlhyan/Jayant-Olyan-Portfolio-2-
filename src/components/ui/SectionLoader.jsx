import React from 'react';

export const SectionLoader = ({ componentName, renderComponent }) => {
  return (
    <div aria-busy="false">
      {renderComponent(componentName)}
    </div>
  );
};
