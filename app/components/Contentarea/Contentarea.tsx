'use client'

import React from 'react';

interface ContentAreaProps {
  selectedSection: string | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ selectedSection }) => {
  let content;

  switch (selectedSection) {
    case 'wetStockControl':
      content = (
        <div>
          <h2 className="text-2xl font-bold mb-4">Wet Stock Control</h2>
          <p>Manage your wet stock inventory here.</p>
        </div>
      );
      break;
    case 'dailySales':
      content = (
        <div>
          <h2 className="text-2xl font-bold mb-4">Daily Sales</h2>
          <p>View and analyze daily sales data.</p>
        </div>
      );
      break;
    case 'reports':
      content = (
        <div>
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          <p>Generate and download reports.</p>
        </div>
      );
      break;
    case 'attendance':
      content = (
        <div>
          <h2 className="text-2xl font-bold mb-4">Attendance</h2>
          <p>Track employee attendance and schedules.</p>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Please select a section from the side panel.</p>
        </div>
      );
  }

  return <div>{content}</div>;
};

export default ContentArea;